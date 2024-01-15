import * as React from "react";
import { Text, TextInput, StyleSheet, View, Pressable } from "react-native";
import ThemeDarkNotchTrueCallI from "../components/ThemeDarkNotchTrueCallI";
import { FontFamily, FontSize, Color, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();

  const [name, setName] = React.useState("Rehan");
  const [birthday, setBirthday] = React.useState("18-08-2050");
  const [email, setEmail] = React.useState("Rehan@angkutansampah.com");
  const [phoneNumber, setPhoneNumber] = React.useState("813-4567-7457");

  const handleEditPress = () => {
    // Handle edit button press
  };

  const handleBackPress = () => {
    // Handle back button press
    navigation.goBack();
  };

  const handleSavePress = () => {
    // Handle save button press
    // Kembali ke halaman sebelumnya setelah menyimpan
    handleBackPress();
  };

  return (
    <View style={styles.profile}>
      <FormField
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        onEditPress={handleEditPress}
      />
      <FormField
        label="Birthday"
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
        onEditPress={handleEditPress}
      />
      <FormField
        label="Email Address"
        value={email}
        onChangeText={(text) => setEmail(text)}
        onEditPress={handleEditPress}
      />
      <FormField
        label="Phone Number"
        value={phoneNumber}
        onChangeText={(text) => setPhoneNumber(text)}
        onEditPress={handleEditPress}
      />

      <View style={styles.buttonContainer}>
        <Pressable style={styles.backButton} onPress={handleBackPress}>
          <Text style={styles.buttonText}>Back</Text>
        </Pressable>
        <Pressable style={styles.saveButton} onPress={handleSavePress}>
          <Text style={styles.buttonText}>Save</Text>
        </Pressable>
      </View>

      <ThemeDarkNotchTrueCallI
        themeDarkNotchTrueCallIPosition="absolute"
        themeDarkNotchTrueCallIWidth={410}
        themeDarkNotchTrueCallIHeight={42}
        themeDarkNotchTrueCallITop={0}
        themeDarkNotchTrueCallILeft={-19}
      />
    </View>
  );
};


const FormField = ({ label, value, onChangeText, onEditPress }) => {
  return (
    <View style={styles.fieldContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[styles.input, { color: 'black' }]} // Set color to black
        value={value}
        onChangeText={onChangeText}
        keyboardAppearance="dark"
      />
      <Pressable style={styles.editButton} onPress={onEditPress}>
        <Text style={styles.editText}>EDIT</Text>
      </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  profile: {
    flex: 1,
    height: "100%",
    backgroundColor: Color.colorWhite,
    padding: 40,
  },
  fieldContainer: {
    marginVertical: 90,
    marginBottom: 20, // Add margin-bottom for spacing
  },
  label: {
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_mini,
    color: Color.colorBlack,
  },
  input: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.nunitoRegular,
    fontSize: FontSize.size_mini,
    borderBottomWidth: 1,
    borderColor: Color.colorLightsteelblue,
    paddingVertical: 5,
  },
  editButton: {
    position: "absolute",
    right: 0,
  },
  editText: {
    color: Color.colorDimgray,
    fontSize: FontSize.size_5xs,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  backButton: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  saveButton: {
    backgroundColor: Color.colorBlack,
    borderRadius: Border.br_3xs,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: Color.colorWhite,
    fontSize: FontSize.size_mini,
  },
});


export default Profile;