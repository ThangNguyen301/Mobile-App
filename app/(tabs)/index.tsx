import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.flexOne}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* 1. Header Logo & Slogan */}
          <View style={styles.headerContainer}>
            <View style={styles.logoRow}>
              {/* Bạn hãy thay link ảnh logo của bạn vào đây */}
              {/* 1. Header Logo */}
          <Image
            source={require('../../assets/images/logo.png')} // Chỉnh lại đường dẫn tới file logo của bạn
            style={styles.logoImage}
            resizeMode="contain"
          />
              <Text style={styles.logoText}>HEALTH APPOINTMENT</Text>
            </View>
            <Text style={styles.subLogoText}>Đặt lịch khám chữa bệnh</Text>
          </View>

          {/* 2. Tiêu đề WELCOME */}
          <Text style={styles.welcomeText}>WELCOME !</Text>

          {/* 3. Banner Minh Họa */}
          <View style={styles.bannerContainer}>
            {/* Thay link hình ảnh bác sĩ và em bé của bạn vào đây */}
            {/* 3. Banner Minh Họa */}
            <Image
              source={require('../../assets/images/Login.png')} // Chỉnh lại đường dẫn tới file Login.png của bạn
              style={styles.bannerImage}
              resizeMode="contain"
            />
          </View>

          {/* 4. Form Nhập Liệu */}
          <View style={styles.formContainer}>
            {/* Ô nhập Username / Email / SĐT */}
            <View style={styles.inputGroup}>
              <TextInput
                style={styles.input}
                placeholder="Username, Email or Phone Number"
                placeholderTextColor="#8C7063"
                value={username}
                onChangeText={setUsername}
              />
            </View>

            {/* Ô nhập Password */}
            <View style={styles.inputGroup}>
              <View style={styles.passwordRow}>
                <TextInput
                  style={[styles.input, styles.passwordInput]}
                  placeholder="Password"
                  placeholderTextColor="#8C7063"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <Pressable
                  onPress={() => setShowPassword(!showPassword)}
                  style={styles.eyeIconContainer}
                >
                  <Text style={styles.eyeIcon}>{showPassword ? '👁️' : '👁️‍🗨️'}</Text>
                </Pressable>
              </View>
            </View>

            {/* Remember Me & Forget Password */}
            <View style={styles.optionsRow}>
              <Pressable
                style={styles.checkboxContainer}
                onPress={() => setRememberMe(!rememberMe)}
              >
                <View
                  style={[
                    styles.checkbox,
                    rememberMe && styles.checkboxChecked,
                  ]}
                >
                  {rememberMe && <Text style={styles.checkmark}>✓</Text>}
                </View>
                <Text style={styles.optionText}>Remember Me</Text>
              </Pressable>

              <Pressable onPress={() => console.log('Forgot Password')}>
                <Text style={[styles.optionText, styles.underlineText]}>
                  Remember Me ?
                </Text>
              </Pressable>
            </View>

            {/* Nút Log In */}
            <View style={styles.buttonWrapper}>
              <Pressable
                style={({ pressed }) => [
                  styles.loginButton,
                  pressed && { opacity: 0.8 },
                ]}
                onPress={() => console.log('Log In Pressed')}
              >
                <Text style={styles.loginButtonText}>Log In</Text>
              </Pressable>
            </View>
          </View>

          {/* 5. Footer Register */}
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>
              Don't have an account?{' '}
              <Text
                style={styles.registerText}
                onPress={() => console.log('Register Pressed')}
              >
                Register
              </Text>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollContainer: {
    flexGrow: 1,
    paddingHorizontal: 30,
    paddingTop: 10,
    paddingBottom: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  /* Header Logo Style */
  headerContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logoImage: {
    width: 32,
    height: 32,
    marginRight: 6,
  },
  logoText: {
    fontSize: 16,
    fontWeight: '900',
    color: '#0084DB',
    letterSpacing: 0.5,
  },
  subLogoText: {
    fontSize: 12,
    color: '#0084DB',
    marginTop: 2,
    fontWeight: '500',
  },

  /* Title Welcome */
  welcomeText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0084DB',
    marginTop: 25,
    letterSpacing: 1,
  },

  /* Banner Image */
  bannerContainer: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 15,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
  },

  /* Form Style */
  formContainer: {
    width: '100%',
    marginTop: 10,
  },
  inputGroup: {
    marginBottom: 15,
    borderBottomWidth: 1.5,
    borderBottomColor: '#5C382C', // Màu đường gạch chân đậm
  },
  input: {
    height: 40,
    fontSize: 14,
    color: '#5C382C',
    paddingVertical: 5,
  },
  passwordRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  passwordInput: {
    flex: 1,
  },
  eyeIconContainer: {
    padding: 5,
  },
  eyeIcon: {
    fontSize: 16,
  },

  /* Remember & Forgot options */
  optionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 25,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 16,
    height: 16,
    borderWidth: 1.5,
    borderColor: '#5C382C',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    backgroundColor: '#5C382C',
  },
  checkmark: {
    color: '#FFF',
    fontSize: 10,
    fontWeight: 'bold',
  },
  optionText: {
    fontSize: 13,
    color: '#5C382C',
    fontWeight: '500',
  },
  underlineText: {
    textDecorationLine: 'underline',
  },

  /* Login Button */
  buttonWrapper: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginButton: {
    backgroundColor: '#F9C662', // Màu vàng lục giác
    borderWidth: 2,
    borderColor: '#5C382C', // Viền nâu đậm
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 45,
    alignItems: 'center',
    justifyContent: 'center',
    // Đổ bóng cho button
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  loginButtonText: {
    color: '#5C382C',
    fontSize: 16,
    fontWeight: 'bold',
  },

  /* Footer Style */
  footerContainer: {
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 13,
    color: '#5C382C',
  },
  registerText: {
    fontWeight: 'bold',
    color: '#5C382C',
  },
});