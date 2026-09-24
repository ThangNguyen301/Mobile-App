import {Stack} from 'expo-router';

export default function StudentLayout() {
    return (
        <Stack>
            <Stack.Screen 
                    name="index"
                    options = {{
                        title: 'Danh sach sinh vien',   
                    }} />
                    <Stack.Screen
                    name="detail"
                    options = {{
                        title: 'Chi tiet sinh vien',   
                    }} />
        </Stack>
    );

}