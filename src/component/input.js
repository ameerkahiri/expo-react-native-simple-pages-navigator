import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Alert, Dimensions, TextInput
} from 'react-native';

// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import theme from '../utils/theme';
import NavigationService from '../NavigationService';

const {width, height} = Dimensions.get('window');

//-----------INPUT1-------------//::emailverification
export const Input1 = ({placeHolderText, right, inputValue, onChangeText, onDoneInput, routeName=null}) => (
    <View style={style1.container} >
        <Button 
            style={style1.button} 
            color="transparent">
            <View style={style1.text}>
                <TextInput 
                    style={null}
                    value={inputValue}
                    onChangeText={onChangeText}
                    placeholder= {placeHolderText}
                    placeholderTextColor="grey"
                    multiline={true}
                    autoCapitalize="sentences"
                    underlineColorAndroid="transparent"
                    selectionColor={'white'}
                    maxLength={30}
                    returnKeyType="done"
                    autoCorrect={false}
                    blurOnSubmit={true}
                    onSubmitEditing={onDoneInput}
                />
                <Text style={[{textTransform: 'capitalize'}, style1.sent]}>
                    {right}
                </Text>
            </View>
        </Button>
    </View>
);

const style1 = StyleSheet.create({
    container: {
        // paddingVertical:0,
        marginHorizontal: 15,
        borderBottomColor: '#F0EFEF',
        borderBottomWidth: 1,
        // flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    text: {
        width: 300,
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    sent: {
        writingDirection: 'rtl',
        color: '#F86790',
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: '500'}
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});