import { cn } from '@/lib/utils';

interface ThinlineIconProps {
  name: 'focus' | 'memory' | 'speed' | 'creativity';
  className?: string;
  size?: number;
}

const iconPositions = {
  focus: { x: 0, y: 0 },
  memory: { x: 256, y: 0 },
  speed: { x: 512, y: 0 },
  creativity: { x: 768, y: 0 },
};

export default function ThinlineIcon({ name, className, size = 64 }: ThinlineIconProps) {
  const position = iconPositions[name];
  
  return (
    <div
      className={cn('inline-block', className)}
      style={{
        width: size,
        height: size,
        backgroundImage: 'url(/assets/generated/thinline-icons-sprite.dim_1024x1024.png)',
        backgroundPosition: `-${position.x}px ${position.y}px`,
        backgroundSize: `${1024 * (size / 256)}px ${1024 * (size / 256)}px`,
      }}
      role="img"
      aria-label={`${name} icon`}
    />
  );
}
