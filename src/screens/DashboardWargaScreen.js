import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DashboardWargaScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Halo, Budi</Text>
            <Text style={styles.subtitle}>Warga RT 04 / RW 02</Text>
          </View>
          <TouchableOpacity style={styles.notificationIcon}>
            <Ionicons name="notifications-outline" size={24} color="#333" />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>3</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Important Notice */}
        <View style={styles.noticeCard}>
          <View style={styles.noticeHeader}>
            <Ionicons name="warning" size={20} color="#FFA500" />
            <Text style={styles.noticeTitle}>Penting</Text>
          </View>
          <Text style={styles.noticeHeadline}>Jadwal Fogging Mingguan</Text>
          <Text style={styles.noticeText} numberOfLines={3}>
            Pemberitahuan kepada seluruh warga, fogging rutin akan dilaksanakan pada hari Sabtu, 15 Juli 2024 mulai pukul 08:00 WIB. Mohon untuk menutup makanan dan minuman serta menjaga hewan peliharaan.
          </Text>
          <TouchableOpacity>
            <Text style={styles.readMore}>Baca Selengkapnya »</Text>
          </TouchableOpacity>
        </View>

        {/* Quick Actions */}
        <View style={styles.actionsContainer}>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Report')}>
            <View style={[styles.iconCircle, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="megaphone-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Lapor{'\n'}Kejadian</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Report')}>
            <View style={[styles.iconCircle, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="document-text-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Minta{'\n'}Surat</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton} onPress={() => navigation.navigate('Finances')}>
            <View style={[styles.iconCircle, { backgroundColor: '#E6F0FA' }]}>
              <Ionicons name="card-outline" size={24} color="#0066CC" />
            </View>
            <Text style={styles.actionText}>Bayar{'\n'}Iuran</Text>
          </TouchableOpacity>
        </View>

        {/* Dues Status */}
        <View style={styles.duesCard}>
          <View style={styles.duesHeader}>
            <Ionicons name="wallet-outline" size={20} color="#333" />
            <Text style={styles.duesTitle}>Status Iuran</Text>
          </View>
          <View style={styles.progressContainer}>
            <Text style={styles.progressPercentage}>75%</Text>
            <View style={styles.progressBarBg}>
              <View style={[styles.progressBarFill, { width: '75%' }]} />
            </View>
          </View>
          <View style={styles.duesDetails}>
            <View style={styles.duesDetailItem}>
              <View style={[styles.dot, { backgroundColor: '#4CAF50' }]} />
              <Text style={styles.duesDetailText}>Sudah Bayar</Text>
              <Text style={styles.duesDetailAmount}>Rp 150.000</Text>
            </View>
            <View style={styles.duesDetailItem}>
              <View style={[styles.dot, { backgroundColor: '#E0E0E0' }]} />
              <Text style={styles.duesDetailText}>Belum Bayar</Text>
              <Text style={styles.duesDetailAmount}>Rp 50.000</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.payButton} onPress={() => navigation.navigate('Finances')}>
            <Text style={styles.payButtonText}>Bayar Sekarang</Text>
            <Ionicons name="arrow-forward" size={16} color="#fff" />
          </TouchableOpacity>
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
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  notificationIcon: {
    position: 'relative',
    padding: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  badge: {
    position: 'absolute',
    top: 4,
    right: 6,
    backgroundColor: '#FF3B30',
    borderRadius: 8,
    minWidth: 16,
    height: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
    fontWeight: 'bold',
  },
  noticeCard: {
    backgroundColor: '#FFF9E6',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#FFE082',
  },
  noticeHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  noticeTitle: {
    color: '#FFA500',
    fontWeight: 'bold',
    marginLeft: 8,
    fontSize: 14,
  },
  noticeHeadline: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  noticeText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 12,
  },
  readMore: {
    color: '#0066CC',
    fontWeight: 'bold',
    fontSize: 14,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  actionButton: {
    alignItems: 'center',
    width: '30%',
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
    fontWeight: '500',
  },
  duesCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  duesHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  duesTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  progressPercentage: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0066CC',
    marginRight: 12,
  },
  progressBarBg: {
    flex: 1,
    height: 8,
    backgroundColor: '#E0E0E0',
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 4,
  },
  duesDetails: {
    marginBottom: 20,
  },
  duesDetailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  duesDetailText: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  duesDetailAmount: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  payButton: {
    flexDirection: 'row',
    backgroundColor: '#0066CC',
    borderRadius: 8,
    padding: 14,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
    marginRight: 8,
  },
});

export default DashboardWargaScreen;
