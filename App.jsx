import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const App = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: windowWidth * 0.03,
        }}>
        <Image
          source={require('./hamburger.png')}
          style={{
            width: windowWidth * 0.05,
            height: windowWidth * 0.05,
          }}
        />
        <Image
          source={require('./hamburger.png')}
          style={{
            width: windowWidth * 0.05,
            height: windowWidth * 0.05,
          }}
        />
      </View>
      <ScrollView style={{height: windowHeight * 0.6}}>
        <View style={{width: windowWidth * 0.3}}>
          <View style={{paddingVertical: windowWidth * 0.03}}>
            <Text
              style={{
                fontSize: windowWidth * 0.05,
                fontWeight: 'bold',
              }}>
              MyCards
            </Text>
          </View>
        </View>
      </ScrollView>
      <ScrollView
        style={{
          backgroundColor: 'red',
          height: windowHeight * 0.2,
        }}
        horizontal={true}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
