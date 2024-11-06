import { Class } from '@/types';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface ClassFormProps {
  onSubmit: (data: Partial<Class>) => void;
  onCancel: () => void;
  initialData?: Partial<Class>;
}

export function ClassForm({ onSubmit, onCancel, initialData }: ClassFormProps) {
  const { register, handleSubmit } = useForm<Partial<Class>>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="classroom" className="block text-sm font-medium text-gray-700">
            Classroom
          </label>
          <Input {...register('classroom')} id="classroom" className="mt-1" />
        </div>
        <div>
          <label htmlFor="teacherId" className="block text-sm font-medium text-gray-700">
            Teacher
          </label>
          <Input {...register('teacherId')} id="teacherId" className="mt-1" />
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
          <label htmlFor="day" className="block text-sm font-medium text-gray-700">
            Day
          </label>
          <select
            {...register('recurringSchedule.day')}
            id="day"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          >
            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">
            Start Time
          </label>
          <Input {...register('recurringSchedule.startTime')} type="time" id="startTime" className="mt-1" />
        </div>
        <div>
          <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">
            End Time
          </label>
          <Input {...register('recurringSchedule.endTime')} type="time" id="endTime" className="mt-1" />
        </div>
        <div>
          <label htmlFor="paymentFees" className="block text-sm font-medium text-gray-700">
            Payment Fees
          </label>
          <Input {...register('paymentFees')} type="number" id="paymentFees" className="mt-1" />
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
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
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