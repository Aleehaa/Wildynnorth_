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

interface ForgetPasswordProps {
  onBack: () => void;
  onResetPassword: (email: string) => void;
}

const ForgetPassword: React.FC<ForgetPasswordProps> = ({ onBack, onResetPassword }) => {
  const [email, setEmail] = useState('');

  const handleResetPassword = () => {
    if (!email.trim()) {
      Alert.alert('Error', 'Please enter your email address');
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address');
      return;
    }
    
    onResetPassword(email);
  };

  return (
    <View style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Title */}
      <Text style={styles.title}>Forgot Password?</Text>
      <Text style={styles.subtitle}>
        Enter your email address and we'll send you instructions to reset your password.
      </Text>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter your email"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Reset Password Button */}
      <TouchableOpacity 
        style={styles.resetButton} 
        activeOpacity={0.9}
        onPress={handleResetPassword}
      >
        <Text style={styles.resetButtonText}>RESET PASSWORD</Text>
      </TouchableOpacity>

      {/* Back to Login Link */}
      <View style={styles.navigationContainer}>
        <Text style={styles.navigationText}>Remember your password? </Text>
        <TouchableOpacity onPress={onBack}>
          <Text style={styles.navigationLink}>Back to Login</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginBottom: 40,
    textAlign: 'center',
    lineHeight: 20,
    maxWidth: 320,
  },
  inputContainer: {
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
  },
  resetButton: {
    backgroundColor: '#F4D03F',
    width: '95%',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  resetButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  navigationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationText: {
    fontSize: 14,
    color: '#000',
  },
  navigationLink: {
    fontSize: 14,
    color: '#FF6B6B',
    fontWeight: '500',
  },
});

export default ForgetPassword;