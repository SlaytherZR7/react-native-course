import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../config/theme/app-theme';

interface Props {
  label: string;
  color?: string;
  doubleSize?: boolean;
  blackText?: boolean;
  onPress: () => void;
}

export const CalculatorBotton = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  blackText = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        backgroundColor: color,
        width: doubleSize ? 140 : 70,
        opacity: pressed ? 0.8 : 1,
      })}>
      <Text
        style={{
          ...styles.buttonText,
          color: !blackText ? colors.textPrimary : 'black',
        }}>
        {label}
      </Text>
    </Pressable>
  );
};
