import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FormFieldError } from "./FormFieldError"

interface BloodTypeSelectProps {
  error?: string
  onValueChange: (value: string) => void
}

const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

export function BloodTypeSelect({ error, onValueChange }: BloodTypeSelectProps) {
  return (
    <div className="space-y-2">
      <Label htmlFor="bloodType">Blood Type</Label>
      <Select onValueChange={onValueChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select blood type" />
        </SelectTrigger>
        <SelectContent>
          {bloodTypes.map((type) => (
            <SelectItem key={type} value={type}>
              {type}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && <FormFieldError message={error} />}
    </div>
  )
}