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


//-----------BUTTON1-------------//::PersonalInfo --- PINK BUTTON
export const PinkButton = ({name, btnFunction, routeName=null}) => (
    <View style={pink_Button.button_container}>
        <Button round 
                size="large" 
                color="#F86790" 
                onPress={() => routeName ? NavigationService.navigate(routeName, {}) : Alert.alert(name)} 
                style={pink_Button.button}>{name}
        </Button>
    </View>
    
);

const pink_Button = StyleSheet.create({
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
export const Button2 = ({text, btnFunction, routeName=null}) => (
    <View style={style2.button_container}>
        <Button round 
                size="large" 
                color="transparent" 
                onPress={() => routeName ? NavigationService.navigate(routeName, {}) : Alert.alert(text)} 
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