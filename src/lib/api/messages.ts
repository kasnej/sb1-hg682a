import { supabase } from '@/lib/supabase';
import { Message, MessageGroup } from '@/types';

export async function getMessageGroups() {
  const { data, error } = await supabase
    .from('message_groups')
    .select('*')
    .order('lastMessageAt', { ascending: false });

  if (error) throw error;
  return data as MessageGroup[];
}

export async function getMessages(groupId: string) {
  const { data, error } = await supabase
    .from('messages')
    .select(`
      *,
      sender:users(id, firstName, lastName, photo)
    `)
    .eq('groupId', groupId)
    .order('createdAt', { ascending: true });

  if (error) throw error;
  return data as Message[];
}

export async function createMessageGroup(group: Omit<MessageGroup, 'id' | 'createdAt' | 'lastMessageAt'>) {
  const { data, error } = await supabase
    .from('message_groups')
    .insert([{
      ...group,
      createdAt: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function sendMessage(message: Omit<Message, 'id' | 'createdAt'>) {
  const { data, error } = await supabase
    .from('messages')
    .insert([{
      ...message,
      createdAt: new Date().toISOString(),
    }])
    .select()
    .single();

  if (error) throw error;

  // Update the group's lastMessageAt
  await supabase
    .from('message_groups')
    .update({ lastMessageAt: new Date().toISOString() })
    .eq('id', message.groupId);

  return data;
}