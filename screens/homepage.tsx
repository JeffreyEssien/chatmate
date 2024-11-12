import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';



export default function Homepage({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
      <Button title='Go to next page' onPress={() => navigation.navigate("Login")}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
