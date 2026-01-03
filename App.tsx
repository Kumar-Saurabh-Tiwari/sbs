import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Image,
  StatusBar,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const CARD_WIDTH = width / 2.2;

// Mock data
const movies = [
  { id: '1', title: 'Stranger Things', category: 'Sci-Fi', image: '🎬', rating: 9.7 },
  { id: '2', title: 'The Crown', category: 'Drama', image: '👑', rating: 9.4 },
  { id: '3', title: 'Squid Game', category: 'Thriller', image: '🎮', rating: 9.5 },
  { id: '4', title: 'Money Heist', category: 'Crime', image: '💰', rating: 9.3 },
  { id: '5', title: 'Breaking Bad', category: 'Drama', image: '⚗️', rating: 9.6 },
  { id: '6', title: 'Narcos', category: 'Crime', image: '📍', rating: 9.2 },
  { id: '7', title: 'Dark', category: 'Sci-Fi', image: '🌑', rating: 9.1 },
  { id: '8', title: 'The Witcher', category: 'Fantasy', image: '⚔️', rating: 8.9 },
];

const categories = [
  'All',
  'Trending',
  'Sci-Fi',
  'Drama',
  'Thriller',
  'Comedy',
  'Action',
];

interface MovieItem {
  id: string;
  title: string;
  category: string;
  image: string;
  rating: number;
}

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchText, setSearchText] = useState('');
  const insets = useSafeAreaInsets();

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const renderMovieCard = ({ item }: { item: MovieItem }) => (
    <TouchableOpacity style={styles.movieCard} activeOpacity={0.8}>
      <View style={styles.cardImage}>
        <Text style={styles.emoji}>{item.image}</Text>
      </View>
      <Text style={styles.movieTitle} numberOfLines={2}>
        {item.title}
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>⭐ {item.rating}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.logo}>NetFlix</Text>
        <TouchableOpacity style={styles.profileIcon}>
          <Text style={styles.profileText}>👤</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search movies & shows..."
          placeholderTextColor="#999"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Text style={styles.searchIcon}>🔍</Text>
      </View>

      {/* Featured Banner */}
      <TouchableOpacity style={styles.featuredBanner} activeOpacity={0.8}>
        <View style={styles.bannerContent}>
          <Text style={styles.bannerEmoji}>🎬</Text>
          <Text style={styles.bannerTitle}>Stranger Things Season 5</Text>
          <Text style={styles.bannerDesc}>Coming Soon</Text>
          <View style={styles.bannerButtons}>
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.buttonText}>▶ Watch Now</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.infoButton}>
              <Text style={styles.buttonText}>ℹ More Info</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>

      {/* Categories */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesScroll}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Movies Grid */}
      <FlatList
        data={filteredMovies}
        renderItem={renderMovieCard}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={false}
        columnWrapperStyle={styles.gridWrapper}
        contentContainerStyle={styles.gridContainer}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>No results found</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#222',
  },
  logo: {
    fontSize: 28,
    fontWeight: '900',
    color: '#e50914',
    letterSpacing: 2,
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileText: {
    fontSize: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginVertical: 12,
    backgroundColor: '#222',
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: '#fff',
    fontSize: 14,
  },
  searchIcon: {
    fontSize: 18,
    marginLeft: 8,
  },
  featuredBanner: {
    marginHorizontal: 16,
    marginBottom: 20,
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  bannerContent: {
    paddingVertical: 24,
    paddingHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#e50914',
  },
  bannerEmoji: {
    fontSize: 64,
    marginBottom: 12,
  },
  bannerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
    textAlign: 'center',
  },
  bannerDesc: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 16,
  },
  bannerButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  playButton: {
    backgroundColor: '#e50914',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  infoButton: {
    backgroundColor: '#333',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  categoriesScroll: {
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 16,
    gap: 8,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    backgroundColor: '#222',
    marginRight: 8,
  },
  categoryButtonActive: {
    backgroundColor: '#e50914',
  },
  categoryText: {
    color: '#999',
    fontWeight: '600',
    fontSize: 13,
  },
  categoryTextActive: {
    color: '#fff',
  },
  gridWrapper: {
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  gridContainer: {
    paddingHorizontal: 8,
  },
  movieCard: {
    width: CARD_WIDTH,
    marginHorizontal: 8,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#1a1a1a',
  },
  cardImage: {
    width: '100%',
    height: 180,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  emoji: {
    fontSize: 60,
  },
  movieTitle: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 13,
    marginTop: 8,
    marginHorizontal: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginHorizontal: 8,
    marginTop: 6,
    marginBottom: 8,
  },
  rating: {
    color: '#e50914',
    fontWeight: '600',
    fontSize: 12,
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 40,
  },
  emptyText: {
    color: '#666',
    fontSize: 16,
  },
});

export default App;
