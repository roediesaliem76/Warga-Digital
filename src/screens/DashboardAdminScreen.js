import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardAdminScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.avatar}>
              <Ionicons name="person" size={20} color="#fff" />
            </View>
            <View>
              <Text style={styles.greeting}>ADMIN RT 04</Text>
              <Text style={styles.subtitle}>Pak Anton</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.settingsIcon}>
            <Ionicons name="settings-outline" size={24} color="#333" />
          </TouchableOpacity>
        </View>

        {/* Stats Row */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Text style={styles.statLabel}>Total Warga</Text>
            <Text style={styles.statValue}>128</Text>
            <Text style={styles.statSubText}>+3 bulan ini</Text>
          </View>
          <TouchableOpacity
            style={[styles.statCard, { backgroundColor: '#FFF0F0', borderColor: '#FFD6D6', borderWidth: 1 }]}
            onPress={() => navigation.navigate('AdminValidations')}
          >
            <Text style={styles.statLabel}>Validasi Pending</Text>
            <Text style={[styles.statValue, { color: '#FF3B30' }]}>5</Text>
            <Text style={[styles.statSubText, { color: '#FF3B30' }]}>Butuh tindakan segera</Text>
          </TouchableOpacity>
        </View>

        {/* Balance Card */}
        <View style={styles.balanceCard}>
          <View style={styles.balanceHeader}>
            <Text style={styles.balanceLabel}>Saldo Kas RT</Text>
            <Ionicons name="wallet-outline" size={20} color="#fff" />
          </View>
          <Text style={styles.balanceAmount}>Rp 45.850.000</Text>
          <Text style={styles.balanceUpdate}>Terakhir update: Kemarin</Text>
        </View>

        {/* Quick Actions */}
        <Text style={styles.sectionTitle}>Aksi Cepat</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('AdminValidations')}>
            <View style={[styles.actionIconBg, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="checkmark-circle-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Validasi{'\n'}Warga</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('InputFinance')}>
            <View style={[styles.actionIconBg, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="cash-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Input{'\n'}Keuangan</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('Information')}>
            <View style={[styles.actionIconBg, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="megaphone-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Buat{'\n'}Berita</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionItem} onPress={() => navigation.navigate('AdminReports')}>
            <View style={[styles.actionIconBg, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="document-text-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Laporan{'\n'}Masuk</Text>
          </TouchableOpacity>
        </View>

        {/* Recent Reports */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Laporan Terbaru</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllText}>Lihat Semua</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.reportList}>
          <View style={styles.reportItem}>
            <View style={[styles.reportIcon, { backgroundColor: '#FFF0F0' }]}>
              <Ionicons name="bulb-outline" size={20} color="#FF3B30" />
            </View>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>Lampu Jalan Mati di...</Text>
              <Text style={styles.reportDesc} numberOfLines={2}>Mohon perbaikan lampu jalan utama di depan pos satpam Blok C, sudah...</Text>
              <Text style={styles.reportMeta}>Infrastruktur • Pending</Text>
            </View>
            <Text style={styles.reportTime}>2m lalu</Text>
          </View>

          <View style={styles.reportItem}>
            <View style={[styles.reportIcon, { backgroundColor: '#F0F8FF' }]}>
              <Ionicons name="document-outline" size={20} color="#0066CC" />
            </View>
            <View style={styles.reportContent}>
              <Text style={styles.reportTitle}>Izin Acara Syukuran...</Text>
              <Text style={styles.reportDesc} numberOfLines={2}>Mengajukan izin penggunaan fasilitas lapangan basket untuk acara...</Text>
              <Text style={styles.reportMeta}>Perizinan • Diproses</Text>
            </View>
            <Text style={styles.reportTime}>Kemarin</Text>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#0066CC',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  greeting: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 12,
    color: '#666',
  },
  settingsIcon: {
    padding: 8,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  statSubText: {
    fontSize: 10,
    color: '#4CAF50',
  },
  balanceCard: {
    backgroundColor: '#0066CC',
    borderRadius: 16,
    padding: 20,
    marginBottom: 24,
  },
  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  balanceLabel: {
    color: '#fff',
    fontSize: 14,
    opacity: 0.9,
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  balanceUpdate: {
    color: '#fff',
    fontSize: 12,
    opacity: 0.8,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 16,
  },
  seeAllText: {
    fontSize: 14,
    color: '#0066CC',
    fontWeight: '500',
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionItem: {
    width: '22%',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionIconBg: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    textAlign: 'center',
    fontSize: 11,
    color: '#333',
    fontWeight: '500',
  },
  reportList: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  reportItem: {
    flexDirection: 'row',
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    paddingBottom: 16,
  },
  reportIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  reportContent: {
    flex: 1,
  },
  reportTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  reportDesc: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
    lineHeight: 16,
  },
  reportMeta: {
    fontSize: 10,
    color: '#999',
    fontWeight: '500',
  },
  reportTime: {
    fontSize: 10,
    color: '#999',
  }
});

export default DashboardAdminScreen;
