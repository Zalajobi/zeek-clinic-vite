import { z } from "zod";

export const LoginRequestSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    rememberMe: z.boolean().optional(),
  })
  .refine((data) => {
    return !data.email.includes("+");
  });

export type LoginRequestSchema = z.infer<typeof LoginRequestSchema>;
