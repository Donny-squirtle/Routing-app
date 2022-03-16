import React from 'react';
import PropTypes from 'prop-types';

function ButtonDeleteIcon({ width, height, fill }) {
  return (
    <svg width={width} height={height} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12.667 18.667H7.333A3.333 3.333 0 0 1 4 15.333v-8a.667.667 0 0 1 1.333 0v8a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2v-8a.667.667 0 1 1 1.333 0v8a3.333 3.333 0 0 1-3.333 3.334ZM16.667 5.333H3.333a.667.667 0 0 1 0-1.333h13.334a.667.667 0 1 1 0 1.333Z" fill={fill} />
      <path d="M12.667 5.333H7.333a.667.667 0 0 1-.666-.666V3.333a2 2 0 0 1 2-2h2.666a2 2 0 0 1 2 2v1.334a.667.667 0 0 1-.666.666ZM8 4h4v-.667a.667.667 0 0 0-.667-.666H8.667A.667.667 0 0 0 8 3.333V4ZM8.667 14.667A.667.667 0 0 1 8 14V9.333a.667.667 0 0 1 1.333 0V14a.667.667 0 0 1-.666.667ZM11.333 14.667a.667.667 0 0 1-.666-.667V9.333a.667.667 0 1 1 1.333 0V14a.667.667 0 0 1-.667.667Z" fill={fill} />
    </svg>
  );
}
ButtonDeleteIcon.propTypes = {
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  fill: PropTypes.string.isRequired,
};
export default ButtonDeleteIcon;
