import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { COLORS, SIZES, icons, FONTS } from '../constants';

const Search = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

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
        }}
      >
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

  function renderGalleryItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          margin: 5,
        }}
        onPress={() => {
          setSelectedPhoto(item);
          setIsModalVisible(true);
        }}
      >
        <Image
          source={item}
          style={{
            width: 100,
            height: 100,
            borderRadius: 10,
          }}
        />
      </TouchableOpacity>
    );
  }

  function renderModal() {
    return (
      <Modal
        visible={isModalVisible}
        animationType="fade"
        transparent
        onRequestClose={() => setIsModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.blackOpacity,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            style={{
              position: 'absolute',
              top: 40,
              right: 20,
            }}
            onPress={() => setIsModalVisible(false)}
          >
            <Image
              source={icons.close}
              style={{
                width: 20,
                height: 20,
                tintColor: COLORS.white,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setIsModalVisible(false)}>
            <Image
              source={selectedPhoto}
              style={{
                width: 300,
                height: 300,
                borderRadius: 10,
              }}
            />
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }

  const photos = [
    require('../assets/images/recipes/laksa.png'),
    require('../assets/images/recipes/nasi-lemak.webp'),
    require('../assets/images/recipes/recipe.png'),
    require('../assets/images/recipes/satay.png'),
    require('../assets/images/recipes/spagetti.png'),
  ];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        paddingTop: StatusBar.currentHeight,
      }}
    >
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
            {/* Photo Gallery */}
            <FlatList
              data={photos}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{
                marginTop: SIZES.padding,
              }}
              renderItem={renderGalleryItem}
            />
          </View>
        }
      />
      {renderModal()}
    </SafeAreaView>
  );
};

export default Search;
