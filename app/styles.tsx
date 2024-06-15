import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',

  },
  input: {
    width: '80%',
    height: 60,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#3897f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 14,
    height: 50,
    width: '80%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  appLinks: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    margin: 30,
  },
  line: {
    flex: 1,
    height: 2,
    backgroundColor: '#dbdbdb',
  },
  or: {
    marginHorizontal: 10,
    color: '#888',
  },
  facebookButton: {
    flexDirection: 'row',
    gap: 10,
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  facebookButtonText: {
    color: '#3897f0',
    fontWeight: 'bold',
    fontSize: 20,
  },
  forgotPassword: {
    color: '#3897f0',
    marginVertical: 10,
  },
  signUp: {
    color: '#3897f0',
    margin: 70,
    fontSize: 16,
  },
  appLinkText: {
    color: '#888',
    marginTop: 20,
  },
  appBadge: {
    width: 180,
    height: 50,
    gap: 20,
    resizeMode: 'contain',
  },
  footerText: {
    color: '#888',

  },

});
