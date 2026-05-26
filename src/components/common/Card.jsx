import React from 'react';
import { cn } from '../../utils/cn';

const Card = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ className, children }) => (
  <div className={cn('p-6 border-b border-slate-50', className)}>{children}</div>
);

export const CardContent = ({ className, children }) => (
  <div className={cn('p-6', className)}>{children}</div>
);

export const CardFooter = ({ className, children }) => (
  <div className={cn('p-6 bg-slate-50/50 border-t border-slate-50', className)}>{children}</div>
);

export default Card;
