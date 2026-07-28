import * as z from "zod";

/** Shared by the form and the API route so both validate identically. */
export const contactSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(200),
  subject: z
    .string()
    .trim()
    .min(5, "Subject must be at least 5 characters")
    .max(200),
  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(5000),
  /**
   * Honeypot: real people leave this empty, most bots fill it in. Deliberately
   * unconstrained so a filled value reaches the route and can be dropped
   * silently — rejecting it here would tell the bot it was caught.
   */
  company: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
