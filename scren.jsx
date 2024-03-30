import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ScrollView,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const BankPage = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          marginTop: windowWidth * 0.03,
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: windowWidth * 0.03,
          marginRight: windowWidth * 0.03,
        }}>
        <Image
          source={require('./hamburger.png')}
          style={{
            width: windowWidth * 0.07,
            height: windowWidth * 0.07,
          }}
        />
        <Image
          source={require('./person.png')}
          style={{
            width: windowWidth * 0.07,
            height: windowWidth * 0.07,
          }}
        />
      </View>
      <ScrollView style={{height: windowHeight * 0.6}}>
        <View
          style={{
            marginTop: windowWidth * 0.07,
            marginLeft: windowWidth * 0.03,
            marginRight: windowWidth * 0.03,
          }}>
          <Text
            style={{
              fontSize: windowWidth * 0.075,
              fontWeight: 'bold',
              color: 'black',
            }}>
            My Cards
          </Text>
          <ScrollView horizontal={true}>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  backgroundColor: '#4c0b78',
                  width: windowWidth * 0.7,
                  height: windowHeight * 0.2,
                  borderRadius: windowWidth * 0.05,
                  marginTop: windowWidth * 0.03,
                }}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: windowWidth * 0.04,
                    marginLeft: windowWidth * 0.04,
                    fontSize: windowWidth * 0.04,
                  }}>
                  Balance
                </Text>
                <Text
                  style={{
                    color: 'white',
                    marginTop: windowWidth * 0.02,
                    marginLeft: windowWidth * 0.04,
                    fontSize: windowWidth * 0.05,
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
                      fontSize: windowWidth * 0.04,
                    }}>
                    ****
                  </Text>
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
                      fontSize: windowWidth * 0.04,
                    }}>
                    4576
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
                  width: windowWidth * 0.7,
                  height: windowHeight * 0.2,
                  borderRadius: windowWidth * 0.05,
                  marginTop: windowWidth * 0.03,
                  marginLeft: windowWidth * 0.03,
                }}>
                <Text
                  style={{
                    color: 'white',
                    marginTop: windowWidth * 0.04,
                    marginLeft: windowWidth * 0.04,
                    fontSize: windowWidth * 0.04,
                  }}>
                  Balance
                </Text>
                <Text
                  style={{
                    color: 'white',
                    marginTop: windowWidth * 0.02,
                    marginLeft: windowWidth * 0.04,
                    fontSize: windowWidth * 0.05,
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
                      fontSize: windowWidth * 0.04,
                    }}>
                    ****
                  </Text>
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
                      fontSize: windowWidth * 0.04,
                    }}>
                    4576
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
            </View>
          </ScrollView>
          <View
            style={{
              marginTop: windowWidth * 0.05,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: windowWidth * 0.05,
                fontWeight: 'normal',
                color: 'black',
              }}>
              Send Money to
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: windowWidth * 0.04,
                  fontWeight: 'normal',
                  color: 'black',
                }}>
                Search
              </Text>
              <Image
                source={require('./search.png')}
                style={{
                  width: windowWidth * 0.05,
                  height: windowWidth * 0.05,
                  marginLeft: windowWidth * 0.03,
                }}
              />
            </View>
          </View>
          <View
            style={{
              marginTop: windowWidth * 0.05,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View style={{alignItems: 'flex-end', width: windowWidth * 0.3}}>
              <Image
                source={require('./plus.png')}
                style={{
                  width: windowWidth * 0.08,
                  height: windowWidth * 0.08,
                  position: 'absolute',
                }}
              />
            </View>
            <Image
              source={require('./woman.png')}
              style={{
                width: windowWidth * 0.08,
                height: windowWidth * 0.08,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BankPage;

const styles = StyleSheet.create({});
