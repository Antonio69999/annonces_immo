import { StyleSheet } from "react-native";
import SignIn from "./App/Components/SignIn.jsx";

export default function App() {
  return <SignIn></SignIn>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25,
  },
});
