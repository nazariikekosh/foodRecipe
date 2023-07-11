import { View, Text, SafeAreaView, StatusBar, FlatList, Image, TextInput} from 'react-native'
import React from 'react'
import { COLORS, SIZES, icons, FONTS } from '../constants';

function renderSearchBar() {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        marginHorizontal: SIZES.padding,
        paddingHorizontal: SIZES.padding,
        borderRadius: 10,
        backgroundColor: COLORS.lightGray,
      }}>
      <Image
        source={icons.search}
        style={{
          width: 20,
          height: 20,
          tintColor: COLORS.gray,
        }}
      />
      <TextInput
        style={{
          marginLeft: SIZES.radius,
          ...FONTS.body3,
        }}
        placeholderTextColor={COLORS.gray}
        placeholder="Search recipes"
      />
    </View>
  );
}

const Search = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: StatusBar.currentHeight, // Додано відступ від верхнього краю
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <FlatList
        ListHeaderComponent={
          <View>
            {/* Search Bar */}
            {renderSearchBar()}

          </View>
        }
      />
    </SafeAreaView>
  )
}

export default Search