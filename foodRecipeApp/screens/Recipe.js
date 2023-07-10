import React, { useState, useEffect } from 'react';
import { View, Text, Image, FlatList, StatusBar } from 'react-native';
import { COLORS, FONTS } from '../constants';

const HEADER_HEIGHT = 350;

const Recipe = ({ navigation, route }) => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    let { recipe } = route.params;
    setSelectedRecipe(recipe);
  }, []);

  function renderRecipeCardHeader() {
    return (
      <View style={{ alignItems: 'center' }}>
        {/* Background Image */}
        <Image
          source={selectedRecipe?.image}
          resizeMode='contain'
          style={{ height: HEADER_HEIGHT, width: '200%' }}
        />

        {/* Recipe Creator Card */}
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent={true} />
      <Image
        source={selectedRecipe?.image}
        resizeMode='contain'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: HEADER_HEIGHT + StatusBar.currentHeight,
          width: '100%',
        }}
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

            {/* Ingredient Title */}
          </>
        }
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 30,
              marginVertical: 5,
            }}
          >
            {/* Icon */}

            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                height: 50,
                width: 50,
                borderRadius: 5,
                backgroundColor: COLORS.lightGray,
              }}
            >
              <Image
                source={item.icon}
                style={{
                  height: 40,
                  width: 40,
                }}
              />
            </View>

            {/* Description */}

            <View
              style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',
              }}
            >
              <Text style={{ ...FONTS.body3 }}>{item.description}</Text>
            </View>

            {/* Quantity */}
            <View
              style={{
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <Text style={{ ...FONTS.body3 }}>S{item.quantity}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
