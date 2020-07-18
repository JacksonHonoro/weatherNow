import AsyncStorage from '@react-native-community/async-storage';

export const setStoreCity = async (value) => {
  await AsyncStorage.setItem('@storeCity', JSON.stringify(value));
};

export const getStoreCity = async () => {
  const result = await AsyncStorage.getItem('@storeCity');
  return JSON.parse(result);
};
