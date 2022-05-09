import * as React from 'react';

interface SVGRProps {
  title?: string;
  titleId?: string;
}

function SvgBank ({ title, titleId }: SVGRProps): JSX.Element {
  return (
    <svg
      aria-labelledby={titleId}
      fill='none'
      height='1em'
      viewBox='0 0 48 48'
      width='1em'
      xmlns='http://www.w3.org/2000/svg'
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <g>
        <path
          d='M20.12 36.824c.033.77.357 1.503 1.08 1.768.59.216 1.484.408 2.8.408 1.316 0 2.21-.192 2.8-.408.723-.265 1.047-.998 1.08-1.768.055-1.231.12-3.594.12-7.824s-.065-6.593-.12-7.824c-.033-.77-.357-1.503-1.08-1.768-.59-.216-1.484-.408-2.8-.408-1.316 0-2.21.192-2.8.408-.723.265-1.047.998-1.08 1.768C20.064 22.407 20 24.77 20 29s.065 6.593.12 7.824zm12 0c.033.77.357 1.503 1.08 1.768.59.216 1.484.408 2.8.408 1.316 0 2.21-.192 2.8-.408.723-.265 1.047-.998 1.08-1.768.055-1.231.12-3.594.12-7.824s-.065-6.593-.12-7.824c-.033-.77-.357-1.503-1.08-1.768-.59-.216-1.484-.408-2.8-.408-1.316 0-2.21.192-2.8.408-.723.265-1.047.998-1.08 1.768C32.065 22.407 32 24.77 32 29s.065 6.593.12 7.824zm-24 0c.033.77.357 1.503 1.08 1.768.59.216 1.484.408 2.8.408s2.21-.192 2.8-.408c.723-.265 1.047-.998 1.08-1.768.055-1.231.12-3.594.12-7.824s-.065-6.593-.12-7.824c-.033-.77-.357-1.503-1.08-1.768-.59-.216-1.484-.408-2.8-.408-1.316 0-2.21.192-2.8.408-.723.265-1.047.998-1.08 1.768C8.064 22.407 8 24.77 8 29s.065 6.593.12 7.824z'
          fill='var(--icon-accent)'
        />
        <path
          d='M24 21.5c9.408 0 14.955-.204 17.736-.351C43.023 21.08 44 20.015 44 18.726V16.39c0-.9-.29-1.782-.927-2.417-3.736-3.725-12.324-8.526-18.143-9.796a4.346 4.346 0 00-1.86 0c-5.82 1.27-14.407 6.071-18.143 9.796C4.29 14.607 4 15.489 4 16.389v2.337c0 1.29.977 2.355 2.264 2.423 2.781.147 8.328.351 17.736.351zM4.357 37.457c.26-.754 1.016-1.097 1.812-1.142C8.24 36.197 13.303 36 24 36s15.762.197 17.83.315c.797.045 1.553.388 1.813 1.142.192.56.357 1.378.357 2.543s-.165 1.984-.357 2.543c-.26.754-1.016 1.097-1.812 1.142C39.76 43.803 34.697 44 24 44s-15.762-.197-17.83-.315c-.797-.045-1.553-.388-1.813-1.142C4.165 41.983 4 41.165 4 40s.165-1.984.357-2.543z'
          fill='var(--icon-main)'
        />
        <circle
          cx={24}
          cy={14}
          fill='var(--icon-accent)'
          r={4}
        />
      </g>
    </svg>
  );
}

SvgBank.defaultProps = {
  title: 'Bank',
  titleId: 1
};

export default SvgBank;