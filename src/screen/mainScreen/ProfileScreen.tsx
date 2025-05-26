import {StyleSheet, Text, View} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import MMKV from '../../utils/storage';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {Button} from '@react-navigation/elements';

interface Props {}

const ProfileScreen: FC<Props> = props => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [rUserInfo, setRUserInfo] = useState<any>(null);
  const retrieveUserFunc = async () => {
    try {
      const userInfo = await MMKV.getMap('userInfo');
      setRUserInfo(userInfo);
    } catch (error: any) {
      console.error('Error retrieving from MMKV:', error?.message);
    }
  };

  useEffect(() => {
    if (isFocused) {
      retrieveUserFunc();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{rUserInfo?.name}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.email}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.phone}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.address}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.occupation}</Text>

      <Button
        style={{marginTop: 20}}
        onPressIn={() => {
          navigation.goBack();
        }}>
        Go Back
      </Button>
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

export default ProfileScreen;
