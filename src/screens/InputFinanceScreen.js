import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const InputFinanceScreen = ({ navigation }) => {
  const [transactionType, setTransactionType] = useState('Pemasukan');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
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
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Input Laporan Keuangan</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.subText}>Catat rincian pemasukan atau pengeluaran kas komunitas.</Text>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Tipe Transaksi</Text>
          <View style={styles.typeSelector}>
            <TouchableOpacity
              style={[styles.typeButton, transactionType === 'Pemasukan' && styles.typeActive]}
              onPress={() => setTransactionType('Pemasukan')}
            >
              <Text style={[styles.typeText, transactionType === 'Pemasukan' && styles.typeActiveText]}>Pemasukan</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.typeButton, transactionType === 'Pengeluaran' && styles.typeActive]}
              onPress={() => setTransactionType('Pengeluaran')}
            >
              <Text style={[styles.typeText, transactionType === 'Pengeluaran' && styles.typeActiveText]}>Pengeluaran</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Jumlah (Rp)</Text>
          <TextInput
            style={styles.input}
            placeholder="Rp 0"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Tanggal</Text>
          <View style={styles.dateInputContainer}>
            <TextInput
                style={styles.dateInput}
                placeholder="dd/mm/yyyy"
                value={date}
                onChangeText={setDate}
            />
            <Ionicons name="calendar-outline" size={20} color="#666" style={styles.dateIcon}/>
          </View>
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Keterangan</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Tuliskan detail transaksi..."
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View style={styles.formGroup}>
          <Text style={styles.label}>Lampiran Bukti (Opsional)</Text>
          <TouchableOpacity style={styles.uploadArea} onPress={pickImage}>
            {image ? (
              <Image source={{ uri: image }} style={styles.uploadedImage} />
            ) : (
              <>
                <Ionicons name="cloud-upload-outline" size={32} color="#0066CC" />
                <Text style={styles.uploadText}>Upload foto nota atau bukti transfer</Text>
                <Text style={styles.uploadSubText}>.JPG, PNG, PDF hingga 5MB</Text>
              </>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitButtonText}>Simpan Transaksi</Text>
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
  subText: { fontSize: 14, color: '#666', marginBottom: 24 },
  formGroup: { marginBottom: 20 },
  label: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 8 },
  typeSelector: { flexDirection: 'row', backgroundColor: '#F5F7FA', borderRadius: 8, padding: 4 },
  typeButton: { flex: 1, paddingVertical: 12, alignItems: 'center', borderRadius: 6 },
  typeActive: { backgroundColor: '#fff', elevation: 2, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  typeText: { fontSize: 14, color: '#666', fontWeight: '500' },
  typeActiveText: { color: '#0066CC', fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 16, fontSize: 16, backgroundColor: '#F9F9F9' },
  dateInputContainer: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, backgroundColor: '#F9F9F9', paddingHorizontal: 16 },
  dateInput: { flex: 1, paddingVertical: 16, fontSize: 16 },
  dateIcon: { marginLeft: 10 },
  textArea: { height: 100, textAlignVertical: 'top' },
  uploadArea: { borderWidth: 1, borderStyle: 'dashed', borderColor: '#0066CC', borderRadius: 12, padding: 24, alignItems: 'center', backgroundColor: '#F0F8FF' },
  uploadText: { fontSize: 14, color: '#333', fontWeight: '500', marginTop: 12, textAlign: 'center' },
  uploadSubText: { fontSize: 12, color: '#999', marginTop: 4 },
  uploadedImage: { width: '100%', height: 150, borderRadius: 8, resizeMode: 'cover' },
  footer: { padding: 20, borderTopWidth: 1, borderTopColor: '#eee', backgroundColor: '#fff' },
  submitButton: { backgroundColor: '#0066CC', borderRadius: 8, paddingVertical: 16, alignItems: 'center' },
  submitButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' }
});

export default InputFinanceScreen;
