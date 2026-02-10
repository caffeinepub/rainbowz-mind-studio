import { ReactNode } from 'react';
import { Card as ShadcnCard, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'soft';
}

export function Card({ children, className, variant = 'default' }: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        variant === 'soft' && 'bg-muted/50 border-muted',
        variant === 'outline' && 'border-2',
        className
      )}
    >
      {children}
    </ShadcnCard>
  );
}

interface FeatureCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({ icon, title, description, className }: FeatureCardProps) {
  return (
    <Card variant="soft" className={cn('h-full', className)}>
      <CardHeader>
        {icon && <div className="mb-3">{icon}</div>}
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}
