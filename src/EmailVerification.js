import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {HeaderGap, ParaGap} from './component/gap';
import {Title2} from './component/title';
import {Input1} from './component/input';
import {Button1, Button2} from './component/button';

const {width : winWidth, height : winHeight} = Dimensions.get('window');

export default class EmailVerification extends React.Component {
    render(){
        return(
            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="blue"/>
                <View>
                    <Header linebottom={false}/>
                </View>
                <ScrollView>
                    <HeaderGap/>
                    <Title2 name="Email Verification"/>
                    <ParaGap/>
                    <View style={{marginHorizontal: 15}}>
                        <Text>Enter the email address you used when you joined and we'll send you a verification in the same email.</Text>
                    </View>
                    <HeaderGap/>
                    <Input1 placeHolderText="Enter your email" right=""/>
                    <ParaGap/>
                    <Button1 name="Send Verification"/>
                    {
                        winHeight <= 520 ? 
                        <View style={[{alignItems:'center'}, styles.bottomNotFixed]}>
                            <Button2 text="Why is this required?"/>
                        </View> :
                        null
                    }
                </ScrollView>
                {
                    winHeight > 520 ? 
                    <View style={{alignItems:'center', position: 'relative', bottom: winHeight/8}}>
                        <Button2 text="Why is this required?"/>
                    </View> :
                    null
                }
            </View>
        );
    };
};