import 'package:flutter/material.dart';
void main() {
runApp(const YouTubeApp());
}
class YouTubeApp extends StatelessWidget {
const YouTubeApp({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return const Placeholder();
title: 'YouTube',
ThemeData(
colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple)
.copyWith(
surface: Colors.blac
onSurface: Colors.white,
),
useMaterial3: true,
appBarTheme: const AppBarTheme(
backgroundColor: Colors.transparent,
foregroundColor: Colors.white,
elevation: 0,
iconTheme: IconThemeData(color: Colors.white),
),
scaffoldBackgroundColor: Colors.black,
textTheme: const TextTheme(
headline1: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
color: Colors.white,
),
),
),
),
),
}
}
class YouTubeApi {
static Future<List<Video>> searchVideos(String query) async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
List<Video> videos = List.generate(
10,
(index) => Video(
id: 'video_$index',
title: 'Video $index',
thumbnailUrl: 'https://via.placeholder.com/150',
),
);
return videos;
}
static Future<Video> getVideo(String id) async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
return Video(
id: id,
title: 'Video Title',
thumbnailUrl: 'https://via.placeholder.com/150',
);
}
static Future<List<Video>> getTrendingVideos() async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
List<Video> videos = List.generate(
10,
(index) => Video(
id: 'video_$index',
title: 'Trending Video $index',
thumbnailUrl: 'https://via.placeholder.com/150',
),
);
return videos;
}
static Future<List<Video>> getPopularVideos() async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
List<Video> videos = List.generate(
10,
(index) => Video(
id: 'video_$index',
title: 'Popular Video $index',
thumbnailUrl: 'https://via.placeholder.com/150',
),
);
return videos;
}
}
class Video {
final String id;
final String title;
final String thumbnailUrl;
Video({
required this.id,
required this.title,
required this.thumbnailUrl,
});
}
// Fetch YouTube video data
Future<Video> fetchYouTubeVideo(String videoId) async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
return Video(
id: videoId,
title: 'YouTube Video Title',
thumbnailUrl: 'https://via.placeholder.com/150',
);
class YouTubeService {
static Future<List<Video>> searchVideos(String query) async {
// Simulate API call delay
await Future.delayed(const Duration(seconds: 1));
// Simulate API response
List<Video> videos = List.generate(
10,
(index) => Video(
id: 'video_$index',
title: 'Video $index',
thumbnailUrl: 'https://via.placeholder.com/150',
),
);
return videos;
}
}
}
class YouTubeApp extends StatelessWidget {
const YouTubeApp({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return const Placeholder();
title: 'YouTube',
ThemeData(
colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple)
.copyWith(
surface: Colors.black,
onSurface: Colors.white,
),
useMaterial3: true,
appBarTheme: const AppBarTheme(
backgroundColor: Colors.transparent,
foregroundColor: Colors.white,
elevation: 0,
iconTheme: IconThemeData(color: Colors.white),
),
scaffoldBackgroundColor: Colors.black,
textTheme: const TextTheme(
headline1: TextStyle(
fontSize: 24,
fontWeight: FontWeight.bold,
color: Colors.white,
),
),
),
),
),
}
}
class YouTubeHome extends StatelessWidget {
const YouTubeHome({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return const Placeholder();
}
}
class YouTubeVideo extends StatelessWidget {
const YouTubeVideo({Key? key}) : super(key: key);
@override
Widget build(BuildContext context) {
return const Placeholder();
}
}
void main() {
runApp(const YouTubeApp());
Future<void> main() async {
WidgetsFlutterBinding.ensureInitialized();
await Firebase.initializeApp();
runApp(const YouTubeApp());
}
}
void main() {
runApp(const YouTubeApp());
}
void YoutuubeApp() {
runApp(const YouTubeApp());
}
void YoutuubeHome() {
runApp(const YouTubeApp());
}
void YoutuubeVideo() {
runApp(const YouTubeApp());
}
