// icons/ProfileIcon.js
import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';

const ProfileIcon = (props) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Circle cx="12" cy="8" r="4" stroke={props.color} strokeWidth="2" />
    <Path d="M4 20C4 16.6863 6.68629 14 10 14H14C17.3137 14 20 16.6863 20 20" stroke={props.color} strokeWidth="2" />
  </Svg>
);

export default ProfileIcon;
