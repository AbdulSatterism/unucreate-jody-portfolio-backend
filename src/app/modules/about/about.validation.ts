import { z } from 'zod';

const createAboutValidationSchema = z.object({
  body: z.object({
    description: z.string(),
    instagram: z.string(),
    email: z.string(),
    linkedin: z.string(),
  }),
});

const updateAboutValidationSchema = z.object({
  body: z.object({
    description: z.string(),
    instagram: z.string(),
    email: z.string(),
    linkedin: z.string(),
  }),
});

export const aboutValidations = {
  createAboutValidationSchema,
  updateAboutValidationSchema,
};
