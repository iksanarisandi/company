import { motion, useInView, animate } from 'framer-motion';
import type { ReactNode } from 'react';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  animated?: boolean;
}

export function Stat({
  value,
  suffix = '',
  prefix = '',
  label,
  icon,
  className,
  animated = true,
}: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);

  useEffect(() => {
    if (isInView && animated) {
      animate(0, value, {
        duration: 2,
        onUpdate: (latest: number) => {
          setDisplayValue(Math.floor(latest));
        },
      });
    }
  }, [isInView, value, animated]);

  return (
    <motion.div
      ref={ref}
      className={cn(
        "text-center space-y-2",
        className
      )}
      initial={animated ? { opacity: 0, y: 20 } : undefined}
      whileInView={animated ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {icon && (
        <div className="h-12 w-12 mx-auto mb-2">
          {icon}
        </div>
      )}
      <div className="text-3xl md:text-4xl font-bold text-foreground">
        {prefix}{displayValue}{suffix}
      </div>
      <p className="text-sm text-muted-foreground uppercase tracking-wide">
        {label}
      </p>
    </motion.div>
  );
}