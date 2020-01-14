import React from 'react';
import AnimationView from 'lottie-react-native';

import Anime from './assets/anime.json';

export default function App() {
  return (
    <AnimationView autoPlay source={Anime} resizeMode="contain" />
  );
}
