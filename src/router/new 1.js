
import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BottomNavigator} from '../components/';

import {
  Splash,
  HajaraswadOrder,
  DamqurbanOrder,
  CheckinLayanan,
  SimcardOrder,
  Adzan,
  BeritaSatu,
BeritaDua,
BeritaTiga,
 Doa,
 Panictravel,
 DoaDetail,
  FrmLoginFirst,
  Pembayaran,
  Eksplor,
  Notifikasi,
  Profil,
  Home,
  PanicOthers,
  Panic,
    HomeCust,
  CariMitraCod,
  Daftar,
  Login,
  Formlogin,
  Formdaftar,
Lupapassword,
  Otp,
  Ricebox,
  Airport,
  AirportOrder,
  Mutawif,
  Mutawifah,
  RiceboxOrder,
  Formdaftartravel,
  TotalTagihan,
  DetailBayar,
  DetailBayarCod,
  DetailBayarCc,
  Pilihtravel,
  PembelianSukses,
  Laundry,
  Simcard,
  Moneychanger,
  Checkin,
  Ibadah,
  Married,
  Hospital,
  Kursiroda,
  Ziarah,
  Hajaraswad,
  Taxi,
  Mufood,
  Massage,
  Damqurban,
  Auth,
  Authotp,
  Authotpresend,
  Ambilparam,
  Riceboxkonfirm,
  TotalTagihanairport,
  DetailBayarairport,
  PembelianSuksesairport,
  AirportOrderkeberangkatan,
  DetailBayarbri,
  CariMitra,
  CariMitraBri,
  CariMitraCc,
  AuthCust,
  OtpCost,
  AirportKedatangan,
 AirportKeberangkatan,
 TotalTagihanairportkeberangkatan,
 MutawifOrder,
 TotalTagihanKerja,
 CariLayanan,
 CariMitramutawif,
 CariMitramutawifBri,
CariMitramutawifCod,
 CariMitramutawifCc,
 MutawifahOrder,
 KursirodaOrder,
 TotalTagihanMutawifah,
CariMutawifah,
Beranda,
KursirodaOrdersewa,
  KursirodaOrderibadah,
  KursirodaOrdersehari,
  TotalTagihanKursirodasewa,
CariMitrakursiroda,
CariMitrakursirodaBri,
CariMitrakursirodaCod,
CariMitrakursirodaCc,
CariMutawifahBri,
CariMutawifahCod,
CariMutawifahCc,
Pesanan,
 Diproses,
  Dikirim,
  Selesai,
Akun,
Jadwal,
Saldo,
BantuanFaq,
InfoSatu,
  InfoDua,
  InfoTiga,
  Authsplash,
Lupapasswordnext,
TotalTagihansimcard,
MoneychangerLayanan,
 MoneychangerOrder,
 LaundrySatuan,
  MoneychangerOrderidr,
  TotalTagihanMitra,
  CheckinOrder,
  CheckoutOrder,
  Makkah,
  MakkahLayanan,
  LaundryKiloan,
  Thaif,
  Museum,
  Kiswah,
  Madinah,
  MadinahLayanan,
  Jabalmagnet,
  Alula,
  Badar,
  HospitalLayanan,
  HospitalOrder,
  Medicine,
  AntarRs,
  PendampingRs,
  MenguburJenazah,
  TaxiOrder,
  LaundryLayanan,
  MarriedOrder,
  IbadahLayanan,
  IbadahOrder,
  MufoodOrder,
  IbadahOrderhajj,
  MassageOrder,
  TotalTagihanziarah,
  TotalTagihanhajarazwad,
  TotalTagihandamqurban,
  TotalTagihanmucar,
  TotalTagihanlaundry,
  TotalTagihanmassage,
  TotalTagihanmoneychanger,
  TotalTagihanchekinchekout,
  TotalTagihanhospital,
  TotalTagihanmerried,
  TotalTagihanibadah,
  TotalTagihanmufood,
   CariMitraLaundri,
  CariMitraLaundriBri,
  CariMitraLaundriCod,
  
  CariMitraSimCard,
  CariMitraSimCardBri,
  CariMitraSimCardCod,
  
  
  CariMitraZiarah,
  CariMitraZiarahBri,
  CariMitraZiarahCod,
  
  CariMitraMUCar,
  CariMitraMUCarBri,
  CariMitraMUCarCod,
  
  CariMitraMessage,
  CariMitraMessageBri,
  CariMitraMessageCod,
  
  CariMitraMUFood,
  CariMitraMUFoodBri,
  CariMitraMUFoodCod,
  
  
  
  CariMitraHajarAswad,
  CariMitraHajarAswadBri,
  CariMitraHajarAswadCod,
  
  
  CariMitraMoneyChanger,
  CariMitraMoneyChangerBri,
  CariMitraMoneyChangerCod,
  
  CariMitraChekinChekOut,
  CariMitraChekinChekOutBri,
  CariMitraCheknChekOutCod,
  
  CariMitraHospital,
  CariMitraHospitalBri,
  CariMitraHospitalCod,
  
  
} from '../pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const FooterTab = () => {
  return (
  <Tab.Navigator
      options={{showLabel: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Home}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Adzan"
        component={Adzan}
        options={{headerShown: false}}
      />
      
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          title: 'Notifikasi',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Doa" component={Doa} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
const FooterTabCust = () => {
  return (
 <Tab.Navigator
      options={{showLabel: false}}
      tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Adzan"
        component={Adzan}
        options={{headerShown: false}}
      />
      
      <Tab.Screen
        name="Notifikasi"
        component={Notifikasi}
        options={{
          title: 'Notifikasi',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Tab.Screen name="Doa" component={Doa} options={{headerShown: false}} />
    </Tab.Navigator>
  );
};
function Router() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FooterTab"
        component={FooterTab}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="CariMitramutawif"
        component={CariMitramutawif}
        options={{headerShown: false}}
      />

   <Stack.Screen
        name="CariMutawifahCc"
        component={CariMutawifahCc}
        options={{headerShown: false}}
      /> 
	  
	  <Stack.Screen
        name="DoaDetail"
        component={DoaDetail}
        options={{headerShown: false}}
      />
	   
	  <Stack.Screen
        name="IbadahOrderhajj"
        component={IbadahOrderhajj}
        options={{headerShown: false}}
      />
   
	  <Stack.Screen
        name="HajaraswadOrder"
        component={HajaraswadOrder}
        options={{headerShown: false}}
      />

          <Stack.Screen
        name="TotalTagihanKursirodasewa"
        component={TotalTagihanKursirodasewa}
options={{
          title: 'Total Tagihan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
            <Stack.Screen
        name="CariMitramutawifCod"
        component={CariMitramutawifCod}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="CariMutawifahBri"
        component={CariMutawifahBri}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="TotalTagihanchekinchekout"
        component={TotalTagihanchekinchekout}
        options={{headerShown: false}}
      />
  <Stack.Screen
        name="Pilihtravel"
        component={Pilihtravel}
          options={{
          title: 'Pilih Travel',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
  <Stack.Screen
        name="PanicOthers"
        component={PanicOthers}
         options={{
          title: 'Bantu Teman',
          headerStyle: {
            backgroundColor: '#1b2333',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
  <Stack.Screen
        name="CariMitramutawifCc"
        component={CariMitramutawifCc}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="CheckinLayanan"
        component={CheckinLayanan}
        options={{headerShown: false}}
      />
	  
	      <Stack.Screen
        name="TotalTagihanibadah"
        component={TotalTagihanibadah}
        options={{headerShown: false}}
      />
	  
	       <Stack.Screen
        name="IbadahOrder"
        component={IbadahOrder}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="TotalTagihanmerried"
        component={TotalTagihanmerried}
        options={{headerShown: false}}
      />
	      <Stack.Screen
        name="TotalTagihanmucar"
        component={TotalTagihanmucar}
        options={{headerShown: false}}
      />
	      <Stack.Screen
        name="TotalTagihanmufood"
        component={TotalTagihanmufood}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="Makkah"
        component={Makkah}
        options={{headerShown: false}}
      />  
	     <Stack.Screen
        name="TotalTagihandamqurban"
        component={TotalTagihandamqurban}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="LaundryKiloan"
        component={LaundryKiloan}
        options={{headerShown: false}}
      />
	       <Stack.Screen
        name="TotalTagihanmassage"
        component={TotalTagihanmassage}
        options={{headerShown: false}}
      />
	  
	        <Stack.Screen
        name="TotalTagihanhospital"
        component={TotalTagihanhospital}
        options={{headerShown: false}}
      />
	  
	  
	     <Stack.Screen
        name="LaundryLayanan"
        component={LaundryLayanan}
        options={{headerShown: false}}
      />
	       <Stack.Screen
        name="IbadahLayanan"
        component={IbadahLayanan}
        options={{headerShown: false}}
      />
	      <Stack.Screen
        name="AntarRs"
        component={AntarRs}
        options={{headerShown: false}}
      />
	       <Stack.Screen
        name="MakkahLayanan"
        component={MakkahLayanan}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="TaxiOrder"
        component={TaxiOrder}
        options={{headerShown: false}}
      />
	          <Stack.Screen
        name="TotalTagihanziarah"
        component={TotalTagihanziarah}
        options={{headerShown: false}}
      />
	         <Stack.Screen
        name="MarriedOrder"
        component={MarriedOrder}
        options={{headerShown: false}}
      />
	  
	       <Stack.Screen
        name="MenguburJenazah"
        component={MenguburJenazah}
        options={{headerShown: false}}
      />
	          <Stack.Screen
        name="PendampingRs"
        component={PendampingRs}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="HospitalOrder"
        component={HospitalOrder}
        options={{headerShown: false}}
      />
	  
	        <Stack.Screen
        name="Medicine"
        component={Medicine}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="TotalTagihanlaundry"
        component={TotalTagihanlaundry}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="HospitalLayanan"
        component={HospitalLayanan}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="CheckinOrder"
        component={CheckinOrder}
        options={{headerShown: false}}
      />
	      <Stack.Screen
        name="Alula"
        component={Alula}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="Badar"
        component={Badar}
        options={{headerShown: false}}
      />
	       <Stack.Screen
        name="CheckoutOrder"
        component={CheckoutOrder}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="SimcardOrder"
        component={SimcardOrder}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="Pesanan"
        component={Pesanan}
       options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
		
      />
      <Stack.Screen
        name="Kiswah"
        component={Kiswah}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="CariMitraLaundri"
        component={CariMitraLaundri}
        options={{headerShown: false}}
      />
	  	     <Stack.Screen
        name="CariMitraLaundriBri"
        component={CariMitraLaundriBri}
        options={{headerShown: false}}
      />
	  
	   	     <Stack.Screen
        name="CariMitraLaundriCod"
        component={CariMitraLaundriCod}
        options={{headerShown: false}}
      />
	  
	  
	  	   	     <Stack.Screen
        name="CariMitraSimCard"
        component={CariMitraSimCard}
        options={{headerShown: false}}
      />
	  
	  	  	   	     <Stack.Screen
        name="CariMitraSimCardBri"
        component={CariMitraSimCardBri}
        options={{headerShown: false}}
      />
	  	  	   	     <Stack.Screen
        name="CariMitraSimCardCod"
        component={CariMitraSimCardCod}
        options={{headerShown: false}}
      />
	  
	  	  	  	   	     <Stack.Screen
        name="CariMitraZiarah"
        component={CariMitraZiarah}
        options={{headerShown: false}}
      />
	  
		  	  	  	   	     <Stack.Screen
        name="CariMitraZiarahBri"
        component={CariMitraZiarahBri}
        options={{headerShown: false}}
      /> 
		  	  	  	   	     <Stack.Screen
        name="CariMitraZiarahCod"
        component={CariMitraZiarahCod}
        options={{headerShown: false}}
      /> 	  
	  
	  		  	  	  	   	     <Stack.Screen
        name="CariMitraMUCar"
        component={CariMitraMUCar}
        options={{headerShown: false}}
      /> 
	  
 <Stack.Screen
        name="CariMitraMUCarBri"
        component={CariMitraMUCarBri}
        options={{headerShown: false}}
      /> 
	   <Stack.Screen
        name="CariMitraMUCarCod"
        component={CariMitraMUCarCod}
        options={{headerShown: false}}
      /> 
	  
		   <Stack.Screen
        name="CariMitraMessage"
        component={CariMitraMessage}
        options={{headerShown: false}}
      />   
	  		   <Stack.Screen
        name="CariMitraMessageBri"
        component={CariMitraMessageBri}
        options={{headerShown: false}}
      />   
	  
	  	  		   <Stack.Screen
        name="CariMitraMessageCod"
        component={CariMitraMessageCod}
        options={{headerShown: false}}
      />   
	  
	  	  	  		   <Stack.Screen
        name="CariMitraMUFood"
        component={CariMitraMUFood}
        options={{headerShown: false}}
      />   
	  
	  	  	  	  		   <Stack.Screen
        name="CariMitraMUFoodBri"
        component={CariMitraMUFoodBri}
        options={{headerShown: false}}
      />  
		  	  	  	  		   <Stack.Screen
        name="CariMitraMUFoodCod"
        component={CariMitraMUFoodCod}
        options={{headerShown: false}}
      />   
	  		  	  	  	  		   <Stack.Screen
        name="CariMitraHajarAswad"
        component={CariMitraHajarAswad}
        options={{headerShown: false}}
      />  
	  
		  		  	  	  	  		   <Stack.Screen
        name="CariMitraHajarAswadBri"
        component={CariMitraHajarAswadBri}
        options={{headerShown: false}}
      />    
	<Stack.Screen
        name="CariMitraHajarAswadCod"
        component={CariMitraHajarAswadCod}
        options={{headerShown: false}}
      />   
	<Stack.Screen
        name="CariMitraMoneyChanger"
        component={CariMitraMoneyChanger}
        options={{headerShown: false}}
      />   
	<Stack.Screen
        name="CariMitraMoneyChangerBri"
        component={CariMitraMoneyChangerBri}
        options={{headerShown: false}}
      /> 
	  	<Stack.Screen
        name="CariMitraMoneyChangerCod"
        component={CariMitraMoneyChangerCod}
        options={{headerShown: false}}
      /> 
	  	  	<Stack.Screen
        name="CariMitraChekinChekOut"
        component={CariMitraChekinChekOut}
        options={{headerShown: false}}
      /> 
	  	  	  	<Stack.Screen
        name="CariMitraChekinChekOutBri"
        component={CariMitraChekinChekOutBri}
        options={{headerShown: false}}
      /> 
	  	  	  	  	<Stack.Screen
        name="CariMitraCheknChekOutCod"
        component={CariMitraCheknChekOutCod}
        options={{headerShown: false}}
      /> 
	  
	  	  	  	  	  	<Stack.Screen
        name="CariMitraHospital"
        component={CariMitraHospital}
        options={{headerShown: false}}
      /> 
	  
	  	  	  	  	  	  	<Stack.Screen
        name="CariMitraHospitalBri"
        component={CariMitraHospitalBri}
        options={{headerShown: false}}
      />

	  	  	  	  	  	  	<Stack.Screen
        name="CariMitraHospitalCod"
        component={CariMitraHospitalCod}
        options={{headerShown: false}}
      /> 	  
	  
	  
	     <Stack.Screen
        name="Jabalmagnet"
        component={Jabalmagnet}
        options={{headerShown: false}}
      />
	       <Stack.Screen
        name="Madinah"
        component={Madinah}
        options={{headerShown: false}}
      />
	  
	         <Stack.Screen
        name="TotalTagihanmoneychanger"
        component={TotalTagihanmoneychanger}
        options={{headerShown: false}}
      />
	  
	     <Stack.Screen
        name="MufoodOrder"
        component={MufoodOrder}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="MadinahLayanan"
        component={MadinahLayanan}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="Saldo"
        component={Saldo}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="TotalTagihansimcard"
        component={TotalTagihansimcard}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Museum"
        component={Museum}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="Thaif"
        component={Thaif}
        options={{headerShown: false}}
      />
	      <Stack.Screen
        name="Panictravel"
        component={Panictravel}
              options={{
          title: 'Panik Info',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	  
	      <Stack.Screen
        name="BantuanFaq"
        component={BantuanFaq}
        options={{headerShown: false}}
      />
 <Stack.Screen
        name="CariMutawifahCod"
        component={CariMutawifahCod}
        options={{headerShown: false}}
      />

          <Stack.Screen
        name="CariMitrakursiroda"
        component={CariMitrakursiroda}
        options={{headerShown: false}}
      />
	        <Stack.Screen
        name="Authsplash"
        component={Authsplash}
        options={{headerShown: false}}
      />
	  
	         <Stack.Screen
        name="Pembayaran"
        component={Pembayaran}
        options={{headerShown: false}}
      />
	         <Stack.Screen
        name="Lupapasswordnext"
        component={Lupapasswordnext}
        options={{headerShown: false}}
      />
	  
	          <Stack.Screen
        name="Lupapassword"
        component={Lupapassword}
        options={{headerShown: false}}
      />
     <Stack.Screen
        name="CariMitrakursirodaBri"
        component={CariMitrakursirodaBri}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="Akun"
        component={Akun}
        options={{headerShown: false}}
      />
<Stack.Screen
        name="Panic"
        component={Panic}
         options={{
          title: 'Panic',
          headerStyle: {
            backgroundColor: '#1b2333',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
         <Stack.Screen
        name="Diproses"
        component={Diproses}
        options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

         <Stack.Screen
        name="Dikirim"
        component={Dikirim}
      options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


     <Stack.Screen
        name="BeritaSatu"
        component={BeritaSatu}
       options={{
          title: 'Berita',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


     <Stack.Screen
        name="BeritaDua"
        component={BeritaDua}
     options={{
          title: 'Berita',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />


     <Stack.Screen
        name="BeritaTiga"
        component={BeritaTiga}
        options={{
          title: 'Berita',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />

         <Stack.Screen
        name="Selesai"
        component={Selesai}
       options={{
          title: 'Pesanan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
           <Stack.Screen
        name="CariMitrakursirodaCod"
        component={CariMitrakursirodaCod}
        options={{headerShown: false}}
      />
           <Stack.Screen
        name="CariMitrakursirodaCc"
        component={CariMitrakursirodaCc}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Jadwal"
        component={Jadwal}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TotalTagihanMutawifah"
        component={TotalTagihanMutawifah}
        options={{
          title: 'Total Tagihan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
        <Stack.Screen
        name="MutawifahOrder"
        component={MutawifahOrder}
        options={{headerShown: false}}
      />
    
	      <Stack.Screen
        name="FooterTabCust"
        component={FooterTabCust}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="AuthCust"
        component={AuthCust}
        options={{headerShown: false}}
      />
     <Stack.Screen
        name="LaundrySatuan"
        component={LaundrySatuan}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="TotalTagihanhajarazwad"
        component={TotalTagihanhajarazwad}
        options={{headerShown: false}}
      />
	  <Stack.Screen
        name="Beranda"
        component={Beranda}
        options={{headerShown: false}}
      />
   <Stack.Screen
        name="Profil"
        component={Profil}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="KursirodaOrder"
        component={KursirodaOrder}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="MoneychangerLayanan"
        component={MoneychangerLayanan}
        options={{headerShown: false}}
      />
	  
	  
	    <Stack.Screen
        name="MoneychangerOrder"
        component={MoneychangerOrder}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="MoneychangerOrderidr"
        component={MoneychangerOrderidr}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="TotalTagihanMitra"
        component={TotalTagihanMitra}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="DamqurbanOrder"
        component={DamqurbanOrder}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="MassageOrder"
        component={MassageOrder}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="CariLayanan"
        component={CariLayanan}
        options={{headerShown: false}}
      />
	    <Stack.Screen
        name="HomeCust"
        component={HomeCust}
        options={{headerShown: false}}
      />
   <Stack.Screen
        name="CariMutawifah"
        component={CariMutawifah}
        options={{headerShown: false}}
      />
      
       <Stack.Screen
        name="AirportKedatangan"
        component={AirportKedatangan}
        options={{headerShown: false}}
      />
	  
	    <Stack.Screen
        name="InfoSatu"
        component={InfoSatu}
        options={{
          title: 'Info',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      
      />
	  
	  
	    <Stack.Screen
        name="InfoDua"
        component={InfoDua}
       options={{
          title: 'Info',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      
      />
	    <Stack.Screen
        name="InfoTiga"
        component={InfoTiga}
        options={{
          title: 'Info',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      
      
      />
	  
	  
	  
	  
	  
	  
        <Stack.Screen
        name="MutawifOrder"
        component={MutawifOrder}
        options={{headerShown: false}}
      />
	     <Stack.Screen
        name="CariMitraBri"
        component={CariMitraBri}
        options={{headerShown: false}}
      />

         <Stack.Screen
        name="AirportKeberangkatan"
        component={AirportKeberangkatan}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="TotalTagihanKerja"
        component={TotalTagihanKerja}
        options={{headerShown: false}}
      />
	   
       <Stack.Screen
        name="TotalTagihanairportkeberangkatan"
        component={TotalTagihanairportkeberangkatan}
        options={{headerShown: false}}
      />
     
	    <Stack.Screen
        name="CariMitraCc"
        component={CariMitraCc}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="AirportOrderkeberangkatan"
        component={AirportOrderkeberangkatan}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Formdaftar"
        component={Formdaftar}
        options={{headerShown: false}}
      />
 <Stack.Screen
        name="DetailBayarbri"
        component={DetailBayarbri}
         options={{
          title: 'Detail Bayar',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	   <Stack.Screen
        name="OtpCost"
        component={OtpCost}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Formdaftartravel"
        component={Formdaftartravel}
        options={{headerShown: false}}
      />
    <Stack.Screen
        name="FrmLoginFirst"
        component={FrmLoginFirst}
        options={{headerShown: false}}
      />

      <Stack.Screen
      name="Auth"
      component={Auth}
      options={{headerShown: false}}
    />
      <Stack.Screen name="Otp" component={Otp} options={{headerShown: false}} />
      <Stack.Screen
        name="Formlogin"
        component={Formlogin}
        options={{headerShown: false}}
      />
     
	   <Stack.Screen
        name="CariMitra"
        component={CariMitra}
        options={{headerShown: false}}
      />
	  
	   <Stack.Screen
        name="CariMitraCod"
        component={CariMitraCod}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Daftar"
        component={Daftar}
         options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ricebox"
        component={Ricebox}
        options={{
          title: 'Rice Box',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Airport"
        component={Airport}
         options={{
          title: 'Airport Handling',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Mutawif"
        component={Mutawif}
         options={{
          title: 'Mutawif',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />



  <Stack.Screen
        name="KursirodaOrderibadah"
        component={KursirodaOrderibadah}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="KursirodaOrdersehari"
        component={KursirodaOrdersehari}
        options={{headerShown: false}}
      />
        <Stack.Screen
        name="KursirodaOrdersewa"
        component={KursirodaOrdersewa}
        options={{headerShown: false}}
      />













      <Stack.Screen
        name="Mutawifah"
        component={Mutawifah}
      options={{
          title: 'Mutawifah',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="RiceboxOrder"
        component={RiceboxOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TotalTagihan"
        component={TotalTagihan}
        options={{
          title: 'Total Tagihan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="DetailBayar"
        component={DetailBayar}
        options={{
          title: 'Detail Bayar',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
	    <Stack.Screen
        name="DetailBayarCod"
        component={DetailBayarCod}
         options={{
          title: 'Detail Bayar',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="DetailBayarCc"
        component={DetailBayarCc}
        options={{
          title: 'Detail Bayar',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="PembelianSukses"
        component={PembelianSukses}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Laundry"
        component={Laundry}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="AirportOrder"
        component={AirportOrder}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Simcard"
        component={Simcard}
             options={{
          title: 'Sim Card',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Moneychanger"
        component={Moneychanger}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Checkin"
        component={Checkin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ziarah"
        component={Ziarah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Kursiroda"
        component={Kursiroda}
       options={{
          title: 'Kursi Roda',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      />
      <Stack.Screen
        name="Hospital"
        component={Hospital}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Married"
        component={Married}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Ibadah"
        component={Ibadah}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Hajaraswad"
        component={Hajaraswad}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Damqurban"
        component={Damqurban}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Massage"
        component={Massage}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Mufood"
        component={Mufood}
        options={{headerShown: false}}
      />
      <Stack.Screen
      name="Authotp"
      component={Authotp}
      options={{headerShown: false}}
    />

    <Stack.Screen
    name="Authotpresend"
    component={Authotpresend}
    options={{headerShown: false}}
  />
  
     <Stack.Screen
    name="DetailBayarairport"
    component={DetailBayarairport}
    options={{headerShown: false}}
  />
   <Stack.Screen
    name="Ambilparam"
    component={Ambilparam}
    options={{headerShown: false}}
  />
   <Stack.Screen
    name="Riceboxkonfirm"
    component={Riceboxkonfirm}
    options={{headerShown: false}}
  />
    <Stack.Screen
    name="TotalTagihanairport"
    component={TotalTagihanairport}
     options={{
          title: 'Total Tagihan',
          headerStyle: {
            backgroundColor: '#222a32',
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
            height: 60,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
  />
      <Stack.Screen
    name="PembelianSuksesairport"
    component={PembelianSuksesairport}
    options={{headerShown: false}}
  />





       <Stack.Screen
    name="CariMitramutawifBri"
    component={CariMitramutawifBri}
    options={{headerShown: false}}
  />


    
      <Stack.Screen
        name="Taxi"
        component={Taxi}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default Router;
