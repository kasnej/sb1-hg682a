import { Event } from '@/types';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface EventFormProps {
  onSubmit: (data: Partial<Event>) => void;
  onCancel: () => void;
  initialData?: Partial<Event>;
}

export function EventForm({ onSubmit, onCancel, initialData }: EventFormProps) {
  const { register, handleSubmit } = useForm<Partial<Event>>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-2">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Event Name
          </label>
          <Input {...register('name')} id="name" className="mt-1" />
        </div>
        <div className="col-span-2">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <Input {...register('location')} id="location" className="mt-1" />
        </div>
        <div>
          <label htmlFor="startDate" className="block text-sm font-medium text-gray-700">
            Start Date
          </label>
          <Input {...register('startDate')} type="date" id="startDate" className="mt-1" />
        </div>
        <div>
          <label htmlFor="endDate" className="block text-sm font-medium text-gray-700">
            End Date
          </label>
          <Input {...register('endDate')} type="date" id="endDate" className="mt-1" />
        </div>
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <Input {...register('startTime')} type="time" id="startTime" className="mt-1" />
        </div>
        <div>
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          <Input {...register('endTime')} type="time" id="endTime" className="mt-1" />
        </div>
        <div>
          <label htmlFor="eventType" className="block text-sm font-medium text-gray-700">
            Event Type
          </label>
          <Input {...register('eventType')} id="eventType" className="mt-1" />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700">
            Status
          </label>
          <select
            {...register('status')}
            id="status"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            <option value="scheduled">Scheduled</option>
            <option value="cancelled">Cancelled</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
}