import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const AdminFinanceScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Laporan Keuangan Warga</Text>
        <Text style={styles.headerSub}>Transparansi arus kas dan penggunaan dana lingkungan periode berjalan.</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.mainBalanceCard}>
          <Text style={styles.mainBalanceLabel}>TOTAL SALDO KAS LINGKUNGAN</Text>
          <Text style={styles.mainBalanceAmount}>Rp 45.850.000</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Ionicons name="arrow-down-circle" size={20} color="#4CAF50" />
              <Text style={styles.statLabel}>Pemasukan (Nov)</Text>
            </View>
            <Text style={styles.statAmount}>Rp 12.400.000</Text>
            <Text style={styles.statMeta}>70% dari target bulanan</Text>
          </View>
          <View style={styles.statCard}>
            <View style={styles.statHeader}>
              <Ionicons name="arrow-up-circle" size={20} color="#F44336" />
              <Text style={styles.statLabel}>Pengeluaran (Nov)</Text>
            </View>
            <Text style={styles.statAmount}>Rp 4.250.000</Text>
            <Text style={styles.statMeta}>35% dari anggaran bulanan</Text>
          </View>
        </View>

        {/* Mock Chart Area */}
        <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Arus Kas 6 Bulan Terakhir</Text>
            <View style={styles.chartMock}>
                <Text style={{color: '#999', textAlign: 'center'}}>Chart Visualization</Text>
            </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Transaksi Terbaru</Text>
          <TouchableOpacity><Text style={styles.seeAll}>Lihat Semua</Text></TouchableOpacity>
        </View>

        <View style={styles.transactionList}>
          {[
            { id: 1, title: 'Iuran Bulanan Warga', date: '12 Nov 2023', type: 'Pemasukan', amount: '+ Rp 2.500.000', isIncome: true },
            { id: 2, title: 'Perbaikan Lampu Jalan', date: '10 Nov 2023', type: 'Pengeluaran', amount: '- Rp 250.000', isIncome: false },
            { id: 3, title: 'Biaya Kebersihan Lingkungan', date: '05 Nov 2023', type: 'Pengeluaran', amount: '- Rp 1.200.000', isIncome: false },
            { id: 4, title: 'Donasi Acara 17 Agustus', date: '01 Nov 2023', type: 'Pemasukan', amount: '+ Rp 5.000.000', isIncome: true },
          ].map((tx) => (
            <View key={tx.id} style={styles.transactionItem}>
              <View style={[styles.txIcon, { backgroundColor: tx.isIncome ? '#E8F5E9' : '#FFEBEE' }]}>
                <Ionicons name={tx.isIncome ? "arrow-down" : "arrow-up"} size={20} color={tx.isIncome ? "#4CAF50" : "#F44336"} />
              </View>
              <View style={styles.txContent}>
                <Text style={styles.txTitle}>{tx.title}</Text>
                <Text style={styles.txDate}>{tx.date} • {tx.type}</Text>
              </View>
              <Text style={[styles.txAmount, { color: tx.isIncome ? '#4CAF50' : '#F44336' }]}>{tx.amount}</Text>
            </View>
          ))}
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
  mainBalanceCard: { backgroundColor: '#0066CC', borderRadius: 12, padding: 20, marginBottom: 16, alignItems: 'center' },
  mainBalanceLabel: { color: '#E0F0FF', fontSize: 12, fontWeight: 'bold', marginBottom: 8 },
  mainBalanceAmount: { color: '#fff', fontSize: 32, fontWeight: 'bold' },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: { width: '48%', backgroundColor: '#fff', borderRadius: 12, padding: 16, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  statHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  statLabel: { fontSize: 12, color: '#666', marginLeft: 6 },
  statAmount: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  statMeta: { fontSize: 10, color: '#999' },
  chartContainer: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 20 },
  chartTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 16 },
  chartMock: { height: 150, backgroundColor: '#F9F9F9', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#333' },
  seeAll: { fontSize: 14, color: '#0066CC', fontWeight: '500' },
  transactionList: { backgroundColor: '#fff', borderRadius: 12, padding: 16 },
  transactionItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 16, paddingBottom: 16, borderBottomWidth: 1, borderBottomColor: '#F0F0F0' },
  txIcon: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  txContent: { flex: 1 },
  txTitle: { fontSize: 14, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  txDate: { fontSize: 12, color: '#999' },
  txAmount: { fontSize: 14, fontWeight: 'bold' }
});

export default AdminFinanceScreen;
