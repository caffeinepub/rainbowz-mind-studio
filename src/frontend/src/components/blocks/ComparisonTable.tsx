import { Check, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ComparisonRow {
  traditional: string;
  rainbowz: string;
}

interface ComparisonTableProps {
  rows: ComparisonRow[];
  className?: string;
}

export default function ComparisonTable({ rows, className }: ComparisonTableProps) {
  return (
    <div className={cn('overflow-x-auto', className)}>
      <div className="grid grid-cols-2 gap-4 min-w-[500px]">
        {/* Headers */}
        <div className="bg-muted/50 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-muted-foreground">Traditional Education</h3>
        </div>
        <div className="bg-primary/10 p-4 rounded-lg">
          <h3 className="text-lg font-semibold text-primary">Rainbowz Brain Training</h3>
        </div>

        {/* Rows */}
        {rows.map((row, index) => (
          <>
            <div key={`trad-${index}`} className="p-4 border border-border rounded-lg bg-background">
              <p className="text-sm text-muted-foreground flex items-start gap-2">
                <X size={16} className="text-muted-foreground mt-0.5 shrink-0" />
                <span>{row.traditional}</span>
              </p>
            </div>
            <div key={`rain-${index}`} className="p-4 border-2 border-primary/20 rounded-lg bg-primary/5">
              <p className="text-sm text-foreground flex items-start gap-2">
                <Check size={16} className="text-primary mt-0.5 shrink-0" />
                <span>{row.rainbowz}</span>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
