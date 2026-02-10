import { cn } from '@/lib/utils';
import { Button } from '../primitives/Button';

interface AgeGroupSelectorProps {
  groups: { id: string; ageRange: string; title: string }[];
  activeId: string;
  onSelect: (id: string) => void;
  className?: string;
}

export default function AgeGroupSelector({
  groups,
  activeId,
  onSelect,
  className,
}: AgeGroupSelectorProps) {
  return (
    <div className={cn('flex flex-col sm:flex-row gap-4 justify-center', className)}>
      {groups.map((group) => (
        <Button
          key={group.id}
          variant={activeId === group.id ? 'default' : 'outline'}
          size="lg"
          onClick={() => onSelect(group.id)}
          className="flex-1 sm:flex-none"
        >
          <div className="text-center">
            <div className="font-bold">Ages {group.ageRange}</div>
            <div className="text-xs opacity-90">{group.title}</div>
          </div>
        </Button>
      ))}
    </div>
  );
}
