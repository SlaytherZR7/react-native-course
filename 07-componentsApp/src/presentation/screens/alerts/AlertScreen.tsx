import {Alert, View} from 'react-native';
import {globalStyles} from '../../../config/theme/theme';
import {Button, CustomView, Title} from '../../components';
import {showPrompt} from '../../../config/theme/adapters/prompt.adapter.';

export const AlertScreen = () => {
  const createTwoButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const createThreeButtonAlert = () => {
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Ask me later',
        onPress: () => console.log('Ask me later pressed'),
      },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ]);
  };

  const onShowPrompt = () => {
    // Código adaptado
    showPrompt({
      title: 'Correo electronico',
      subtitle: 'Enter your email to claim your $1.5B in lottery winnings',
      buttons: [{text: 'OK', onPress: () => console.log('ok')}],
      placeholder: 'placeholder',
    });
    // Código nativo
    // Alert.prompt(
    //   'Correo electronico',
    //   'Enter your email to claim your $1.5B in lottery winnings',
    //   text => console.log('You entered ' + text),
    //   'secure-text',
    //   'default value',
    //   'number-pad',
    // );
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas safe"></Title>
      <View style={{gap: 10, marginTop: 10}}>
        <Button text="Alerta - 2 Botones" onPress={createTwoButtonAlert} />
        <Button text="Alerta - 3 Botones" onPress={createThreeButtonAlert} />
        <Button text="Prompt" onPress={onShowPrompt} />
      </View>
    </CustomView>
  );
};
