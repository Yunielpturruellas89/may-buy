import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Link } from "expo-router";

const ProductsScreen = () => {
  const [products, setProducts] = useState([
    { id: 0, name: "0000000000000" },
    { id: 1, name: "11111111111" },
    { id: 2, name: "222222222222222" },
    { id: 3, name: "33333333333333333" },
    { id: 4, name: "444444444444444" },
  ]);
  return (
    <View>
      <Text>ProductsScreen</Text>
      <FlatList
        data={products}
        renderItem={({ item, index }) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Link href={`/products/${item.id}`}>Ver Detalles</Link>
          </View>
        )}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({});
