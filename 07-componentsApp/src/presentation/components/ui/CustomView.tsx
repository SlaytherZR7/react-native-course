import {StyleProp, View, ViewStyle} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';

interface Props {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  margin?: boolean;
}

export const CustomView = ({style, children, margin = false}: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        style,
      ]}>
      {children}
    </View>
  );
};
