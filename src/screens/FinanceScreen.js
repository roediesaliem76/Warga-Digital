import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const FinanceScreen = () => {
  const history = [
    { id: 1, title: 'Iuran Ke...', date: '05 Mar 2024, 09:12 WIB', amount: 'Rp 150.000', status: 'Berhasil', isSuccess: true },
    { id: 2, title: 'Iuran Ke...', date: '02 Feb 2024, 14:30 WIB', amount: 'Rp 150.000', status: 'Berhasil', isSuccess: true },
    { id: 3, title: 'Sumbangan...', date: '10 Aug 2023, 11:05 WIB', amount: 'Rp 50.000', status: 'Menunggu', isSuccess: false },
    { id: 4, title: 'Iuran Ke...', date: '04 Jan 2024, 08:20 WIB', amount: 'Rp 150.000', status: 'Berhasil', isSuccess: true },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Riwayat Iuran</Text>
        <View style={{ width: 24 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.summaryCard}>
          <Text style={styles.summaryLabel}>Iuran Tahun Ini</Text>
          <Text style={styles.summaryAmount}>Rp 1.800.000</Text>
          <View style={styles.statusBadge}>
            <Text style={styles.statusText}>Status Terkini</Text>
            <Text style={styles.statusValue}>Lunas (Jan - Mar 2024)</Text>
          </View>
        </View>

        <View style={styles.filterTabs}>
          <TouchableOpacity style={[styles.tab, styles.activeTab]}>
            <Text style={[styles.tabText, styles.activeTabText]}>Berhasil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>Menunggu Verifikasi</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyList}>
          {history.map((item) => (
            <View key={item.id} style={styles.historyItem}>
              <View style={[styles.iconContainer, { backgroundColor: item.isSuccess ? '#E8F5E9' : '#FFF3E0' }]}>
                 <Ionicons name={item.isSuccess ? "checkmark-circle" : "time"} size={24} color={item.isSuccess ? "#4CAF50" : "#FF9800"} />
              </View>
              <View style={styles.historyContent}>
                <Text style={styles.historyTitle}>{item.title}</Text>
                <Text style={styles.historyDate}>{item.date}</Text>
                <Text style={[styles.historyStatus, { color: item.isSuccess ? '#4CAF50' : '#FF9800' }]}>{item.status}</Text>
              </View>
              <Text style={styles.historyAmount}>{item.amount}</Text>
            </View>
          ))}
        </View>

        <TouchableOpacity style={styles.loadMoreBtn}>
            <Text style={styles.loadMoreText}>Muat Lebih Banyak</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  backButton: { padding: 4 },
  scrollContent: { padding: 20 },
  summaryCard: { backgroundColor: '#0066CC', borderRadius: 16, padding: 20, marginBottom: 20 },
  summaryLabel: { color: '#E0F0FF', fontSize: 14, marginBottom: 8 },
  summaryAmount: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginBottom: 16 },
  statusBadge: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 12, borderRadius: 8 },
  statusText: { color: '#E0F0FF', fontSize: 12, marginBottom: 4 },
  statusValue: { color: '#fff', fontSize: 14, fontWeight: 'bold' },
  filterTabs: { flexDirection: 'row', marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 12, alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#E0E0E0' },
  activeTab: { borderBottomColor: '#0066CC' },
  tabText: { fontSize: 14, color: '#666', fontWeight: '500' },
  activeTabText: { color: '#0066CC', fontWeight: 'bold' },
  historyList: { backgroundColor: '#fff', borderRadius: 12, padding: 16 },
  historyItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  iconContainer: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  historyContent: { flex: 1 },
  historyTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  historyDate: { fontSize: 12, color: '#666', marginBottom: 4 },
  historyStatus: { fontSize: 12, fontWeight: '500' },
  historyAmount: { fontSize: 14, fontWeight: 'bold', color: '#333' },
  loadMoreBtn: { marginTop: 20, alignItems: 'center', padding: 15 },
  loadMoreText: { color: '#0066CC', fontWeight: 'bold' }
});

export default FinanceScreen;
