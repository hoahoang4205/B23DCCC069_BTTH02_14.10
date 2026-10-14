export interface ContentComponentProps {
  name: string;
  description: string;
  time: string;
  avatarUrl?: string;
  unread?: number;
  online?: boolean;
  onPress: () => void;
}
