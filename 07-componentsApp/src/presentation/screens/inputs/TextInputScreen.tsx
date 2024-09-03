import {useState} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
} from 'react-native';
import {Card, CustomView, Title} from '../../components';
import {globalStyles} from '../../../config/theme/theme';
import {ScrollView} from 'react-native-gesture-handler';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text inputs" safe />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize="words"
              placeholderTextColor={'#999'}
              cursorColor={'#000'}
              autoCorrect={false}
              onChangeText={value => setForm({...form, name: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Correo electronico"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              placeholderTextColor={'#999'}
              cursorColor={'#000'}
              onChangeText={value => setForm({...form, email: value})}
            />
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              placeholderTextColor={'#999'}
              cursorColor={'#000'}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
          <Card>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
            <Text style={{color: 'black'}}>
              {JSON.stringify(form, null, 2)}
            </Text>
          </Card>
          <View style={{height: 20}} />
          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Telefono"
              placeholderTextColor={'#999'}
              cursorColor={'#000'}
              keyboardType="phone-pad"
              onChangeText={value => setForm({...form, phone: value})}
            />
          </Card>
        </CustomView>
        <View style={{height: 20}} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
