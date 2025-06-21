export default function useAudio() {
  const playSound = (url: string) => {
    const audio = new Audio(url);
    audio.play();
  };

  return {
    playSound,
  };
}
