# Clima da cidade

Aplicação construída com React Native, Redux e Typescript.
A proposta dessa aplicação é mostrar o clima em graus Celsius de qualquer cidade do mundo de forma simples, com persistência de dados usando o AsyncStorage para manter gravado a cidade digitada.
API de consulta: [OpenWeatherMap](https://openweathermap.org/api)

# Instruções de execução no ubuntu:

1. Necessario ter instalado o **yarn** e o **@react-native-community/cli**.
2. Instalando o yarn:

```
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
```

- Instalando o React-Native:

  ```
  yarn global add @react-native-community/cli
  ou
  npm install -g @react-native-community/cli
  ```

- Caso tiver instalado o pacote **react-native-cli** terá que remover:

  ```
  yarn global remove react-native-cli
  ou
  npm uninstall -g react-native-cli
  ```

3. Clone o repositório.
4. Entre na pasta do repositorio clonado pelo terminal.
5. Execute os camandos:

- Para instalar os pacotes de dependências do projeto:

```
yarn
```

- Para iniciar o metro bundler:

```
yarn start
```

- Para iniciar a aplicação:

```
yarn android
```

# Limitações:

Esta aplicação, por enquanto, apenas mostra em graus Celsius a:

- Temperatura atual.
- Sensação térmica.
- Temperatura máxima e mínima.
- Umidade relativa do ar.

# Próximas Features:

- Mostrar os ícones (chuva, sol, nublado) conforme a situação do clima em questão.

- Integrar a api do maps e mostrar a localização da cidade que foi digitada na forma de mapa.

- Possibilitar o usuário de escolher entre graus Fahrenheit e Kelvin.
