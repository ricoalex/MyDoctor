import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ILLGetStarted, ILLogo} from '../../assets';
import {Button} from '../../components';
import {Gap} from '../../components';

const GetStarted = ({navigation}) => {
  return (
    <ImageBackground source={ILLGetStarted} style={styles.page}>
      <ILLogo />
      <Text style={styles.title}>Konsultasi jadi Lebih Mudah #DiRumahSaja</Text>
      <View>
        <Button
          title="Get Started"
          onPress={() => navigation.navigate('Register')}
        />
        <Gap height={16} />
        <Button
          type="secondary"
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    </ImageBackground>
  );
};

export default GetStarted;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 28,
    marginTop: 35,
    fontFamily: 'Nunito-SemiBold',
  },
});
