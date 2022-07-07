import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetailsView from "../screens/DetailsView";
import SelectionView from "../screens/SelectionView";


export default function StackNavigation() {

  const stackNavigation = createNativeStackNavigator();

  return (
    <>
        <stackNavigation.Navigator>
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="SelectionView"
                component={SelectionView}
            />
            <stackNavigation.Screen
                options={{headerShown: false}}
                name="DetailsView"
                component={DetailsView}
            />
        </stackNavigation.Navigator>
    </>
  );
};