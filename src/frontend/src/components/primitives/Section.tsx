import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'tinted';
}

export default function Section({ children, className, variant = 'default' }: SectionProps) {
  return (
    <section
      className={cn(
        'py-16 md:py-24',
        variant === 'tinted' && 'bg-muted/30',
        className
      )}
    >
      {children}
    </section>
  );
}
