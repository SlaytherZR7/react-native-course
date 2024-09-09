import {Button, Layout, Text} from '@ui-kitten/components';
import {MyIcon} from '../../components/ui/MyIcon';
import {useAuthStore} from '../../store/auth/useAuthStore';

export const HomeScreen = () => {
  const {logout} = useAuthStore();

  return (
    <Layout>
      <Text>HomeScreen</Text>
      <Button
        accessoryRight={<MyIcon name="log-out-outline" />}
        onPress={logout}>
        Logout
      </Button>
    </Layout>
  );
};
