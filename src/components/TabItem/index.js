import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IconHomeNew,
  IconHomeNew1,
  IconAdzanNew,
  IconAdzanInactive,
  IconAkunNewInactive,
  IconNotifNew,
  IconNotifNewInactive,
  IconAkunNew,
  IconHomeNewInactive,
  IconPanic,
  IconDoa,
} from '../../assets';
// import {WARNA_UTAMA, WARNA_DISABLE} from '../../utils/constant';

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'Beranda')
      return isFocused ? <IconHomeNew1 /> : <IconHomeNew1 />;

    if (label === 'HomeCust')
      return isFocused ? <IconHomeNew /> : <IconHomeNew />;

    if (label === 'Notifikasi')
      return isFocused ? <IconNotifNew /> : <IconNotifNew />;

    if (label === 'Adzan')
      return isFocused ? <IconAdzanNew /> : <IconAdzanNew />;

    if (label === 'Doa') return isFocused ? <IconDoa /> : <IconDoa />;

    return <IconPanic />;
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      {/* <Icon />  */}
      <Text style={styles.text(isFocused)}>{label}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  text: isFocused => ({
    fontSize: 12,
    color: isFocused ? 'black' : '#C8C8C8',

    marginTop: 2,
  }),
});