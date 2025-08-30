module Video (
  Video(..),
  isValidVideoId,
  createVideo,
  youtubeUrl,
) where

import Data.Char (isAlphaNum, isLower, isUpper)
import Data.Maybe (fromMaybe)
import Network.HTTP.Simple (getResponseBody, httpLBS)
import Text.Read (readMaybe)

data Video = Video
  { videoId :: String
  , videoUrl :: String
  } deriving (Show, Eq)

-- | Generate YouTube URL from video ID
youtubeUrl :: String -> IO (Maybe String)
youtubeUrl videoId = do
  let url = "https://www.youtube.com/watch?v=" ++ videoId
  if isValidVideoId videoId
    then return (Just url)
    else return Nothing

-- | Check if a video ID is valid (11 characters, all valid)
isValidVideoId :: String -> Bool
isValidVideoId vid =
  length vid == 11
    && all isValidChar (filter (/= '_') vid)
  where
    isValidChar c =
      isAlphaNum c
        || c == '_'
        || (isLower c && c /= 'o' && c /= 'i' && c /= 'l')
        || (isUpper c && c /= 'O' && c /= 'I')

-- | Create a Video from a video ID
createVideo :: String -> Maybe Video
createVideo vid
  | isValidVideoId vid =
    Just $ Video vid ("https://www.youtube.com/watch?v=" ++ vid)
  | otherwise = Nothing
