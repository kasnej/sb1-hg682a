import { useState } from 'react';
import { Message, MessageGroup as MessageGroupType } from '@/types';
import { format } from 'date-fns';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { PaperClipIcon, PaperAirplaneIcon } from '@heroicons/react/24/outline';

interface MessageGroupProps {
  group: MessageGroupType;
  messages: Message[];
  onSendMessage: (content: string) => void;
}

export function MessageGroup({ group, messages, onSendMessage }: MessageGroupProps) {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <>
      {/* Header */}
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">{group.name}</h2>
        <p className="text-sm text-gray-500">{group.description}</p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div key={message.id} className="flex items-start space-x-3">
            <div className="flex-shrink-0">
              <div className="w-8 h-8 rounded-full bg-gray-200" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">User Name</span>
                <span className="text-sm text-gray-500">
                  {format(new Date(message.createdAt), 'HH:mm')}
                </span>
              </div>
              <p className="text-gray-900">{message.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input */}
      <form onSubmit={handleSubmit} className="p-4 border-t">
        <div className="flex items-center space-x-2">
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="text-gray-500"
          >
            <PaperClipIcon className="h-5 w-5" />
          </Button>
          <Input
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-1"
          />
          <Button type="submit" disabled={!newMessage.trim()}>
            <PaperAirplaneIcon className="h-5 w-5" />
          </Button>
        </div>
      </form>
    </>
  );
}