// WaveBackground.js
import React from 'react';
import { Svg, Path } from 'react-native-svg';

const WaveBackground = ({ color, height }) => {
    return (
        <Svg
            height={height}
            width="100%"
            viewBox="0 0 1440 320"
            style={{ position: 'absolute', bottom: 0 }}
        >
            <Path
                fill={color}
                fillOpacity="6"
                d="M0,64L34.3,74.7C68.6,85,137,107,206,128C274.3,149,343,171,411,154.7C480,139,549,85,617,90.7C685.7,96,754,160,823,186.7C891.4,213,960,203,1029,170.7C1097.1,139,1166,85,1234,69.3C1302.9,53,1371,75,1406,85.3L1440,96L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,685,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></Path>
        </Svg>
    );
};

export default WaveBackground;
