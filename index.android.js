import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  }
}

const botapPressionado = () => {
  alert('Botão pressionado');
}

const App = () => {
  const { principal } = Estilos;

  return (
    <View style={ principal }>
      <Button 
        onPress={botapPressionado}
        title="Clique aqui"
        color="#841584"
        accessibilityLabel="Clique aqui para abrir as notícias!"
      />
    </View>
  );
};

AppRegistry.registerComponent('app_2', () => App);
