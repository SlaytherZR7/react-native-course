import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {
  Divider,
  Layout,
  TopNavigation,
  TopNavigationAction,
} from '@ui-kitten/components';
import {useNavigation} from '@react-navigation/native';
import {MyIcon} from '../components/ui/MyIcon';

interface Props {
  title: string;
  subtitle?: string;

  rightActionIcon?: string;
  children: React.ReactNode;
  rightAction?: () => void;
}

export const MainLayout = ({
  title,
  subtitle,
  rightActionIcon,
  children,
  rightAction,
}: Props) => {
  const {top} = useSafeAreaInsets();
  const {goBack, canGoBack} = useNavigation();

  const renderBackAction = () => (
    <TopNavigationAction
      icon={<MyIcon name="arrow-back-outline" />}
      onPress={goBack}
    />
  );

  const RenderRightAction = () => {
    if (rightActionIcon === undefined || rightAction === undefined) return null;

    return (
      <TopNavigationAction
        icon={<MyIcon name={rightActionIcon} />}
        onPress={rightAction}
      />
    );
  };

  return (
    <Layout style={{paddingTop: top}}>
      <TopNavigation
        title={title}
        subtitle={subtitle}
        alignment="center"
        accessoryLeft={canGoBack() ? renderBackAction : undefined}
        accessoryRight={() => <RenderRightAction />}
      />
      <Divider />

      <Layout style={{height: '100%'}}>{children}</Layout>
    </Layout>
  );
};
