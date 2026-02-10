import { cn } from '@/lib/utils';
import { Heading, BodyText } from '../primitives/Typography';

interface DiagramPanelProps {
  title: string;
  description?: string;
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  className?: string;
}

export default function DiagramPanel({
  title,
  description,
  imageSrc,
  imageAlt,
  caption,
  className,
}: DiagramPanelProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="text-center max-w-2xl mx-auto">
        <Heading as="h3" className="mb-3">
          {title}
        </Heading>
        {description && <BodyText>{description}</BodyText>}
      </div>
      <div className="relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto rounded-lg"
        />
        {caption && (
          <p className="text-sm text-muted-foreground text-center mt-2 italic">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}
