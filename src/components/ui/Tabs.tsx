import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface TabsProps {
  tabs: {
    id: string;
    label: string;
    content: ReactNode;
  }[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function Tabs({ tabs, activeTab, onTabChange }: TabsProps) {
  return (
    <div>
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              )}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>
      <div className="mt-4">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
}