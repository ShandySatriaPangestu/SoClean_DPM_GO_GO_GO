import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Image } from "expo-image";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const FormContainer2 = () => {
  return (
    <View style={styles.berita}>
      <View style={[styles.news1, styles.newsLayout]}>
        <View style={[styles.news1, styles.newsLayout]}>
          <View style={[styles.news1, styles.newsLayout]}>
            <View style={[styles.groupChild, styles.groupChildLayout]} />
            <Text style={[styles.republika, styles.republikaTypo]}>
              republika
            </Text>
            <Text style={[styles.pemkotDepokApresiasi, styles.republikaTypo]}>
              Pemkot Depok Apresiasi Pasar Online dan Bank Sampah Sawangan Elok
            </Text>
            <Text style={[styles.melakukanPemilihanSampah, styles.sampahTypo]}>
              melakukan pemilihan sampah juga bisa memberikan rezeki kepada
              orang lain
            </Text>
          </View>
        </View>
        <Image
          style={[
            styles.wakilWaliKotaDepokImamBudIcon,
            styles.groupChildLayout,
          ]}
          contentFit="cover"
          source={require("../assets/wakilwalikotadepokimambudihartonomenghadirikegiatan-220422203025848-1.png")}
        />
      </View>
      <View style={[styles.news2, styles.newsLayout]}>
        <View style={[styles.news1, styles.newsLayout]}>
          <View style={[styles.groupChild, styles.groupChildLayout]} />
          <Text style={[styles.republika, styles.republikaTypo]}>mojok.co</Text>
          <Text style={[styles.pemkotDepokApresiasi, styles.republikaTypo]}>
            Bank Sampah yang Memberikan Kesempatan Kedua pada Sampah
          </Text>
          <Text style={[styles.bankSampahDinilai, styles.sampahTypo]}>
            Bank sampah dinilai jadi salah satu upaya untuk mengurangi beban
            tempat pembuangan akhir sampah yang selalu penuh
          </Text>
        </View>
        <Image
          style={[
            styles.wakilWaliKotaDepokImamBudIcon,
            styles.groupChildLayout,
          ]}
          contentFit="cover"
          source={require("../assets/chechesimobilangkutyangjadiikonresikrahmaayunabilamojok-1.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  newsLayout: {
    height: 138,
    width: 347,
    left: 0,
  },
  groupChildLayout: {
    borderRadius: Border.br_7xs,
    position: "absolute",
  },
  republikaTypo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
    position: "absolute",
  },
  sampahTypo: {
    width: 228,
    color: Color.colorSilver_100,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontWeight: "700",
    left: 8,
    position: "absolute",
  },
  groupChild: {
    backgroundColor: Color.colorWhite,
    borderStyle: "solid",
    borderColor: Color.colorLightgray,
    borderWidth: 1,
    height: 138,
    width: 347,
    left: 0,
    top: 0,
  },
  republika: {
    top: 7,
    fontSize: FontSize.size_5xs,
    width: 40,
    height: 11,
  },
  pemkotDepokApresiasi: {
    top: 24,
    fontSize: FontSize.size_sm,
    width: 223,
    height: 40,
  },
  melakukanPemilihanSampah: {
    top: 86,
    height: 34,
  },
  news1: {
    top: 0,
    height: 138,
    position: "absolute",
  },
  wakilWaliKotaDepokImamBudIcon: {
    top: 29,
    left: 231,
    width: 104,
    height: 80,
  },
  bankSampahDinilai: {
    top: 72,
    height: 55,
  },
  news2: {
    top: 158,
    position: "absolute",
  },
  berita: {
    top: 95,
    height: 296,
    width: 347,
    left: 0,
    position: "absolute",
  },
});

export default FormContainer2;
