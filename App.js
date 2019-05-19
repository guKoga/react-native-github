import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Platform
} from 'react-native';

import Repo from './components/Repo';

/*
  Responsável pela lógica de view
  Para definir um novo componente, deve se criar uma classe que extends o Component do react
*/
export default class App extends Component {
  // O estado da aplicação
  // A cada alteração das variáveis de dentro do estado, o método de render é re-executado, atualizando a view
  state = {
    repos: [
      {
        id: 1,
        thumbnail: '',
        title: 'rocketseat.com.br',
        author: 'rocketseat',
      },
      {
        id: 2,
        thumbnail: '',
        title: 'rocketnative',
        author: 'diego',
      },
    ],
  }

  // Todo componente deve implementar esse método e que deve retornar um JSX
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Minicurso GoNative</Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          { this.state.repos.map(repo => <Repo key={repo.id} data={repo} /> ) }
        </ScrollView>
      </View>
    );
  }
}

// Classe de estilos, que se equipara com o CSS
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },

  header: {
    // Verificar se o app está em IOS ou Android, para setar a altura do header
    height: (Platform.OS === 'ios') ? 70 : 50,
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20
  },

});
