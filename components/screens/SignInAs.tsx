import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

interface SignInAsProps {
  onNavigateToLogin: () => void;
  onNavigateToSignup: () => void;
  onNext: () => void;
}

const SignInAs: React.FC<SignInAsProps> = ({ onNavigateToLogin, onNavigateToSignup, onNext }) => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/logo.jpeg')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.signInText}>Sign in as</Text>

      <View style={styles.cardsContainer}>
        <TouchableOpacity
          style={[
            styles.card,
            styles.communityCard,
            selectedRole === 'community' && styles.cardSelected,
          ]}
          onPress={() => setSelectedRole('community')}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <View style={styles.iconHead} />
            <View style={[styles.iconBody, styles.communityIconBody]} />
          </View>
          <Text style={styles.cardLabel}>Community</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.card,
            styles.individualCard,
            selectedRole === 'individual' && styles.cardSelected,
          ]}
          onPress={() => setSelectedRole('individual')}
          activeOpacity={0.8}
        >
          <View style={styles.iconContainer}>
            <View style={[styles.iconHead, styles.individualIconHead]} />
            <View style={[styles.iconBody, styles.individualIconBody]} />
          </View>
          <Text style={styles.cardLabel}>Individual</Text>
        </TouchableOpacity>
      </View>


      <TouchableOpacity
        style={[
          styles.nextButton,
          !selectedRole && styles.nextButtonDisabled,
        ]}
        activeOpacity={0.9}
        onPress={() => {
          if (selectedRole === 'community') {
            onNavigateToLogin();
          } else if (selectedRole === 'individual') {
            onNavigateToSignup();
          }
        }}
        disabled={!selectedRole}
      >
        <Text style={[
          styles.nextButtonText,
          !selectedRole && styles.nextButtonTextDisabled,
        ]}>Next</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: 60,
    marginBottom: 30,
  },
  logo: {
    width: 280,
    height: 280,
  },
  signInText: {
    fontSize: 16,
    color: '#000',
    marginBottom: 25,
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15,
  },
  card: {
    width: (width - 60) / 2,
    height: 140,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  communityCard: {
    backgroundColor: '#A8D5BA',
  },
  individualCard: {
    backgroundColor: '#F9ED99',
  },
  cardSelected: {
    borderWidth: 3,
    borderColor: '#333',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  iconHead: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: '#2D7A4F',
  },
  individualIconHead: {
    backgroundColor: '#D4AF37',
  },
  iconBody: {
    width: 50,
    height: 40,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  communityIconBody: {
    backgroundColor: '#2D7A4F',
  },
  individualIconBody: {
    backgroundColor: '#D4AF37',
  },
  cardLabel: {
    marginTop: 8,
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
    textAlign: 'center',
  },
  nextButton: {
    backgroundColor: '#F4D03F',
    width: '90%',
    height: 56,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 'auto',
    marginBottom: 40,
  },
  nextButtonDisabled: {
    backgroundColor: '#E0E0E0',
    opacity: 0.6,
  },
  nextButtonText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  nextButtonTextDisabled: {
    color: '#999',
  },
});

export default SignInAs;