import React from 'react';
import {View} from 'react-native';
// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

export const HeaderGap = () => (
    <Block style={{paddingTop:30}}></Block>
);

export const ParaGap = () => (
    <Block style={{paddingTop:10}}></Block>
);

export const TitleGap = () => (
    <Block style={{paddingTop:15}}></Block>
);

export const CustomGap = ({value}) => (
    <Block style={{paddingTop: value}}></Block>
);
