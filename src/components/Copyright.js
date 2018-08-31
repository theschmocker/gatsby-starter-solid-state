import React from 'react';

const Copyright = ({ children }) => (
  <ul className="copyright">
    <li>&copy; {new Date().getFullYear()} Untitled Inc. All rights reserved.</li>
    <li>
      Design: <a href="http://html5up.net">HTML5 UP</a>
    </li>
  </ul>
);

export default Copyright;
