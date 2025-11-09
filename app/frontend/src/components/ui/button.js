// src/components/ui/button.js
import React from 'react';

export const Button = ({ variant = 'solid', className = '', ...props }) => {
  const base = 'inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm transition-all';
  const styles =
    variant === 'outline'
      ? ' border border-gray-300 text-gray-900 hover:bg-gray-50'
      : ' bg-gray-900 text-white hover:bg-gray-800';
  return <button className={base + styles + ' ' + className} {...props} />;
};

export default Button;
