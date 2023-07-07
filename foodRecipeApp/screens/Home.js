import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Home = ({ navigation }) => {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text>Home</Text>
      <TouchableOpacity 
      onPress={() => navigation.navigate("Recipe")}
      >
        <Text>Navigate to Recipe</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Home