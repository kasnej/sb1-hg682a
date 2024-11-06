import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';

export function FinancialReports() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-6">
        <Input type="date" className="w-40" />
        <span>to</span>
        <Input type="date" className="w-40" />
        <Button>Apply Filter</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-lg font-medium mb-2">Revenue Summary</h3>
          <p className="text-sm text-gray-500 mb-4">
            Overview of income from tuition and other fees
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Payment Status</h3>
          <p className="text-sm text-gray-500 mb-4">
            Analysis of paid, pending, and overdue payments
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>

        <Card>
          <h3 className="text-lg font-medium mb-2">Financial Forecast</h3>
          <p className="text-sm text-gray-500 mb-4">
            Projected revenue based on current enrollment
          </p>
          <Button variant="outline" className="w-full">Generate Report</Button>
        </Card>
      </div>
    </div>
  );
}