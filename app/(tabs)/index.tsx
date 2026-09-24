import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  StyleSheet,
  ScrollView,
} from 'react-native';

const MedicalHistoryScreen = () => {
  const [search, setSearch] = useState('');

  const medicalHistory = [
    {
      id: 1,
      doctor: 'BS. Nguyễn Thị Lan',
      specialty: 'Tim mạch',
      rating: 5,
      review: 'Bác sĩ tư vấn rõ ràng và rất tận tình.',
      date: '12/09/2026',
      time: '09:30',
      diagnosis: 'Rối loạn nhịp tim và tăng huyết áp',
      note: 'Tim đập nhanh, huyết áp cao, nhịp tim không đều',
      image:
        'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200',
    },
    {
      id: 2,
      doctor: 'BS. Trần Minh Anh',
      specialty: 'Nội tổng quát',
      rating: 4.8,
      review: 'Bác sĩ nhiệt tình và giải thích dễ hiểu.',
      date: '05/09/2026',
      time: '14:00',
      diagnosis: 'Cảm cúm thông thường',
      note: 'Bệnh nhân có triệu chứng sốt nhẹ, ho và đau họng.',
      image:
        'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200',
    },
    {
      id: 3,
      doctor: 'BS. Lê Thu Hà',
      specialty: 'Da liễu',
      rating: 4.5,
      review: 'Dịch vụ tốt, bác sĩ tư vấn rất tận tình.',
      date: '28/08/2026',
      time: '10:00',
      diagnosis: 'Dị ứng da',
      note: 'Dị ứng da nhẹ do các yếu tố từ môi trường.',
      image:
        'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?w=200',
    },
  ];

  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.title}>
            Medical History
          </Text>

          <Text style={styles.subtitle}>
            Theo dõi các lần khám của bạn
          </Text>
        </View>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>

      {/* SEARCH */}
      <View style={styles.searchBox}>
        <Text style={styles.searchIcon}>⌕</Text>

        <TextInput
          style={styles.searchInput}
          placeholder="Tìm kiếm lịch sử khám..."
          placeholderTextColor="#999"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      {/* TITLE */}
      <View style={styles.titleRow}>
        <Text style={styles.sectionTitle}>
          Medical Records
        </Text>

        <Text style={styles.totalText}>
          {medicalHistory.length} records    
        </Text>
      </View> 

      {/* LIST */}
      <ScrollView
        showsVerticalScrollIndicator={false} //ẩn thanh cuộn bên phải.
        contentContainerStyle={styles.list}
      >

        {medicalHistory.map((item) => (
          <View
            key={item.id}  //nhận biết từng phần tử trong danh sách
            style={styles.card}
          >

            {/* THÔNG TIN BÁC SĨ */}
            <View style={styles.doctorHeader}>

              <Image
                source={{ uri: item.image }}
                style={styles.doctorImage}
              />

              <View style={styles.doctorInfo}>
                <Text style={styles.doctorName}>
                  {item.doctor}
                </Text>

                <Text style={styles.specialty}>
                  {item.specialty}
                </Text>

                {/* ĐÁNH GIÁ SAO */}
                <View style={styles.ratingRow}>
                  <Text style={styles.star}>
                    ★
                  </Text>

                  <Text style={styles.ratingText}>
                    {item.rating}
                  </Text>
                </View>
              </View>

              <View style={styles.status}>
                <Text style={styles.statusText}>
                  Complete
                </Text>
              </View>

            </View>

            {/* NGÀY GIỜ */}
            <View style={styles.dateContainer}>

              <View style={styles.dateItem}>
                <Text style={styles.dateLabel}>
                  Date
                </Text>

                <Text style={styles.dateValue}>
                  {item.date}
                </Text>
              </View>

              <View style={styles.dateItem}>
                <Text style={styles.dateLabel}>
                  Time
                </Text>

                <Text style={styles.dateValue}>
                  {item.time}
                </Text>
              </View>

            </View>

            {/* CHẨN ĐOÁN */}
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>
                Diagnosis
              </Text>

              <Text style={styles.infoValue}>
                {item.diagnosis} 
              </Text>
            </View>

            {/* GHI CHÚ */}
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>
                Medical Notes
              </Text>

              <Text style={styles.note}>
                {item.note}
              </Text>
            </View>

            {/* YOUR REVIEW */}
            <View style={styles.reviewBox}>

              <View style={styles.reviewHeader}>

                <View>
                  <Text style={styles.reviewTitle}>
                    YOUR REVIEW
                  </Text>

                  <Text style={styles.reviewStars}>
                    {'★'.repeat(item.rating)}
                  </Text>
                </View>

                <View style={styles.reviewStatus}>
                  <Text style={styles.reviewStatusText}>
                    ✓ Reviewed
                  </Text>
                </View>

              </View>

              <Text style={styles.reviewText}>
                "{item.review}"
              </Text>

            </View>

            {/* BUTTON */}
            <Pressable
              style={({ pressed }) => [
                styles.button,
                pressed && styles.buttonPressed,
              ]}
            >
              <Text style={styles.buttonText}>
                View Medical Record
              </Text>
            </Pressable>

          </View>
        ))}

      </ScrollView>

    </View>
  );
};

export default MedicalHistoryScreen;

// Styles

const styles = StyleSheet.create({

  /* CONTAINER */

  container: { // toàn bộ màn hình
    flex: 1,
    backgroundColor: '#F4F7FB',
  },

  /* HEADER */

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 22,
    backgroundColor: '#FFFFFF',
  },

  headerContent: {
    flex: 1,
  },

  title: {
    fontSize: 25,
    fontWeight: '700',
    color: '#1E293B',
    
  },

  subtitle: {
    marginTop: 5,
    fontSize: 13,
    color: '#64748B',
  },

  headerImage: {
    width: 48,
    height: 48,
  },

  /* SEARCH */

  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',

    marginHorizontal: 20,
    marginTop: 16,

    height: 48,

    paddingHorizontal: 14,

    backgroundColor: '#FFFFFF',

    borderRadius: 10,

    borderWidth: 1,
    borderColor: '#E2E8F0',
  },

  searchIcon: {
    fontSize: 23,
    color: '#64748B',
    marginRight: 8,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: '#1E293B',
  },

  /* TITLE */

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    marginHorizontal: 20,
    marginTop: 22,
    marginBottom: 12,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1E293B',
    
  },

  totalText: {
    fontSize: 13,
    color: '#64748B',
  },

  /* LIST */

  list: {
    paddingHorizontal: 20,
    paddingBottom: 50,
  },

  /* CARD */

  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 15,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },

  /* DOCTOR */

  doctorHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  doctorImage: {
    width: 55,
    height: 55,
    borderRadius: 28,
    backgroundColor: '#E5E7EB',
  },

  doctorInfo: {
    flex: 1,
    marginLeft: 12,
  },

  doctorName: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1E293B',
  },

  specialty: {
    marginTop: 4,
    fontSize: 13,
    color: '#3B82F6',
  },

  /* RATING */

  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 3,
  },

  star: {
    fontSize: 13,
    color: '#F5B800',
  },

  ratingText: {
    marginLeft: 4,
    fontSize: 11,
    color: '#64748B',
    fontWeight: '600',
  },

  /* STATUS */

  status: {
    paddingHorizontal: 9,
    paddingVertical: 5,

    borderRadius: 6,

    backgroundColor: '#E8F5E9',
  },

  statusText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#2E7D32',
  },

  /* DATE */

  dateContainer: {
    flexDirection: 'row',

    marginTop: 15,

    paddingVertical: 11,

    borderTopWidth: 1, // tao duong vien
    borderBottomWidth: 1,

    borderColor: '#EEF2F6',
  },

  dateItem: {
    flex: 1,
  },

  dateLabel: {
    fontSize: 11,
    color: '#94A3B8',
  },

  dateValue: {
    marginTop: 4,
    fontSize: 13,
    fontWeight: '600',
    color: '#334155',
  },

  /* INFORMATION */

  infoBox: {
    marginTop: 14,
  },

  infoTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#64748B',

    marginBottom: 5,
  },

  infoValue: {
    fontSize: 14,
    fontWeight: '600',
    color: '#1E293B',
  },

  note: {
    fontSize: 13,
    lineHeight: 19,
    color: '#64748B',
  },

  /* YOUR REVIEW */

  reviewBox: {
    marginTop: 15,
    padding: 12,

    borderRadius: 10,

    backgroundColor: '#FFF9E8',
  },

  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },

  reviewTitle: {
    fontSize: 9,
    fontWeight: '700',
    color: '#A47B00',
  },

  reviewStars: {
    marginTop: 2,
    fontSize: 14,
    color: '#F5B800',
    letterSpacing: 1,
  },

  reviewStatus: {
    paddingHorizontal: 8,
    paddingVertical: 4,

    borderRadius: 8,

    backgroundColor: '#E8F5E9',
  },

  reviewStatusText: {
    fontSize: 9,
    fontWeight: '600',
    color: '#2E7D32',
  },

  reviewText: {
    marginTop: 6,

    fontSize: 11,
    fontStyle: 'italic',

    color: '#64748B',
  },

  /* BUTTON */

  button: {
    height: 43,

    marginTop: 15,

    borderRadius: 9,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#3B82F6',
  },

  buttonText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
  },

  buttonPressed: {
    opacity: 0.7,
  },

});