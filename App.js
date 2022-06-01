import { StackNavigator } from "./src/navigation/StackNavigator";
import { StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <StackNavigator />
    </>
  );
}
