import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Heart, MapPin } from 'lucide-react-native';

export default function SavedScreen() {
  const savedCars = [
    {
      id: 1,
      title: '2023 Mercedes-Benz G-Class',
      price: 'AED 850,000',
      image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=800&q=80',
      location: 'Dubai',
      mileage: '1,500 km',
      year: '2023',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Saved Cars</Text>
        <Text style={styles.subtitle}>Your favorite listings</Text>
      </View>

      <ScrollView style={styles.content}>
        {savedCars.map((car) => (
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
            <Pressable style={styles.heartButton}>
              <Heart size={24} color="#ef4444" fill="#ef4444" />
            </Pressable>
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
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    backgroundColor: '#fff',
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
  heartButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});