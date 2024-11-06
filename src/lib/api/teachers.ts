import { supabase } from '@/lib/supabase';
import { Teacher } from '@/types';
import { teacherSchema } from '@/lib/schemas';

export async function getTeachers() {
  const { data, error } = await supabase
    .from('teachers')
    .select(`
      *,
      address:addresses(*)
    `);

  if (error) throw error;
  return data as Teacher[];
}

export async function createTeacher(teacher: Omit<Teacher, 'id'>) {
  const validatedData = teacherSchema.parse(teacher);

  // First create the address
  const { data: addressData, error: addressError } = await supabase
    .from('addresses')
    .insert([validatedData.address])
    .select()
    .single();

  if (addressError) throw addressError;

  // Then create the teacher with the address ID
  const { data, error } = await supabase
    .from('teachers')
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

export async function updateTeacher(id: string, teacher: Partial<Teacher>) {
  const validatedData = teacherSchema.partial().parse(teacher);

  if (validatedData.address) {
    const { error: addressError } = await supabase
      .from('addresses')
      .update(validatedData.address)
      .eq('id', teacher.address?.id);

    if (addressError) throw addressError;
  }

  const { data, error } = await supabase
    .from('teachers')
    .update(validatedData)
    .eq('id', id)
    .select()
    .single();

  if (error) throw error;
  return data;
}