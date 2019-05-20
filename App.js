import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Platform, TouchableOpacity, YellowBox,
} from 'react-native';

import Repo from './components/Repo';
import NewRepoModal from './components/NewRepoModal';

/*
  Responsável pela lógica de view
  Para definir um novo componente, deve se criar uma classe que extends o Component do react
*/
export default class App extends Component {
  // O estado da aplicação
  // A cada alteração das variáveis de dentro do estado, o método de render é re-executado, atualizando a view
  state = {
    modalVisible: false,
    repos: [],
  }

  _addRepository = async (newRepoText) => {

    const repoCall = await fetch(`https://api.github.com/repos/${newRepoText}`);
    const response = await repoCall.json();

    const repository = {
      id: response.id,
      thumbnail: response.owner.avatar_url,
      title: response.name,
      author: response.owner.login,
    }

    this.setState({
      modalVisible: false,
      repos: [
        ...this.state.repos,
        repository,
      ],
    });
  };

  // Todo componente deve implementar esse método e que deve retornar um JSX
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Minicurso GoNative</Text>
          <TouchableOpacity onPress={() => this.setState({ modalVisible: true })}>
            <Text style={styles.headerButton}>+</Text>
          </TouchableOpacity>

        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          {this.state.repos.map(repo => <Repo key={repo.id} data={repo} />)}
        </ScrollView>

        <NewRepoModal onCancel={() => this.setState({ modalVisible: false })}
          onAdd={this._addRepository}
          visible={this.state.modalVisible} />
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
  },

  repoList: {
    padding: 20,
  },

  headerButton: {
    fontSize: 24,
    fontWeight: 'bold',
  },

});
