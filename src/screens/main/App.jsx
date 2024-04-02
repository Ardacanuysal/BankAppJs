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
          paddingHorizontal: windowWidth * 0.01,
        }}>
        <Image
          source={require('../../Assets/icons/hamburger.png')}
          style={{
            width: windowWidth * 0.09, //Navbar
            height: windowWidth * 0.09,
          }}
        />
        <Image
          source={require('../../Assets/images/me.png')}
          style={{
            width: windowWidth * 0.09, //Navbar
            height: windowWidth * 0.09,
            borderRadius: windowWidth * 0.5,
          }}
        />
      </View>
      <ScrollView style={{height: windowHeight * 0.6}}>
        <View
          style={{
            marginTop: windowWidth * 0.07, //Main Scroll Container
            marginLeft: windowWidth * 0.01,
            marginRight: windowWidth * 0.01,
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
          <View>
            <View
              style={{
                marginTop: windowWidth * 0.05,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <View
                  style={{
                    justifyContent: windowWidth * 0.02,
                    alignItems: windowWidth * 0.3,
                  }}>
                  <Text
                    style={{
                      fontSize: windowWidth * 0.05,
                      flexDirection: 'row',
                      marginRight: windowWidth * 0.001,
                    }}>
                    Send Money To
                  </Text>
                </View>
              </View>
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text
                  style={{
                    paddingLeft: windowWidth * 0.09,
                  }}>
                  Search
                </Text>
                <Image
                  source={require('../../Assets/icons/search.png')}
                  style={{
                    borderRadius: windowWidth * 0.5,
                    width: windowWidth * 0.06,
                    height: windowWidth * 0.06,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});