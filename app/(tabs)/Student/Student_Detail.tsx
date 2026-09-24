import {View, Text, Pressable, StyleSheet} from 'react-native';
import {Stack,useLocalSearchParams,router} from 'expo-router';

export default function StudentDetailScreen() {
    const {id,name,mssv,lop} = useLocalSearchParams<
    {id:string,name:string,mssv:string,lop:string}>();
    return (
        <View style={styles.container}>
            <Stack.Screen
                options={{
                    title: 'Chi tiet sinh vien',
                }}
            />
            <Text style={styles.title}>Thong tin sinh vien</Text>
            <Text style={styles.info}>Name: {name?? 'Khong co thong tin'}</Text>
            <Text style={styles.info}>MSSV: {mssv?? 'Khong co thong tin'}</Text>
            <Text style={styles.info}>Lớp: {lop?? 'Khong co thong tin'}</Text>
            <Pressable style={styles.backbutton} onPress={()=>router.back()}> 
                <Text style={styles.backbuttonText}>Quay lai</Text> 
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