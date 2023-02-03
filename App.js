import HomePage from "./page/HomePage";
import Kind from "./page/Kind";
import Description from "./page/Description";
import SecondPage from "./page/SecondPage";
import ThirdPage from "./page/ThirdPage";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomePage}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Kind"
          component={Kind}
          options={{ title: "Back" }}
        />
        <Stack.Screen
          name="Description"
          component={Description}
          options={{ title: "Back" }}
        />
        <Stack.Screen name="Second" component={SecondPage} />
        <Stack.Screen
          name="Third"
          component={ThirdPage}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
