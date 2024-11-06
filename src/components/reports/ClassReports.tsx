import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function ClassReports() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-2">Class Distribution</h3>
          <p className="text-sm text-gray-500 mb-4">
            Overview of student distribution across classes
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Teacher Workload</h3>
          <p className="text-sm text-gray-500 mb-4">
            Analysis of teaching hours and class assignments
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Class Performance</h3>
          <p className="text-sm text-gray-500 mb-4">
            Comparative analysis of class performance metrics
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>
      </div>
    </div>
  );
}