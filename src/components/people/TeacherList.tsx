import { Teacher } from '@/types';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { Table } from '@/components/ui/Table';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

const columnHelper = createColumnHelper<Teacher>();

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

interface TeacherListProps {
  teachers: Teacher[];
}

export function TeacherList({ teachers }: TeacherListProps) {
  const table = useReactTable({
    data: teachers,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}