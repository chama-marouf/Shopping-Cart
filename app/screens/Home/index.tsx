import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import { useDispatch } from 'react-redux';
import * as loginActions from 'app/store/actions/loginActions';
import NavigationService from 'app/navigation/NavigationService';
import styles from './styles';
const Home: React.FC = () => {
  const dispatch = useDispatch();
  const onLogout = () => dispatch(loginActions.logOut());

  return (
    <View style={styles.container}>
      <Button
        onLongPress={() => NavigationService.navigate('ProductsList')}
        icon="arrow-right"
        mode="outlined"
        onPress={onLogout}>
        Go to Products List
      </Button>
    </View>
  );
};

export default Home;
