import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StatusBar, TouchableOpacity } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { Viewers } from '../components';

const HEADER_HEIGHT = 350;

const RecipeCreatorCardDetail = ({ selectedRecipe }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      {/* Profile Photo */}
      <View style={{ width: 40, height: 40, marginLeft: 20 }}>
        <Image
          source={selectedRecipe?.author?.profilePic}
          style={{ width: 40, height: 40, borderRadius: 20 }}
        />
      </View>
      {/* Labels */}
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>Recipe by:</Text>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{selectedRecipe?.author?.name}</Text>
      </View>
      {/* Button */}
      <TouchableOpacity
        style={{
          width: 30,
          height: 30,
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          borderRadius: 5,
          borderWidth: 1,
          borderColor: COLORS.lightGreen1,
        }}
      >
        <Image
          source={icons.rightArrow}
          style={{ width: 15, height: 15, tintColor: COLORS.lightGreen1 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const RecipeCreatorCardInfo = ({ selectedRecipe }) => {
  return (
    <View style={{ flex: 1, borderRadius: SIZES.radius, backgroundColor: COLORS.transparentBlack7 }}>
      <RecipeCreatorCardDetail selectedRecipe={selectedRecipe} />
    </View>
  );
};

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  function renderHeaderBar() {
    return (
      <View style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 90, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-between', paddingHorizontal: SIZES.padding, paddingBottom: 10 }}>
        {/* Back Button */}
        <TouchableOpacity
          style={{ alignItems: 'center', justifyContent: 'center', height: 35, width: 35, borderRadius: 18, borderWidth: 1, borderColor: COLORS.lightGray, backgroundColor: COLORS.transparentBlack5 }}
          onPress={() => navigation.goBack()}
        >
          <Image source={icons.back} style={{ width: 15, height: 15, tintColor: COLORS.lightGray }} />
        </TouchableOpacity>
        {/* Bookmark Button */}
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 35, width: 35 }} onPress={handleBookmark}>
          <Image
            source={isBookmarked ? icons.bookmarkFilled : icons.bookmark}
            style={{ width: 30, height: 30, tintColor: COLORS.darkGreen }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderRecipeCardHeader() {
    return (
      <View style={{ alignItems: 'center' }}>
        {/* Background Image */}
        <Image source={selectedRecipe?.image} resizeMode="contain" style={{ height: HEADER_HEIGHT, width: '200%' }} />
        {/* Recipe Creator Card */}
        <View style={{ position: 'absolute', bottom: 10, left: 30, right: 30, height: 80 }}>
          <RecipeCreatorCardInfo selectedRecipe={selectedRecipe} />
        </View>
      </View>
    );
  }

  function renderRecipeInfo() {
    return (
      <View style={{ flexDirection: 'row', height: 130, width: SIZES.width, paddingHorizontal: 30, paddingVertical: 20, alignItems: 'center' }}>
        {/* Recipe */}
        <View style={{ flex: 1.5, justifyContent: 'center' }}>
          <Text style={{ ...FONTS.h2 }}>{selectedRecipe?.name}</Text>
          <Text style={{ marginTop: 5, color: COLORS.lightGray2, ...FONTS.body4 }}>
            {selectedRecipe?.duration} | {selectedRecipe?.serving} Serving
          </Text>
        </View>
        {/* Viewers */}
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Viewers viewersList={selectedRecipe?.viewers} />
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <Image
        source={selectedRecipe?.image}
        resizeMode="contain"
        style={{ position: 'absolute', top: 0, left: 0, right: 0, height: HEADER_HEIGHT + StatusBar.currentHeight, width: '100%' }}
      />
      <FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={(item) => `${item.id}`}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            {/* Header */}
            {renderRecipeCardHeader()}
            {/* Info */}
            {renderRecipeInfo()}
            {/* Ingredient Title */}
          </>
        }
        renderItem={({ item }) => (
          <View style={{ flexDirection: 'row', paddingHorizontal: 30, marginVertical: 5 }}>
            {/* Icon */}
            <View style={{ alignItems: 'center', justifyContent: 'center', height: 50, width: 50, borderRadius: 5, backgroundColor: COLORS.lightGray }}>
              <Image source={item.icon} style={{ height: 40, width: 40 }} />
            </View>
            {/* Description */}
            <View style={{ flex: 1, paddingHorizontal: 20, justifyContent: 'center' }}>
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>
            {/* Quantity */}
            <View style={{ alignItems: 'flex-end', justifyContent: 'center' }}>
              <Text style={{ ...FONTS.body3 }}>S{item.quantity}</Text>
            </View>
          </View>
        )}
        ListFooterComponent={<View style={{ marginBottom: 45 }} />}
      />
      {/* Header Bar */}
      {renderHeaderBar()}
    </View>
  );
};

export default Recipe;
