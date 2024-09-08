import {useState} from 'react';
import {Alert, useWindowDimensions} from 'react-native';
import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';
import {useAuthStore} from '../../store/auth/useAuthStore';

interface Props extends StackScreenProps<RootStackParam, 'LoginScreen'> {}

export const LoginScreen = ({navigation}: Props) => {
  const {login} = useAuthStore();
  const [isPosting, setIsPosting] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const {height} = useWindowDimensions();

  const onLogin = async () => {
    if (form.email.length === 0 || form.password.length === 0) {
      return;
    }
    setIsPosting(true);
    const wasSuccess = await login(form.email, form.password);
    setIsPosting(false);
    if (wasSuccess) return;

    Alert.alert('Error', 'Usuario o contraseña incorrectos');
  };

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{gap: 20, paddingTop: height * 0.25}}>
          <Layout style={{gap: 8}}>
            <Text category="h1" style={{textAlign: 'center'}}>
              Ingresar
            </Text>
            <Text category="p2" style={{textAlign: 'center'}}>
              Por favor, ingrese para continuar
            </Text>
          </Layout>
          {/* Input */}
          <Layout style={{gap: 12}}>
            <Input
              accessoryLeft={<MyIcon name="email-outline" />}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
              value={form.email}
              onChangeText={email => setForm({...form, email})}
            />
            <Input
              accessoryLeft={<MyIcon name="lock-outline" />}
              placeholder="Contraseña"
              secureTextEntry
              autoCapitalize="none"
              value={form.password}
              onChangeText={password => setForm({...form, password})}
            />
          </Layout>
          {/* Button */}
          <Layout>
            <Button
              disabled={isPosting}
              onPress={onLogin}
              accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
              Ingresar
            </Button>
          </Layout>
          {/* Crear cuenta */}
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text category="p2">¿No tienes una cuenta?</Text>
            <Button
              appearance="ghost"
              onPress={() => navigation.navigate('RegisterScreen')}>
              Crear cuenta
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
