use tokio::prelude::*;
use tokio::sync::mpsc;
use std::path::Path;
use std::fs::File;
use std::io::{Read, Write};
use serde::{Serialize, Deserialize};

// Define a struct to hold the upload metadata
#[derive(Serialize, Deserialize)]
struct Upload {
    id: u32,
    file_path: String,
    file_name: String,
    content_type: String,
    metadata: Option<serde_json::Value>,
}

// Define the upload handler function
async fn handle_upload(upload: Upload) -> Result<(), std::io::Error> {
    // Open the file for reading
    let mut file = File::open(upload.file_path)?;
    let mut buffer = Vec::new();

    // Read the file into a buffer
    file.read_to_end(&mut buffer)?;

    // Simulate a slow upload process
    tokio::time::sleep(tokio::time::Duration::from_secs(2)).await;

    // Write the buffer to a new file
    let mut new_file = File::create(format!("uploads/{}", upload.file_name))?;
    new_file.write_all(&buffer)?;

    // If metadata is present, write it to a separate file
    if let Some(metadata) = upload.metadata {
        let mut metadata_file = File::create(format!("uploads/{}.metadata", upload.file_name))?;
        metadata_file.write_all(serde_json::to_string(&metadata)?.as_bytes())?;
    }

    Ok(())
}

// Define the concurrent upload handler function
async fn concurrent_upload_handler(uploads: Vec<Upload>) -> Result<(), std::io::Error> {
    // Create a channel to send the uploads to
    let (tx, mut rx) = mpsc::channel(10);

    // Spawn a task for each upload
    for upload in uploads {
        let tx = tx.clone();
        tokio::spawn(async move {
            // Send the upload to the channel
            tx.send(upload).await?;
            Ok(())
        });
    }

    // Receive the uploads from the channel and handle them concurrently
    while let Some(upload) = rx.recv().await {
        handle_upload(upload).await?;
    }

    Ok(())
}

// Define a function to generate a unique upload ID
fn generate_upload_id() -> u32 {
    use rand::Rng;
    rand::thread_rng().gen::<u32>()
}

// Define a function to create a new upload
fn create_upload(file_path: String, file_name: String, content_type: String) -> Upload {
    Upload {
        id: generate_upload_id(),
        file_path,
        file_name,
        content_type,
        metadata: None,
    }
}

// Define a function to add metadata to an upload
fn add_metadata(upload: Upload, metadata: serde_json::Value) -> Upload {
    Upload {
        id: upload.id,
        file_path: upload.file_path,
        file_name: upload.file_name,
        content_type: upload.content_type,
        metadata: Some(metadata),
    }
}
fn main() {
    // Create some example uploads
    let upload1 = create_upload("path/to/file1.txt".to_string(), "file1.txt".to_string(), "text/plain".to_string());
    let upload2 = create_upload("path/to/file2.txt".to_string(), "file2.txt".to_string(), "text/plain".to_string());
    let upload3 = add_metadata(create_upload("path/to/file3.txt".to_string(), "file3.txt".to_string(), "text/plain".to_string()), serde_json::json!({"key": "value"}));

    // Run the concurrent upload handler
    concurrent_upload_handler(vec![upload1, upload2, upload3]).await?;
}
