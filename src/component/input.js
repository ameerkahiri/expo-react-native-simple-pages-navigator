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

import DatePicker from 'react-native-datepicker';
import moment from 'moment';


const {width, height} = Dimensions.get('window');

//-----------INPUT1-------------//::emailverification
export const Input1 = ({placeHolderText, right, inputValue, onChangeText, onDoneInput, routeName=null}) => (
    <View style={style1.container} >
        <Button 
            style={style1.button} 
            color="transparent">
            <View style={style1.textContainer}>
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
                {right}
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
    textContainer: {
        width: 300,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    textBold: {
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: 'Bold'},
    },
    textMedium: {
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'},
    },
    textRegular: {
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Regular} : {fontWeight: '0'},
    }
});


//
export const InputIdentity = ({placeHolder, inputValue, onChange, saveInput }) =>(
    <View style={[{borderBottomColor: '#F0EFEF', borderBottomWidth: 1, marginBottom:8}]}>
        <Text style={{color:"grey"}}>
            {placeHolder}
        </Text>
    
        <TextInput 
            style={[{textTransform: 'capitalize', padding:0, width},style1.textMedium]}
            value={inputValue}
            onChangeText={onChange}
            placeholder= {''}
            placeholderTextColor="grey"
            multiline={true}
            autoCapitalize="sentences"
            underlineColorAndroid="transparent"
            selectionColor={'white'}
            maxLength={30}
            returnKeyType="done"
            autoCorrect={false}
            blurOnSubmit={true}
            onSubmitEditing={saveInput}
        />
    </View>
);

export const InputDate = ({placeHolder, inputDate, onDateChange}) => (
  

    <View style={[{borderBottomColor: '#F0EFEF', flexDirection: 'row', borderBottomWidth: 1, marginBottom:8, paddingBottom: 2}]}>

        <Text style={[{textTransform: 'capitalize', color:"grey", position:'absolute'}]}>
                    {placeHolder}
        </Text>
    
        <DatePicker
            style={{flex:1, paddingTop:5}}
            date={inputDate}
            mode="date"
            placeholder=" "
            format="MMMM DD, YYYY"
            minDate="1880-01-01"
            maxDate={moment().format('MMMM DD, YYYY')}
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
                dateIcon: {
                    position: 'absolute',
                    right: 1,
                    top: 4,
                    marginLeft: 0,
                },
                dateInput: {
                    position:'absolute',
                    left:0,
                    top:8,
                    borderWidth:0
                },
                dateText: {
                    fontFamily: theme.FONTFAMILY.Roboto_Medium
                }
            }}
            // onDateChange={(date) => {this.setState({date: date})}}
            onDateChange = {onDateChange}
        />
    </View>
);