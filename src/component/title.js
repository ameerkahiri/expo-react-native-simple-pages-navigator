import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Platform
} from 'react-native';

// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import theme from '../utils/theme';

//-----------TITLE16-------------//::Settings
export const Title16 = ({name, bold=true}) => (
    <View style={{marginLeft: 15}}>
        <Text style={{textTransform: 'capitalize'}, style1.text, (bold ? style1.bold : null)}>{name}</Text>
    </View>
);

const style1 = StyleSheet.create({
    text:{
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'},
        fontSize: theme.SIZES.FONT
    },
    bold: {
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: '500'}
    }
});

//-----------Title20-------------//::Identification
export const Title20 = ({name}) => (
    <View style={{marginLeft: 15}}>
        <Text style={{textTransform: 'capitalize'}, style3.text}>{name}</Text>
    </View>
);

const style3 = StyleSheet.create({
    text:{
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'},
        fontSize: 20
    }
});

//-----------Title22-------------//::EmailVerification
export const Title22 = ({name}) => (
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


//-----------TITLECustom-------------//::EmailVerification
export const TitleCustom = ({name, fontsize, bold=true}) => (
    <View style={{marginLeft: 15}}>
        <Text style={[{textTransform: 'capitalize', fontSize: fontsize}, stylec.text, (bold ? stylec.bold : null)]}>{name}</Text>
    </View>
);

const stylec = StyleSheet.create({
    text:{
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'}
    },
    bold: {
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Medium} : {fontWeight: '500'}
    }
});