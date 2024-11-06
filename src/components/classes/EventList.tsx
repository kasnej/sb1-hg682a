import { Event } from '@/types';
import { useReactTable, createColumnHelper, getCoreRowModel } from '@tanstack/react-table';
import { Table } from '@/components/ui/Table';
import { format } from 'date-fns';
import { Button } from '../ui/Button';

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor('name', {
    header: 'Event Name',
  }),
  columnHelper.accessor('location', {
    header: 'Location',
  }),
  columnHelper.accessor('startDate', {
    header: 'Date',
    cell: (info) => format(new Date(info.getValue()), 'dd/MM/yyyy'),
  }),
  columnHelper.accessor(row => `${row.startTime}-${row.endTime}`, {
    id: 'time',
    header: 'Time',
  }),
  columnHelper.accessor('eventType', {
    header: 'Type',
  }),
  columnHelper.accessor('status', {
    header: 'Status',
    cell: (info) => (
      <span className={`px-2 py-1 rounded-full text-xs ${
        info.getValue() === 'scheduled' ? 'bg-blue-100 text-blue-800' :
        info.getValue() === 'completed' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
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

interface EventListProps {
  events: Event[];
}

export function EventList({ events }: EventListProps) {
  const table = useReactTable({
    data: events,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return <Table table={table} />;
}