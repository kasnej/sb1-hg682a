import { Payment } from '@/types';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { useState } from 'react';

interface InvoiceFormProps {
  onSubmit: (data: Partial<Payment>) => void;
  onCancel: () => void;
  initialData?: Partial<Payment>;
}

interface InvoiceItem {
  id: string;
  description: string;
  amount: number;
}

export function InvoiceForm({ onSubmit, onCancel, initialData }: InvoiceFormProps) {
  const { register, handleSubmit, watch } = useForm<Partial<Payment>>({
    defaultValues: initialData,
  });

  const [items, setItems] = useState<InvoiceItem[]>([
    { id: '1', description: '', amount: 0 },
  ]);

  const addItem = () => {
    setItems([...items, { id: String(items.length + 1), description: '', amount: 0 }]);
  };

  const removeItem = (id: string) => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    return items.reduce((sum, item) => sum + item.amount, 0);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium mb-4">Invoice Details</h4>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="student" className="block text-sm font-medium text-gray-700">
                Select Student
              </label>
              <select
                {...register('billTo')}
                id="student"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a student...</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
              </select>
            </div>
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                Invoice Date
              </label>
              <Input {...register('date')} type="date" id="date" className="mt-1" />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-4">Invoice Items</h4>
          <div className="space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex items-center space-x-4">
                <div className="flex-1">
                  <Input placeholder="Description" className="w-full" />
                </div>
                <div className="w-32">
                  <Input type="number" placeholder="Amount" className="w-full" />
                </div>
                {items.length > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" variant="outline" onClick={addItem}>
              Add Item
            </Button>
          </div>
        </div>

        <div className="flex justify-between items-center pt-4 border-t">
          <div>
            <p className="text-sm font-medium text-gray-500">Subtotal</p>
            <p className="text-lg font-medium">€{calculateTotal()}</p>
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">Total</p>
            <p className="text-lg font-medium">€{calculateTotal()}</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end space-x-2">
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit">Save Invoice</Button>
      </div>
    </form>
  );
}