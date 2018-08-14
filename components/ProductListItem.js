import React from "react";
import PropTypes from "prop-types";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

function ProductListItem({ product }) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        marginRight: 35,
        marginLeft: 35
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: `http://192.168.56.1:4000/images/${product.image}` }}
        resizeMode="center"
      />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <Text
          style={{
            marginBottom: 25,
            overflow: "hidden"
          }}
          key={product.id}
        >
          {product.id}-{product.title}
        </Text>
        <Ionicons
          name="md-heart"
          size={32}
          color="#00ff80"
          style={{ marginRight: 10 }}
        />
      </View>
    </View>
  );
}

ProductListItem.propTypes = {
  product: PropTypes.object.isRequired
};

export default ProductListItem;

