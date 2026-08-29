
// can 1 compomen cha de boc cac compoen con o trong o day la view
// import {View, Text, StyleSheet, Image, ScrollView,FlatList} from 'react-native';

// import {SafeAreaView} from 'react-native-safe-area-context';

// export default function MyApp() {

//   return (

//     <SafeAreaView style={styles.container}>

//       <Image

//         source={require('../../assets/images/icon.png')}

//         style= {styles.avatar}

//       />

//       <Text style={styles.title}>Thông tin sinh viên</Text>

//       <FlatList

//         data={[

//           { id: '1', name: 'Nguyễn Văn Thắng', mssv: '23103071', lop: 'CNTT K23', ngaysinh: '21/09/2005', diachi: 'BMT, Đak Lak' },

//           { id: '2', name: 'Lê Anh Nam', mssv: '23103032', lop: 'CNTT K23', ngaysinh: '02/08/2005', diachi: 'BMT, Đak Lak' },

//         ]}

//         renderItem={({ item }) => (

//           <View style={styles.listItem}>

//             <Text>Họ và tên: {item.name}</Text>

//             <Text>MSSV: {item.mssv}</Text>

//             <Text>Lớp: {item.lop}</Text>

//             <Text>Ngày sinh: {item.ngaysinh}</Text>

//             <Text>Địa chỉ: {item.diachi}</Text>

//           </View>

//         )}

//       />

       

//     </SafeAreaView>

//   );

// }



// const styles = StyleSheet.create({

//   container: {

//     justifyContent: 'center',

//     alignItems: 'center',

//   },

//   title: {

//     fontSize: 25,

//     fontWeight: 'bold',

//     color: 'Blue',

//   },

//   avatar: {

//     width: 100,

//     height: 100,

//   },

//   listItem: {

//     marginBottom: 10,

//   },

// }); 

// 

import React, { useState } from 'react';
import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView,Platform,} from 'react-native';
import { SafeAreaView,SafeAreaProvider,} from 'react-native-safe-area-context';

export default function MyApp() {

  const [form, setForm] = useState({
    HoTen: '',
    MaSV: '',
    Email: '',
    SoDienThoai: '',
    MatKhau: '',
  });

  const [errors, setErrors] = useState({
    HoTen: '',
    Email: '',
  });

  // Kiểm tra Họ tên
  const checkHoTen = () => {
    if (!form.HoTen.trim()) {
      setErrors({
        ...errors,
        HoTen: 'Vui lòng nhập họ và tên',
      });
    } else {
      setErrors({
        ...errors,
        HoTen: '',
      });
    }
  };

  // Kiểm tra Email
  const checkEmail = () => {
    if (!form.Email.trim()) {
      setErrors({
        ...errors,
        Email: 'Vui lòng nhập email',
      });
    } else {
      setErrors({
        ...errors,
        Email: '',
      });
    }
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>

        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1 }}
        >

          {/* Tiêu đề */}
          <Text style={styles.title}>
            THÔNG TIN SINH VIÊN
          </Text>

          <View style={styles.form}>

            {/* Họ và tên */}
            <Text style={styles.label}>
              Họ và tên
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nhập họ và tên"
              value={form.HoTen}
              onChangeText={(value) =>
                setForm({ ...form, HoTen: value })
              }
              onBlur={checkHoTen}
            />

            {errors.HoTen !== '' && (
              <Text style={styles.error}>
                {errors.HoTen}
              </Text>
            )}


            {/* Mã sinh viên */}
            <Text style={styles.label}>
              Mã sinh viên
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nhập mã sinh viên"
              value={form.MaSV}
              onChangeText={(value) =>
                setForm({ ...form, MaSV: value })
              }
            />


            {/* Email */}
            <Text style={styles.label}>
              Email
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nhập email"
              value={form.Email}
              onChangeText={(value) =>
                setForm({ ...form, Email: value })
              }
              keyboardType="email-address"
              onBlur={checkEmail}
            />

            {errors.Email !== '' && (
              <Text style={styles.error}>
                {errors.Email}
              </Text>
            )}


            {/* Số điện thoại */}
            <Text style={styles.label}>
              Số điện thoại
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nhập số điện thoại"
              value={form.SoDienThoai}
              onChangeText={(value) =>
                setForm({ ...form, SoDienThoai: value })
              }
              keyboardType="numeric"
            />


            {/* Mật khẩu */}
            <Text style={styles.label}>
              Mật khẩu
            </Text>

            <TextInput
              style={styles.input}
              placeholder="Nhập mật khẩu"
              value={form.MatKhau}
              onChangeText={(value) =>
                setForm({ ...form, MatKhau: value })
              }
              secureTextEntry={true}
            />

          </View>

        </KeyboardAvoidingView>

      </SafeAreaView>
    </SafeAreaProvider>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#f5f7fb',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1e3a8a',
    textAlign: 'center',
    marginVertical: 25,
  },

  form: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
  },

  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 12,
    marginBottom: 6,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },

  error: {
    color: 'red',
    fontSize: 13,
    marginTop: 5,
  },

});