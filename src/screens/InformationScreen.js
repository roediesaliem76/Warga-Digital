import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const InformationScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [pushNotification, setPushNotification] = useState(false);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Buat Informasi Warga</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subText}>Terbitkan pengumuman penting atau kegiatan terbaru untuk warga komunitas.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Judul Informasi</Text>
          <TextInput
            style={styles.input}
            placeholder="Contoh: Jadwal Kerja Bakti RT 04"
            value={title}
            onChangeText={setTitle}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Kategori</Text>
          <View style={styles.pickerContainer}>
            <Text style={styles.pickerText}>Pilih Kategori</Text>
            <Ionicons name="chevron-down" size={20} color="#666" />
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Isi Berita</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tuliskan detail informasi di sini..."
            multiline
            numberOfLines={6}
            value={content}
            onChangeText={setContent}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Unggah Gambar/Poster</Text>
          <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.uploadedImage} />
            ) : (
              <>
                <Ionicons name="image-outline" size={32} color="#0066CC" />
                <Text style={styles.uploadText}>Klik untuk unggah atau seret file</Text>
                <Text style={styles.uploadSubText}>SVG, PNG, JPG (Maks. 5MB)</Text>
              </>
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.notificationToggle}>
          <View>
            <Text style={styles.toggleTitle}>Notifikasi ke Warga</Text>
            <Text style={styles.toggleSub}>Munculkan push notification di HP warga</Text>
          </View>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={pushNotification ? '#0066CC' : '#f4f3f4'}
            onValueChange={setPushNotification}
            value={pushNotification}
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={[styles.footerBtn, styles.draftBtn]}>
          <Text style={styles.draftBtnText}>Simpan sebagai Draf</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.footerBtn, styles.publishBtn]}>
          <Text style={styles.publishBtnText}>Terbitkan Informasi</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  backButton: { padding: 4 },
  scrollContent: { padding: 20 },
  subText: { fontSize: 14, color: '#666', marginBottom: 24, lineHeight: 20 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 14, fontSize: 14, backgroundColor: '#FAFAFA' },
  pickerContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 14, backgroundColor: '#FAFAFA' },
  pickerText: { fontSize: 14, color: '#666' },
  textArea: { height: 120, textAlignVertical: 'top' },
  uploadArea: { borderWidth: 1, borderStyle: 'dashed', borderColor: '#0066CC', borderRadius: 12, padding: 24, alignItems: 'center', backgroundColor: '#F0F8FF' },
  uploadText: { fontSize: 14, color: '#333', fontWeight: '500', marginTop: 12, textAlign: 'center' },
  uploadSubText: { fontSize: 12, color: '#999', marginTop: 4 },
  uploadedImage: { width: '100%', height: 150, borderRadius: 8, resizeMode: 'cover' },
  notificationToggle: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 16, borderTopWidth: 1, borderTopColor: '#eee' },
  toggleTitle: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  toggleSub: { fontSize: 12, color: '#666', marginTop: 4 },
  footer: { flexDirection: 'row', padding: 20, borderTopWidth: 1, borderTopColor: '#eee', backgroundColor: '#fff', gap: 12 },
  footerBtn: { flex: 1, paddingVertical: 14, borderRadius: 8, alignItems: 'center', justifyContent: 'center' },
  draftBtn: { backgroundColor: '#F5F5F5', borderWidth: 1, borderColor: '#ddd' },
  draftBtnText: { color: '#666', fontWeight: 'bold' },
  publishBtn: { backgroundColor: '#0066CC' },
  publishBtnText: { color: '#fff', fontWeight: 'bold' }
});

export default InformationScreen;
