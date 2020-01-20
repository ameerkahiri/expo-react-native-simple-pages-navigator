import React from 'react';
import {View, Text, StatusBar, ScrollView, StyleSheet} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {Title16, Title22, Title20, TitleCustom} from './component/title';
import {HeaderGap, TitleGap} from './component/gap';
import theme from './utils/theme';

export default class WhyRequired extends React.Component{
    render(){
        return(
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="blue"/>
                <View>
                    <Header title="" linebottom={false}/>
                </View>
                <ScrollView>
                    <HeaderGap/>
                    <TitleCustom name="Why is this required?" fontsize={theme.SIZES.FONT} bold={false}/>
                    <TitleGap/>
                    <View style={{marginHorizontal: 15}}>
                        <Text style={style.text}>As a regulated entity by Bank Negara Malaysia, we are required to know our customers as a security measure.</Text>
                        <TitleGap/>
                        <Text style={style.text}>All information provided will be securely kept and treated as strictly confidential.</Text>
                        <TitleGap/>
                        <Text style={style.text}>If information provided is suspected to be false, we reserve the rights to terminate your account without prior notice.</Text>
                    </View>
                </ScrollView>
            </View>
        );
    };
};

const style = StyleSheet.create({
    text:{
        color: "#0C2957"
    },
    bold: {
        
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: '500'}
    }
});