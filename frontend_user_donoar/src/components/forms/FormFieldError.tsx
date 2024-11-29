interface FormFieldErrorProps {
  message?: string
}

export function FormFieldError({ message }: FormFieldErrorProps) {
  if (!message) return null
  
  return (
    <p className="text-red-500 text-sm">
      {message}
    </p>
  )
}