import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  name: string;
  size?: number;
  color?: string;
}

export const IonIcon = ({name, color = 'black', size = 30}: Props) => {
  return <Icon name={name} size={size} color={color} />;
};
