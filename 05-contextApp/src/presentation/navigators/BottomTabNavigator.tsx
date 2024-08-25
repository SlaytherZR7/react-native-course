import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../screens/home/HomeScreen';
import {SettingsScreen} from '../screens/settings/SettingsScreen';
import {ProfileScreen} from '../screens/profile/ProfileScreen';
import {IonIcon} from '../components/IonIcon';

const Tab = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#312e81',
        tabBarInactiveTintColor: '#6b7280',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({color}) => <IonIcon name="home" color={color} />,
        }}
        component={HomeScreen}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarIcon: ({color}) => <IonIcon name="person" color={color} />,
        }}
        component={ProfileScreen}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({color}) => <IonIcon name="settings" color={color} />,
        }}
        component={SettingsScreen}
      />
    </Tab.Navigator>
  );
};
