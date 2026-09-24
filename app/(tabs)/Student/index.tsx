// screen, router , navigation
import {View, Text,Pressable,StyleSheet} from 'react-native';
import {router} from 'expo-router';

interface Student {
    id: number;
    name: string;
    mssv?: number;
    lop: string;      
}

export default function StudentListScreen() { 
    const students= [ // khai báo mảng sinh viên
        { id: 1, name: 'Nguyen Van A', mssv: 123456, lop: 'CNTT K63' },
        { id: 2, name: 'Tran Thi B', mssv: 123457, lop: 'CNTT K63' },
        { id: 3, name: 'Le Van C', lop: 'CNTT K63' }
    ];

    const handleStudentPress = (student: Student) => { // dinh nghia ham chuyen trang
        router.push({
            pathname: '/(tabs)/Student/Student_Detail',
            params: {
                id: student.id.toString(),
                name: student.name,
                mssv: student.mssv?.toString(),
                lop: student.lop,
            },
        });
    }

    return (
        <View style={styles.container}> 
            {students.map((student) => (     //lấy từng phần tử trong mảng → xử lý phần tử đó → trả về một mảng mớ
                <Pressable
                    key={student.id}  // phan biet tung phan tu trong mang bang  id
                    style={styles.studentItem} 
                    onPress={() => handleStudentPress(student)} // chuyen trang 
                >
                    <Text style={styles.StudentName}>{student.name}</Text>
                    <Text style={styles.StudentInfo}>MSSV: {student.mssv}</Text>
                </Pressable>
            ))}
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    studentItem: {
        backgroundColor: '#fff',
        padding: 16,
        marginBottom: 12,
        borderRadius: 8,
    },
    StudentName: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    StudentInfo: {
        fontSize: 16,
        color: '#666',
    },
});
