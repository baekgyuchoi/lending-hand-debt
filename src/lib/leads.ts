// src/lib/schema.ts
import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  address: z.string().min(5, "Valid street address is required"),
  city: z.string().min(2, "City is required"),
  state: z.string().length(2, "Please select a state"),
  zip: z.string().regex(/^\d{5}$/, "Invalid ZIP code"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be 10 digits"),
  email: z.string().email("Invalid email address"),
});

export type FormData = z.infer<typeof formSchema>;