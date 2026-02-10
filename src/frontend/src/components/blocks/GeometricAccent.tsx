import { cn } from '@/lib/utils';

interface GeometricAccentProps {
  className?: string;
}

export default function GeometricAccent({ className }: GeometricAccentProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-primary/10 rounded-full" />
      <div className="absolute bottom-20 left-10 w-24 h-24 border-2 border-primary/10 rounded-lg rotate-12" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-primary/10 rounded-full" />
    </div>
  );
}
