import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export function AttendanceReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <select className="rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500">
          <option value="">All Classes</option>
        </select>
        <Input type="date" className="w-40" />
        <span>to</span>
        <Input type="date" className="w-40" />
        <Button>Apply Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-2">Attendance Overview</h3>
          <p className="text-sm text-gray-500 mb-4">
            Summary of student attendance across all classes
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Absence Patterns</h3>
          <p className="text-sm text-gray-500 mb-4">
            Analysis of student absence trends and patterns
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Class Attendance</h3>
          <p className="text-sm text-gray-500 mb-4">
            Detailed attendance records by class
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>
      </div>
    </div>
  );
}