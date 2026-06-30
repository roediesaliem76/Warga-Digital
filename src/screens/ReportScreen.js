import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ReportScreen = ({ navigation }) => {
  const [category, setCategory] = useState('Pengaduan');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState(null);

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
        <Text style={styles.headerTitle}>Pusat Layanan</Text>
        <Text style={styles.headerSub}>Sampaikan pengaduan atau ajukan permohonan surat RT/RW dengan mudah.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Buat Laporan Baru</Text>

          <Text style={styles.label}>KATEGORI</Text>
          <View style={styles.categoryRow}>
            <TouchableOpacity
              style={[styles.categoryBtn, category === 'Pengaduan' && styles.categoryBtnActive]}
              onPress={() => setCategory('Pengaduan')}
            >
              <Text style={[styles.categoryText, category === 'Pengaduan' && styles.categoryTextActive]}>Pengaduan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryBtn, category === 'Surat Pengantar' && styles.categoryBtnActive]}
              onPress={() => setCategory('Surat Pengantar')}
            >
              <Text style={[styles.categoryText, category === 'Surat Pengantar' && styles.categoryTextActive]}>Surat Pengantar</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.categoryBtn, category === 'Iuran/Tagihan' && styles.categoryBtnActive]}
              onPress={() => setCategory('Iuran/Tagihan')}
            >
              <Text style={[styles.categoryText, category === 'Iuran/Tagihan' && styles.categoryTextActive]}>Iuran/Tagihan</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.label}>DETAIL</Text>
          <TextInput
            style={styles.textArea}
            placeholder="Jelaskan masalah atau keperluan Anda secara singkat..."
            multiline
            numberOfLines={4}
            value={details}
            onChangeText={setDetails}
          />

          <Text style={styles.label}>LAMPIRAN (OPSIONAL)</Text>
          <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.uploadedImage} />
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={32} color="#0066CC" />
                <Text style={styles.uploadText}>Upload Foto, Bukti Bayar, atau KTP</Text>
                <Text style={styles.uploadSubText}>Maks. 5MB (JPG, PNG, PDF)</Text>
              </>
            )}
          </TouchableOpacity>

          <TouchableOpacity style={styles.submitBtn}>
              <Text style={styles.submitBtnText}>Kirim Laporan</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Status Permohonan</Text>
          <TouchableOpacity><Text style={styles.seeAll}>Lihat Semua</Text></TouchableOpacity>
        </View>

        <View style={styles.historyList}>
          <View style={styles.historyItem}>
            <View style={[styles.historyIcon, { backgroundColor: '#FFF3E0' }]}>
              <Ionicons name="bulb-outline" size={20} color="#FF9800" />
            </View>
            <View style={styles.historyContent}>
              <Text style={styles.historyTitle}>Lampu Jalan Padam</Text>
              <Text style={styles.historyDesc} numberOfLines={1}>Jl. Merdeka Blok C no 12</Text>
              <Text style={styles.historyDate}>Dilaporkan: 2 hari yang lalu</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: '#FFF3E0' }]}>
              <Text style={[styles.statusText, { color: '#FF9800' }]}>Diproses</Text>
            </View>
          </View>

          <View style={styles.historyItem}>
            <View style={[styles.historyIcon, { backgroundColor: '#E8F5E9' }]}>
              <Ionicons name="document-text-outline" size={20} color="#4CAF50" />
            </View>
            <View style={styles.historyContent}>
              <Text style={styles.historyTitle}>Surat Pengantar Domisili</Text>
              <Text style={styles.historyDesc} numberOfLines={1}>Keperluan pembuatan rekening</Text>
              <Text style={styles.historyDate}>Selesai: 14 Okt 2023</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: '#E8F5E9' }]}>
              <Text style={[styles.statusText, { color: '#4CAF50' }]}>Selesai</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  headerSub: { fontSize: 14, color: '#666', lineHeight: 20 },
  scrollContent: { padding: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 24, elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 16 },
  label: { fontSize: 12, fontWeight: 'bold', color: '#666', marginBottom: 8, marginTop: 12 },
  categoryRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  categoryBtn: { paddingVertical: 8, paddingHorizontal: 12, borderRadius: 20, borderWidth: 1, borderColor: '#ddd', backgroundColor: '#fff', marginRight: 8, marginBottom: 8 },
  categoryBtnActive: { backgroundColor: '#0066CC', borderColor: '#0066CC' },
  categoryText: { fontSize: 12, color: '#666', fontWeight: '500' },
  categoryTextActive: { color: '#fff' },
  textArea: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 14, backgroundColor: '#F9F9F9', height: 100, textAlignVertical: 'top' },
  uploadArea: { borderWidth: 1, borderStyle: 'dashed', borderColor: '#ccc', borderRadius: 12, padding: 20, alignItems: 'center', backgroundColor: '#FAFAFA' },
  uploadText: { fontSize: 14, color: '#333', fontWeight: '500', marginTop: 8, textAlign: 'center' },
  uploadSubText: { fontSize: 12, color: '#999', marginTop: 4 },
  uploadedImage: { width: '100%', height: 120, borderRadius: 8, resizeMode: 'cover' },
  submitBtn: { backgroundColor: '#0066CC', borderRadius: 8, paddingVertical: 14, alignItems: 'center', marginTop: 20 },
  submitBtnText: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  seeAll: { fontSize: 14, color: '#0066CC', fontWeight: '500' },
  historyList: { backgroundColor: '#fff', borderRadius: 12, padding: 16 },
  historyItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  historyIcon: { width: 40, height: 40, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  historyContent: { flex: 1 },
  historyTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  historyDesc: { fontSize: 12, color: '#666', marginBottom: 4 },
  historyDate: { fontSize: 10, color: '#999' },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12 },
  statusText: { fontSize: 10, fontWeight: 'bold' }
});

export default ReportScreen;
