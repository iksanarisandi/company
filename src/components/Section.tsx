import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  heading?: string;
  subheading?: string;
}

export function Section({ children, className, heading, subheading }: SectionProps) {
  return (
    <section className={cn(
      "py-16 md:py-24 container max-w-7xl mx-auto px-4",
      className
    )}>
      {(heading || subheading) && (
        <div className="text-center space-y-4 mb-12 max-w-3xl mx-auto">
          {heading && (
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {heading}
            </h2>
          )}
          {subheading && (
            <p className="text-xl text-muted-foreground leading-relaxed">
              {subheading}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}