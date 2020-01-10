import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';
import theme from '../utils/theme';
import NavigationService from '../NavigationService';

const header = ({title, linebottom=true}) => (
    <NavBar
        title={title}
        left={(
        <Button
            key="right-arrow"
            onlyIcon
            icon="angle-left"
            iconFamily="font-awesome"
            color="transparent"
            iconColor={theme.COLORS.BLACK}
            iconSize={theme.SIZES.BASE * 1.0625 * 1.5}
            onPress={() => {NavigationService.goback()}}
            style={{ marginLeft: -10 }}
        />
        )}
        style={[(linebottom ? {borderBottomColor: '#F0EFEF',borderBottomWidth: 1} : null), (Platform.OS === 'android' ? { marginTop: theme.SIZES.BASE } : null)]}
    />
);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'grey',
        paddingTop: 25,
        paddingBottom: 15,
        borderBottomWidth: 0.4,
        borderBottomColor: '#F0EFEF',
        flexWrap: 'wrap'
    },
    text: {
        fontSize: 14,
        color: 'black',
        fontWeight: '200'
    }
});

export default header;