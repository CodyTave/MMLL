const playSound = (sound: string) => {
  const audio = new Audio(sound);
  audio.play().catch((err) => {
    console.log(err);
  });
};
const hoverSound = () => {
  playSound("/sounds/hover.wav");
};
export { playSound, hoverSound };
