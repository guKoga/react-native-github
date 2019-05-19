import React, { Component } from 'react';
import {
  StyleSheet, Text, View, ScrollView, Platform
} from 'react-native';

/*
  Responsável pela lógica de view
  Para definir um novo componente, deve se criar uma classe que extends o Component do react
*/
export default class App extends Component {
  // Todo componente deve implementar esse método e que deve retornar um JSX
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}> Minicurso GoNative</Text>
        </View>

        <ScrollView contentContainerStyle={styles.repoList}>
          <View style={styles.repo}></View>
          <View style={styles.repo}></View>
          <View style={styles.repo}></View>
          <View style={styles.repo}></View>
          <View style={styles.repo}></View>
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

  repo: {
    padding: 20,
    backgroundColor: '#FFF',
    height: 120,
    marginBottom: 20,
    borderRadius: 5,
  },

});
