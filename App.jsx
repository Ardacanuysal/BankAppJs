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
          justifyContent: 'space-between', //Navbar
          paddingHorizontal: windowWidth * 0.03,
        }}>
        <Image
          source={require('./hamburger.png')}
          style={{
            width: windowWidth * 0.05, //Navbar
            height: windowWidth * 0.05,
          }}
        />
        <Image
          source={require('./person.png')}
          style={{
            width: windowWidth * 0.05, //Navbar
            height: windowWidth * 0.05,
          }}
        />
      </View>
      <ScrollView style={{height: windowHeight * 0.6}}>
        <View
          style={{
            marginTop: windowWidth * 0.07, //Main Scroll Container
            marginLeft: windowWidth * 0.03,
            marginRight: windowWidth * 0.03,
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.05, //My Cards Text
              fontWeight: 'bold',
              color: 'black',
            }}>
            MyCards
          </Text>
          <ScrollView horizontal={true}>
            <View
              style={{
                backgroundColor: '#4c0b78',
                width: windowHeight * 0.4, //width property
                height: windowHeight * 0.2,
                borderRadius: windowWidth * 0.05,
                marginTop: windowWidth * 0.03,
              }}>
              <Text
                style={{
                  color: 'white',
                  marginTop: windowWidth * 0.04,
                  marginLeft: windowWidth * 0.04,
                  fontsize: windowWidth * 0.04,
                }}>
                Balance
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.04,
                  fontsize: windowWidth * 0.05,
                }}>
                25,633.00 £
              </Text>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.04,
                  marginRight: windowWidth * 0.04,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  4567
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.03,
                  marginRight: windowWidth * 0.04,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  12/20
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  VISA
                </Text>
              </View>
            </View>
            <View
              style={{
                backgroundColor: '#fc983a',
                width: windowHeight * 0.4, //width property
                height: windowHeight * 0.2,
                borderRadius: windowWidth * 0.05,
                marginTop: windowWidth * 0.03,
              }}>
              <Text
                style={{
                  color: 'white',
                  marginTop: windowWidth * 0.04,
                  marginLeft: windowWidth * 0.04,
                  fontsize: windowWidth * 0.04,
                }}>
                Balance
              </Text>
              <Text
                style={{
                  color: 'white',
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.04,
                  fontsize: windowWidth * 0.05,
                }}>
                25,633.00 £
              </Text>
              <View
                style={{
                  justifyContent: 'space-around',
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.04,
                  marginRight: windowWidth * 0.04,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  ****
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontsize: windowWidth * 0.04,
                  }}>
                  4567
                </Text>
              </View>
              <View
                style={{
                  justifyContent: 'space-between',
                  flexDirection: 'row',
                  marginTop: windowWidth * 0.02,
                  marginLeft: windowWidth * 0.03,
                  marginRight: windowWidth * 0.04,
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  12/20
                </Text>
                <Text
                  style={{
                    color: 'white',
                    fontSize: windowWidth * 0.04,
                  }}>
                  VISA
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
