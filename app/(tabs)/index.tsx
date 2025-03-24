import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter } from 'lucide-react-native';

export default function HomeScreen() {
  const featuredCars = [
    {
      id: 1,
      title: '2023 Mercedes-Benz G-Class',
      price: 'AED 850,000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      location: 'Dubai',
    },
    {
      id: 2,
      title: '2024 BMW X7',
      price: 'AED 620,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      location: 'Abu Dhabi',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>UAE Cars</Text>
          <Text style={styles.subtitle}>Find your perfect car</Text>
        </View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#64748b" />
            <Text style={styles.searchText}>Search cars...</Text>
          </View>
          <Pressable style={styles.filterButton}>
            <Filter size={20} color="#2563eb" />
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Cars</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {featuredCars.map((car) => (
              <Pressable key={car.id} style={styles.carCard}>
                <Image source={{ uri: car.image }} style={styles.carImage} />
                <View style={styles.carInfo}>
                  <Text style={styles.carTitle}>{car.title}</Text>
                  <Text style={styles.carPrice}>{car.price}</Text>
                  <Text style={styles.carLocation}>{car.location}</Text>
                </View>
              </Pressable>
            ))}
          </ScrollView>
        </View>
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
  },
  title: {
    fontFamily: 'Cairo-Bold',
    fontSize: 32,
    color: '#1e293b',
  },
  subtitle: {
    fontFamily: 'Cairo-Regular',
    fontSize: 16,
    color: '#64748b',
    marginTop: 4,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 12,
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    gap: 8,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  searchText: {
    fontFamily: 'Cairo-Regular',
    color: '#94a3b8',
    flex: 1,
  },
  filterButton: {
    width: 48,
    height: 48,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#1e293b',
    marginBottom: 16,
  },
  carCard: {
    width: 280,
    backgroundColor: '#fff',
    borderRadius: 16,
    marginRight: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  carImage: {
    width: '100%',
    height: 180,
  },
  carInfo: {
    padding: 16,
  },
  carTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 16,
    color: '#1e293b',
  },
  carPrice: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#2563eb',
    marginTop: 4,
  },
  carLocation: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748b',
    marginTop: 4,
  },
});