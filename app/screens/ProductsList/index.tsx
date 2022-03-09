import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';
import { FlatList } from 'react-native-gesture-handler';
import ProductCard from 'app/components/ProductCard';
import NavigationService from 'app/navigation/NavigationService';
const ProductsList: React.FC = () => {
  const [cart, setCart] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const _addToCart = (product: any) => {
    setCart([...cart, product]);
    setTotal(total + product.price);
  };

  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', paddingHorizontal: 24 }}
        data={Products}
        renderItem={({ item }) => (
          <ProductCard addToCart={_addToCart} product={item} />
        )}
      />
      <View style={styles.buttonContainer}>
        <Button
          color="#fff"
          style={styles.button}
          icon="cart"
          mode="outlined"
          onPress={() => NavigationService.navigate('Cart', { cart })}>
          Go to Cart
        </Button>
      </View>
    </View>
  );
};

export default ProductsList;

const Products = [
  { id: 1, name: 'Potatoes', price: 5 },
  { id: 2, name: 'Carrots', price: 3 },
  { id: 3, name: 'Onions', price: 2 },
];
