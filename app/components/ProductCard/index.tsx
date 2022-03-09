import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import React from 'react';
import styles from './styles';

type Props = {
  product: any;
  addToCart: (product: any) => void;
  fromCart: boolean;
};

const ProductCard = ({ product, addToCart, fromCart }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productName}>{product.price} AED</Text>
      </View>
      {!fromCart && (
        <Button
          onPress={() => {
            addToCart(product);
          }}
          icon="plus"
          style={{
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          Add
        </Button>
      )}
    </View>
  );
};

export default ProductCard;
