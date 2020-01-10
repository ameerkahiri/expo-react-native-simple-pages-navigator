import React from 'react';
import * as Font from 'expo-font';

async function fontLoaded(callback) {
  await Font.loadAsync({
    'Roboto-Thin': require('../../assets/roboto/Roboto-Thin.ttf'),
    'Roboto-Light': require('../../assets/roboto/Roboto-Light.ttf'),
    'Roboto-Regular': require('../../assets/roboto/Roboto-Regular.ttf'),
    'Roboto-Medium': require('../../assets/roboto/Roboto-Medium.ttf'),
    'Roboto-Bold': require('../../assets/roboto/Roboto-Bold.ttf'),
    'Roboto-Black': require('../../assets/roboto/Roboto-Black.ttf')
  });
  callback(true);
}

const COLORS = {
  WHITE: '#FFFFFF',
  BLACK: '#000000',
  GREY: '#898989',
  THEME: '#B23AFC',
  PRIMARY: '#B23AFC',
  INFO: '#1232FF',
  ERROR: '#FE2472',
  WARNING: '#FF9C09',
  SUCCESS: '#45DF31',
  TRANSPARENT: 'transparent',
  INPUT: '#808080',
  PLACEHOLDER: '#9FA5AA',
  NAVBAR: '#F9F9F9',
  BLOCK: '#808080',
  MUTED: '#9FA5AA',
  NEUTRAL: 'rgba(255,255,255, 0.65)',
  FACEBOOK: '#3B5998',
  TWITTER: '#5BC0DE',
  DRIBBBLE: '#EA4C89',
  ICON: '#000000',
};

const SIZES = {
  BASE: 16,
  FONT: 16,
  OPACITY: 0.8,
};

const FONTFAMILY = {
  Roboto_Thin: 'Roboto-Thin',
  Roboto_Light: 'Roboto-Light',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_Bold: 'Roboto-Bold',
  Roboto_Black: 'Roboto-Black'
}

export default {
  fontLoaded,
  COLORS,
  SIZES,
  FONTFAMILY
};
