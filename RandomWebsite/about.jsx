import { Link } from 'expo-router'
import { StyleSheet, Text, View } from 'react-native'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Page</Text>
      <Link href="/" style={styles.link}>Return Home</Link>
    </View>
  )
}

export default About

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
  link: {
    marginVertical: 10,
    borderBottomWidth: 1
  }
})
