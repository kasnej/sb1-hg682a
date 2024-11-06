import { DashboardHeader } from '@/components/layout/DashboardHeader';
import { DashboardNav } from '@/components/layout/DashboardNav';

// This is a temporary mock user for development
const mockUser = {
  id: '1',
  email: 'admin@example.com',
  role: 'administration',
  firstName: 'Admin',
  lastName: 'User',
} as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <DashboardHeader user={mockUser} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0">
            <DashboardNav userRole={mockUser.role} />
          </aside>
          
          <main className="flex-1">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}