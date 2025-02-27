import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import { Input } from './shared/input/input';
import { Colors, Fonts, Gaps } from './shared/tokens';
import EyeClosedIcon from './assets/icons/eye-closed';
import EyeOpenedIcon from './assets/icons/eye-opened';
import { Button } from './shared/Button/Button';

export default function App() {
  const width = Dimensions.get('window').width;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('./assets/logo.png')}
          resizeMode='center'
        />
        <View style={styles.form}>
          <Input placeholder='Email'/>
          <Input isPassword placeholder='Password'/>
          <Button text='Log in' />
        </View>
        <Text style={styles.button}>Password recovery</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 55,
    flex: 1,
    backgroundColor: Colors.black
  },
  content: {
    alignItems: 'center',
    gap: Gaps.g50
  },
  form: {
    alignSelf: 'stretch',
    gap: Gaps.g16
  },
  logo: {
    width: 210,
    height: 100
  },
  button: {
    color: Colors.white,
    fontSize: Fonts.f18,
    padding: 25,
  }

});