import { createStudent, getStudents } from '@/lib/api/students';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const students = await getStudents();
    return NextResponse.json(students);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch students' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const student = await createStudent(data);
    return NextResponse.json(student);
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create student' }, { status: 500 });
  }
}