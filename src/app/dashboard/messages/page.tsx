import { useState } from 'react';
import { MessageList } from '@/components/messages/MessageList';
import { MessageGroup } from '@/components/messages/MessageGroup';
import { NewGroupForm } from '@/components/messages/NewGroupForm';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Modal } from '@/components/ui/Modal';
import { Message, MessageGroup as MessageGroupType } from '@/types';

// Temporary mock data
const mockGroups = [
  {
    id: '1',
    name: 'Class A Announcements',
    description: 'Official announcements for Class A',
    type: 'class',
    members: ['1', '2', '3'],
    createdAt: new Date('2023-01-01'),
    lastMessageAt: new Date('2023-11-01'),
  },
  {
    id: '2',
    name: 'Teacher Discussion',
    description: 'Private group for teachers',
    type: 'private',
    members: ['1', '2'],
    createdAt: new Date('2023-01-01'),
    lastMessageAt: new Date('2023-11-02'),
  },
] as const;

const mockMessages = [
  {
    id: '1',
    senderId: '1',
    content: 'Hello everyone! Welcome to the new semester.',
    createdAt: new Date('2023-11-01T10:00:00'),
    groupId: '1',
  },
  {
    id: '2',
    senderId: '2',
    content: 'Thank you for the welcome!',
    createdAt: new Date('2023-11-01T10:05:00'),
    groupId: '1',
  },
] as const;

export default function MessagesPage() {
  const [selectedGroup, setSelectedGroup] = useState<string | null>(null);
  const [isNewGroupModalOpen, setIsNewGroupModalOpen] = useState(false);

  const handleCreateGroup = async (data: Partial<MessageGroupType>) => {
    // TODO: Implement group creation
    console.log('Creating group:', data);
    setIsNewGroupModalOpen(false);
  };

  const handleSendMessage = async (content: string) => {
    // TODO: Implement message sending
    console.log('Sending message:', content);
  };

  return (
    <div className="flex h-[calc(100vh-12rem)] bg-white rounded-lg shadow overflow-hidden">
      {/* Groups Sidebar */}
      <div className="w-80 border-r flex flex-col">
        <div className="p-4 border-b">
          <Button
            onClick={() => setIsNewGroupModalOpen(true)}
            className="w-full"
          >
            New Message
          </Button>
        </div>
        <div className="p-4 border-b">
          <Input
            type="search"
            placeholder="Search conversations..."
            className="w-full"
          />
        </div>
        <div className="flex-1 overflow-y-auto">
          {mockGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setSelectedGroup(group.id)}
              className={`w-full p-4 text-left hover:bg-gray-50 ${
                selectedGroup === group.id ? 'bg-gray-50' : ''
              }`}
            >
              <h3 className="font-medium">{group.name}</h3>
              <p className="text-sm text-gray-500">{group.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 flex flex-col">
        {selectedGroup ? (
          <MessageGroup
            group={mockGroups.find((g) => g.id === selectedGroup)!}
            messages={mockMessages.filter((m) => m.groupId === selectedGroup)}
            onSendMessage={handleSendMessage}
          />
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-500">
            Select a conversation to start messaging
          </div>
        )}
      </div>

      <Modal
        isOpen={isNewGroupModalOpen}
        onClose={() => setIsNewGroupModalOpen(false)}
        title="Create New Group"
      >
        <NewGroupForm
          onSubmit={handleCreateGroup}
          onCancel={() => setIsNewGroupModalOpen(false)}
        />
      </Modal>
    </div>
  );
}