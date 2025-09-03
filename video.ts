const port = 3000;

type VideoType = 'movie' | 'music' | 'tutorial' | 'other';

interface Video {
    title: string;
    description: string;
    type: VideoType;
    url: string;
    thumbnail: string;
}

interface VideoRequest {
    title: string;
    description: string;
    type: VideoType;
    url: string;
    thumbnail: string;
}

interface VideoResponse {
    message: string;
    video: Video;
}

interface ErrorResponse {
    message: string;
}

interface SearchResponse {
    message: string;
    videos: Video[];
}

interface SearchRequest {
    query: string;
}

interface UploadResponse {
    message: string;
    video: Video;
}

interface UploadRequest {
    title: string;
    description: string;
    type: VideoType;
    url: string;
    thumbnail: string;
}

interface DownloadResponse {
    message: string;
    video: Video;
}

interface DownloadRequest {
    videoUrl: string;
    title: string;
}

interface DeleteResponse {
    message: string;
}

interface DeleteRequest {
    videoUrl: string;
}

interface LikeResponse {
    message: string;
}

interface LikeRequest {
    videoUrl: string;
}

interface WatchLaterResponse {
    message: string;
}

interface WatchLaterRequest {
    videoUrl: string;
}
