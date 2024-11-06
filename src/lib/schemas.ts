import { z } from 'zod';

export const addressSchema = z.object({
  street: z.string().min(1, 'Street is required'),
  city: z.string().min(1, 'City is required'),
  zipCode: z.string().min(1, 'ZIP code is required'),
  state: z.string().optional(),
  country: z.string().min(1, 'Country is required'),
});

export const studentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  registrationDate: z.string().min(1, 'Registration date is required'),
  preferredPaymentMethod: z.string().min(1, 'Preferred payment method is required'),
  generalNotes: z.string().optional(),
  medicalNotes: z.string().optional(),
  classLevel: z.string().min(1, 'Class level is required'),
  address: addressSchema,
  role: z.literal('student'),
});

export const teacherSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  registrationDate: z.string().min(1, 'Registration date is required'),
  preferredPaymentMethod: z.string().min(1, 'Preferred payment method is required'),
  generalNotes: z.string().optional(),
  address: addressSchema,
  role: z.literal('teacher'),
});