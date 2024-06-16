import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { styles } from './stylesCadastro';

const Cadastro = () => {
  const [activeTab, setActiveTab] = useState('TELEFONE');
  const [emailType, setEmailType] = useState('@mail.com');

  const emailTypes = ['@hotmail', '@gmail.com', '@outlook.com', '@yahoo.com'];

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'TELEFONE' && styles.activeTab]}
          onPress={() => setActiveTab('TELEFONE')}
        >
          <Text style={styles.tabText}>TELEFONE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'EMAIL' && styles.activeTab]}
          onPress={() => setActiveTab('EMAIL')}
        >
          <Text style={styles.tabText}>EMAIL</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'TELEFONE' && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Número de telefone</Text>
          <TextInput style={styles.input} placeholder="+55 Número de telefone" />
          <Text style={styles.infoText}>
            Você poderá receber notificações por SMS para fins de segurança e login.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      )}

      {activeTab === 'EMAIL' && (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Endereço de email</Text>
          <TextInput style={styles.input} placeholder="email@example.com" />
          {/* ScrollView horizontal para os tipos de email */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.emailTypeSelector}
          >
            {emailTypes.map((type) => (
              <TouchableOpacity
                key={type}
                style={[styles.emailTypeOption, emailType === type && styles.selectedEmailType]}
                onPress={() => setEmailType(type)}
              >
                <Text style={styles.emailTypeText}>{type}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Avançar</Text>
          </TouchableOpacity>
        </View>
      )}

      <TouchableOpacity style={styles.bar}>
        <Text style={styles.buttonText}>Cadastre-se com o Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cadastro;
