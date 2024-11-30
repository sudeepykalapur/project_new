import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CampsFilter() {
  return (
    <div className="w-full md:w-48">
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Filter by date" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="this-week">This Week</SelectItem>
          <SelectItem value="this-month">This Month</SelectItem>
          <SelectItem value="next-month">Next Month</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}