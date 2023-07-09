import { View, Text, Image, TouchableOpacity, Amimated, Platform } from 'react-native'
import React, {useRef} from 'react'
import { COLORS, FONTS, SIZES, icons } from '../constants'

const Recipe = () => {
  return (
    <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }}>
      <Text>Recipe</Text>
    </View>
  )
}

export default Recipe