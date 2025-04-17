
import React from 'react';
import { MessageCircle } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  showIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '523324166849',
  message = 'Me interesa más información sobre ConferencistasFamosos.',
  variant = 'default',
  size = 'default',
  showIcon = true,
  className,
  children,
  ...props
}) => {
  const prefilledMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  return (
    <Button
      variant={variant}
      size={size}
      className={cn('flex items-center gap-2', 
        variant === 'default' && !className?.includes('bg-') ? 'bg-green-500 hover:bg-green-600' : '', 
        className
      )}
      asChild
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {showIcon && <MessageCircle className="h-5 w-5" />}
        {children || 'Enviar mensaje por WhatsApp'}
      </a>
    </Button>
  );
};

export default WhatsAppButton;
