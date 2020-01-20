import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {Title16} from './component/title';
import {List1} from './component/list';
import {HeaderGap} from './component/gap';

const { width: winWidth, height: winHeight } = Dimensions.get('window');

export default class Settings extends React.Component{

    checkScreenScroll(){
        if(winHeight > 520)
        {
            return (
                <View style={[styles.bottomFixed, {alignItems:'center'}]}>
                    <Text style={{color:'#7E7E7E'}}>beta v1.1.4</Text>
                    <Text style={{color:'#7E7E7E', fontSize:11}}>Made for You</Text>
                </View>
            );
        }
    }

    render(){

        return (
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="blue"/>
                <View>
                    <Header title="Settings"/>
                </View>
                <ScrollView>
                    <HeaderGap/>
                    <View>
                        <Title16 name="Account Settings"/>
                        <List1 name="Personal information" routeName="PersonalInfo"/>
                        <List1 name="Change password"/>
                        <List1 name="Notifications"/>
                        <List1 name="Privacy & Safety"/>
                        <List1 name="Location (GPS)" capitalize={false}/>
                    </View>
                    <HeaderGap/>
                    <View>
                        <Title16 name="Help Center"/>
                        <List1 name="Support"/>
                        <List1 name="About Us"/>
                        <List1 name="Rate Us"/>
                        <List1 name="Rate Us" routeName="Identification"/>
                    </View>
                    {
                        winHeight <= 520 ? 
                        <View style={[styles.bottomNotFixed, {alignItems:'center'}]}>
                            <Text style={{color:'#7E7E7E'}}>beta v1.1.4</Text>
                            <Text style={{color:'#7E7E7E', fontSize:11}}>Made for You</Text>
                        </View> :
                        null
                    }
                </ScrollView>
                {
                    this.checkScreenScroll()
                }
            </View> 
        );
    };
};