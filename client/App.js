import SignIn from "./App/Components/SignIn.jsx";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    NotoSansRegular: require("./assets/fonts/NotoSans-Regular.ttf"),
    NotoSansBold: require("./assets/fonts/NotoSans-Bold.ttf"),
    NotoSansMedium: require("./assets/fonts/NotoSans-Medium.ttf"),
  });

  return <SignIn></SignIn>;
}
