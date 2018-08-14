import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import ProductList from './components/ProductList';

export default class App extends React.Component {

 
    render() {
        return (
        <ProductList />
        );
        }
        }
        
        const styles = StyleSheet.create({
        container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        },
    });