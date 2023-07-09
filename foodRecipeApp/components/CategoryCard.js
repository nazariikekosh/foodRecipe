import React from "react";
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';


const CategoryCard = ({containerStyle, categoryItem, onPress}) => {
    return (
        <TouchableOpacity>
            <Text>{categoryItem.name}</Text>
        </TouchableOpacity>
    )
}

export default CategoryCard;