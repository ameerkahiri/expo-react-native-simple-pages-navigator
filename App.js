import React from 'react';
import Settings from './src/Settings';
import Home from './src/Home';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavigationService from './src/NavigationService';
import PersonalInfo from './src/PersonalInfo';
import EmailVerification from './src/EmailVerification';
import Theme from './src/utils/theme';
import { View } from 'react-native';

const MainNavigator = createStackNavigator({
  Home: {screen: Home},
  Settings: {screen: Settings},
  PersonalInfo: {screen: PersonalInfo},
  EmailVerification: {screen: EmailVerification}
},{
  initialRouteName: "Home",
  header: null,
  headerMode: 'none'
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        loading: false
    }
  }

  componentDidMount = () => {
    // Load custom fonts
    try{
      Theme.fontLoaded( function(result) {
        this.setState({ loading: result });
        console.log(result);
      }.bind(this));
    }
    catch(error){
      console.log(error);
    }
    finally{
      console.log('success');
    }
  }

  render() {
    
    return (
      this.state.loading ? 
      (
      <AppContainer 
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
      ) :
      (
        <View></View>
      )
    );
  }
}
