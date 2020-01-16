import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {List2} from './component/list';
import {HeaderGap} from './component/gap';
import {PinkButton} from './component/button';

export default class PersonalInfo extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="blue"/>
                <View>
                    <Header title="Personal Information"/>
                </View>
                <ScrollView>
                    <HeaderGap/>
                    <List2 left="Identification" right=""/>
                    <List2 left="Email" right="" capitalize={false} routeName="EmailVerification"/>
                    <List2 left="Mobile" right=""/>
                    <List2 left="Credit / Debit Card" right=""/>
                    <List2 left="Address" right=""/>
                    <HeaderGap/>
                    <PinkButton name="Save"/>
                </ScrollView>
            </View>
        );
    };
};