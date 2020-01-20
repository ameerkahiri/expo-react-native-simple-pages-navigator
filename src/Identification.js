import React from 'react';
import {StatusBar, View, ScrollView, Text, Image} from 'react-native';
import Header from './component/header';
import {InputIdentity, InputDate} from './component/input';
import styles from './utils/style';
import {PinkButton} from './component/button';
import {Title20} from './component/title';
import {HeaderGap, TitleGap, CustomGap} from './component/gap';
// import SvgImageView from 'react-native-svg-img';

// SvgImageView;

export default class Identification extends React.Component {
    constructor(props){
        super(props)
        this.state = {date:''}
    }

    newDate = value => {
        this.setState({
          date: value
        });
      };

    render(){
        return (

            <View style={styles.main_container}>
                <StatusBar barStyle="light-content" backgroundColor="blue"/>
                <View>
                    <Header title="Identity Information"/>
                </View>

                <ScrollView>
                    <View>
                        <HeaderGap/>
                        <Title20 name="Review your details"/>
                        <TitleGap/>
                    </View>

                    <View style={[{borderWidth:2, borderColor:'#FF3F77',  marginHorizontal:15, flexDirection: 'row', borderRadius:10}]}>
                        <View style={[{margin:15, flex:1, alignItems:'center'}]}> 
                            <Text style={[{color:'gray', fontSize:12}]}>Nationality</Text>
                            <Text sdtyle={{fontSize:14}}>Malaysian</Text>
                        </View>
                        <View style={[{margin:15,flex:1, alignItems:'center', borderLeftWidth:1, borderLeftColor:'#FE4077'}]}> 
                            <Text style={{color:'gray', fontSize:12}}> ID Type</Text>
                            <Text style={{fontSize:14}}>MyKad</Text>
                        </View>
                    </View>    

                    <CustomGap value={40}/>

                    <View style={{marginHorizontal:15}}>
                        {/* <SvgImageView width={200} height={200} source={require('./Icon/icon-info.svg')}/> */}
                        {/* <Image source={require('./Icon/icon-info.svg')} style={{width:50, height:50, borderWidth:1}}/>  */}
                        <Text style={{fontSize:14}}>Please fill in your real information, It cannot be change after verification.</Text>
                    </View>

                    <CustomGap value={40}/>

                    <View style={[{marginHorizontal:15}]}>
                        <InputIdentity placeHolder="Full Name (as per MyKad)"/>
                        <InputIdentity placeHolder="IC Number (xxxxxx-xx-xxxx)"/>
                        <InputDate placeHolder="Date of Birth" inputDate={this.state.date} onDateChange={this.newDate}/>
                        <InputIdentity placeHolder="Gender"/>
                    </View>

                    <CustomGap value={40}/>
                    
                    <View>
                        <PinkButton name="Submit" btnFunction=""/>
                    </View>
                    

                    <View style={{marginHorizontal:15, marginBottom:20}}>
                        <Text style={{fontSize:14}}>Rest assured that your information is kept safe and confidential.</Text>
                    </View>
                </ScrollView>
                
            </View>

        )
    }
}