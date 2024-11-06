import { StudentList } from '@/components/people/StudentList';
import { TeacherList } from '@/components/people/TeacherList';
import { StudentForm } from '@/components/people/StudentForm';
import { TeacherForm } from '@/components/people/TeacherForm';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { useState } from 'react';
import { Student, Teacher } from '@/types';

// Temporary mock data
const mockStudents = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+49123456789',
    role: 'student',
    registrationDate: new Date('2023-01-15'),
    dateOfBirth: new Date('2010-05-20'),
    preferredPaymentMethod: 'bank_transfer',
    classLevel: 'Intermediate',
  },
] as const;

const mockTeachers = [
  {
    id: '1',
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane@example.com',
    phone: '+49987654321',
    role: 'teacher',
    registrationDate: new Date('2023-01-01'),
    dateOfBirth: new Date('1985-03-15'),
    preferredPaymentMethod: 'bank_transfer',
  },
] as const;

export default function PeoplePage() {
  const [activeTab, setActiveTab] = useState<'students' | 'teachers'>('students');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = async (data: Partial<Student | Teacher>) => {
    // TODO: Implement form submission
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="space-x-2">
          <Button
            variant={activeTab === 'students' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('students')}
          >
            Students
          </Button>
          <Button
            variant={activeTab === 'teachers' ? 'default' : 'ghost'}
            onClick={() => setActiveTab('teachers')}
          >
            Teachers
          </Button>
        </div>
        <Button onClick={() => setIsModalOpen(true)}>
          Add {activeTab === 'students' ? 'Student' : 'Teacher'}
        </Button>
      </div>

      <div className="flex justify-between items-center space-x-4">
        <Input
          type="search"
          placeholder="Search..."
          className="max-w-sm"
        />
        <Button variant="outline">Export</Button>
      </div>

      <div className="bg-white rounded-lg shadow">
        {activeTab === 'students' ? (
          <StudentList students={mockStudents} />
        ) : (
          <TeacherList teachers={mockTeachers} />
        )}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Add ${activeTab === 'students' ? 'Student' : 'Teacher'}`}
      >
        {activeTab === 'students' ? (
          <StudentForm
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        ) : (
          <TeacherForm
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
}