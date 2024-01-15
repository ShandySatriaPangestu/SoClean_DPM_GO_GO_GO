import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const LaporSampah2 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.laporSampah2}>
      <View style={[styles.foto, styles.fotoLayout]}>
        <Image
          style={[styles.image10Icon, styles.image10IconPosition]}
          contentFit="cover"
          source={require("../assets/image-10.png")}
        />
        <Text style={[styles.edit, styles.editTypo]}>EDIT</Text>
      </View>
      <View style={styles.tanggalParent}>
        <View style={[styles.tanggal, styles.tanggalPosition]}>
          <Text style={[styles.waktuDanTanggal, styles.deskripsi1Typo]}>
            Waktu dan Tanggal
          </Text>
          <Text style={[styles.edit1, styles.editTypo]}>EDIT</Text>
          <View style={styles.tanggalChild} />
        </View>
        <View style={[styles.volumeSampah, styles.tanggalPosition]}>
          <Text style={[styles.waktuDanTanggal, styles.deskripsi1Typo]}>
            Volume Sampah
          </Text>
          <View style={styles.tanggalChild} />
        </View>
        <View style={styles.platNomor}>
          <Text style={[styles.waktuDanTanggal, styles.deskripsi1Typo]}>
            Nomor Plat
          </Text>
          <View style={styles.tanggalChild} />
        </View>
        <View style={[styles.rute, styles.rutePosition]}>
          <Text style={[styles.waktuDanTanggal, styles.deskripsi1Typo]}>
            Rute
          </Text>
          <View style={styles.tanggalChild} />
        </View>
        <View style={[styles.deskripsi, styles.tanggalPosition]}>
          <Text style={[styles.deskripsi1, styles.deskripsi1Typo]}>
            Deskripsi
          </Text>
          <Text style={[styles.text, styles.editTypo]}>13/100</Text>
          <Image
            style={[styles.deskripsiChild, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/line-4.png")}
          />
        </View>
      </View>
      <View style={styles.karakter}>
        <Image
          style={styles.karakterChild}
          contentFit="cover"
          source={require("../assets/rectangle-41831.png")}
        />
        <Text style={styles.terimakasihAtasKontribusinya}>
          Terimakasih atas kontribusinya!, kami mengapresiasi kerja keras anda
        </Text>
        <Image
          style={styles.geeMe083Icon}
          contentFit="cover"
          source={require("../assets/gee-me-083.png")}
        />
      </View>
      <Pressable
        style={[styles.laporSampah2Child, styles.laporBg]}
        onPress={() => navigation.navigate("LaporSampah4")}
      />
      <Text style={[styles.laporkan, styles.laporTypo]}>Laporkan</Text>
      <View style={[styles.laporSampah2Item, styles.laporBg]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("HomeUser")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/vector8.png")}
        />
      </Pressable>
      <Text style={[styles.lapor, styles.laporTypo]}>Lapor</Text>
      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
        themeDarkNotchTrueCallIBackgroundColor="unset"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  fotoLayout: {
    width: 142,
    position: "absolute",
  },
  image10IconPosition: {
    left: 0,
    top: 0,
  },
  editTypo: {
    textAlign: "left",
    color: Color.colorDimgray_300,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  tanggalPosition: {
    left: "0.58%",
    right: "0.86%",
    width: "98.56%",
    position: "absolute",
  },
  deskripsi1Typo: {
    color: Color.colorBlack,
    fontSize: FontSize.size_mini,
    top: "0%",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  rutePosition: {
    right: "0%",
    position: "absolute",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    width: "100%",
  },
  laporBg: {
    backgroundColor: Color.colorDarkslategray_100,
    position: "absolute",
  },
  laporTypo: {
    color: Color.colorWhite,
    lineHeight: 18,
    letterSpacing: -0.4,
    fontSize: FontSize.size_lg,
    height: "2.22%",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  image10Icon: {
    height: 133,
    width: 142,
    position: "absolute",
  },
  edit: {
    top: "92.76%",
    left: "43.66%",
  },
  foto: {
    top: 163,
    left: 208,
    height: 152,
  },
  waktuDanTanggal: {
    left: "0.29%",
  },
  edit1: {
    top: "61.54%",
    left: "91.81%",
  },
  tanggalChild: {
    height: "1.54%",
    width: "100.23%",
    top: "99.23%",
    right: "-0.12%",
    bottom: "-0.77%",
    left: "-0.12%",
    borderStyle: "solid",
    borderColor: Color.colorLightsteelblue,
    borderTopWidth: 0.8,
    position: "absolute",
  },
  tanggal: {
    top: "18.77%",
    bottom: "66.67%",
    height: "14.57%",
    right: "0.86%",
  },
  volumeSampah: {
    top: "37.54%",
    bottom: "47.9%",
    height: "14.57%",
    right: "0.86%",
  },
  platNomor: {
    right: "1.44%",
    bottom: "85.43%",
    left: "0%",
    top: "0%",
    width: "98.56%",
    height: "14.57%",
    position: "absolute",
  },
  rute: {
    top: "56.3%",
    bottom: "29.13%",
    left: "1.44%",
    width: "98.56%",
    right: "0%",
    height: "14.57%",
  },
  deskripsi1: {
    left: "0.88%",
  },
  text: {
    top: "86.59%",
    left: "92.11%",
  },
  deskripsiChild: {
    height: "0.98%",
    top: "100%",
    bottom: "-0.98%",
    right: "0%",
    position: "absolute",
    left: "0%",
  },
  deskripsi: {
    height: "22.97%",
    top: "77.03%",
    bottom: "0%",
  },
  tanggalParent: {
    height: "43.97%",
    width: "92.53%",
    top: "43.47%",
    right: "2.93%",
    bottom: "12.56%",
    left: "4.53%",
    position: "absolute",
  },
  karakterChild: {
    left: 49,
    width: 114,
    height: 55,
    top: 0,
    position: "absolute",
  },
  terimakasihAtasKontribusinya: {
    height: "28.7%",
    width: "47.85%",
    top: "8.7%",
    left: "43.56%",
    letterSpacing: -0.2,
    lineHeight: 8,
    color: "#111",
    fontWeight: "700",
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_5xs,
    position: "absolute",
  },
  geeMe083Icon: {
    marginTop: -42.5,
    marginLeft: -81.5,
    top: "50%",
    left: "50%",
    width: 36,
    height: 100,
    position: "absolute",
  },
  karakter: {
    top: 174,
    left: 24,
    width: 163,
    height: 115,
    position: "absolute",
  },
  laporSampah2Child: {
    top: 763,
    left: 14,
    borderRadius: Border.br_3xs,
    width: 344,
    height: 44,
  },
  laporkan: {
    width: "21.33%",
    top: "95.57%",
    left: "37.87%",
  },
  laporSampah2Item: {
    borderBottomRightRadius: Border.br_3xs,
    borderBottomLeftRadius: Border.br_3xs,
    width: 375,
    height: 105,
    left: 0,
    top: 0,
  },
  icon: {
    height: "100%",
  },
  vector: {
    left: "4.8%",
    top: "6.4%",
    right: "91.65%",
    bottom: "91.11%",
    width: "3.55%",
    height: "2.49%",
    position: "absolute",
  },
  lapor: {
    width: "14.13%",
    top: "8.5%",
    left: "43.2%",
  },
  laporSampah2: {
    backgroundColor: Color.colorWhite,
    flex: 1,
    height: 812,
    overflow: "hidden",
    width: "100%",
  },
});

export default LaporSampah2;
