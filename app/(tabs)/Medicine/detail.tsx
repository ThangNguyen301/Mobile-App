import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Stack, useLocalSearchParams, router } from 'expo-router';

export default function MedicineDetailScreen() {

  const {
    id,
    maThuoc,
    tenThuoc,
    hoatChatChinh,
    hamLuong,
    hangSanXuat,
    hanSuDung,
    gia,
  } = useLocalSearchParams<{
    id: string;
    maThuoc: string;
    tenThuoc: string;
    hoatChatChinh: string;
    hamLuong: string;
    hangSanXuat: string;
    hanSuDung: string;
    gia: string;
  }>();

  return (
    <View style={styles.container}>

      <Stack.Screen
        options={{
          title: 'Chi tiết thuốc',
        }}
      />

      <Text style={styles.title}>
        Thông tin thuốc
      </Text>

      <Text style={styles.info}>
        Mã thuốc: {maThuoc ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Tên thuốc: {tenThuoc ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Hoạt chất: {hoatChatChinh ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Hàm lượng: {hamLuong ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Hãng sản xuất: {hangSanXuat ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Hạn sử dụng: {hanSuDung ?? 'Không có thông tin'}
      </Text>

      <Text style={styles.info}>
        Giá: {gia ?? 'Không có thông tin'}đ
      </Text>

      <Pressable
        style={styles.backbutton}
        onPress={() => router.back()}
      >
        <Text style={styles.backbuttonText}>
          Quay lại
        </Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  info: {
    fontSize: 18,
    marginBottom: 8,
  },

  backbutton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },

  backbuttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

});