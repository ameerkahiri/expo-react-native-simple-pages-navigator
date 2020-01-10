import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Alert, Dimensions
} from 'react-native';

// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import theme from '../utils/theme';
import NavigationService from '../NavigationService';

const {width, height} = Dimensions.get('window');

//-----------BUTTON1-------------//::PersonalInfo
export const Button1 = ({name, btnFunction}) => (
    <View style={style1.button_container}>
        <Button round 
                size="large" 
                color="#F86790" 
                onPress={() => Alert.alert(name)} 
                style={style1.button}>{name}</Button>
    </View>
    
);

const style1 = StyleSheet.create({
    button_container:{
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 20,
    },
    button:{
        shadowColor: "#F86790",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 6,
    }
});

//-----------BUTTON2-------------//::emailverification
export const Button2 = ({text, btnFunction}) => (
    <View style={style2.button_container}>
        <Button round 
                size="large" 
                color="transparent" 
                onPress={() => Alert.alert(text)} 
                textStyle={{color: '#F86790'}}
                style={style2.text}>
            {text}
        </Button>
    </View>
    
);

const style2 = StyleSheet.create({
    button_container:{
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 20,
    },
    button:{
        shadowColor: "#F86790",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 6,
    },
    text: {
        color: 'black'
    }
});