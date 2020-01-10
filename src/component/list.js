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

//-----------LIST1-------------//::Settings
export const List1 = ({name, capitalize=true, routeName=null}) => (
    <View style={style1.container} >
        <Button 
            style={style1.button} 
            color="transparent"
            onPress={() => routeName ? NavigationService.navigate(routeName, {}) : Alert.alert(name)}
            >
            <View style={style1.text}>
                <Text style={(capitalize ? {textTransform: 'capitalize'} : {textTransform : 'none'})}>{name}</Text>
            </View>
            <Button
                key="right-arrow"
                onlyIcon
                icon="angle-right"
                iconFamily="font-awesome"
                color="transparent"
                iconColor={"#E3E3E3"}
                iconSize={theme.SIZES.BASE * 1.0625 * 1.5}
                onPress={() => Alert.alert(name)}
                style={{ position:'absolute', right: -10 }}
            />
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
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    }
});


//-----------LIST2-------------//::PersonalInfo
export const List2 = ({left, right, capitalize=true, routeName=null}) => (
    <View style={style2.container} >
        <Button 
            style={style2.button} 
            color="transparent"
            onPress={() => routeName ? NavigationService.navigate(routeName, {}) : Alert.alert(left)}
            >
            <View style={style2.text}>
                <Text style={[(capitalize ? {textTransform: 'capitalize'} : {textTransform : 'none'}), style2.textLeft, {textAlign: 'left', color:'#9DA2A6'}]}>{left}</Text>
                <View style={style2.textRight}>
                    <Text style={[(capitalize ? {textTransform: 'capitalize'} : {textTransform : 'none'}), {marginRight: 15}, (right ? {color:'#081D3F', fontWeight: 'bold'} : {color:'#7E7E7E'})]}>{right ? right : 'Not Verified'}</Text>
                    {
                        right ?
                        (
                            <Button
                                key="checked"
                                onlyIcon
                                icon="checkcircle"
                                iconFamily="AntDesign"
                                color="transparent"
                                iconColor={theme.COLORS.SUCCESS}
                                iconSize={theme.SIZES.BASE * 1.0625}
                                onPress={() => Alert.alert(left)}
                                style={style2.buttonAlert}
                            />
                        ) :
                        (
                            <Button
                                key="exclamation"
                                onlyIcon
                                icon="exclamationcircleo"
                                iconFamily="AntDesign"
                                color="transparent"
                                iconColor={theme.COLORS.ERROR}
                                iconSize={theme.SIZES.BASE * 1.0625}
                                onPress={() => Alert.alert(left)}
                                style={style2.buttonAlert}
                            />
                        )
                    }
                    
                    
                    <Button
                        key="right-arrow"
                        onlyIcon
                        icon="angle-right"
                        iconFamily="font-awesome"
                        color="transparent"
                        iconColor={"#E3E3E3"}
                        iconSize={theme.SIZES.BASE * 1.0625 * 1.5}
                        onPress={() => Alert.alert(left)}
                        style={{ position:'relative', right: -10 }}
                    />
                </View>
            </View>
        </Button>
    </View>
);

const style2 = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        borderBottomColor: '#F0EFEF',
        borderBottomWidth: 1,
    },
    text: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textLeft: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonAlert:{
        marginRight: -5
    }
});
