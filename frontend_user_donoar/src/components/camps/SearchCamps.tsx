import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export function SearchCamps() {
  return (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
      <Input
        placeholder="Search camps by location or name..."
        className="pl-10"
      />
    </div>
  )
}