import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

export function StudentReports() {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-2">Enrollment Statistics</h3>
          <p className="text-sm text-gray-500 mb-4">
            View enrollment trends and student distribution across classes
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Student Performance</h3>
          <p className="text-sm text-gray-500 mb-4">
            Analyze student progress and academic achievements
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Demographics Report</h3>
          <p className="text-sm text-gray-500 mb-4">
            View student age distribution and other demographics
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>
      </div>
    </div>
  );
}