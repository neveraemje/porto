// Impact.tsx
import React from 'react';

interface ImpactProps {
  children: string;
}

const Impact: React.FC<ImpactProps> = ({ children }) => {
  return (
    <div>
      <p className="mb-0 font-medium text-lg dark:text-zinc-300">Impact</p>
      <h3 className="bg-gradient-to-br from-pink-500 to-indigo-500 dark:from-pink-500 dark:to-indigo-500 bg-clip-text text-transparent text-3xl lg:text-4xl mb-0">
        {children}
      </h3>
    </div>
  );
};

export default Impact;
