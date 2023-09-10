import React, { forwardRef } from 'react';
import { cn } from '../utils/utils';

const TextTshirt = forwardRef(({ className, ...rest }, ref) => {
  return (
    <input
      className={cn(
        'p-2 border-2 border-gray-200 border-solid rounded-[3px] outline-none w-full',
        className
      )}
      ref={ref} // Forward the ref to the input element
      {...rest}
    />
  );
});

export default TextTshirt;
