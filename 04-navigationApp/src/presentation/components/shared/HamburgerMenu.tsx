import {useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import {IonIcon} from './IonIcon';
import {globalColors} from '../../theme/theme';

export const HamburgerMenu = () => {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Pressable
          style={{marginLeft: 10}}
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer)}>
          <IonIcon name="menu-outline" size={40} color={globalColors.primary} />
        </Pressable>
      ),
    });
  }, []);

  return <></>;
};
