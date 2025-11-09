// src/components/ui/tabs.js
import React, { createContext, useContext, useState } from 'react';

const TabsCtx = createContext({ value: '', setValue: () => {} });

export const Tabs = ({ defaultValue, children }) => {
  const [value, setValue] = useState(defaultValue);
  return <TabsCtx.Provider value={{ value, setValue }}>{children}</TabsCtx.Provider>;
};

export const TabsList = ({ className = '', children }) => (
  <div className={`rounded-lg border border-gray-200 overflow-hidden ${className}`}>{children}</div>
);

export const TabsTrigger = ({ value, children }) => {
  const { value: active, setValue } = useContext(TabsCtx);
  const isActive = active === value;
  return (
    <button
      onClick={() => setValue(value)}
      className={`px-4 py-2 text-sm transition-colors ${
        isActive ? 'bg-gray-900 text-white' : 'text-gray-700 hover:bg-gray-50'
      }`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children }) => {
  const { value: active } = useContext(TabsCtx);
  if (active !== value) return null;
  return <div>{children}</div>;
};

export default Tabs;
