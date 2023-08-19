import * as z from "zod";

export const threadValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "Thread must be at least 3 characters long" })
    .max(1000),
  accountId: z.string(),
});

export const commentValidation = z.object({
  thread: z
    .string()
    .nonempty()
    .min(3, { message: "Thread must be at least 3 characters long" })
    .max(1000),
});
