import React from 'react';

import Wrapper from './Wrapper';

function guardStyleNumber(styleNumber) {
  if (!parseInt(styleNumber)) return 1;
  if (styleNumber > 3) return 3;
  if (styleNumber < 1) return 1;
  return styleNumber;
}

const Spotlight = ({ isAlt, children, styleNumber }) => (
  <Wrapper
    className={`spotlight ${isAlt ? 'alt' : ''} style${guardStyleNumber(
      styleNumber
    )}`}
  >
    {children}
  </Wrapper>
);

export default Spotlight;
