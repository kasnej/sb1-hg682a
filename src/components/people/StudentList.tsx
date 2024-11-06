import { Student } from '@/types';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { Table } from '@/components/ui/Table';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

const columnHelper = createColumnHelper<Student>();

const columns = [
  columnHelper.accessor('firstName', {
    header: 'Name',
    cell: (info) => `${info.row.original.firstName} ${info.row.original.lastName}`,
  }),
  columnHelper.accessor('phone', {
    header: 'Phone',
  }),
  columnHelper.accessor('email', {
    header: 'Email',
  }),
  columnHelper.accessor('registrationDate', {
    header: 'Registration Date',
    cell: (info) => format(new Date(info.getValue()), 'dd/MM/yyyy'),
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

interface StudentListProps {
  students: Student[];
}

export function StudentList({ students }: StudentListProps) {
  const table = useReactTable({
    data: students,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}