export interface InputComponentProps {
  label: string;
  value: string;
  onChange: (text: string) => void;
  secureTextEntry?: boolean;
}
