import React from 'react';

/**
 * @author
 * @function Button
 **/

const Button = ({ title, fontSize }) => {
  return (
    <button style={{ fontSize: fontSize ? fontSize : 20 }}>{title}</button>
  );
};

export default Button;
