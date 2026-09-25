import {Stack} from 'expo-router';

export default function StudentLayout() {
    return (
        <Stack>
            <Stack.Screen 
                    name="index"
                    options = {{
                        title: 'Danh sach thuốc',   
                    }} />
                    <Stack.Screen
                    name="detail"
                    options = {{
                        title: 'Chi tiết thuốc',   
                    }} />
        </Stack>
    );

}