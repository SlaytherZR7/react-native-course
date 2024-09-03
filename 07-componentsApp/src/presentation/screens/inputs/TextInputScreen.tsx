import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {Card, CustomView, Title} from '../../components';
import {globalStyles} from '../../../config/theme/theme';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <CustomView margin>
      <Title text="Text inputs" safe />
      <Card>
        <TextInput
          style={globalStyles.input}
          placeholder="Nombre completo"
          autoCapitalize="words"
          autoCorrect={false}
          onChangeText={value => setForm({...form, name: value})}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Correo electronico"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="email-address"
          onChangeText={value => setForm({...form, email: value})}
        />
        <TextInput
          style={globalStyles.input}
          placeholder="Telefono"
          keyboardType="phone-pad"
          onChangeText={value => setForm({...form, phone: value})}
        />
      </Card>
      <View>
        <Card>
          <Text>{JSON.stringify(form, null, 2)}</Text>
        </Card>
      </View>
    </CustomView>
  );
};
