import { useEffect, useRef, useState } from "react";

export const AudioPlay = ({ audioSrc }) => {
    const audioRef = useRef(null);
    const [audioStarted, setAudioStarted] = useState(false);
  
    useEffect(() => {
      if (audioStarted) {
        audioRef.current = new Audio(audioSrc);
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed: ", error);
        });
      }
    }, [audioSrc, audioStarted]);
  
    const startAudio = () => {
      setAudioStarted(true);
    };
  
    return (
      <div>
        {!audioStarted && (
          <button onClick={startAudio}>Start Audio</button>
        )}
      </div>
    );
  };

//   export const AudioPlay = ({ audioSrc }) => {
//     const audioRef = useRef(null);
  
//     useEffect(() => {
//       audioRef.current = new Audio(audioSrc);
//       audioRef.current.setAttribute("autoplay", "true"); // Enable autoplay
  
//       
//       const playAudio = async () => {
//         try {
//           await audioRef.current.play();
//         } catch (error) {
//           console.error("Audio playback failed : ", error);
//         }
//       };
  
//       
//       playAudio();
//     }, [audioSrc]);
  
//     return null; // render nothing
//   };

export default AudioPlay;
