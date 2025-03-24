import { View, Text, StyleSheet, ScrollView, Pressable, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Globe, Facebook, Shield, LogOut } from 'lucide-react-native';

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Settings</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Notifications</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Bell size={24} color="#64748b" />
              <Text style={styles.settingText}>Push Notifications</Text>
            </View>
            <Switch />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facebook Integration</Text>
          <Pressable style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Facebook size={24} color="#64748b" />
              <Text style={styles.settingText}>Connect Facebook Pages</Text>
            </View>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Region</Text>
          <Pressable style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Globe size={24} color="#64748b" />
              <Text style={styles.settingText}>Emirates</Text>
            </View>
            <Text style={styles.settingValue}>Dubai</Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <Pressable style={styles.settingItem}>
            <View style={styles.settingInfo}>
              <Shield size={24} color="#64748b" />
              <Text style={styles.settingText}>Privacy Settings</Text>
            </View>
          </Pressable>
        </View>

        <Pressable style={[styles.settingItem, styles.logoutButton]}>
          <View style={styles.settingInfo}>
            <LogOut size={24} color="#ef4444" />
            <Text style={[styles.settingText, styles.logoutText]}>Log Out</Text>
          </View>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 32,
    color: '#1e293b',
  },
  content: {
    flex: 1,
  },
  section: {
    marginTop: 24,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#64748b',
    marginBottom: 8,
    paddingHorizontal: 20,
  },
  settingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  settingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  settingText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#1e293b',
  },
  settingValue: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#64748b',
  },
  logoutButton: {
    marginTop: 24,
  },
  logoutText: {
    color: '#ef4444',
  },
});