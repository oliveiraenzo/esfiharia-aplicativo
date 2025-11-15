import React, { useState, useMemo, useEffect } from 'react';
import { 
  View, 
  Text, 
  FlatList, 
  TouchableOpacity, 
  Image, 
  ScrollView, 
  StatusBar, 
  TextInput,
  ActivityIndicator
} from 'react-native';
import styles from './styles';

const API_URL = 'http://192.168.15.88:3000'; 

const CarrosselItem = ({ item }) => (
  <View style={styles.carouselItemContainer}>
    <Image source={{ uri: item.imageUrl }} style={styles.carouselItemImage} />
    <Text style={styles.carouselItemName}>{item.name}</Text>
    <Text style={styles.carouselItemPrice}>R$ {item.price.toFixed(2).replace('.', ',')}</Text>
  </View>
);

const CarrosselEsfihas = ({ popularProducts }) => (
  <View style={styles.carouselBackgroundContainer}>
    <Text style={styles.carouselTitle}>Mais Pedidas</Text>
    <FlatList      data={popularProducts}
      renderItem={({ item }) => item ? <CarrosselItem item={item} /> : null}
      keyExtractor={(item, index) => item?._id || index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.carouselListContainer}
      snapToInterval={140}
      snapToAlignment="start"
      decelerationRate="fast"
    />
  </View>
);

const ProductItem = ({ product, onPressAddToCart }) => (
  <View style={styles.productItem}>
    <Image source={{ uri: product.imageUrl }} style={styles.productImage} />
    <View style={styles.productDetails}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productDescription}>{product.description}</Text>
      <Text style={styles.productPrice}>R$ {product.price.toFixed(2).replace('.', ',')}</Text>
    </View>
    <TouchableOpacity style={styles.addButton} onPress={() => onPressAddToCart(product)}>
      <Text style={styles.addButtonText}>Adicionar</Text>
    </TouchableOpacity>
  </View>
);

const HomeScreen = ({ navigation, cartItems = [], handleAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('Salgadas');
  const [searchQuery, setSearchQuery] = useState('');

  const [allProducts, setAllProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['Salgadas', 'Doces', 'Refrigerantes', 'Combos'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(`${API_URL}/products`);
        
        if (!response.ok) {
          throw new Error('Falha ao buscar dados da API');
        }

        const data = await response.json();
        setAllProducts(data);
        const pop = data.filter(p => p.category === 'Salgadas').slice(0, 6);
        setPopularProducts(pop);
        
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    if (isLoading) return []; 

    return allProducts.filter((product) => {
      const categoryMatch = product.category === selectedCategory;
      if (searchQuery === '') {
        return categoryMatch;
      }
      const query = searchQuery.toLowerCase();
      const nameMatch = product.name.toLowerCase().includes(query);
      const descriptionMatch = product.description.toLowerCase().includes(query);
      return categoryMatch && (nameMatch || descriptionMatch);
    });
  }, [selectedCategory, searchQuery, allProducts, isLoading]);

  const totalItemCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const renderProductItem = ({ item }) => (
    <ProductItem product={item} onPressAddToCart={handleAddToCart} />
  );

  const ListHeader = () => (
    <>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar esfiha..."
          placeholderTextColor="#888"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
      <CarrosselEsfihas popularProducts={popularProducts} />
      <View style={styles.categoryFilterContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={[
                styles.categoryButton,
                selectedCategory === category && styles.selectedCategoryButton,
              ]}
              onPress={() => setSelectedCategory(category)}
            >
              <Text style={styles.categoryButtonText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1c1c1c" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Esfiharia Mundo Árabe</Text>
        <TouchableOpacity
          style={styles.cartIconContainer}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Image source={require('../../../assets/img/logo.png')} style={styles.cartIcon} />
          {totalItemCount > 0 && (
            <View style={styles.cartBadge}>
              <Text style={styles.cartBadgeText}>{totalItemCount}</Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {isLoading ? (
        <ActivityIndicator size="large" color="#FF6347" style={{ marginTop: 50 }} />
      ) : (
        <FlatList
          data={filteredProducts}
          renderItem={item => item.item ? renderProductItem(item) : null}
          keyExtractor={(item, index) => item?._id || index.toString()}
          ListHeaderComponent={ListHeader}
          contentContainerStyle={styles.productList}
        />
      )}
    </View>
  );
};

export default HomeScreen;