import React from 'react';

const Wrapper = ({ className, children }) => (
    <section className={`wrapper ${className || ''}`}>
        <div className="inner">
            {children}
        </div>
    </section>
)

export default Wrapper;
