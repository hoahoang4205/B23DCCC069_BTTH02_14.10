export type Contact = {
  id: string;
  name: string;
  description: string;
  time: string;
  unread: number;
  online: boolean;
  avatarUrl: string;
};

export const UserData: Contact[] = [
  { id: '1', name: 'John Doe', description: 'Tối nay mình đi cà phê nhé?', time: '10:30', unread: 2, online: true, avatarUrl: 'https://i.pravatar.cc/150?img=12' },
  { id: '2', name: 'Jane Smith', description: 'Cảm ơn bạn nhiều nha!', time: '09:15', unread: 0, online: false, avatarUrl: 'https://i.pravatar.cc/150?img=47' },
  { id: '3', name: 'Minh Anh', description: 'Mình đã gửi tài liệu rồi.', time: 'Hôm qua', unread: 1, online: true, avatarUrl: 'https://i.pravatar.cc/150?img=32' },
  { id: '4', name: 'Tuấn Nguyễn', description: 'Ok, hẹn gặp bạn sau.', time: 'T2', unread: 0, online: false, avatarUrl: 'https://i.pravatar.cc/150?img=59' },
];

export const MessageData = [
  { id: '1', sender: 'John Doe', text: 'Chào bạn, dạo này thế nào?', time: '10:25', mine: false },
  { id: '2', sender: 'Bạn', text: 'Mình vẫn ổn, cảm ơn bạn!', time: '10:27', mine: true },
  { id: '3', sender: 'John Doe', text: 'Tối nay mình đi cà phê nhé?', time: '10:30', mine: false },
];

export type AppNotification = {
  id: string;
  title: string;
  description: string;
  time: string;
  read: boolean;
};

export const NotificationData: AppNotification[] = [
  { id: '1', title: 'Tin nhắn mới', description: 'John Doe đã gửi tin nhắn cho bạn.', time: '10:30', read: false },
  { id: '2', title: 'Lời mời kết bạn', description: 'Jane Smith đã gửi lời mời kết bạn.', time: 'Hôm qua', read: false },
  { id: '3', title: 'Tin nhắn mới', description: 'Minh Anh đã gửi tin nhắn cho bạn.', time: 'T2', read: true },
];

export const ContactData = UserData.map(({ id, name, online, avatarUrl }) => ({ id, name, online, avatarUrl }));
