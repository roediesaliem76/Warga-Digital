import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (role) => {
    if (role === 'admin') {
      navigation.replace('MainTabs');
    } else {
      navigation.replace('WargaDashboard');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
        </View>

        <Text style={styles.welcomeText}>Masuk ke komunitas Anda</Text>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email atau Nomor Ponsel</Text>
          <TextInput
            style={styles.input}
            placeholder="Masukkan email atau nomor"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordHeader}>
            <Text style={styles.label}>Kata Sandi</Text>
            <TouchableOpacity>
              <Text style={styles.forgotText}>Lupa?</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Masukkan kata sandi"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => handleLogin('warga')}>
          <Text style={styles.loginButtonText}>Masuk sebagai Warga</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.loginButton, {backgroundColor: '#333'}]} onPress={() => handleLogin('admin')}>
          <Text style={styles.loginButtonText}>Masuk sebagai Admin</Text>
        </TouchableOpacity>

        <View style={styles.registerContainer}>
            <Text style={styles.registerText}>Belum punya akun? </Text>
            <TouchableOpacity onPress={() => {}}>
                <Text style={styles.registerLink}>Daftar</Text>
            </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { flex: 1, paddingHorizontal: 24, paddingTop: 60 },
  header: { alignItems: 'center', marginBottom: 40 },
  logo: { width: 200, height: 100 },
  welcomeText: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, color: '#333' },
  inputContainer: { marginBottom: 20 },
  passwordHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  label: { fontSize: 14, color: '#666', marginBottom: 8, fontWeight: '500' },
  forgotText: { fontSize: 14, color: '#0066cc', fontWeight: '500' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, fontSize: 16, backgroundColor: '#f9f9f9' },
  loginButton: { backgroundColor: '#0066cc', borderRadius: 8, padding: 16, alignItems: 'center', marginTop: 10 },
  loginButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  registerContainer: { flexDirection: 'row', justifyContent: 'center', marginTop: 20 },
  registerText: { color: '#666', fontSize: 14 },
  registerLink: { color: '#0066cc', fontSize: 14, fontWeight: 'bold' }
});

export default LoginScreen;
