import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Tabs } from '@/components/ui/Tabs';
import { PaymentList } from '@/components/payments/PaymentList';
import { InvoiceForm } from '@/components/payments/InvoiceForm';
import { Modal } from '@/components/ui/Modal';
import { Payment } from '@/types';

// Temporary mock data
const mockPayments = [
  {
    id: '1',
    receiptNumber: 'REC-001',
    date: new Date('2023-11-01'),
    billTo: 'John Doe',
    paymentMethod: 'bank_transfer',
    subtotal: 100,
    total: 100,
    createdBy: 'Admin User',
    createdOn: new Date('2023-11-01'),
    status: 'paid',
  },
] as const;

const mockOverduePayments = [
  {
    id: '2',
    receiptNumber: 'REC-002',
    date: new Date('2023-10-15'),
    billTo: 'Jane Smith',
    paymentMethod: 'bank_transfer',
    subtotal: 150,
    total: 150,
    createdBy: 'Admin User',
    createdOn: new Date('2023-10-01'),
    status: 'overdue',
  },
] as const;

export default function PaymentsPage() {
  const [activeTab, setActiveTab] = useState('received');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const tabs = [
    {
      id: 'received',
      label: 'Payments Received',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="Search payments..."
                className="max-w-sm"
              />
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Payment Methods</option>
                <option value="bank_transfer">Bank Transfer</option>
                <option value="cash">Cash</option>
              </select>
              <Input type="date" className="w-40" />
            </div>
            <Button onClick={() => setIsModalOpen(true)}>New Invoice</Button>
          </div>
          <PaymentList payments={mockPayments} />
        </div>
      ),
    },
    {
      id: 'overdue',
      label: 'Overdue Payments',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="Search overdue payments..."
                className="max-w-sm"
              />
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Students</option>
              </select>
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Classes</option>
              </select>
            </div>
          </div>
          <PaymentList payments={mockOverduePayments} showPayNowButton />
        </div>
      ),
    },
    {
      id: 'future',
      label: 'Future Payments',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="Search future payments..."
                className="max-w-sm"
              />
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Students</option>
              </select>
              <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
                <option value="">All Classes</option>
              </select>
            </div>
          </div>
          <PaymentList payments={[]} showPayNowButton />
        </div>
      ),
    },
    {
      id: 'invoices',
      label: 'Payment Invoices',
      content: (
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Input
                type="search"
                placeholder="Search invoices..."
                className="max-w-sm"
              />
              <Input type="date" className="w-40" />
            </div>
            <Button onClick={() => setIsModalOpen(true)}>New Invoice</Button>
          </div>
          <PaymentList payments={mockPayments} showInvoiceActions />
        </div>
      ),
    },
  ];

  const handleSubmit = async (data: Partial<Payment>) => {
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
        title="New Invoice"
      >
        <InvoiceForm
          onSubmit={handleSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}