import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions, StyleSheet} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {HeaderGap, ParaGap} from './component/gap';
import {Title2} from './component/title';
import {Input1} from './component/input';
import {Button2} from './component/button';

// galio components
import {Button} from 'galio-framework';

const {width : winWidth, height : winHeight} = Dimensions.get('window');

const timerLimit = 3;

export default class EmailVerification extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            timer: timerLimit,
            sent: false,
            textbutton: 'Send Verification'
        };
    }
    
    startTimer = () => {
        this.setState({ sent: true });
        this.clockCall = setInterval(() => {
            this.decrementClock();
        }, 1000);
    }
    
    decrementClock = () => {  
        if(this.state.timer <= 0) {
            this.setState({ 
                timer: timerLimit,
                sent: false,
                textbutton: "Didn’t received? Resend Verification"
            });
            clearInterval(this.clockCall);
        }
        else{
            this.setState((prevstate) => ({ 
                timer: prevstate.timer-1, 
                textbutton: "Expired in "+prevstate.timer+" seconds" 
            }));
        }
    };
    
    componentDidMount() {
        clearInterval(this.clockCall);
    }
      
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
                        <Text style={{color: "#0C2957"}}>Enter the email address you used when you joined and we'll send you a verification in the same email.</Text>
                    </View>
                    <HeaderGap/>
                    <Input1 placeHolderText="Enter your email" right={this.state.sent ? "Sent" : null}/>
                    <ParaGap/>
                    <Button1 name={this.state.textbutton} btnFunction={this.startTimer} disabled={this.state.sent}/>
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

const Button1 = ({name, btnFunction, disabled}) => (
    <View style={style1.button_container}>
        <Button round disabled={disabled}
                size="large" 
                color="#F86790" 
                onPress={btnFunction} 
                style={style1.button}>{name}</Button>
    </View>
    
);

const style1 = StyleSheet.create({
    button_container:{
        flex:1,
        alignItems: 'center',
        // justifyContent: 'center',
        paddingVertical: 20,
    },
    button:{
        shadowColor: "#F86790",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 6,
    }
});