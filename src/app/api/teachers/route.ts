import { createTeacher, getTeachers } from '@/lib/api/teachers';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const teachers = await getTeachers();
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch teachers' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const teacher = await createTeacher(data);
    return NextResponse.json(teacher);
  } catch (error) {
    if (error.name === 'ZodError') {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create teacher' }, { status: 500 });
  }
}