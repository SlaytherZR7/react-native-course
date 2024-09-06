import {Pressable, Text, View} from 'react-native';
import {globalStyles} from '../../../config/theme/styles';
import {usePermissionStore} from '../../store/permissions/usePermissionStore';

export const PermissionsScreen = () => {
  const {locationStatus, requestLocationPermission} = usePermissionStore();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}>
      <Text>Habilitar Ubicación</Text>
      <Pressable
        style={globalStyles.button}
        onPress={requestLocationPermission}>
        <Text>Habilitar localización</Text>
      </Pressable>
      <Text>Estado actual: {locationStatus}</Text>
    </View>
  );
};
