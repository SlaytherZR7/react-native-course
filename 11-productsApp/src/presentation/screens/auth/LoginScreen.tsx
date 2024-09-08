import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export const LoginScreen = () => {
  const {height} = useWindowDimensions();

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
          <Layout style={{gap: 10}}>
            <Input
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder="Contraseña"
              secureTextEntry
              autoCapitalize="none"
            />
          </Layout>
          {/* Button */}
          <Layout>
            <Button onPress={() => {}}>Ingresar</Button>
          </Layout>
          {/* Crear cuenta */}
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text category="p2">¿No tienes una cuenta?</Text>
            <Button appearance="ghost" onPress={() => {}}>
              Crear cuenta
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
