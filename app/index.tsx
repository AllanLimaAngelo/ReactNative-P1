import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link } from 'expo-router';
import { styles } from './styles';
import instagram from '../src/assets/instagram.png';
import googleplay from '../src/assets/googleplay.png';
import microsoft from '../src/assets/microsoft.png';
import { FontAwesome5 } from '@expo/vector-icons';

const App = () => {
  return (
    <View style={styles.container}>
      <Image source={instagram} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder="Telefone, nome de usuário ou email"
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.appLinks}>
        <View style={styles.line} />
        <Text style={styles.or}>OU</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={25} color="#399fff" />
        <Text style={styles.facebookButtonText}>Entrar com o Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
      </TouchableOpacity>

      <Link href="/cadastro" asChild>
        <TouchableOpacity>
          <Text style={styles.signUp}>Não tem uma conta? Cadastre-se</Text>
        </TouchableOpacity>
      </Link>

      <Text style={styles.appLinkText}>Obtenha o aplicativo.</Text>

      <View style={styles.appLinks}>
        <Image source={googleplay} style={styles.appBadge} />
        <Image source={microsoft} style={styles.appBadge} />
      </View>

      <Text style={styles.footerText}>© 2024 Allan Lima Angelo</Text>
    </View>
  );
};

export default App;