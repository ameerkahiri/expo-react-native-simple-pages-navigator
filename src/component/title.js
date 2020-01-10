import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Platform
} from 'react-native';

// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import theme from '../utils/theme';

//-----------TITLE1-------------//::Settings
export const Title1 = ({name}) => (
    <View style={{marginLeft: 15}}>
        <Text style={{textTransform: 'capitalize'}, style1.text}>{name}</Text>
    </View>
);

const style1 = StyleSheet.create({
    text:{
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: '500'},
        fontSize: theme.SIZES.FONT
    }
});

//-----------TITLE2-------------//::EmailVerification
export const Title2 = ({name}) => (
    <View style={{marginLeft: 15}}>
        <Text style={[{textTransform: 'capitalize'}, style2.text]}>{name}</Text>
    </View>
);

const style2 = StyleSheet.create({
    text:{
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'},
        fontSize:22
    }
});