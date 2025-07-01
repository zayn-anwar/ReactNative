import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View } from "react-native";
import Logo from "../assets/images/thelogo.png";

const Home = () => {
  return (
    <View style={styles.container}>
      <Image source={ Logo } style={styles.logo} />
      <Text style={styles.title}> The Number One </Text>
      <Text style={{marginTop: 5, marginBottom: 5}}> Reading List App </Text>
      <Link href="/about" style={styles.link}>About Page</Link>
      <Link href="/contact" style={styles.link}>Contact Page</Link>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    fontWeight:'bold',
    fontSize:18
  },
  logo: {
    width: 150,   // adjust the width here
    height: 150,  // adjust the height here
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
