import {StyleProp, View, ViewStyle} from 'react-native';
import {colors} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
}
export const Separator = ({style}: Props) => {
  return (
    <View
      style={[
        {
          alignSelf: 'center',
          backgroundColor: colors.text,
          height: 1,
          marginVertical: 0,
          opacity: 0.2,
          width: '90%',
        },
        style,
      ]}
    />
  );
};
