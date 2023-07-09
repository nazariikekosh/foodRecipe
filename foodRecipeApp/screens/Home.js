import { View, Text, Image, SafeAreaView, TextInput, FlatList, StatusBar } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { COLORS, FONTS, SIZES, icons, images, dummyData } from '../constants'
import { CategoryCard } from '../components'

const Home = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white
      }}
    >
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <FlatList 
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode='on-drag'
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {/* Search Bar */}
            {/* See Recipe Card */}
            {/* Trending Section */}
            {/* Category Header */}
          </View>
        }
        renderItem={({ item }) => {
          return(
            <CategoryCard 
            containerStyle={{
              marginHorizontal: SIZES.padding
            }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          )
        }}
        ListFooterComponent={
          <View
          
          />
        }style={{
          marginBottom: 100
        }}
      />
    </SafeAreaView>
  )
}

export default Home