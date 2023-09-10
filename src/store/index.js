import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#EFBD48',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
  items: { front: "#EFBD48", back: "#fff", collar: "#fff", sleeves: "#fff"},
  textDecal: {
    content: "  ",
    position: [0, 0, 0],
    fontSize: 0.08,
    textcolor: "",
    fontFamily: "Verdana",
  },
});

export default state;