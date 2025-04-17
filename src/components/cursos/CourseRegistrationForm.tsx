
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

// Form validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
});

export type FormValues = z.infer<typeof formSchema>;

interface CourseRegistrationFormProps {
  onSubmit: (data: FormValues) => Promise<void>;
  isSubmitting: boolean;
  onCancel: () => void;
}

const CourseRegistrationForm: React.FC<CourseRegistrationFormProps> = ({
  onSubmit,
  isSubmitting,
  onCancel,
}) => {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre</FormLabel>
              <FormControl>
                <Input placeholder="Tu nombre completo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input type="email" placeholder="tu@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex justify-end gap-3 pt-4">
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancelar
          </Button>
          <Button type="submit" className="bg-orange-500 hover:bg-orange-600" disabled={isSubmitting}>
            {isSubmitting ? "Registrando..." : "Registrarme y acceder"}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default CourseRegistrationForm;
