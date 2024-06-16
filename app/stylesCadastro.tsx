import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  tabContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginTop: 30,
    padding: 10,
    width: 150,
    borderBottomWidth: 1,
    borderBottomColor: 'transparent',

  },
  activeTab: {
    borderBottomColor: '#000000',
  },
  tabText: {
    textAlign: 'center',
    fontWeight: 'bold',
  },
  inputContainer: {
    width: '85%',
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    fontSize: 16,
  },
  infoText: {
    fontSize: 14,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#3897f0',
    height: 46,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  facebookButton: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },

  bar: {
    width: '110%',
    height: 50,
    backgroundColor: '#3897f0',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  emailTypeSelector: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  emailTypeOption: {
    padding: 8,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    marginHorizontal: 5,
  },
  selectedEmailType: {
    backgroundColor: '#ddd',
  },
  emailTypeText: {
    fontWeight: 'bold',
  },

});
