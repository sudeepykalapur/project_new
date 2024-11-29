import { z } from "zod"
import { donorSchema } from "@/lib/validations/donor"

export type DonorFormValues = z.infer<typeof donorSchema>