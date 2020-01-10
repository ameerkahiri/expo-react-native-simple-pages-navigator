import React from 'react';
import {
    View, TouchableOpacity, StyleSheet, Alert
} from 'react-native';
import NavigationService from './NavigationService';

// galio components
import {
    Text, Block, Button, Card, NavBar, Input, Icon
} from 'galio-framework';

import theme from './utils/theme';

export default class Home extends React.Component {
    render(){
      return (
        <View style={[{justifyContent:'center'},{flex:1},{alignItems:'center'}]}>
          <Button
              key="settings"
              onlyIcon
              icon="edit"
              iconFamily="font-awesome"
              color="transparent"
              iconColor={theme.COLORS.BLACK}
              iconSize={theme.SIZES.BASE * 1.0625 * 1.5}
              onPress={() => {NavigationService.navigate('Settings', {});}}
              style={{ marginLeft: -10 }}
          >Settings</Button>
        </View>
        );
    };
};
