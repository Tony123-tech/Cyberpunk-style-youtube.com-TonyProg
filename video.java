public class Video {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public string FilePath { get; set; }
    public string YouTubeUrl { get; set; }
    public DateTime UploadDate { get; set; }
}
public class VideoRequest {
    public string Title { get; set; }
    public string Description { get; set; }
    public string Type { get; set; }
    public string Url { get; set; }
    public string Thumbnail { get; set; }
}
public class VideoResponse {
    public string Message { get; set; }
    public Video Video { get; set; }
}
const string videoId = "1234567890";

var video = await _videoService.GetVideo(videoId);
if (video == null) {
    return NotFound();
}

return Ok(video);
