import {Button, Input, Layout, Text} from '@ui-kitten/components';
import {useWindowDimensions} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {MyIcon} from '../../components/ui/MyIcon';
import {StackScreenProps} from '@react-navigation/stack';
import {RootStackParam} from '../../navigation/StackNavigator';

interface Props extends StackScreenProps<RootStackParam, 'RegisterScreen'> {}

export const RegisterScreen = ({navigation}: Props) => {
  const {height} = useWindowDimensions();

  return (
    <Layout style={{flex: 1}}>
      <ScrollView style={{marginHorizontal: 40}}>
        <Layout style={{gap: 20, paddingTop: height * 0.25}}>
          <Layout style={{gap: 8}}>
            <Text category="h1" style={{textAlign: 'center'}}>
              Crear cuenta
            </Text>
            <Text category="p2" style={{textAlign: 'center'}}>
              Por favor, crea una cuenta para continuar
            </Text>
          </Layout>
          {/* Input */}
          <Layout style={{gap: 12}}>
            <Input
              accessoryLeft={<MyIcon name="person-outline" />}
              placeholder="Nombre y apellidos"
              keyboardType="default"
            />
            <Input
              accessoryLeft={<MyIcon name="email-outline" />}
              placeholder="Correo electrónico"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              accessoryLeft={<MyIcon name="lock-outline" />}
              placeholder="Contraseña"
              secureTextEntry
              autoCapitalize="none"
            />
          </Layout>
          {/* Button */}
          <Layout>
            <Button
              onPress={() => {}}
              accessoryRight={<MyIcon name="arrow-forward-outline" white />}>
              Registrase
            </Button>
          </Layout>
          {/* Crear cuenta */}
          <Layout
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text category="p2">¿Ya tienes una cuenta?</Text>
            <Button appearance="ghost" onPress={() => navigation.goBack()}>
              Inicia Sesión
            </Button>
          </Layout>
        </Layout>
      </ScrollView>
    </Layout>
  );
};
