import { z } from "zod";

export const chatRoleSchema = z.enum(["user", "assistant"]);

export const chatMessageSchema = z.object({
  role: chatRoleSchema,
  content: z.string().min(1).max(4000),
});

export const chatRequestSchema = z.object({
  messages: z.array(chatMessageSchema).min(1).max(40),
});

export type ChatRole = z.infer<typeof chatRoleSchema>;
export type ChatMessage = z.infer<typeof chatMessageSchema>;
export type ChatRequest = z.infer<typeof chatRequestSchema>;
