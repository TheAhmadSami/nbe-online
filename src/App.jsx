import { View } from 'react-native';
import {
  Navigator,
  TopBar
} from './components';
import styles from './App.style'

export default function App() {
  return (
    <View style={styles.container}>
      <TopBar />
      <Navigator />
    </View>
  )
}
