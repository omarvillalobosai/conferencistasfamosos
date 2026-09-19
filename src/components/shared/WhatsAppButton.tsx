
import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  variant?: ButtonProps['variant'];
  size?: ButtonProps['size'];
  showIcon?: boolean;
  className?: string;
  children?: React.ReactNode;
  source?: string;
  page?: string;
}

const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = '523324166849',
  message = 'Me interesa más información sobre ConferencistasFamosos.',
  variant = 'default',
  size = 'default',
  showIcon = true,
  className,
  children,
  source = 'whatsapp_generico',
  page = '',
}) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleContinue = () => {
    if (!name.trim() || !phone.trim()) return;

    supabase.functions
      .invoke('whatsapp-lead-capture', {
        body: { name: name.trim(), phone: phone.trim(), source, page },
      })
      .catch(console.error);

    const prefilledMessage = encodeURIComponent(`Soy ${name.trim()}. ${message}`);
    window.open(`https://wa.me/${phoneNumber}?text=${prefilledMessage}`, '_blank', 'noopener,noreferrer');

    setDialogOpen(false);
    setName('');
    setPhone('');
  };

  return (
    <>
      <Button
        variant={variant}
        size={size}
        className={cn('flex items-center gap-2',
          variant === 'default' && !className?.includes('bg-') ? 'bg-green-500 hover:bg-green-600' : '',
          className
        )}
        onClick={() => setDialogOpen(true)}
      >
        {showIcon && <MessageCircle className="h-5 w-5" />}
        {children || 'Enviar mensaje por WhatsApp'}
      </Button>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-[400px]">
          <DialogHeader>
            <DialogTitle>Antes de continuar</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="wa-lead-name">Nombre *</Label>
              <Input
                id="wa-lead-name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Tu nombre"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="wa-lead-phone">Tu WhatsApp *</Label>
              <Input
                id="wa-lead-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="52 3324166849"
                required
              />
            </div>
            <Button
              onClick={handleContinue}
              disabled={!name.trim() || !phone.trim()}
              className="w-full bg-green-500 hover:bg-green-600"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Continuar a WhatsApp
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default WhatsAppButton;
