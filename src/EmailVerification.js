import React from 'react';
import {View, Text, StatusBar, ScrollView, Dimensions, StyleSheet, AsyncStorage} from 'react-native';
import styles from './utils/style';
import Header from './component/header';
import {HeaderGap, ParaGap} from './component/gap';
import {Title2} from './component/title';
import {Input1} from './component/input';
import {Button2} from './component/button';
import theme from './utils/theme';

// galio components
import {Button} from 'galio-framework';
import moment from 'moment';

const {width : winWidth, height : winHeight} = Dimensions.get('window');

const timerLimit = 120;
var date;

export default class EmailVerification extends React.Component {

    constructor(props) {
        super(props);
        this.state = { 
            timer: timerLimit,
            sent: false,
            disableBtn: true,
            verified: false,
            textbutton: 'Send Verification',
            expired: '',
        };
        this._isMounted = false;
    }

    _startTimer = () => {
        this.startTimer(false);
    }
    
    startTimer = continued => {
        if(continued === false)
        {
            this.getExpired();
            // console.log('okeyy');
        }
        if(this._isMounted) this.setState({ sent: true, disableBtn: true });
        this.clockCall = setInterval(() => {
            this.decrementClock();
        }, 1000);
    }
    
    decrementClock = () => {  
        if(this.state.timer <= 0) {
            if(this._isMounted) 
                this.setState({ 
                    timer: timerLimit,
                    disableBtn: false,
                    textbutton: "Didn’t received? Resend Verification",
                    expired: ''
                });

            clearInterval(this.clockCall);
            this._storeData('EmailVerificationExp','');
        }
        else{
            if(this._isMounted) 
                this.setState((prevstate) => ({ 
                    timer: prevstate.timer-1, 
                    textbutton: "Expired in "+prevstate.timer+" seconds" 
                }));
        }
    };

    checkStatus = () => {
        if(this.state.verified)
        {
            return(
                <View style={style1.textRight}>
                    <Text style={[{textTransform: 'capitalize', marginRight: 15, color:'#00CD50', fontWeight: 'bold'}]}>Verified</Text>
                    <Button
                        key="checked"
                        onlyIcon
                        icon="checkcircle"
                        iconFamily="AntDesign"
                        color="transparent"
                        iconColor={theme.COLORS.SUCCESS}
                        iconSize={theme.SIZES.BASE * 1.0625}
                        onPress={() => Alert.alert(left)}
                        style={{marginRight: -5}}
                    />
                </View>
            );
        }
        else if(this.state.sent)
        {
            return (
                <Text style={[{textTransform: 'capitalize'}, style1.sent]}>
                    Sent
                </Text>
            );
        }
        else{
            return (
                <Text style={[{textTransform: 'capitalize'}, style1.sent]}>
                    
                </Text>
            );
        }
    }

    getExpired = () => {
        date = moment().format('hh:mm:ss A');
        var expirydate = moment(date, "hh:mm:ss A").add(timerLimit, 'seconds').format('LTS');
        if(this._isMounted) this.setState({expired: expirydate});
        this._storeData('EmailVerificationExp', expirydate);
        // console.log(expirydate);
    }

    getDiff = (start, exp) => {
        // console.log('getDiff '+moment('02:48:30 AM', 'hh:mm:ss A').diff(moment('2:48:10 AM', 'hh:mm:ss A'))/1000);
        return (moment(exp, 'hh:mm:ss A').diff(moment(start, 'hh:mm:ss A')))/1000;
    }

    getContinueStat = async () => {

        try{
            await this._retrieveData('EmailVerificationExp', function(exp){
                if(exp)
                {
                    const start = moment().format('hh:mm:ss A');
            
                    // console.log('exp : '+exp);
                    // console.log('curr : '+start);

                    if(this._isMounted) {
                        if(start !== null && exp !== null){
                            this.setState({expired: exp});
                        }
                    }

                    //get diff time
                    var diffTime = this.getDiff(start, exp);
                    // console.log(diffTime);

                    if(diffTime > 0 && (diffTime !== null || diffTime !== NaN)){
                        //set timer continue
                        if(this._isMounted) this.setState({timer: diffTime});
                        this.startTimer(true);
                        // console.log('timer continue');
                    }
                    else if(diffTime <= 0 && (diffTime !== null || diffTime !== NaN)){
                        if(this._isMounted) this.setState({ expired: '', disableBtn: false });
                        this._storeData('EmailVerificationExp', '');
                        // console.log('timer stop');
                    }

                    // console.log('done_getContinueStat');
                }
                else{
                    if(this._isMounted) this.setState({ disableBtn: false });
                }
                
            }.bind(this));

        }
        catch (error) {
            console.log(error);
            return;
        }
        finally{
            // console.log('done_getContinueStat');
            // return;
        }
        
    }

    _storeData = (key, value) => {
        try {
            AsyncStorage.setItem(key, value);
        } 
        catch (error) {
            console.log(error);
        }
        finally{
            // console.log('done_storeData');
            // return;
        }
    };

    _retrieveData = async (key, callback) => {
        try {
            callback(await AsyncStorage.getItem(key));
        } 
        catch (error) {
            console.log(error);
            return null;
        }
        finally{
            // console.log('done_retrieveData');
            // return;
        }
    };
    
    componentDidMount() {
        this._isMounted = true;
        clearInterval(this.clockCall);
        date = new moment().format('hh:mm:ss A');
        if(this._isMounted) this.getContinueStat();
    }

    componentWillUnmount() {
        this._isMounted = false;
        clearInterval(this.clockCall);
        // this._storeData('EmailVerificationExp', '');
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
                    <Input1 placeHolderText="Enter your email" right={this.checkStatus()}/>
                    <ParaGap/>
                    {
                        this.state.verified ? null :
                        <Button1 name={this.state.textbutton} btnFunction={this._startTimer} disabled={this.state.disableBtn}/>
                    }
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
    },
    sent: {
        writingDirection: 'rtl',
        color: '#F86790',
        ...Platform.OS === 'android' ? {fontFamily: theme.FONTFAMILY.Roboto_Bold} : {fontWeight: '500'}
    },
    textRight: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    }
});