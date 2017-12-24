import React from 'react';

const makeStyles = ({ color, size, modifiers = [] }) =>
  ['button', color, size, ...modifiers].filter(x => !!x).join(' ');

const Button = ({ color, size, modifiers, children, ...props }) => (
  <a className={makeStyles({ color, size, modifiers })} {...props}>
    {children}
  </a>
);

export default Button;
