import { Role } from '@/types';
import Link from 'next/link';
import {
  CalendarIcon,
  UserGroupIcon,
  AcademicCapIcon,
  CurrencyDollarIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

interface NavItem {
  name: string;
  href: string;
  icon: typeof CalendarIcon;
  roles: Role[];
}

const navigation: NavItem[] = [
  { name: 'Dashboard', href: '/dashboard', icon: ChartBarIcon, roles: ['administration', 'teacher', 'student'] },
  { name: 'Calendar', href: '/dashboard/calendar', icon: CalendarIcon, roles: ['administration', 'teacher', 'student'] },
  { name: 'People', href: '/dashboard/people', icon: UserGroupIcon, roles: ['administration'] },
  { name: 'Classes & Events', href: '/dashboard/classes', icon: AcademicCapIcon, roles: ['administration', 'teacher'] },
  { name: 'Payments', href: '/dashboard/payments', icon: CurrencyDollarIcon, roles: ['administration'] },
  { name: 'Messages', href: '/dashboard/messages', icon: ChatBubbleLeftRightIcon, roles: ['administration', 'teacher', 'student'] },
  { name: 'Reports', href: '/dashboard/reports', icon: ChartBarIcon, roles: ['administration'] },
  { name: 'School Management', href: '/dashboard/settings', icon: Cog6ToothIcon, roles: ['administration'] },
];

interface DashboardNavProps {
  userRole: Role;
}

export function DashboardNav({ userRole }: DashboardNavProps) {
  const filteredNavigation = navigation.filter(item => item.roles.includes(userRole));

  return (
    <nav className="space-y-1">
      {filteredNavigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
        >
          <item.icon
            className="mr-3 flex-shrink-0 h-6 w-6 text-gray-400 group-hover:text-gray-500"
            aria-hidden="true"
          />
          {item.name}
        </Link>
      ))}
    </nav>
  );
}