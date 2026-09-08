
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

// import React, { useState } from 'react';
// import {View,Text,TextInput,StyleSheet,KeyboardAvoidingView,Platform,} from 'react-native';
// import { SafeAreaView,SafeAreaProvider,} from 'react-native-safe-area-context';

// export default function MyApp() {

//   const [form, setForm] = useState({
//     HoTen: '',
//     MaSV: '',
//     Email: '',
//     SoDienThoai: '',
//     MatKhau: '',
//   });

//   const [errors, setErrors] = useState({
//     HoTen: '',
//     Email: '',
//   });

//   // Kiểm tra Họ tên
//   const checkHoTen = () => {
//     if (!form.HoTen.trim()) {
//       setErrors({
//         ...errors,
//         HoTen: 'Vui lòng nhập họ và tên',
//       });
//     } else {
//       setErrors({
//         ...errors,
//         HoTen: '',
//       });
//     }
//   };

//   // Kiểm tra Email
//   const checkEmail = () => {
//     if (!form.Email.trim()) {
//       setErrors({
//         ...errors,
//         Email: 'Vui lòng nhập email',
//       });
//     } else {
//       setErrors({
//         ...errors,
//         Email: '',
//       });
//     }
//   };

//   return (
//     <SafeAreaProvider>
//       <SafeAreaView style={styles.container}>

//         <KeyboardAvoidingView
//           behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//           style={{ flex: 1 }}
//         >

//           {/* Tiêu đề */}
//           <Text style={styles.title}>
//             THÔNG TIN SINH VIÊN
//           </Text>

//           <View style={styles.form}>

//             {/* Họ và tên */}
//             <Text style={styles.label}>
//               Họ và tên
//             </Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Nhập họ và tên"
//               value={form.HoTen}
//               onChangeText={(value) =>
//                 setForm({ ...form, HoTen: value })
//               }
//               onBlur={checkHoTen}
//             />

//             {errors.HoTen !== '' && (
//               <Text style={styles.error}>
//                 {errors.HoTen}
//               </Text>
//             )}


//             {/* Mã sinh viên */}
//             <Text style={styles.label}>
//               Mã sinh viên
//             </Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Nhập mã sinh viên"
//               value={form.MaSV}
//               onChangeText={(value) =>
//                 setForm({ ...form, MaSV: value })
//               }
//             />


//             {/* Email */}
//             <Text style={styles.label}>
//               Email
//             </Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Nhập email"
//               value={form.Email}
//               onChangeText={(value) =>
//                 setForm({ ...form, Email: value })
//               }
//               keyboardType="email-address"
//               onBlur={checkEmail}
//             />

//             {errors.Email !== '' && (
//               <Text style={styles.error}>
//                 {errors.Email}
//               </Text>
//             )}


//             {/* Số điện thoại */}
//             <Text style={styles.label}>
//               Số điện thoại
//             </Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Nhập số điện thoại"
//               value={form.SoDienThoai}
//               onChangeText={(value) =>
//                 setForm({ ...form, SoDienThoai: value })
//               }
//               keyboardType="numeric"
//             />


//             {/* Mật khẩu */}
//             <Text style={styles.label}>
//               Mật khẩu
//             </Text>

//             <TextInput
//               style={styles.input}
//               placeholder="Nhập mật khẩu"
//               value={form.MatKhau}
//               onChangeText={(value) =>
//                 setForm({ ...form, MatKhau: value })
//               }
//               secureTextEntry={true}
//             />

//           </View>

//         </KeyboardAvoidingView>

//       </SafeAreaView>
//     </SafeAreaProvider>
//   );
// }


// const styles = StyleSheet.create({

//   container: {
//     flex: 1,
//     backgroundColor: '#f5f7fb',
//     padding: 20,
//   },

//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#1e3a8a',
//     textAlign: 'center',
//     marginVertical: 25,
//   },

//   form: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 12,
//   },

//   label: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginTop: 12,
//     marginBottom: 6,
//   },

//   input: {
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 8,
//     padding: 12,
//     fontSize: 16,
//   },

//   error: {
//     color: 'red',
//     fontSize: 13,
//     marginTop: 5,
//   },

// });



import React from 'react';
import {
  View,
  Text,
  Image,
  Pressable,
  ScrollView,
  FlatList,
  StyleSheet,
} from 'react-native';

export default function MyApp() {

  // Danh sách bài viết
  const articles = [
    {
      id: '1',
      title: 'Cách chăm sóc chó khỏe mạnh',
      image: 'https://images.unsplash.com/photo-1552053831-71594a27632d',
    },
    {
      id: '2',
      title: 'Thức ăn tốt cho thú cưng',
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb',
    },
    {
      id: '3',
      title: 'Lịch tiêm phòng cho thú cưng',
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b',
    },
  ];

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View>
          <Text style={styles.appName}>🐾 PET CARE</Text>
          <Text style={styles.headerText}>
            Chăm sóc thú cưng của bạn
          </Text>
        </View>

        
      </View>


      {/* KHU VỰC THÔNG TIN CHÍNH */}
      <View style={styles.mainCard}>

        <Text style={styles.sectionTitle}>
          Thú cưng của tôi
        </Text>

       <Image
            source={require('../../assets/images/cat.jpg')}
            style={styles.petImage}
        
        />
        <Text style={styles.petName}>
           Mun😺
        </Text>

        <Text style={styles.petInfo}>
          Laxanh • 2 tuổi
        </Text>

        {/* NÚT THAO TÁC */}
        <Pressable
          style={styles.button}
          onPress={() => alert('Xem hồ sơ Mun')}
        >
          <Text style={styles.buttonText}>
            XEM HỒ SƠ
          </Text>
        </Pressable>

      </View>


      {/* DANH SÁCH DỊCH VỤ */}
      <Text style={styles.sectionTitle}>
        Dịch vụ chăm sóc
      </Text>

      <View style={styles.serviceContainer}>

        <Pressable
          style={styles.service}
          onPress={() => alert('Khám bệnh')}
        >
          <Text style={styles.serviceIcon}>🩺</Text>
          <Text style={styles.serviceText}>Khám bệnh</Text>
        </Pressable>

        <Pressable
          style={styles.service}
          onPress={() => alert('Spa')}
        >
          <Text style={styles.serviceIcon}>✂️</Text>
          <Text style={styles.serviceText}>Spa</Text>
        </Pressable>

        <Pressable
          style={styles.service}
          onPress={() => alert('Tiêm phòng')}
        >
          <Text style={styles.serviceIcon}>💉</Text>
          <Text style={styles.serviceText}>Tiêm phòng</Text>
        </Pressable>

      </View>


      {/* DANH SÁCH NỘI DUNG */}
      <Text style={styles.sectionTitle}>
        Bài viết chăm sóc thú cưng
      </Text>

      <FlatList
        data={articles}
        scrollEnabled={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (

          <View style={styles.article}>

            <Image
              source={{ uri: item.image }}
              style={styles.articleImage}
            />

            <View style={styles.articleContent}>
              <Text style={styles.articleTitle}>
                {item.title}
              </Text>

              <Pressable
                style={styles.readButton}
                onPress={() => alert(item.title)}
              >
                <Text style={styles.readButtonText}>
                  XEM
                </Text>
              </Pressable>
            </View>

          </View>

        )}
      />

    </ScrollView>
  );
}


const styles = StyleSheet.create({

  // TOÀN BỘ TRANG
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
    padding: 20,
  },


  // HEADER
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  headerText: {
    fontSize: 20,
    marginTop: 4,
  },




  // KHU VỰC THÔNG TIN CHÍNH
  mainCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 25,
  },

  sectionTitle: {
    fontSize: 30,
    color: 'blue',
    fontWeight: 'bold',
    marginBottom: 15,
  },

  petImage: {
    width: 180,
    height: 180,
    borderRadius: 80,
    marginBottom: 12,
   
  },

  petName: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  petInfo: {
    fontSize: 25,
    marginTop: 5,
  },


  // NÚT
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    paddingHorizontal: 35,
    borderRadius: 8,
    marginTop: 15,
  },

  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },


  // FLEXBOX 
  serviceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },

  service: {
    backgroundColor: '#FFFFFF',
    width: '31%',
    paddingVertical: 18,
    alignItems: 'center',
    borderRadius: 12,
  },

  serviceIcon: {
    fontSize: 35,
    marginBottom: 8,
  },

  serviceText: {
    fontSize: 25,
    fontWeight: '600',
  },


  // DANH SÁCH BÀI VIẾT
  article: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 10,
    marginBottom: 12,
  },

  articleImage: {
    width: 90,
    height: 90,
    borderRadius: 10,
  },

  articleContent: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  articleTitle: {
    fontSize: 25,
    fontWeight: '600',
  },

  readButton: {
    alignSelf: 'flex-start',
    backgroundColor: '#4CAF50',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 6,
  },

  readButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15,
  },

});