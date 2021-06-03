/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({products}) => {
    return (
      <View style={styles.container}>
        <View style={styles.imageArea}>
          <Image
            style={styles.productImage}
            source={{uri: products.imgURL}}
          />
        </View>
        <View style={styles.innerContainer}>
          <Text style={styles.title}> {products.title} </Text>
          <Text style={styles.price}> {products.price} </Text>
          <Text style={styles.stock}>
            {products.inStock === false ? 'Stokta Yok' : ''}
          </Text>
        </View>
      </View>
    );
};

export default ProductCard;
