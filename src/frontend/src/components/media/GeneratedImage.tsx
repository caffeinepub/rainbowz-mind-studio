import { cn } from '@/lib/utils';

interface GeneratedImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function GeneratedImage({ src, alt, className }: GeneratedImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn('w-full h-auto', className)}
      loading="lazy"
    />
  );
}
