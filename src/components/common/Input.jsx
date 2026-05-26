import React from 'react';
import { cn } from '../../utils/cn';

const Input = React.forwardRef(({ className, label, error, ...props }, ref) => {
  return (
    <div className="w-full space-y-1.5">
      {label && (
        <label className="text-sm font-medium text-slate-700 ml-1">
          {label}
        </label>
      )}
      <input
        className={cn(
          'w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary disabled:opacity-50',
          error && 'border-red-500 focus:ring-red-200 focus:border-red-500',
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <p className="text-xs text-red-500 ml-1 mt-1 font-medium">{error}</p>
      )}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;
