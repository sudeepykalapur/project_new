import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronDown } from "lucide-react"

interface AccordionItemProps {
  value: string
  trigger: React.ReactNode
  children: React.ReactNode
}

const AccordionContext = React.createContext<{
  expanded: string | null
  setExpanded: (value: string | null) => void
}>({ expanded: null, setExpanded: () => {} })

export function Accordion({ 
  children,
  className,
  defaultValue = null
}: { 
  children: React.ReactNode
  className?: string
  defaultValue?: string | null 
}) {
  const [expanded, setExpanded] = React.useState<string | null>(defaultValue)

  return (
    <AccordionContext.Provider value={{ expanded, setExpanded }}>
      <div className={cn("space-y-2", className)}>
        {children}
      </div>
    </AccordionContext.Provider>
  )
}

export function AccordionItem({ value, trigger, children }: AccordionItemProps) {
  const { expanded, setExpanded } = React.useContext(AccordionContext)
  const isExpanded = expanded === value

  return (
    <div className="border rounded-lg">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left"
        onClick={() => setExpanded(isExpanded ? null : value)}
      >
        {trigger}
        <ChevronDown
          className={cn(
            "h-4 w-4 shrink-0 transition-transform duration-200",
            isExpanded && "rotate-180"
          )}
        />
      </button>
      {isExpanded && (
        <div className="px-4 pb-4">
          {children}
        </div>
      )}
    </div>
  )
}