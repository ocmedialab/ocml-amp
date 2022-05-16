import React, { FC } from 'react';

interface LogoProps {
  animateStroke: boolean;
  className: string;
  fill: string;
  stroke: string;
  strokeWidth: string;
}

const Logo: FC<LogoProps> = ({
  animateStroke,
  className,
  fill,
  stroke,
  strokeWidth,
}) => {
  // const animateClass = props.animateStroke === true ? "logo-lines" : "";

  if (animateStroke) {
    console.log('animate');
  }

  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 210.82564 128.16162"
    >
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M118.3999,99.93945c7.95069,0,8.00049-2.85058,8.00049-4.30029,0-1.8501-.75-4.90039-8.00049-4.90039Z"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M118.3999,109.08984v9.20069c7.95069,0,8.00049-2.8501,8.00049-4.3003C126.40039,112.14014,125.65039,109.08984,118.3999,109.08984Z"
      />
      <polygon
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points="67.412 112.246 75.162 112.246 71.613 100.945 67.412 112.246"
      />
      <polygon
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points="201.864 53.458 197.664 64.758 205.414 64.758 201.864 53.458"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M120.31006,67.0083c8.35058.9502,11.40088-3.5498,11.40088-10.05029,0-4.90039-1.2002-10.15088-11.501-10.15088Z"
      />
      <polygon
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points="172.194 34.662 172.194 80.662 177.13 80.662 193.79 34.662 172.194 34.662"
      />
      <polygon
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points="208.514 76.309 194.663 76.259 193.489 80.662 210.11 80.662 208.514 76.309"
      />
      <polygon
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        points="78.002 123.309 64.151 123.259 62.977 127.662 79.598 127.662 78.002 123.309"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M131.85333,34.66162c9.33161,2.36737,15.90839,8.30011,15.90839,22.84619,0,14.63117-6.02039,20.11011-16.766,22.15381a67.16424,67.16424,0,0,1-8.99359.984c.24188.00348,33.59112.016,33.59112.016v-46Z"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M94.12646,34.66162V45.207L69.875,45.25732v4.90039l21.05127-.05029V62.208l-21.05127.3501-.0498,5.30029,24.30126.1001c0,3.3797.19922,12.76745.2002,12.80078l-14.62451.03607,15.83514,46.86627h7.61261l.25781-93Z"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M9.45068.5A9.46529,9.46529,0,0,0,.5,10.35059c0,7.10058,5.2002,9.80078,9.05078,9.80078,4.29981,0,10.00049-2.7002,9.75049-9.70069C18.90137,2.50049,13.001.5,9.45068.5Z"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M61.90039,5.124a10.33525,10.33525,0,0,0-7.50049-3.25,9.39851,9.39851,0,0,0-8.90039,9.85059c0,7.05029,5.1001,9.85059,9.00049,9.85059a10.39115,10.39115,0,0,0,7.80029-3.4502"
      />
      <path
        className={className}
        fill={fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
        d="M53.77393,80.85937l.04864-45.71484A23.64394,23.64394,0,0,1,46.298,33.66162,24.08216,24.08216,0,0,1,31.90948,18.75293C28.58954,26.955,18.457,33.66162,8.457,33.71948v3.94214L17.751,48.00732,29.60156,33.60645l14.20069.10009V80.75928H29.75146V57.75781L17.751,72.209,4.457,57.76526V80.66162l14.09326.02051v35.00195H42.80176v11.97754H46.543L63.5,80.84375Z"
      />
    </svg>
  );
};
export default Logo;
