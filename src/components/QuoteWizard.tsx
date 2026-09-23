import React, { lazy, Suspense, useEffect, useState } from 'react';

// Envoltorio ligero: el formulario (diálogo, pasos y confeti) solo se descarga la primera vez que se abre.
const QuoteWizardDialog = lazy(() => import('./quote-wizard/QuoteWizardDialog'));

interface QuoteWizardProps {
  open: boolean;
  onClose: () => void;
}

const QuoteWizard = ({ open, onClose }: QuoteWizardProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (open) setMounted(true);
  }, [open]);

  if (!mounted) return null;

  return (
    <Suspense fallback={null}>
      <QuoteWizardDialog open={open} onClose={onClose} />
    </Suspense>
  );
};

export default QuoteWizard;
