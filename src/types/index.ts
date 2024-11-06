export type Role = 'administration' | 'teacher' | 'student';

export interface User {
  id: string;
  email: string;
  role: Role;
  firstName: string;
  lastName: string;
  phone?: string;
  address?: Address;
  photo?: string;
}

export interface Address {
  street: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

export interface Student extends User {
  dateOfBirth: Date;
  registrationDate: Date;
  preferredPaymentMethod: string;
  generalNotes?: string;
  medicalNotes?: string;
  classLevel: string;
  parentId?: string;
}

export interface Teacher extends User {
  dateOfBirth: Date;
  registrationDate: Date;
  preferredPaymentMethod: string;
  generalNotes?: string;
}

export interface Class {
  id: string;
  teacherId: string;
  classroom: string;
  startDate: Date;
  endDate: Date;
  recurringSchedule: RecurringSchedule;
  paymentFees: number;
  status: 'active' | 'inactive';
}

export interface RecurringSchedule {
  day: string;
  startTime: string;
  endTime: string;
}

export interface Event {
  id: string;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
  startTime: string;
  endTime: string;
  recurringSchedule?: RecurringSchedule;
  eventType: string;
  status: 'scheduled' | 'cancelled' | 'completed';
}

export interface Payment {
  id: string;
  receiptNumber: string;
  date: Date;
  billTo: string;
  paymentMethod: string;
  subtotal: number;
  total: number;
  createdBy: string;
  createdOn: Date;
  status: 'paid' | 'pending' | 'overdue';
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  createdAt: Date;
  groupId: string;
  attachments?: MessageAttachment[];
}

export interface MessageGroup {
  id: string;
  name: string;
  description?: string;
  type: 'class' | 'announcement' | 'private';
  members: string[];
  createdAt: Date;
  lastMessageAt?: Date;
}

export interface MessageAttachment {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
}