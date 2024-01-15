const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import LoadingUser from "./screens/LoadingUser";
import ThemeDarkNotchTrueCallI from "./components/ThemeDarkNotchTrueCallI";
import HomeSuperuser from "./screens/HomeSuperuser";
import GPSScreen from "./screens/GPSScreen";
import GPSScreen1 from "./screens/GPSScreen1";
import CustomerService4 from "./screens/CustomerService4";
import CustomerService3 from "./screens/CustomerService3";
import AbsensiQR from "./screens/AbsensiQR";
import AbsensiQR3 from "./screens/AbsensiQR3";
import ManagemenSupir from "./screens/ManagemenSupir";
import LaporanGajiKaryawan from "./screens/LaporanGajiKaryawan";
import Crew from "./screens/Crew";
import Laporan from "./screens/Laporan";
import Administrasi from "./screens/Administrasi";
import LaporanTargetSampah from "./screens/LaporanTargetSampah";
import LaporanTargetSampah1 from "./screens/LaporanTargetSampah1";
import LaporanPengeluaranMinyak from "./screens/LaporanPengeluaranMinyak";
import LaporanAbsensiSupir from "./screens/LaporanAbsensiSupir";
import LaporanKendalaSupir from "./screens/LaporanKendalaSupir";
import LaporanKendalaSupir1 from "./screens/LaporanKendalaSupir1";
import DataMobil from "./screens/DataMobil";
import DataMobil1 from "./screens/DataMobil1";
import LaporanGajiSupir from "./screens/LaporanGajiSupir";
import LaporanGajiSupir1 from "./screens/LaporanGajiSupir1";
import HalamanAwalSuperuser from "./screens/HalamanAwalSuperuser";
import LoginSuperuser from "./screens/LoginSuperuser";
import HalamanAwalAdmin from "./screens/HalamanAwalAdmin";
import LoginAdmin from "./screens/LoginAdmin";
import HalamanAwalUser from "./screens/HalamanAwalUser";
import Register from "./screens/Register";
import Register1 from "./screens/Register1";
import Register2 from "./screens/Register2";
import ChoiceLogin from "./screens/ChoiceLogin";
import LoginUser from "./screens/LoginUser";
import Newsletter from "./screens/Newsletter";
import News from "./screens/News";
import Newsletter1 from "./screens/Newsletter1";
import News1 from "./screens/News1";
import Newsletter2 from "./screens/Newsletter2";
import News2 from "./screens/News2";
import Newsletter3 from "./screens/Newsletter3";
import AbsensiQR1 from "./screens/AbsensiQR1";
import LaporSampah2 from "./screens/LaporSampah2";
import LaporSampah4 from "./screens/LaporSampah4";
import AbsensiQR2 from "./screens/AbsensiQR2";
import LaporSampah1 from "./screens/LaporSampah1";
import CustomerService1 from "./screens/CustomerService1";
import CustomerService2 from "./screens/CustomerService2";
import HomeAdmin from "./screens/HomeAdmin";
import HomeUser from "./screens/HomeUser";
import News3 from "./screens/News3";
import Notification1 from "./screens/Notification1";
import Acount from "./screens/Acount";
import Profile from "./screens/Profile";
import Acount1 from "./screens/Acount1";
import Profile1 from "./screens/Profile1";
import Acount2 from "./screens/Acount2";
import Profile2 from "./screens/Profile2";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text, Pressable, TouchableOpacity } from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  return (
    <>
      <NavigationContainer>
        {hideSplashScreen ? (
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
              name="LoadingUser"
              component={LoadingUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeSuperuser"
              component={HomeSuperuser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GPSScreen"
              component={GPSScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="GPSScreen1"
              component={GPSScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerService4"
              component={CustomerService4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerService3"
              component={CustomerService3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbsensiQR"
              component={AbsensiQR}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbsensiQR3"
              component={AbsensiQR3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ManagemenSupir"
              component={ManagemenSupir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanGajiKaryawan"
              component={LaporanGajiKaryawan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Crew"
              component={Crew}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Laporan"
              component={Laporan}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Administrasi"
              component={Administrasi}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanTargetSampah"
              component={LaporanTargetSampah}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanTargetSampah1"
              component={LaporanTargetSampah1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanPengeluaranMinyak"
              component={LaporanPengeluaranMinyak}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanAbsensiSupir"
              component={LaporanAbsensiSupir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanKendalaSupir"
              component={LaporanKendalaSupir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanKendalaSupir1"
              component={LaporanKendalaSupir1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataMobil"
              component={DataMobil}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="DataMobil1"
              component={DataMobil1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanGajiSupir"
              component={LaporanGajiSupir}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporanGajiSupir1"
              component={LaporanGajiSupir1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HalamanAwalSuperuser"
              component={HalamanAwalSuperuser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginSuperuser"
              component={LoginSuperuser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HalamanAwalAdmin"
              component={HalamanAwalAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginAdmin"
              component={LoginAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HalamanAwalUser"
              component={HalamanAwalUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register"
              component={Register}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register1"
              component={Register1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Register2"
              component={Register2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="ChoiceLogin"
              component={ChoiceLogin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LoginUser"
              component={LoginUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter"
              component={Newsletter}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News"
              component={News}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter1"
              component={Newsletter1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News1"
              component={News1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter2"
              component={Newsletter2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News2"
              component={News2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Newsletter3"
              component={Newsletter3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbsensiQR1"
              component={AbsensiQR1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporSampah2"
              component={LaporSampah2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporSampah4"
              component={LaporSampah4}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="AbsensiQR2"
              component={AbsensiQR2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="LaporSampah1"
              component={LaporSampah1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerService1"
              component={CustomerService1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="CustomerService2"
              component={CustomerService2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeAdmin"
              component={HomeAdmin}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="HomeUser"
              component={HomeUser}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="News3"
              component={News3}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Notification1"
              component={Notification1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Acount"
              component={Acount}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Acount1"
              component={Acount1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile1"
              component={Profile1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Acount2"
              component={Acount2}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Profile2"
              component={Profile2}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        ) : null}
      </NavigationContainer>
    </>
  );
};
export default App;
