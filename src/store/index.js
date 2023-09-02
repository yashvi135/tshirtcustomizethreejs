import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#ADD8E6',
});

export default state;