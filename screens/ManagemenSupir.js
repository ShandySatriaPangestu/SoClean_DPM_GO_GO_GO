import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { useNavigation } from "@react-navigation/native";
import { Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const ManagemenSupir = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.managemenSupir}>
      <View style={styles.managemenSupirChild} />
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-18}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("Administrasi")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector13.png")}
        />
      </Pressable>
      <Text style={styles.manajemenSupir}>Manajemen Supir</Text>
      <Image
        style={styles.managemenSupirItem}
        contentFit="cover"
        source={require("../assets/group-11515.png")}
      />
      <View style={styles.framecashList}>
        <View style={[styles.cashlist, styles.cashlistLayout]}>
          <View style={[styles.cashlist, styles.cashlistLayout]}>
            <View style={[styles.cashlist, styles.cashlistLayout]}>
              <View style={[styles.cashin1Child, styles.childBorder]} />
            </View>
          </View>
        </View>
        <View style={[styles.framecashListChild, styles.barcodeLayout]} />
        <Pressable
          style={[styles.home, styles.homePosition]}
          onPress={() => navigation.navigate("HomeAdmin")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.barcode, styles.barcodeLayout]}
          onPress={() => navigation.navigate("AbsensiQR")}
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/barcode.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.account, styles.accountLayout]}
          onPress={() => navigation.navigate("Acount")}
        >
          <Image
            style={styles.iconLayout2}
            contentFit="cover"
            source={require("../assets/account.png")}
          />
        </Pressable>
        <Pressable
          style={[styles.news, styles.homePosition]}
          onPress={() => navigation.navigate("News2")}
        >
          <Image
            style={[styles.icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/news.png")}
          />
        </Pressable>
        <Image
          style={[styles.framecashListItem, styles.accountLayout]}
          contentFit="cover"
          source={require("../assets/rectangle-4143.png")}
        />
        <Image
          style={[styles.administrasiIcon, styles.homePosition]}
          contentFit="cover"
          source={require("../assets/administrasi.png")}
        />
        <Image
          style={styles.cashlistIcon}
          contentFit="cover"
          source={require("../assets/cashlist.png")}
        />
        <Text
          style={[styles.ardiantoRuntuboyBukit, styles.rastoAriArifinTypo]}
        >{`Ardianto Runtuboy

Bukit Barisan,Jl bangau
22-04-1977
Laki-laki
08776326323`}</Text>
        <Image
          style={[styles.framecashListInner, styles.framecashLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-142.png")}
        />
        <Text style={[styles.hubungi, styles.hubungiTypo]}>Hubungi</Text>
        <Image
          style={[styles.icon5, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Text
          style={[styles.rastoAriArifin, styles.rastoAriArifinTypo]}
        >{`Rasto ari

Arifin alam,Jl durian
01-11-1979
Laki-laki
08983645982`}</Text>
        <Text
          style={[styles.ariefWicaksonoJ, styles.rastoAriArifinTypo]}
        >{`Arief Wicaksono J.

Soekarno Hatta ,Jl Kakap
11-10-1988
Laki-laki
08988934757`}</Text>
        <Text style={[styles.hubungi1, styles.hubungiTypo]}>Hubungi</Text>
        <Text style={[styles.hubungi2, styles.hubungiTypo]}>Hubungi</Text>
        <Image
          style={[styles.icon6, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.icon7, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/icon.png")}
        />
        <Image
          style={[styles.productIcons, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/product-icons.png")}
        />
        <Image
          style={[styles.productIcons1, styles.productLayout]}
          contentFit="cover"
          source={require("../assets/product-icons.png")}
        />
        <Image
          style={[styles.ellipseIcon, styles.framecashLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-142.png")}
        />
        <Image
          style={[styles.framecashListChild1, styles.framecashLayout]}
          contentFit="cover"
          source={require("../assets/ellipse-142.png")}
        />
      </View>
      <View style={styles.google}>
        <View style={[styles.googleChild, styles.childBorder]} />
        <Text style={styles.pencarian}>Pencarian</Text>
        <Image
          style={[styles.vectorIcon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector14.png")}
        />
      </View>
      <Image
        style={[styles.productIcons2, styles.productLayout]}
        contentFit="cover"
        source={require("../assets/product-icons.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout1: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cashlistLayout: {
    height: 121,
    left: 0,
    top: 0,
    width: 362,
  },
  childBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  barcodeLayout: {
    height: 50,
    position: "absolute",
  },
  homePosition: {
    height: "4.96%",
    bottom: "-3.64%",
    top: "98.68%",
    position: "absolute",
  },
  accountLayout: {
    width: 30,
    position: "absolute",
  },
  rastoAriArifinTypo: {
    textAlign: "justify",
    lineHeight: 12,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    left: 12,
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  framecashLayout: {
    height: 60,
    width: 60,
    position: "absolute",
  },
  hubungiTypo: {
    height: 12,
    width: 107,
    left: 146,
    color: Color.colorBlack,
    lineHeight: 12,
    letterSpacing: -0.2,
    fontSize: FontSize.size_xs,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    position: "absolute",
  },
  iconLayout: {
    left: "44.2%",
    right: "47.79%",
    width: "8.01%",
    height: "4.63%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  productLayout: {
    height: 29,
    width: 28,
    borderRadius: Border.br_61xl,
    left: "50%",
    top: "50%",
    position: "absolute",
    overflow: "hidden",
  },
  managemenSupirChild: {
    top: -123,
    left: -1,
    backgroundColor: Color.colorDarkslategray_100,
    width: 377,
    height: 227,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "5.07%",
    top: "6.24%",
    right: "91.39%",
    bottom: "91.33%",
    width: "3.55%",
    height: "2.43%",
    position: "absolute",
  },
  manajemenSupir: {
    left: 109,
    fontSize: FontSize.size_lg,
    color: Color.colorWhite,
    textAlign: "center",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    top: 72,
    position: "absolute",
  },
  managemenSupirItem: {
    top: 364,
    left: 324,
    width: 12,
    height: 10,
    position: "absolute",
  },
  cashin1Child: {
    borderColor: Color.colorDimgray_100,
    height: 121,
    left: 0,
    top: 0,
    width: 362,
  },
  cashlist: {
    position: "absolute",
  },
  framecashListChild: {
    left: -7,
    width: 375,
    top: 586,
    backgroundColor: Color.colorWhite,
    height: 50,
  },
  home: {
    left: "6.91%",
    right: "84.81%",
    width: "8.29%",
    height: "4.96%",
    bottom: "-3.64%",
    top: "98.68%",
  },
  iconLayout2: {
    height: "100%",
    width: "100%",
  },
  barcode: {
    left: 158,
    top: 574,
    width: 50,
  },
  account: {
    left: 311,
    top: 597,
    height: 30,
  },
  news: {
    left: "26.52%",
    right: "65.19%",
    width: "8.29%",
    height: "4.96%",
    bottom: "-3.64%",
    top: "98.68%",
  },
  framecashListItem: {
    left: 236,
    height: 6,
    top: 586,
  },
  administrasiIcon: {
    width: "6.63%",
    right: "27.07%",
    left: "66.3%",
    height: "4.96%",
    bottom: "-3.64%",
    top: "98.68%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  cashlistIcon: {
    top: 149,
    left: -13,
    width: 378,
    height: 628,
    position: "absolute",
  },
  ardiantoRuntuboyBukit: {
    top: 8,
    width: 121,
    height: 93,
  },
  framecashListInner: {
    top: 12,
    left: 261,
    width: 60,
  },
  hubungi: {
    top: 72,
    height: 12,
    width: 107,
    left: 146,
  },
  icon5: {
    top: "14.55%",
    bottom: "80.83%",
  },
  rastoAriArifin: {
    top: 164,
  },
  ariefWicaksonoJ: {
    top: 330,
  },
  hubungi1: {
    top: 214,
  },
  hubungi2: {
    top: 376,
  },
  icon6: {
    top: "38.02%",
    bottom: "57.36%",
  },
  icon7: {
    top: "64.79%",
    bottom: "30.58%",
  },
  productIcons: {
    marginTop: -72.5,
    marginLeft: 33,
    height: 29,
    width: 28,
    borderRadius: Border.br_61xl,
    left: "50%",
    top: "50%",
  },
  productIcons1: {
    marginTop: 89.5,
    marginLeft: 33,
    height: 29,
    width: 28,
    borderRadius: Border.br_61xl,
    left: "50%",
    top: "50%",
  },
  ellipseIcon: {
    top: 160,
    left: 261,
    width: 60,
  },
  framecashListChild1: {
    top: 326,
    left: 260,
  },
  framecashList: {
    top: 174,
    left: 7,
    height: 605,
    width: 362,
    position: "absolute",
  },
  googleChild: {
    top: "0%",
    right: "0%",
    bottom: "0%",
    left: "0%",
    borderColor: Color.colorBlack,
    height: "100%",
    width: "100%",
  },
  pencarian: {
    height: "54.23%",
    width: "19.3%",
    top: "11.15%",
    left: "11.7%",
    fontSize: FontSize.size_mini,
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  vectorIcon: {
    height: "56.15%",
    width: "4.39%",
    top: "18.85%",
    right: "91.81%",
    bottom: "25%",
    left: "3.8%",
    position: "absolute",
  },
  google: {
    height: "3.2%",
    width: "91.2%",
    top: "13.68%",
    right: "4.53%",
    bottom: "83.12%",
    left: "4.27%",
    position: "absolute",
  },
  productIcons2: {
    marginTop: -145,
    marginLeft: 33.5,
  },
  managemenSupir: {
    backgroundColor: Color.colorGray_400,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default ManagemenSupir;
