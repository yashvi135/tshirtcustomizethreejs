import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  position: [0.4, 0.9, 0],
  color: "#9E9E9E",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './s.png',
  fullDecal: './s.png',
  items: { front: "#EFBD48", back: "#fff", collar: "#fff", sleeves: "#fff"},
  textDecal: {
    content: "My custom text",
    position: [0, 0, 0],
    fontSize: 0.1,
    textcolor: "",
    fontFamily: "Verdana",
  },
});

export default state;