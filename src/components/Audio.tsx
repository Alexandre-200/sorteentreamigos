export default function Audio(){
    return (
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      );
}