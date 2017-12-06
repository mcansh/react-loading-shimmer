import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ count, lineHeight, background }) => {
  const countArray = [...Array(count).keys()];
  const unitRegex = /rem|px|%|em/;
  const realLineHeight = unitRegex.test(lineHeight)
    ? lineHeight
    : `${lineHeight}rem`;
  return (
    <div className="loading">
      {countArray.map(div => (
        <div key={`loading__bar--${div}`} className="loading__bar" />
      ))}
      <style jsx>
        {`
          @keyframes shimmer {
            0% {
              background-position: -468px 0;
            }
            100% {
              background-position: 468px 0;
            }
          }
          .loading {
            width: 100%;
            position: relative;
            background: ${background};
            padding: 1rem 2rem;
          }
          .loading__bar {
            margin-bottom: ${realLineHeight};
            height: 1.1rem;
            background-size: 800px 104px;
            background-image: linear-gradient(
              to right,
              #f6f7f9 0%,
              #e9ebee 20%,
              #f6f7f9 40%,
              #f6f7f9 100%
            );
            animation: shimmer 1s infinite linear;
          }
          .loading__bar:nth-of-type(2n) {
            width: 200px;
          }
          .loading__bar:nth-of-type(4n) {
            width: 120px;
          }
          .loading__bar:last-of-type {
            margin-bottom: 0;
          }
        `}
      </style>
    </div>
  );
};

Loading.defaultProps = {
  count: 4,
  lineHeight: 1.1,
  background: 'white',
};
Loading.propTypes = {
  count: PropTypes.number,
  lineHeight: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  background: PropTypes.string,
};

export default Loading;
