import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  FlatList,
  StatusBar,
} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {COLORS, FONTS, SIZES, icons, images, dummyData} from '../constants';
import {CategoryCard, TrendingCard} from '../components';

const Home = ({navigation}) => {
  function renderHeader() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: SIZES.padding,
          alignItems: 'center',
          height: 80,
        }}>
        {/* Text */}
        <View
          style={{
            flex: 1,
          }}>
          <Text
            style={{
              color: COLORS.darkGreen,
              ...FONTS.h2,
            }}>
            Hello Ihor Lialiuk,
          </Text>

          <Text
            style={{
              marginTop: 3,
              color: COLORS.gray,
              ...FONTS.body3,
            }}>
            What you want to cook today?
          </Text>
        </View>
        {/* Image */}
        <TouchableOpacity onPress={() => console.log('profile')}>
          <Image
            source={images.profile}
            style={{
              width: 55,
              height: 55,
              borderRadius: 40,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }

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

  function renderSeeRecipeCard() {
    return (
      <View
        style={{
          flexDirection: 'row',
          marginTop: SIZES.padding,
          marginHorizontal: SIZES.padding,
          borderRadius: 10,
          backgroundColor: COLORS.lightGreen,
        }}>
        {/* Image */}
        <View
          style={{
            width: 100,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            source={images.recipe}
            style={{
              width: 80,
              height: 80,
            }}
          />
        </View>

        {/* Text */}

        <View
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
          }}>
          <Text
            style={{
              width: '70%',
              ...FONTS.body4,
            }}>
            {' '}
            You have 12 recipes that you haven't tried yet
          </Text>
          <TouchableOpacity
            style={{
              marginTop: 10,
            }}
            omPress={() => comsole.log('See Recipe')}>
            <Text
              style={{
                color: COLORS.darkGreen,
                textDecorationLine: 'underline',
                ...FONTS.h4,
              }}>
              See Recipes
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  function renderTrendingSection() {
    return (
      <View
        style={{
          marginTop: SIZES.padding,
        }}>
        <Text
          style={{
            marginHorizontal: SIZES.padding,
            ...FONTS.h2,
          }}>
          Trending recipe
        </Text>

        <FlatList
          data={dummyData.trendingRecipes}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => `${item.id}`}
          renderItem={({item, index}) => {
            return (
              <TrendingCard
                containerStyle={{
                  marginLeft: index === 0 ? SIZES.padding : 0
                }}
                  recipeItem={item}
                  onPress={() => navigation.navigate('Recipe', {recipe: item})}
                  />
            )
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <FlatList
        data={dummyData.categories}
        keyExtractor={item => `${item.id}`}
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View>
            {/* Header */}
            {renderHeader()}
            {/* Search Bar */}
            {renderSearchBar()}
            {/* See Recipe Card */}
            {renderSeeRecipeCard()}
            {/* Trending Section */}
            {renderTrendingSection()}
            {/* Category Header */}
          </View>
        }
        renderItem={({item}) => {
          return (
            <CategoryCard
              containerStyle={{
                marginHorizontal: SIZES.padding,
              }}
              categoryItem={item}
              onPress={() => navigation.navigate('Recipe', {recipe: item})}
            />
          );
        }}
        ListFooterComponent={<View />}
        style={{}}
      />
    </SafeAreaView>
  );
};

export default Home;
