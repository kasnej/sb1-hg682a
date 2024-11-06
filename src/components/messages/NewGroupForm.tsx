import { MessageGroup } from '@/types';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface NewGroupFormProps {
  onSubmit: (data: Partial<MessageGroup>) => void;
  onCancel: () => void;
}

export function NewGroupForm({ onSubmit, onCancel }: NewGroupFormProps) {
  const { register, handleSubmit } = useForm<Partial<MessageGroup>>();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Group Name
        </label>
        <Input {...register('name')} id="name" className="mt-1" />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          {...register('description')}
          id="description"
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700">
          Group Type
        </label>
        <select
          {...register('type')}
          id="type"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="class">Class</option>
          <option value="announcement">Announcement</option>
          <option value="private">Private</option>
        </select>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Create Group</Button>
      </div>
    </form>
  );
}