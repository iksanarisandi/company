import { Button } from '@/components/ui/button';
import { MessageCircle, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CTAWhatsAppProps {
  children?: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  message?: string;
  fullWidth?: boolean;
}

export function CTAWhatsApp({
  children = 'Konsultasi WhatsApp',
  className,
  variant = 'default',
  size = 'default',
  message = 'Halo PT Mencari Cinta Sejati, saya ingin konsultasi.',
  fullWidth = false,
}: CTAWhatsAppProps) {
  const phoneNumber = '6282347303153';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Button
      asChild
      variant={variant}
      size={size}
      className={cn(
        fullWidth && 'w-full',
        className
      )}
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 group"
      >
        <MessageCircle className="h-4 w-4 group-hover:animate-bounce" />
        <span>{children}</span>
        <Phone className="h-4 w-4 ml-auto" />
      </a>
    </Button>
  );
}