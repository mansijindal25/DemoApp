import { Image, StyleSheet, Platform, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

const PlaceholderImage = require("../../assets/images/adaptive-icon.png");

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        padding: 60,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>
        Hello World!!
        <Text
          style={{
            color: "#fff",
            fontWeight: 500,
          }}
        >
          &nbsp;&nbsp;This is my first screen
        </Text>
      </Text>
      <Image
        source={PlaceholderImage}
        style={{ width: 260, height: 480, borderRadius: 18, marginTop: 40 }}
      ></Image>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
