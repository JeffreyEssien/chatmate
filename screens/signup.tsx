import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';

export default function Signup({ navigation }: any) {
  return (
    <ScrollView>
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.backButton}>Sign up</Text>

      {/* Title */}
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.titleBold}>ChatMate</Text>
      <Text style={styles.subtitle}>Create your account</Text>
      
      {/* Email Input */}
      <Text style={styles.label}>Email Address</Text>
      <TextInput 
        style={styles.input} 
        keyboardType="email-address"
      />
      
      {/* Password Input */}
      <Text style={styles.label}>Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Password" 
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.showPassword}>👁️</Text>
        </TouchableOpacity>
      </View>

      {/* Confirm Password Input */}
      <Text style={styles.label}>Confirm Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput 
          style={styles.passwordInput} 
          placeholder="Confirm Password" 
          secureTextEntry={true}
        />
        <TouchableOpacity>
          <Text style={styles.showPassword}>👁️</Text>
        </TouchableOpacity>
      </View>

      {/* Sign up Button */}
      <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate("ChatMate")}>
        <Text style={styles.signupButtonText}>Sign up</Text>
      </TouchableOpacity>

      {/* Already have an account? */}
      <View style={styles.loginContainer}>
        <Text>You already have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.loginText}> Login</Text>
        </TouchableOpacity>
      </View>

      {/* Or Sign In With */}
      <Text style={styles.orText}>Or Sign in With</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Text style={styles.socialButtonText}>Facebook</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Powered by Group 3</Text>

      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    paddingTop: 40,
  },
  backButton: {
    alignSelf: 'flex-start',
    fontSize: 18,
    color: '#007BFF',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'normal',
  },
  titleBold: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#7A7A7A',
  },
  label: {
    fontSize: 14,
    marginBottom: 5,
    color: '#7A7A7A',
  },
  input: {
    height: 50,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginBottom: 20,
    backgroundColor: '#F5F5F5',
    padding: 15,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 15,
    height: 50,
  },
  passwordInput: {
    flex: 1,
    height: '100%',
  },
  showPassword: {
    color: '#A0A0A0',
    marginLeft: 10,
  },
  signupButton: {
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  loginText: {
    color: '#FF6B6B',
    marginLeft: 5,
  },
  orText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginBottom: 20,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  socialButton: {
    width: '48%',
    height: 50,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
  },
  socialButtonText: {
    color: '#000',
    fontSize: 16,
  },
  footerText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 20,
  },
});
