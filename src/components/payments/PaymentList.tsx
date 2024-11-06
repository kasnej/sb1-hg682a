import { Payment } from '@/types';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { Table } from '@/components/ui/Table';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

const columnHelper = createColumnHelper<Payment>();

interface PaymentListProps {
  payments: Payment[];
  showPayNowButton?: boolean;
  showInvoiceActions?: boolean;
}

export function PaymentList({ payments, showPayNowButton, showInvoiceActions }: PaymentListProps) {
  const columns = [
    columnHelper.accessor('receiptNumber', {
      header: showInvoiceActions ? 'Invoice Number' : 'Receipt Number',
    }),
    columnHelper.accessor('date', {
      header: 'Date',
      cell: (info) => format(new Date(info.getValue()), 'dd/MM/yyyy'),
    }),
    columnHelper.accessor('billTo', {
      header: 'Bill To',
    }),
    columnHelper.accessor('paymentMethod', {
      header: 'Payment Method',
      cell: (info) => info.getValue().replace('_', ' '),
    }),
    columnHelper.accessor('subtotal', {
      header: 'Subtotal',
      cell: (info) => `€${info.getValue()}`,
    }),
    columnHelper.accessor('total', {
      header: 'Total',
      cell: (info) => `€${info.getValue()}`,
    }),
    columnHelper.accessor('status', {
      header: 'Status',
      cell: (info) => (
        <span className={`px-2 py-1 rounded-full text-xs ${
          info.getValue() === 'paid' ? 'bg-green-100 text-green-800' :
          info.getValue() === 'pending' ? 'bg-yellow-100 text-yellow-800' :
          'bg-red-100 text-red-800'
        }`}>
          {info.getValue()}
        </span>
      ),
    }),
    columnHelper.display({
      id: 'actions',
      header: 'Actions',
      cell: (info) => (
        <div className="space-x-2">
          {showPayNowButton && info.row.original.status !== 'paid' && (
            <Button variant="default" size="sm">Pay Now</Button>
          )}
          {showInvoiceActions ? (
            <>
              <Button variant="outline" size="sm">View</Button>
              <Button variant="outline" size="sm">Download</Button>
              {info.row.original.status !== 'paid' && (
                <Button variant="outline" size="sm">Edit</Button>
              )}
            </>
          ) : (
            <>
              <Button variant="outline" size="sm">View</Button>
              <Button variant="outline" size="sm">Download</Button>
            </>
          )}
        </div>
      ),
    }),
  ];

  const table = useReactTable({
    data: payments,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}