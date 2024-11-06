import { supabase } from '@/lib/supabase';
import { Student } from '@/types';
import { studentSchema } from '@/lib/schemas';

export async function getStudents() {
  const { data, error } = await supabase
    .from('students')
    .select(`
      *,
      address:addresses(*)
    `);

  if (error) throw error;
  return data as Student[];
}

export async function createStudent(student: Omit<Student, 'id'>) {
  const validatedData = studentSchema.parse(student);

  // First create the address
  const { data: addressData, error: addressError } = await supabase
    .from('addresses')
    .insert([validatedData.address])
    .select()
    .single();

  if (addressError) throw addressError;

  // Then create the student with the address ID
  const { data, error } = await supabase
    .from('students')
    .insert([
      {
        ...validatedData,
        addressId: addressData.id,
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateStudent(id: string, student: Partial<Student>) {
  const validatedData = studentSchema.partial().parse(student);

  if (validatedData.address) {
    const { error: addressError } = await supabase
      .from('addresses')
      .update(validatedData.address)
      .eq('id', student.address?.id);

    if (addressError) throw addressError;
  }

  const { data, error } = await supabase
    .from('students')
    .update(validatedData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}