import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect} from 'react';
import SkiaDrawings from '../../SkiaDrawings';
import {MMKVLoader} from 'react-native-mmkv-storage';
import {Button} from '@react-navigation/elements';
import MMKV from '../../utils/storage';
import {useNavigation} from '@react-navigation/native';

interface Props {}

const HomeScreen: FC<Props> = props => {
  const navigation = useNavigation();
  const userInfo = {
    name: 'Imdadul Haque',
    email: 'imdadulhaque1440@gmail.com',
    phone: '01770019346',
    address: 'Dhaka, Bangladesh',
    age: 28,
    occupation: 'Mobile App Developer',
    hobbies: ['Coding', 'Reading', 'Traveling'],
    skills: ['JavaScript', 'React Native', 'Node.js'],
  };

  const saveToMMKV = async () => {
    try {
      await MMKV.setMap('userInfo', userInfo);
      await navigation.navigate('Profile');
    } catch (error: any) {
      console.error('Error saving to MMKV:', error?.message);
    }
  };

  useEffect(() => {
    // storage.set('userInfo', JSON.stringify(userInfo));
  }, []);

  return (
    <View style={styles.container}>
      <Button onPressIn={saveToMMKV}>Save to MMKV</Button>
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

export default HomeScreen;
