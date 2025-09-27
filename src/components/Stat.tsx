import { motion, useMotionValue, useVelocity, useSpring } from 'framer-motion';
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  icon?: ReactNode;
  className?: string;
  animate?: boolean;
}

export function Stat({
  value,
  suffix = '',
  prefix = '',
  label,
  icon,
  className,
  animate = true,
}: StatProps) {
  const ref = useMotionValue(0);
  const velocity = useVelocity(ref);
  const x = useSpring(ref, { stiffness: 100, damping: 30 });

  const displayValue = animate ? Math.floor(x.get()) : value;

  return (
    <motion.div
      ref={ref}
      className={cn(
        "text-center space-y-2",
        className
      )}
      initial={animate ? { opacity: 0, y: 20 } : undefined}
      whileInView={animate ? { opacity: 1, y: 0 } : undefined}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      onUpdate={() => {
        if (velocity.get() === 0) {
          ref.set(value);
        }
      }}
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