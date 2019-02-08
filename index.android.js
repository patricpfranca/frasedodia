import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

const Estilos = {
  principal: {
    paddingTop: 40
  },
  botao: {
    backgroundColor: '#fff',
    padding: 10,
    borderColor: '#1d8eb8',
    borderWidth: 1,
    borderRadius: 8,
    elevation: 3
  },
  textoBotao: {
    color: '#48bbec',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
}

const botaoPressionado = () => {
  alert('Botão pressionado');
}

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={ principal }>
      <TouchableOpacity style={botao}>
        <Text style={textoBotao}>Clique aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

AppRegistry.registerComponent('app_2', () => App);
