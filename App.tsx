// dependencies & libs
import React             from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading        from 'expo-app-loading';
import { 
  useFonts, 
  Poppins_400Regular,
  Poppins_500Medium, 
  Poppins_700Bold }      from '@expo-google-fonts/poppins'

// components
import { Dashboard } from './src/screens/Dashboard';

// styles
import theme from './src/global/styles/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if(!fontsLoaded){
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme} >
      <Dashboard />
    </ThemeProvider>
  );
}
