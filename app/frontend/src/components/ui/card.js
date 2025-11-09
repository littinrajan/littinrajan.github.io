// src/components/ui/card.js
import React from 'react';

export const Card = ({ className = '', children }) => (
  <div className={`rounded-xl border border-gray-200 bg-white ${className}`}>{children}</div>
);
export const CardHeader = ({ className = '', children }) => <div className={`p-6 pb-0 ${className}`}>{children}</div>;
export const CardTitle = ({ className = '', children }) => <h3 className={`text-xl font-normal ${className}`}>{children}</h3>;
export const CardDescription = ({ className = '', children }) => <p className={`text-gray-600 ${className}`}>{children}</p>;
export const CardContent = ({ className = '', children }) => <div className={`p-6 pt-4 ${className}`}>{children}</div>;

export default Card;
