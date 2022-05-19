import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Button, Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './../styles/TopBar.style'

export const TopBar = () => {

  return (
    <View style={styles.topBar}>

      <View style={styles.user}>
        <TouchableHighlight onPress={() => alert('hi')}>
          <MaterialCommunityIcons name="menu" size={26} />
        </TouchableHighlight>
        <Image
          style={styles.userImage}
          source={{ uri: 'https://i.imgur.com/LBaHGsO.jpg' }} />
        <View style={styles.userInfo}>
          <Text>Good morning</Text>
          <Text>Ahmad</Text>
        </View>
      </View>

      <View>
        <TouchableHighlight onPress={() => alert('hi')}>
          <MaterialCommunityIcons name="bell-outline" size={26} />
        </TouchableHighlight>
      </View>

    </View>
  );
}