//projects start

import { timeStamp } from 'console';
export interface VideoInfo {
  videoId: string;
  myCharacter: string;
  opponentsCharacter: string;
  roundsSetting: number;
  roundsWon: number;
  roundsLost: number;
  winner: string;
}
// TODO -- ADD COSTUM EMBED YOUTUBE VIDEOS CONFIGS
//localhost:9300/api/retrieve-info
export async function fetchVideos() {
  try {
    // const response = await fetch('https://washizaki.pro:9300/api/retrieve-info');
    const response = await fetch('http://localhost:9300/api/retrieve-info');

    // Check if the response is OK (status code 200-299)
    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    // Transform the data into the format you need
    const videos: VideoInfo[] = data.map((item: any) => ({
      videoId: item.videoId,
      myCharacter: item.myCharacter,
      opponentsCharacter: item.opponentsCharacter,
      roundsSetting: item.roundsSetting,
      roundsWon: item.roundsWon,
      roundsLost: item.roundsLost,
      winner: item.winner,
    }));

    return videos;
  } catch (error) {
    // Log the error for debugging
    console.error('Error fetching videos:', error);

    // Optionally, throw the error to let the caller handle it
    throw new Error('An error occurred while fetching videos');
  }
}

//projects end
export default fetchVideos;
