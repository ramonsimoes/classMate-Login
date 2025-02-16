import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './pages/login';
import { themes } from './global/themes';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>  

        <StatusBar style="auto" />

        <Login /> 

    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: themes.colors.primary,    
  },
});
