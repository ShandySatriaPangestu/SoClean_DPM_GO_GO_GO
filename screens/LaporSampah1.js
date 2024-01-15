import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const LaporSampah1 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporSampah1}>
      <Image
        style={[styles.image9Icon, styles.propertyPosition1]}
        contentFit="cover"
        source={require("../assets/image-9.png")}
      />
      <View style={[styles.property, styles.propertyPosition1]}>
        <View style={[styles.propertyChild, styles.propertyPosition]} />
        <View style={[styles.propertyItem, styles.propertyPosition]} />
      </View>
      <Image
        style={styles.laporSampah1Child}
        contentFit="cover"
        source={require("../assets/ellipse-1421.png")}
      />
      <Pressable
        style={styles.wrapper}
        onPress={() => navigation.navigate("LaporSampah2")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/ellipse-143.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  propertyPosition1: {
    width: 375,
    left: -1,
    position: "absolute",
  },
  propertyPosition: {
    backgroundColor: Color.colorBlack,
    left: 0,
    width: 375,
    position: "absolute",
  },
  image9Icon: {
    top: 94,
    height: 566,
  },
  propertyChild: {
    height: 94,
    top: 0,
  },
  propertyItem: {
    top: 643,
    height: 169,
  },
  property: {
    top: 0,
    height: 812,
  },
  laporSampah1Child: {
    top: 678,
    left: 137,
    width: 100,
    height: 100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 147,
    top: 688,
    width: 80,
    height: 80,
    position: "absolute",
  },
  laporSampah1: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    overflow: "hidden",
    height: 812,
    width: "100%",
  },
});

export default LaporSampah1;
