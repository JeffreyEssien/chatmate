import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Button, ScrollView } from 'react-native';

export default function Login({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <Text style={styles.subtitle}>Sign in to your account</Text>
      
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

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Login Button */}
      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate("Signup")}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      {/* Sign Up */}
      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.signupText}> Sign Up</Text>
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

      {/* Join Us */}
      <View style={styles.joinUsContainer}>
        <Text>Don't have an account?</Text>
        <TouchableOpacity>
          <Text style={styles.joinUsText}> Join Us</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Text style={styles.footerText}>Powered by Group 3</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    justifyContent: 'center',
    height: 100,
  },
  title: {
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
    borderRadius: 25,
  },
  showPassword: {
    marginLeft: -40,
    color: '#A0A0A0',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#FF6B6B',
    marginBottom: 20,
  },
  loginButton: {
    height: 50,
    backgroundColor: '#007BFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  signupText: {
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
  joinUsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  joinUsText: {
    color: '#FF6B6B',
    marginLeft: 5,
  },
  footerText: {
    textAlign: 'center',
    color: '#A0A0A0',
    marginTop: 20,
  },
});
