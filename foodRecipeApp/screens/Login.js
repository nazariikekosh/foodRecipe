import { View, Text, TouchableOpacity, ImageBackground, StatusBar } from 'react-native'
import React from 'react'
import { images, COLORS, SIZES, FONTS } from '../constants'
import LinearGradient from 'react-native-linear-gradient'

const Login = ({ navigation }) => {

  function renderHeader(){
    return(
      <View style={{
        height: SIZES.height > 700 ? "65%" : "60%"
      }}>
        <ImageBackground
          source={images.loginBackground}
          style={{
            flex: 1,
            justifyContent: 'flex-end'
            
          }}
          resizeMode='cover'
        >
          <LinearGradient 
            start={{ x: 0, y: 0}}
            end={{ x: 0 , y: 1}}
            colors={[
              COLORS.transparent,
              COLORS.black
            ]}
            style={{
              height: 200,
              justifyContent: 'flex-end',
              paddingHorizontal: SIZES.padding
            }}
          >

          </LinearGradient>
        </ImageBackground>
      </View>
    )
  }


  return (
    <View style={{
      flex: 1,
      backgroundColor: COLORS.black,
    }}>
      <StatusBar backgroundColor={COLORS.black} barStyle="light-content" />
      {/* Header */}
      {renderHeader()}
      {/* Detail */}
    </View>
  )
}

export default Login
