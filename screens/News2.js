import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import NewsCard from "../components/NewsCard";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color } from "../GlobalStyles";

const News2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.news}>
      <View style={[styles.scrollnews, styles.newsListLayout]}>
        <View style={[styles.newsList, styles.newsListLayout]}>
          <Pressable
            style={[styles.news1, styles.newsLayout]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news1.png")}
            />
          </Pressable>
          <Image
            style={[styles.news1Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/news11.png")}
          />
          <Pressable
            style={[styles.news2, styles.news2Layout]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news2.png")}
            />
          </Pressable>
          <Image
            style={[styles.news2Icon, styles.news2Layout]}
            contentFit="cover"
            source={require("../assets/news21.png")}
          />
          <Pressable
            style={[styles.news3, styles.newsPosition]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news3.png")}
            />
          </Pressable>
          <Pressable
            style={[styles.news4, styles.news4Layout]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news4.png")}
            />
          </Pressable>
          <Image
            style={[styles.news4Icon, styles.news4Layout]}
            contentFit="cover"
            source={require("../assets/news41.png")}
          />
          <Pressable
            style={[styles.news5, styles.newsPosition]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news5.png")}
            />
          </Pressable>
          <Image
            style={[styles.news5Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/news51.png")}
          />
          <Pressable
            style={[styles.news6, styles.newsLayout]}
            onPress={() => navigation.navigate("Newsletter2")}
          >
            <Image
              style={styles.icon}
              contentFit="cover"
              source={require("../assets/news6.png")}
            />
          </Pressable>
          <Image
            style={[styles.news6Icon, styles.newsLayout]}
            contentFit="cover"
            source={require("../assets/news61.png")}
          />
        </View>
      </View>
      <NewsCard />
      <Image
        style={styles.navigationBarIcon}
        contentFit="cover"
        source={require("../assets/navigation-bar.png")}
      />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={414}
        themeDarkNotchTrueCallIHeight={44}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  newsListLayout: {
    width: 350,
    position: "absolute",
  },
  newsLayout: {
    width: 165,
    height: 233,
    position: "absolute",
  },
  iconPosition: {
    left: 176,
    width: 165,
    position: "absolute",
  },
  news2Layout: {
    width: 166,
    height: 125,
    position: "absolute",
  },
  newsPosition: {
    top: 378,
    height: 233,
    width: 165,
    position: "absolute",
  },
  news4Layout: {
    width: 167,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  news1: {
    top: 2,
    height: 233,
    left: 3,
  },
  news1Icon: {
    top: 622,
    height: 233,
  },
  news2: {
    height: 125,
    left: 184,
    top: 0,
  },
  news2Icon: {
    height: 125,
    top: 622,
    left: 3,
  },
  news3: {
    left: 3,
  },
  news4: {
    left: 1,
    top: 244,
    height: 125,
  },
  news4Icon: {
    top: 999,
    height: 113,
    left: 0,
  },
  news5: {
    left: 184,
  },
  news5Icon: {
    top: 865,
    height: 251,
  },
  news6: {
    top: 134,
    left: 184,
    height: 233,
  },
  news6Icon: {
    top: 759,
    height: 233,
    left: 3,
  },
  newsList: {
    height: 1116,
    left: 0,
    top: 0,
  },
  scrollnews: {
    top: 138,
    left: 5,
    height: 616,
  },
  navigationBarIcon: {
    top: 750,
    width: 375,
    height: 62,
    left: 0,
    position: "absolute",
  },
  news: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default News2;
