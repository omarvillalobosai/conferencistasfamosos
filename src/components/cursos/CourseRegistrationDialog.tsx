
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import CourseRegistrationForm, { FormValues } from './CourseRegistrationForm';

interface CourseRegistrationDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: FormValues) => Promise<void>;
  isSubmitting: boolean;
}

const CourseRegistrationDialog: React.FC<CourseRegistrationDialogProps> = ({
  isOpen,
  onOpenChange,
  onSubmit,
  isSubmitting,
}) => {
  const handleCancel = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Acceso a Cursos Premium</DialogTitle>
          <DialogDescription>
            Completa tu registro para acceder al contenido premium
          </DialogDescription>
        </DialogHeader>
        <CourseRegistrationForm 
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
          onCancel={handleCancel}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CourseRegistrationDialog;
