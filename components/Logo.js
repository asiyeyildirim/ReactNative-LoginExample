import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Image,
  TouchableOpacity,

} from 'react-native';

import logo from '../assets/100ky.png';

const Logo = (props) => {
  const birlesikStyle = StyleSheet.flatten([styles.logo, props.style]);

  return (

    <Image style = {birlesikStyle}
    source = {logo}
    />
  );

  
}

const styles =StyleSheet.create({

  logo: {
    width:280,
    height: 130,
    alignSelf :'center',
    marginBottom: 50,
  }
})

export default Logo;