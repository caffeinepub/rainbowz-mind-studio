import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
}

export function Heading({ children, className, as = 'h2' }: HeadingProps) {
  const Component = as;
  const baseStyles = 'font-bold text-foreground tracking-tight';
  const sizeStyles = {
    h1: 'text-4xl md:text-5xl lg:text-6xl',
    h2: 'text-3xl md:text-4xl lg:text-5xl',
    h3: 'text-2xl md:text-3xl',
    h4: 'text-xl md:text-2xl',
  };

  return (
    <Component className={cn(baseStyles, sizeStyles[as], className)}>
      {children}
    </Component>
  );
}

interface SubheadingProps {
  children: ReactNode;
  className?: string;
}

export function Subheading({ children, className }: SubheadingProps) {
  return (
    <p className={cn('text-lg md:text-xl text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  );
}

interface BodyTextProps {
  children: ReactNode;
  className?: string;
}

export function BodyText({ children, className }: BodyTextProps) {
  return (
    <p className={cn('text-base text-muted-foreground leading-relaxed', className)}>
      {children}
    </p>
  );
}
