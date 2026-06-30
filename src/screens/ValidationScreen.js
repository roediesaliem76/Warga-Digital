import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity, TextInput, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ValidationScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');

  const requests = [
    { id: 1, name: 'Siti Nurhaliza', block: 'Block A, No.12', time: '2 hours ago', avatar: null },
    { id: 2, name: 'Ahmad Subarjo', block: 'Block C, No.45', time: '5 hours ago', avatar: null },
    { id: 3, name: 'Dewi Lestari', block: 'Block B, No.08', time: '1 day ago', avatar: null },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Resident Validation</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.searchContainer}>
        <Ionicons name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search by name or block..."
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>PENDING REQUESTS</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>12 New</Text>
          </View>
        </View>

        {requests.map((req) => (
          <View key={req.id} style={styles.requestCard}>
            <View style={styles.requestInfo}>
              <View style={styles.avatarContainer}>
                <Ionicons name="person" size={24} color="#999" />
              </View>
              <View style={styles.requestDetails}>
                <Text style={styles.name}>{req.name}</Text>
                <View style={styles.locationRow}>
                  <Ionicons name="location-outline" size={14} color="#666" />
                  <Text style={styles.block}>{req.block}</Text>
                </View>
                <Text style={styles.time}>Submitted: {req.time}</Text>
              </View>
            </View>

            <View style={styles.actionButtons}>
              <TouchableOpacity style={[styles.actionBtn, styles.rejectBtn]}>
                <Ionicons name="close" size={20} color="#F44336" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.actionBtn, styles.approveBtn]}>
                <Ionicons name="checkmark" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F7FA' },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 20, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#eee' },
  headerTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  backButton: { padding: 4 },
  searchContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', margin: 20, marginBottom: 10, paddingHorizontal: 16, borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  searchIcon: { marginRight: 8 },
  searchInput: { flex: 1, paddingVertical: 12, fontSize: 14 },
  scrollContent: { padding: 20 },
  sectionHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: 'bold', color: '#666', letterSpacing: 1 },
  badge: { backgroundColor: '#E8F5E9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 12, marginLeft: 8 },
  badgeText: { color: '#4CAF50', fontSize: 10, fontWeight: 'bold' },
  requestCard: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginBottom: 12, elevation: 1, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2 },
  requestInfo: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 16 },
  avatarContainer: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#F0F0F0', justifyContent: 'center', alignItems: 'center', marginRight: 16 },
  requestDetails: { flex: 1 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 4 },
  locationRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  block: { fontSize: 12, color: '#666', marginLeft: 4 },
  time: { fontSize: 10, color: '#999' },
  actionButtons: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12, borderTopWidth: 1, borderTopColor: '#eee', paddingTop: 12 },
  actionBtn: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center' },
  rejectBtn: { backgroundColor: '#FFEBEE', borderWidth: 1, borderColor: '#FFCDD2' },
  approveBtn: { backgroundColor: '#4CAF50' }
});

export default ValidationScreen;
