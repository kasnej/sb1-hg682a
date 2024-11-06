import { Class } from '@/types';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { Table } from '@/components/ui/Table';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

const columnHelper = createColumnHelper<Class>();

const columns = [
  columnHelper.accessor('classroom', {
    header: 'Classroom',
  }),
  columnHelper.accessor('startDate', {
    header: 'Start Date',
    cell: (info) => format(new Date(info.getValue()), 'dd/MM/yyyy'),
  }),
  columnHelper.accessor('endDate', {
    header: 'End Date',
    cell: (info) => format(new Date(info.getValue()), 'dd/MM/yyyy'),
  }),
  columnHelper.accessor('recurringSchedule', {
    header: 'Schedule',
    cell: (info) => {
      const schedule = info.getValue();
      return `${schedule.day} ${schedule.startTime}-${schedule.endTime}`;
    },
  }),
  columnHelper.accessor('paymentFees', {
    header: 'Fees',
    cell: (info) => `€${info.getValue()}`,
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        info.getValue() === 'active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
      }`}>
        {info.getValue()}
      </span>
    ),
  }),
  columnHelper.display({
    id: 'actions',
    header: 'Actions',
    cell: () => (
      <div className="space-x-2">
        <Button variant="outline" size="sm">View</Button>
        <Button variant="outline" size="sm">Edit</Button>
      </div>
    ),
  }),
];

interface ClassListProps {
  classes: Class[];
}

export function ClassList({ classes }: ClassListProps) {
  const table = useReactTable({
    data: classes,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}