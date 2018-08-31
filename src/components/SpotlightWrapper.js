import React from 'react';

const computeStyleNumber = (index) => {
    if (index === 0) return 1;
    const mod = (index + 1) % 3;

    if (mod === 0) return 3;
    return mod;
}

const SpotlightWrapper = ({ children }) => (
    <div>
        {React.Children.map(children, (spotlight, i) => {
            const isAlt = i % 2 !== 0;
            //const styleNumber = i !== 0 ? (i + 1) % 3 || 3 : 1;
            const styleNumber = computeStyleNumber(i);
            return React.cloneElement(spotlight, { isAlt, styleNumber });
        })}
    </div>
)

export default SpotlightWrapper;
