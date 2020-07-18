import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import BackButton from '../../components/BackButton';
import { Container, Header, Title, Body, InfoDay, TextInfo } from './styles';

const WeatherCity: React.FC = () => {
  const infoWeatherCity = useSelector((state) => state.weather);
  const navigation = useNavigation();

  return (
    <Container>
      <BackButton
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Header>
        <Title>{`Clima em ${infoWeatherCity.name}`}</Title>
        <TextInfo>Sensação Térmica:</TextInfo>
        <TextInfo>{`${infoWeatherCity.feels_like}°C`}</TextInfo>
      </Header>
      <Body>
        <InfoDay>
          <TextInfo>Temperatura atual:</TextInfo>
          <TextInfo>
            <TextInfo>{`${infoWeatherCity.temp}°C`}</TextInfo>
          </TextInfo>
        </InfoDay>
        <InfoDay>
          <TextInfo>Temperatura mínima:</TextInfo>
          <TextInfo>{`${infoWeatherCity.temp_min}°C`}</TextInfo>
        </InfoDay>
        <InfoDay>
          <TextInfo>Temperatura máxima:</TextInfo>
          <TextInfo>{`${infoWeatherCity.temp_max}°C`}</TextInfo>
        </InfoDay>
        <InfoDay>
          <TextInfo>Umidade Relativa:</TextInfo>
          <TextInfo>{`${infoWeatherCity.humidity}%`}</TextInfo>
        </InfoDay>
      </Body>
    </Container>
  );
};
export default WeatherCity;
