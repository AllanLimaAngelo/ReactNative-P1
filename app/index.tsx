import React from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles'
import instagram from '../src/assets/instagram.png';
import googleplay from '../src/assets/googleplay.png';
import microsoft from '../src/assets/microsoft.png';
import { FontAwesome5 } from '@expo/vector-icons';

export default function App() {


  return (
    <View style={styles.container}>
      <Image source={instagram} style={styles.logo} />
      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuario ou email"
        onChangeText={(text) => { }}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => { }}
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <View style={styles.appLinks}>
        <View style={styles.line}></View>
        <Text style={styles.or}>OU</Text>
        <View style={styles.line}></View>
      </View>
      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookButtonText}>Entrar com o Facebook</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.signUp}>Criar nova conta</Text>
      </TouchableOpacity>
      <Text style={styles.appLinkText}>Obtenha o aplicativo.</Text>
      <View style={styles.appLinks}>
        <Image source={googleplay} style={styles.appBadge} />
        <Image source={microsoft} style={styles.appBadge} />
      </View>
      <Text style={styles.footerText}>© 2024 Allan Lima Angelo</Text>
    </View>
  );
}
