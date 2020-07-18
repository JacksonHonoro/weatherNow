import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 15px;
`;

export const Header = styled.View`
  flex: 2;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  color: white;
  font-weight: bold;
`;

export const Body = styled.View`
  flex: 5;
`;

export const InfoDay = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-bottom-width: 1px;
  border-color: rgba(204, 204, 204, 0.5);
  margin-bottom: 10px;
`;

export const TextInfo = styled.Text`
  color: #fff;
  font-size: 16px;
`;
