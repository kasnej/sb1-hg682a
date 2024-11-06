import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Tabs } from '@/components/ui/Tabs';
import { ClassList } from '@/components/classes/ClassList';
import { EventList } from '@/components/classes/EventList';
import { ClassForm } from '@/components/classes/ClassForm';
import { EventForm } from '@/components/classes/EventForm';
import { Modal } from '@/components/ui/Modal';
import { Class, Event } from '@/types';

// Temporary mock data
const mockClasses = [
  {
    id: '1',
    teacherId: '1',
    classroom: 'Room 101',
    startDate: new Date('2023-01-01'),
    endDate: new Date('2023-12-31'),
    recurringSchedule: {
      day: 'Monday',
      startTime: '14:00',
      endTime: '15:30',
    },
    paymentFees: 50,
    status: 'active',
  },
] as const;

const mockEvents = [
  {
    id: '1',
    name: 'Parent-Teacher Meeting',
    location: 'Main Hall',
    startDate: new Date('2023-11-15'),
    endDate: new Date('2023-11-15'),
    startTime: '18:00',
    endTime: '20:00',
    eventType: 'meeting',
    status: 'scheduled',
  },
] as const;

export default function ClassesAndEventsPage() {
  const [activeTab, setActiveTab] = useState('classes');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: 'classes',
      label: 'Classes',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              type="search"
              placeholder="Search classes..."
              className="max-w-sm"
            />
            <Button onClick={() => setIsModalOpen(true)}>Add Class</Button>
          </div>
          <ClassList classes={mockClasses} />
        </div>
      ),
    },
    {
      id: 'events',
      label: 'Events',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <Input
              type="search"
              placeholder="Search events..."
              className="max-w-sm"
            />
            <Button onClick={() => setIsModalOpen(true)}>Add Event</Button>
          </div>
          <EventList events={mockEvents} />
        </div>
      ),
    },
  ];

  const handleSubmit = async (data: Partial<Class | Event>) => {
    // TODO: Implement form submission
    console.log('Form submitted:', data);
    setIsModalOpen(false);
  };

  return (
    <div className="space-y-6">
      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Add ${activeTab === 'classes' ? 'Class' : 'Event'}`}
      >
        {activeTab === 'classes' ? (
          <ClassForm
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        ) : (
          <EventForm
            onSubmit={handleSubmit}
            onCancel={() => setIsModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
}