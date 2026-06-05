// ============================================
// ShopInsight - Button UI Component
// ============================================
// Reusable button component with multiple variants
// Built with Tailwind CSS and class-variance-authority
// ============================================

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

/**
 * Button variants using class-variance-authority
 * Defines different styles for different use cases
 */
const buttonVariants = cva(
  // Base styles applied to all buttons
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
  {
    variants: {
      // Different visual variants
      variant: {
        // Primary button for main actions
        default: 'bg-blue-600 text-white hover:bg-blue-700',
        
        // Destructive button for dangerous actions
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        
        // Outline button for secondary actions
        outline: 'border border-gray-300 hover:bg-gray-100',
        
        // Secondary button for less important actions
        secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200',
        
        // Ghost button for subtle actions
        ghost: 'hover:bg-gray-100 hover:text-gray-900',
        
        // Link style button
        link: 'underline-offset-4 hover:underline text-blue-600',
      },
      // Different sizes
      size: {
        default: 'h-10 py-2 px-4',
        sm: 'h-9 px-3 rounded-md',
        lg: 'h-11 px-8 rounded-md',
        icon: 'h-10 w-10',
      },
    },
    // Default values when props are not provided
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

/**
 * Button component props interface
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

/**
 * Button component
 * 
 * @example
 * <Button onClick={handleClick}>Click me</Button>
 * <Button variant="destructive">Delete</Button>
 * <Button size="sm">Small</Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
