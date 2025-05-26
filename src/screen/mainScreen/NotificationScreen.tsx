import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {Button} from '@react-navigation/elements';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const NotificationScreen: FC<Props> = props => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Home')}>Go to Home</Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
  },
});

export default NotificationScreen;
