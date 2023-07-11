import {
  View,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import { COLORS,SIZES,dummyData } from '../constants';
import { CategoryCard} from '../components'

const Bookmark = ({ navigation }) => {
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
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
           
          </View>
        }
        renderItem={({ item }) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', { recipe: item })}
            />
          );
        }}
        ListFooterComponent={<View />}
        style={{}}
      />
    </SafeAreaView>
  )
}

export default Bookmark