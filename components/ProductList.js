import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  FlatList,
  Image
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import ProductListItem from "./ProductListItem";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [], isLoading: true, page: 1, limit: 20 };
  }

  async componentDidMount() {
    let { page, limit } = this.state;
    let response = await fetch(
      `http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`
    );
    let products = await response.json();
    this.setState({ products, isLoading: false, page: page + 1 });
  }

  _renderItem({ item: product }) {
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

  _keyExtractor(p, i) {
    return `${p.id}`;
  }

  async _getMore() {
    let { page, limit } = this.state;
    console.log(
      `http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`
    );
    let response = await fetch(
      `http://192.168.56.1:4000/products?_page=${page}&_limit=${limit}`
    );
    let products = await response.json();
    this.setState({
      products: [...this.state.products, ...products],
      isLoading: false,
      page: page + 1
    });
  }

  render() {
    const { products, isLoading } = this.state;
    return (
      <View>
        {isLoading && <ActivityIndicator size="large" color="green" />}
        <FlatList
          data={products}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          onEndReachedThreshold={0.5}
          onEndReached={() => this._getMore()}
        />
      </View>
    );
  }
}

export default ProductList;