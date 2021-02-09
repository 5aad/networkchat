import * as React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import App from './src/App';
const theme = {
  ...DefaultTheme,
  roundness: 6,
  colors: {
    ...DefaultTheme.colors,
    primary: '#F8F8FF',
    accent: '#013243',
    grlu: '#c6d0d7',
    opGreen:'#1a89174d'
  },
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
