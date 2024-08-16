// icons/HomeIcon.js
import React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = (props) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path d="M12 3L4 9V21H10V14H14V21H20V9L12 3Z" fill={props.color} />
  </Svg>
);

export default HomeIcon;
