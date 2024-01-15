import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const LoadingUser = () => {
  const navigation = useNavigation();

  return (
    <LinearGradient
      style={styles.loadingUser}
      locations={[0.46, 0.89]}
      colors={["#276561", "#fff"]}
    >
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("ChoiceLogin")}
      >
        <Image
          style={styles.image12Icon}
          contentFit="cover"
          source={require("../assets/image-12.png")}
        />
      </Pressable>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  image12Icon: {
    position: "absolute",
    top: 240,
    left: 100,
    borderRadius: 77,
    width: 197,
    height: 166,
  },
  pressable: {
    flex: 1,
    height: "100%",
    overflow: "hidden",
    backgroundColor: "transparent",
    width: "100%",
  },
  loadingUser: {
    height: 812,
    width: "100%",
  },
});

export default LoadingUser;
