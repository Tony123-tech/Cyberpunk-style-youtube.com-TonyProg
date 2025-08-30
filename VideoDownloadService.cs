using System;
using System.IO;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Cors;

namespace CyberTubeDownloader
{
    [ApiController]
    [Route("api/[controller]")]
    [EnableCors("AllowAll")]
    public class VideoDownloadController : ControllerBase
    {
        private readonly HttpClient _httpClient;
        private readonly string _downloadPath;

        public VideoDownloadController()
        {
            _httpClient = new HttpClient();
            _downloadPath = Path.Combine(Environment.GetFolderPath(Environment.SpecialFolder.Downloads), "CyberTube");
            
            // Create download directory if it doesn't exist
            if (!Directory.Exists(_downloadPath))
            {
                Directory.CreateDirectory(_downloadPath);
            }
        }

        [HttpPost("download")]
        public async Task<IActionResult> DownloadVideo([FromBody] VideoDownloadRequest request)
        {
            try
            {
                if (string.IsNullOrEmpty(request.VideoUrl) || string.IsNullOrEmpty(request.Title))
                {
                    return BadRequest(new { error = "Video URL and title are required" });
                }

                // Sanitize filename
                string fileName = SanitizeFileName(request.Title) + ".mp4";
                string filePath = Path.Combine(_downloadPath, fileName);

                // Check if file already exists
                if (System.IO.File.Exists(filePath))
                {
                    return Ok(new { 
                        success = true, 
                        message = "Video already downloaded",
                        filePath = filePath,
                        fileName = fileName
                    });
                }

                // Download the video
                using (var response = await _httpClient.GetAsync(request.VideoUrl, HttpCompletionOption.ResponseHeadersRead))
                {
                    response.EnsureSuccessStatusCode();

                    using (var stream = await response.Content.ReadAsStreamAsync())
                    using (var fileStream = new FileStream(filePath, FileMode.Create, FileAccess.Write, FileShare.None))
                    {
                        await stream.CopyToAsync(fileStream);
                    }
                }

                return Ok(new { 
                    success = true, 
                    message = "Video downloaded successfully",
                    filePath = filePath,
                    fileName = fileName,
                    size = new FileInfo(filePath).Length
                });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { 
                    error = "Download failed", 
                    details = ex.Message 
                });
            }
        }

        [HttpGet("progress/{downloadId}")]
        public IActionResult GetDownloadProgress(string downloadId)
        {
            // Simulate download progress for demo
            var random = new Random();
            var progress = random.Next(0, 101);
            
            return Ok(new { 
                downloadId = downloadId,
                progress = progress,
                status = progress == 100 ? "completed" : "downloading"
            });
        }

        [HttpGet("downloads")]
        public IActionResult GetDownloads()
        {
            try
            {
                var downloads = new List<object>();
                var files = Directory.GetFiles(_downloadPath, "*.mp4");

                foreach (var file in files)
                {
                    var fileInfo = new FileInfo(file);
                    downloads.Add(new
                    {
                        fileName = fileInfo.Name,
                        filePath = file,
                        size = fileInfo.Length,
                        downloadDate = fileInfo.CreationTime,
                        sizeFormatted = FormatFileSize(fileInfo.Length)
                    });
                }

                return Ok(new { downloads = downloads });
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { error = ex.Message });
            }
        }

        private string SanitizeFileName(string fileName)
        {
            var invalidChars = Path.GetInvalidFileNameChars();
            var sanitized = fileName;
            
            foreach (var c in invalidChars)
            {
                sanitized = sanitized.Replace(c, '_');
            }
            
            // Limit length
            if (sanitized.Length > 100)
            {
                sanitized = sanitized.Substring(0, 100);
            }
            
            return sanitized;
        }

        private string FormatFileSize(long bytes)
        {
            string[] sizes = { "B", "KB", "MB", "GB" };
            double len = bytes;
            int order = 0;
            
            while (len >= 1024 && order < sizes.Length - 1)
            {
                order++;
                len = len / 1024;
            }
            
            return $"{len:0.##} {sizes[order]}";
        }
    }

    public class VideoDownloadRequest
    {
        public string VideoUrl { get; set; }
        public string Title { get; set; }
        public string Quality { get; set; } = "720p";
        public string Format { get; set; } = "mp4";
    }
}
