import { useState, useCallback } from 'react';
import {
  ActivityIndicator,
  View,
  Text,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native';
import { router, useFocusEffect } from 'expo-router';

import {
  getAllMedicines,
  createMedicine,
  Medicine,
} from '../../../service/medicine_service';

export default function MedicineListScreen() {

  // =========================
  // DANH SÁCH THUỐC
  // =========================

  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [loading, setLoading] = useState(true);
  

  // =========================
  // DỮ LIỆU NHẬP
  // =========================

  const [maThuoc, setMaThuoc] = useState('');
  const [tenThuoc, setTenThuoc] = useState('');
  const [gia, setGia] = useState('');


  // =========================
  // LẤY DỮ LIỆU - GET API
  // =========================

  const loadMedicines = async () => {
    try {
      setLoading(true);

      const data = await getAllMedicines();

      setMedicines(data);

    } catch (error) {
      console.log(error);

    } finally {
      setLoading(false);
    }
  };

  // Mỗi lần quay lại màn hình sẽ lấy lại dữ liệu
  useFocusEffect(
    useCallback(() => {
      loadMedicines();
    }, [])
  );

  // =========================
  // THÊM THUỐC - POST API
  // =========================

  const handleAddMedicine = async () => {

    if (!maThuoc || !tenThuoc || !gia) {
      return;
    }

    try {

      const newMedicine = await createMedicine({

        maThuoc: maThuoc,

        tenThuoc: tenThuoc,

        hoatChatChinh: 'Chưa có',

        hamLuong: '500mg',

        hangSanXuat: 'Nhà sản xuất',

        hanSuDung: '2028-12-31',

        gia: Number(gia),

      });

      // Thêm thuốc mới vào danh sách
      setMedicines([
        ...medicines,
        newMedicine,
      ]);

      // Xóa dữ liệu trong ô nhập
      setMaThuoc('');
      setTenThuoc('');
      setGia('');

    } catch (error) {

      console.log(error);

    }
  };

  // =========================
  // CHUYỂN SANG CHI TIẾT
  // =========================

  const handleMedicinePress = (medicine: Medicine) => {

    router.push({
      pathname: '/(tabs)/Medicine/detail',

      params: {
        id: medicine.id.toString(),
        maThuoc: medicine.maThuoc,
        tenThuoc: medicine.tenThuoc,
        hoatChatChinh: medicine.hoatChatChinh,
        hamLuong: medicine.hamLuong,
        hangSanXuat: medicine.hangSanXuat,
        hanSuDung: medicine.hanSuDung,
        gia: medicine.gia.toString(),
      },
    });

  };

  // =========================
  // ĐANG TẢI
  // =========================

  if (loading) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size="large" />
        <Text>Đang tải dữ liệu...</Text>
      </View>
    );
  }

  // =========================
  // GIAO DIỆN
  // =========================

  return (
    <View style={styles.container}>

      <Text style={styles.title}>
        Danh sách thuốc
      </Text>

      {/* MÃ THUỐC */}

      <TextInput
        style={styles.input}
        placeholder="Mã thuốc"
        value={maThuoc}
        onChangeText={setMaThuoc}
      />

      {/* TÊN THUỐC */}

      <TextInput
        style={styles.input}
        placeholder="Tên thuốc"
        value={tenThuoc}
        onChangeText={setTenThuoc}
      />

      {/* GIÁ THUỐC */}

      <TextInput
        style={styles.input}
        placeholder="Giá thuốc"
        value={gia}
        onChangeText={setGia}
        keyboardType="numeric"
      />

      {/* NÚT THÊM */}

      <Pressable
        style={styles.addButton}
        onPress={handleAddMedicine}
      >
        <Text style={styles.buttonText}>
          + Thêm thuốc
        </Text>
      </Pressable>

      {/* DANH SÁCH THUỐC */}

      {medicines.map((medicine) => (

        <Pressable
          key={medicine.id}
          style={styles.medicineItem}
          onPress={() => handleMedicinePress(medicine)}
        >

          <Text style={styles.medicineName}>
            💊 {medicine.tenThuoc}
          </Text>

          <Text style={styles.medicineInfo}>
            Mã thuốc: {medicine.maThuoc}
          </Text>

          <Text style={styles.medicineInfo}>
            Hoạt chất: {medicine.hoatChatChinh}
          </Text>

          <Text style={styles.medicineInfo}>
            Hàm lượng: {medicine.hamLuong}
          </Text>

          <Text style={styles.medicineInfo}>
            Giá: {medicine.gia}đ
          </Text>

        </Pressable>

      ))}

    </View>
  );
}

// =========================
// STYLE
// =========================

const styles = StyleSheet.create({

  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },

  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },

  input: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },

  addButton: {
    backgroundColor: '#2196F3',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 20,
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },

  medicineItem: {
    backgroundColor: '#fff',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },

  medicineName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  medicineInfo: {
    fontSize: 15,
    color: '#666',
    marginBottom: 2,
  },

});