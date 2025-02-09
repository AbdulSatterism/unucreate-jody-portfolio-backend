import { z } from 'zod';

const createProjectValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    myRole: z.string(),
    process: z.string(),
    deliverable: z.string(),
    outcome: z.string(),
  }),
});

const updateProjectValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    myRole: z.string().optional(),
    process: z.string().optional(),
    deliverable: z.string().optional(),
    outcome: z.string().optional(),
  }),
});

export const projectValidations = {
  createProjectValidationSchema,
  updateProjectValidationSchema,
};
