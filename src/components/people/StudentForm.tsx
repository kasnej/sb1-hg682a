import { Student } from '@/types';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';

interface StudentFormProps {
  onSubmit: (data: Partial<Student>) => void;
  onCancel: () => void;
  initialData?: Partial<Student>;
}

export function StudentForm({ onSubmit, onCancel, initialData }: StudentFormProps) {
  const { register, handleSubmit } = useForm<Partial<Student>>({
    defaultValues: initialData,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-4">Personal Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <Input {...register('firstName')} id="firstName" className="mt-1" />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <Input {...register('lastName')} id="lastName" className="mt-1" />
            </div>
            <div>
              <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                Date of Birth
              </label>
              <Input {...register('dateOfBirth')} type="date" id="dateOfBirth" className="mt-1" />
            </div>
            <div>
              <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700">
                Registration Date
              </label>
              <Input {...register('registrationDate')} type="date" id="registrationDate" className="mt-1" />
            </div>
            <div>
              <label htmlFor="preferredPaymentMethod" className="block text-sm font-medium text-gray-700">
                Preferred Payment Method
              </label>
              <Input {...register('preferredPaymentMethod')} id="preferredPaymentMethod" className="mt-1" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Contact Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <Input {...register('phone')} id="phone" className="mt-1" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input {...register('email')} type="email" id="email" className="mt-1" />
            </div>
            <div>
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <Input {...register('address.street')} id="street" className="mt-1" />
            </div>
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <Input {...register('address.city')} id="city" className="mt-1" />
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <Input {...register('address.zipCode')} id="zipCode" className="mt-1" />
            </div>
            <div>
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <Input {...register('address.country')} id="country" defaultValue="Germany" className="mt-1" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Other Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="classLevel" className="block text-sm font-medium text-gray-700">
                Class Level
              </label>
              <Input {...register('classLevel')} id="classLevel" className="mt-1" />
            </div>
            <div>
              <label htmlFor="generalNotes" className="block text-sm font-medium text-gray-700">
                General Notes
              </label>
              <textarea
                {...register('generalNotes')}
                id="generalNotes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label htmlFor="medicalNotes" className="block text-sm font-medium text-gray-700">
                Medical Notes
              </label>
              <textarea
                {...register('medicalNotes')}
                id="medicalNotes"
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
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