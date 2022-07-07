import { StyleSheet } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackNavigation from "./navigations/StackNavigation";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import DetailsView from './screens/DetailsView';


export default function App() {

  const BottomTab = createBottomTabNavigator()

  return (
    <>
      <NavigationContainer>
        <BottomTab.Navigator screenOptions={{tabBarShowLabel: false, headerShown: false}}>
          <BottomTab.Screen 
            options={{tabBarIcon: () => <Ionicons name="home-sharp" size={24} color="black" />}} 
            name="StackNavigation" 
            component={StackNavigation}/>
          <BottomTab.Screen 
            options={{tabBarIcon: () => <MaterialIcons name="fastfood" size={24} color="black" />}}
            name="DetialsView" 
            component={DetailsView}/>
        </BottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
