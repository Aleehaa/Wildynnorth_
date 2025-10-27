import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
} from 'react-native';

interface LoginProps {
  onNavigateToSignup: () => void;
  onLogin: (username: string, password: string) => void;
  onNavigateToForgetPassword: () => void;
}

const Login: React.FC<LoginProps> = ({ onNavigateToSignup, onLogin, onNavigateToForgetPassword }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!username.trim() || !password.trim()) {
      Alert.alert('Error', 'Please fill in all fields');
      return;
    }
    onLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Log in to your account</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter Username"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          placeholderTextColor="#999"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity
        style={styles.loginButton}
        activeOpacity={0.9}
        onPress={handleLogin}
      >
        <Text style={styles.loginButtonText}>LOG IN</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={onNavigateToForgetPassword} 
        style={styles.forgetPasswordContainer}
      >
        <Text style={styles.forgetPasswordLink}>Forget Password?</Text>
      </TouchableOpacity>

      <View style={styles.signupContainer}>
        <Text style={styles.signupText}>Don't have an account? </Text>
        <TouchableOpacity onPress={onNavigateToSignup}>
          <Text style={styles.signupLink}>Signup</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 100,
    marginBottom: 20,
  },
  logo: {
    width: 280,
    height: 280,
  },
  title: {
    fontSize: 16,
    color: '#000',
    marginBottom: 50,
  },
  formContainer: {
    width: '95%',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    paddingHorizontal: 20,
    fontSize: 14,
    color: '#000',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#F4D03F',
    width: '95%',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  forgetPasswordContainer: {
    marginBottom: 20,
  },
  forgetPasswordLink: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
  },
  signupContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  signupText: {
    fontSize: 14,
    color: '#000',
  },
  signupLink: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '500',
  },
});

export default Login;