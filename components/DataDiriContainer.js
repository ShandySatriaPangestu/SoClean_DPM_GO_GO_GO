import * as React from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const DataDiriContainer = ({
  emailAddress,
  phoneNumber,
  dateOfBirth,
  userName,
}) => {
  return (
    <View style={styles.dataDiri}>
      <View style={styles.gender}>
        <Text style={[styles.gender1, styles.gender1Typo]}>Gender</Text>
        <Text style={[styles.female, styles.maleTypo]}>female</Text>
        <View style={[styles.genderButton1, styles.teleponChildPosition]} />
        <Text style={[styles.male, styles.maleTypo]}>male</Text>
      </View>
      <View style={styles.email}>
        <Text style={[styles.emailAddress, styles.gender1Typo]}>
          Email Address
        </Text>
        <Text style={[styles.edit, styles.editTypo]}>EDIT</Text>
        <Text style={[styles.roby3746admincom, styles.textTypo]}>
          {emailAddress}
        </Text>
        <View style={[styles.emailChild, styles.childBorder]} />
      </View>
      <View style={[styles.telepon, styles.teleponPosition]}>
        <Text style={[styles.gender1, styles.gender1Typo]}>Phone Number</Text>
        <Text style={[styles.edit1, styles.editTypo]}>EDIT</Text>
        <Text style={[styles.text, styles.textTypo]}>{phoneNumber}</Text>
        <Text style={[styles.text1, styles.textTypo]}>+62</Text>
        <Image
          style={[styles.teleponChild, styles.teleponLayout]}
          contentFit="cover"
          source={require("../assets/line-6.png")}
        />
        <View style={[styles.teleponItem, styles.childBorder]} />
        <Image
          style={[styles.teleponInner, styles.teleponLayout]}
          contentFit="cover"
          source={require("../assets/polygon-3.png")}
        />
        <Image
          style={[styles.flagIndonesia1f1ee1f1e91Icon, styles.teleponLayout]}
          contentFit="cover"
          source={require("../assets/flagindonesia-1f1ee1f1e9-1.png")}
        />
      </View>
      <View style={[styles.ulangTaun, styles.teleponPosition]}>
        <Text style={[styles.emailAddress, styles.gender1Typo]}>Birthday</Text>
        <Text style={[styles.edit, styles.editTypo]}>EDIT</Text>
        <Text style={[styles.roby3746admincom, styles.textTypo]}>
          {dateOfBirth}
        </Text>
        <View style={[styles.emailChild, styles.childBorder]} />
      </View>
      <View style={styles.nama}>
        <Text style={[styles.gender1, styles.gender1Typo]}>Name</Text>
        <Text style={[styles.roby, styles.textTypo]}>{userName}</Text>
        <View style={[styles.namaChild, styles.childBorder]} />
        <Text style={[styles.edit3, styles.editTypo]}>EDIT</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gender1Typo: {
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    top: "0%",
    position: "absolute",
  },
  maleTypo: {
    fontSize: FontSize.size_smi,
    top: "61.82%",
    textAlign: "left",
    color: Color.colorBlack,
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  teleponChildPosition: {
    bottom: "0%",
    right: "0%",
  },
  editTypo: {
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_5xs,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    position: "absolute",
  },
  textTypo: {
    color: Color.colorGray_500,
    textAlign: "left",
    fontFamily: FontFamily.nunito,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  childBorder: {
    borderTopWidth: 0.8,
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
    position: "absolute",
  },
  teleponPosition: {
    right: "0.29%",
    height: "12.53%",
    position: "absolute",
  },
  teleponLayout: {
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    position: "absolute",
  },
  gender1: {
    left: "0%",
  },
  female: {
    left: "12.57%",
  },
  genderButton1: {
    height: "38.18%",
    width: "40.72%",
    left: "59.28%",
    borderRadius: Border.br_7xs,
    backgroundColor: Color.colorCadetblue,
    top: "61.82%",
    right: "0%",
    position: "absolute",
  },
  male: {
    left: "70.66%",
  },
  gender: {
    height: "13.25%",
    width: "48.69%",
    top: "22.41%",
    right: "51.31%",
    bottom: "64.34%",
    left: "0%",
    position: "absolute",
  },
  emailAddress: {
    left: "0.29%",
  },
  edit: {
    left: "91.81%",
    top: "61.54%",
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_5xs,
  },
  roby3746admincom: {
    top: "59.62%",
    left: "0%",
  },
  emailChild: {
    width: "100.23%",
    top: "99.23%",
    right: "-0.12%",
    bottom: "-0.77%",
    left: "-0.12%",
    height: "1.54%",
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
  },
  email: {
    top: "87.47%",
    left: "0.29%",
    width: "99.71%",
    height: "12.53%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
  },
  edit1: {
    left: "91.79%",
    top: "61.54%",
    color: Color.colorDimgray_300,
    fontSize: FontSize.size_5xs,
  },
  text: {
    left: "21.99%",
    top: "57.69%",
  },
  text1: {
    left: "8.21%",
    top: "57.69%",
  },
  teleponChild: {
    width: "78.01%",
    top: "96.15%",
    height: "3.85%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
    left: "21.99%",
    bottom: "0%",
    right: "0%",
  },
  teleponItem: {
    width: "18.12%",
    top: "95.38%",
    right: "81.99%",
    bottom: "3.08%",
    left: "-0.12%",
    height: "1.54%",
    borderColor: Color.colorLightsteelblue,
    borderStyle: "solid",
  },
  teleponInner: {
    width: "0.88%",
    top: "75%",
    right: "82.4%",
    bottom: "21.15%",
    left: "16.72%",
    height: "3.85%",
    maxHeight: "100%",
    overflow: "hidden",
    maxWidth: "100%",
  },
  flagIndonesia1f1ee1f1e91Icon: {
    height: "38.46%",
    width: "5.87%",
    right: "93.26%",
    bottom: "3.85%",
    left: "0.88%",
    top: "57.69%",
  },
  telepon: {
    width: "99.42%",
    top: "67.23%",
    bottom: "20.24%",
    left: "0.29%",
  },
  ulangTaun: {
    top: "46.99%",
    bottom: "40.48%",
    width: "99.71%",
    left: "0%",
  },
  roby: {
    top: "53.7%",
    left: "0%",
  },
  namaChild: {
    height: "1.48%",
    width: "100.34%",
    top: "99.26%",
    right: "-0.17%",
    bottom: "-0.74%",
    left: "-0.17%",
  },
  edit3: {
    top: "62.96%",
    left: "87.71%",
  },
  nama: {
    height: "13.01%",
    width: "68.8%",
    right: "31.2%",
    bottom: "86.99%",
    top: "0%",
    left: "0%",
    position: "absolute",
  },
  dataDiri: {
    height: "51.11%",
    width: "91.47%",
    top: "17.61%",
    right: "4%",
    bottom: "31.28%",
    left: "4.53%",
    position: "absolute",
  },
});

export default DataDiriContainer;
