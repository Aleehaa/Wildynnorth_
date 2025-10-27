<<<<<<< HEAD
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import Login from '../../components/screens/Login';
import Signup from '../../components/screens/Signup';
import SignInAs from '../../components/screens/SignInAs';
import ForgetPassword from '../../components/screens/ForgetPassword';

export default function HomeScreen() {
  const [currentScreen, setCurrentScreen] = useState('signinas'); // 'signinas', 'login', 'signup', 'forgetpassword'
  const [hasCompletedSignInAs, setHasCompletedSignInAs] = useState(false);

  const handleNavigateToSignup = () => {
    setCurrentScreen('signup');
    setHasCompletedSignInAs(true); // Mark SignInAs as completed
  };

  const handleNavigateToLogin = () => {
    setCurrentScreen('login');
    setHasCompletedSignInAs(true); // Mark SignInAs as completed
  };

  const handleNavigateToSignInAs = () => {
    // Only allow navigation to SignInAs if it hasn't been completed yet
    if (!hasCompletedSignInAs) {
      setCurrentScreen('signinas');
    }
  };

  const handleNavigateToForgetPassword = () => {
    setCurrentScreen('forgetpassword');
  };

  const handleBackToLogin = () => {
    setCurrentScreen('login');
  };

  const handleLogin = (username, password) => {
    // Handle login logic here
    console.log('Login attempt:', { username, password });
    Alert.alert('Login', `Welcome back, ${username}!`);
    
    // You can add your authentication logic here
    // For example: API call, navigation to main app, etc.
    // Note: No longer returns to SignInAs after login
  };

  const handleSignup = (username, email, password) => {
    // Handle signup logic here
    console.log('Signup attempt:', { username, email, password });
    Alert.alert('Signup', `Account created for ${username}!`);
    
    // You can add your registration logic here
    // For example: API call, navigation to main app, etc.
    // Note: No longer returns to SignInAs after signup
  };

  const handleResetPassword = (email) => {
    // Handle password reset logic here
    console.log('Password reset attempt:', { email });
    Alert.alert('Password Reset', `Reset link sent to ${email}!`);
    
    // You can add your password reset logic here
    // For example: API call, etc.
  };

  return (
    <View style={styles.container}>
      {!hasCompletedSignInAs && currentScreen === 'signinas' ? (
        <SignInAs
          onNavigateToLogin={handleNavigateToLogin}
          onNavigateToSignup={handleNavigateToSignup}
          onNext={handleNavigateToSignInAs}
        />
      ) : currentScreen === 'login' ? (
        <Login
          onNavigateToSignup={handleNavigateToSignup}
          onLogin={handleLogin}
          onNavigateToForgetPassword={handleNavigateToForgetPassword}
        />
      ) : currentScreen === 'signup' ? (
        <Signup
          onNavigateToLogin={handleNavigateToLogin}
          onSignup={handleSignup}
        />
      ) : (
        <ForgetPassword
          onBack={handleBackToLogin}
          onResetPassword={handleResetPassword}
        />
      )}
    </View>
=======
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Background Image */}
    <Image source={require("../../assets/markhor.png")} 
       style={styles.backgroundImage} 
       contentFit="cover" />



      {/* Overlay */}
      <View style={styles.overlay}>
        <Text style={styles.heading}>
          Spot, Report, Protect{"\n"}Together we can safeguard wildlife!
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/report")} // navigate to another screen
        >
          <Text style={styles.buttonText}>GET STARTED</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
>>>>>>> 5f3054dce40686819c1e2ecb5d08ad3772901c5f
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
<<<<<<< HEAD
    backgroundColor: '#fff',
=======
    backgroundColor: "#000",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject, // fills the whole screen
    opacity: 0.8, // slightly dim the image for better text visibility
  },
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 60,
>>>>>>> 5f3054dce40686819c1e2ecb5d08ad3772901c5f
  },
  heading: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 20,
    fontWeight: "600",
    shadowColor: "#000",
  },
  button: {
    backgroundColor: "#FFD700", // yellow
    paddingVertical: 12,
    paddingHorizontal: 60,
    borderRadius: 8,
    elevation: 3, // shadow for Android
    shadowColor: "#000", // shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 17,
    color: "#000",
  },
});