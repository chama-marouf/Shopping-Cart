import ProductCard from 'app/components/ProductCard';
import NavigationService from 'app/navigation/NavigationService';
import React from 'react';
import { View, FlatList } from 'react-native';
import { Button } from 'react-native-paper';

import styles from './styles';
const Cart: React.FC = ({ navigation, route }) => {
  const cart = route.params.cart;
  console.log(cart, 'herererer');
  return (
    <View style={styles.container}>
      <FlatList
        style={{ width: '100%', paddingHorizontal: 24 }}
        data={cart}
        renderItem={({ item }) => <ProductCard fromCart product={item} />}
      />
      <View style={styles.buttonContainer}>
        <Button color="#fff" style={styles.button} icon="cart" mode="outlined">
          Checkout
        </Button>
      </View>
    </View>
  );
};

export default Cart;
