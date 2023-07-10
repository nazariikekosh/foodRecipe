import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Platform,
} from 'react-native';
import React, {useRef} from 'react';
import {COLORS, FONTS, SIZES, icons} from '../constants';

const HEADER_HEIGHT = 350;

const Recipe = ({navigation, route}) => {
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const scrollY = useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    let {recipe} = route.params;
    setSelectedRecipe(recipe);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}>
      <Animated.FlatList
        data={selectedRecipe?.ingredients}
        keyExtractor={item => `${item.id}`}
        showsVerticalScrollIndicator={false}
        listHeaderComponent={<View></View>}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        renderItem={({item}) => (
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
                backgroundColor: COLORS.lightGray
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

              <View style={{
                flex: 1,
                paddingHorizontal: 20,
                justifyContent: 'center',

              }}>
                <Text
                  style={{
                    ...FONTS.body3
                  }}
                >
                  {item.description}
                </Text>
              </View>

            {/* Quanity */}
          </View>
        )}
      />
    </View>
  );
};

export default Recipe;
