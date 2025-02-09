import { z } from 'zod';

const createUserSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    password: z.string().min(6, 'Password must have at least 6 characters'),
  }),
});

const updateUserProfileSchema = z.object({
  body: z.object({
    name: z.string().optional(),
  }),
});

export const UserValidation = {
  createUserSchema,
  updateUserProfileSchema,
};
