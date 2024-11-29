import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { FormFieldError } from "./FormFieldError"

interface FormFieldProps {
  id: string
  label: string
  type?: string
  error?: string
  register: any
  className?: string
}

export function FormField({ 
  id, 
  label, 
  type = "text", 
  error, 
  register, 
  className 
}: FormFieldProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <Input
        id={id}
        type={type}
        {...register}
        className={className}
      />
      {error && <FormFieldError message={error} />}
    </div>
  )
}