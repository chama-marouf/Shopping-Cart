import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import styles from './styles';
const ProductsList: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button icon="logout" mode="outlined" onPress={onLogout}>
        Cart
      </Button>
    </View>
  );
};

export default ProductsList;

const Products = [
  { id: 1, name: 'Potatoes', price: 5 },
  { id: 2, name: 'Carrots', price: 3 },
  { id: 3, name: 'Onions', price: 2 },
];
