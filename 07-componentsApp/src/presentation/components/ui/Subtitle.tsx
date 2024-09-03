import {Text} from 'react-native';
import {colors, globalStyles} from '../../../config/theme/theme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}

export const Subtitle = ({
  text,
  backgroundColor = colors.background,
  safe = false,
}: Props) => {
  const {top} = useSafeAreaInsets();
  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        backgroundColor: backgroundColor,
      }}>
      {text}
    </Text>
  );
};
