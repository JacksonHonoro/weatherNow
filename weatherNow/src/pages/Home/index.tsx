import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { Alert, Keyboard, Image } from 'react-native';

import { setStoreCity, getStoreCity } from '../../storage/Helpers';
import logo from '../../assets/logo.png';
import infoWeather from '../../store/modules/weather/action';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { searchCity } from '../../services/searchCityService';

import { Container } from './styles';

const Home: React.FC = () => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  useEffect(() => {
    const storageCity = async () => {
      const storeCity = await getStoreCity();
      if (storeCity) {
        setCity(storeCity);
      }
    };
    storageCity();
  }, []);

  const handleSearch = async () => {
    setLoading(true);
    try {
      const { data } = await searchCity(city);
      dispatch(infoWeather(data));
      await setStoreCity(city);
      navigation.navigate('WeatherCity');
    } catch (err) {
      Alert.alert('ATENÇÃO!', 'Preencha o campo com nome da cidade correta.');
    }
    Keyboard.dismiss();
    setLoading(false);
  };

  return (
    <Container>
      <Image source={logo} />
      <Input
        icon="map-pin"
        placeholder="Pesquise uma cidade"
        value={city}
        onChangeText={(text) => setCity(text)}
        returnKeyType="send"
        onSubmitEditing={handleSearch}
      />
      <Button loading={loading} onPress={handleSearch}>
        Pesquisar
      </Button>
    </Container>
  );
};

export default Home;
