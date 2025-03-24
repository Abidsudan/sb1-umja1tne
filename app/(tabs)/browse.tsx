import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, Filter, MapPin } from 'lucide-react-native';

export default function BrowseScreen() {
  const cars = [
    {
      id: 1,
      title: '2023 Mercedes-Benz G-Class',
      price: 'AED 850,000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      location: 'Dubai',
      mileage: '1,500 km',
      year: '2023',
    },
    {
      id: 2,
      title: '2024 BMW X7',
      price: 'AED 620,000',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&q=80',
      location: 'Abu Dhabi',
      mileage: '500 km',
      year: '2024',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.searchBar}>
          <Search size={20} color="#64748b" />
          <Text style={styles.searchText}>Search cars...</Text>
        </View>
        <Pressable style={styles.filterButton}>
          <Filter size={20} color="#2563eb" />
        </Pressable>
      </View>

      <ScrollView style={styles.content}>
        {cars.map((car) => (
          <Pressable key={car.id} style={styles.carCard}>
            <Image source={{ uri: car.image }} style={styles.carImage} />
            <View style={styles.carInfo}>
              <Text style={styles.carTitle}>{car.title}</Text>
              <Text style={styles.carPrice}>{car.price}</Text>
              <View style={styles.carDetails}>
                <Text style={styles.carDetailText}>{car.year}</Text>
                <Text style={styles.carDetailText}>•</Text>
                <Text style={styles.carDetailText}>{car.mileage}</Text>
              </View>
              <View style={styles.locationContainer}>
                <MapPin size={16} color="#64748b" />
                <Text style={styles.locationText}>{car.location}</Text>
              </View>
            </View>
          </Pressable>
        ))}
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
    flexDirection: 'row',
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#fff',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f1f5f9',
    borderRadius: 12,
    padding: 12,
    gap: 8,
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
  content: {
    flex: 1,
    padding: 20,
  },
  carCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    marginBottom: 20,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  carImage: {
    width: '100%',
    height: 200,
  },
  carInfo: {
    padding: 16,
  },
  carTitle: {
    fontFamily: 'Cairo-Bold',
    fontSize: 18,
    color: '#1e293b',
  },
  carPrice: {
    fontFamily: 'Cairo-Bold',
    fontSize: 20,
    color: '#2563eb',
    marginTop: 4,
  },
  carDetails: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 8,
    alignItems: 'center',
  },
  carDetailText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748b',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    gap: 4,
  },
  locationText: {
    fontFamily: 'Cairo-Regular',
    fontSize: 14,
    color: '#64748b',
  },
});