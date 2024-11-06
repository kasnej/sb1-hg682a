import { useState } from 'react';
import { Tabs } from '@/components/ui/Tabs';
import { StudentReports } from '@/components/reports/StudentReports';
import { FinancialReports } from '@/components/reports/FinancialReports';
import { AttendanceReports } from '@/components/reports/AttendanceReports';
import { ClassReports } from '@/components/reports/ClassReports';

export default function ReportsPage() {
  const [activeTab, setActiveTab] = useState('students');

  const tabs = [
    {
      id: 'students',
      label: 'Student Reports',
      content: <StudentReports />,
    },
    {
      id: 'financial',
      label: 'Financial Reports',
      content: <FinancialReports />,
    },
    {
      id: 'attendance',
      label: 'Attendance Reports',
      content: <AttendanceReports />,
    },
    {
      id: 'classes',
      label: 'Class Reports',
      content: <ClassReports />,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Reports</h2>
      </div>

      <Tabs
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  );
}