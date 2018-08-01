import React, { Component } from 'react'
import {
  Dimensions,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { connect } from 'react-redux'
import { ThemeColor } from './utils/GlobleStyle'

const { width } = Dimensions.get('window')

@connect()
class TabbarComponent extends Component {
  render() {
    const { navigation } = this.props
    const homeScreenFocused = navigation.state.index === 0 // false;//childNav.HomeScreen.isFocused();
    const tavelsListScreenFocused = navigation.state.index === 1 // false;//childNav.CarListScreen.isFocused();
    const messageScreenFocused = navigation.state.index === 3 // false;//childNav.MessageScreen.isFocused();
    const mineScreenFocused = navigation.state.index === 4 // false;//childNav.MineScreen.isFocused();

    return (
      <SafeAreaView style={{ backgroundColor: '#f5f5f5' }}>
        <View
          style={{ height: 65, alignItems: 'center', backgroundColor: 'white' }}
        >
          <View style={{ height: 10, width, backgroundColor: 'white' }} />
          {/* <Image style={{height: 15 ,width:width }} resizeMode={'stretch'} source={require('./image/shadow.png')}/> */}

          <View
            style={{
              flexDirection: 'row',
              height: 55,
              backgroundColor: '#f5f5f5',
            }}
          >
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('HomeScreen')
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Icon
                  name="home"
                  size={30}
                  color={homeScreenFocused ? ThemeColor : '#615F6B'}
                />
                <View style={{ flex: 1 }} />
                <Text
                  style={{
                    color: homeScreenFocused ? ThemeColor : '#615F6C',
                    fontSize: 10,
                  }}
                >
                  首页
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('TravelListScreen')
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Icon
                  name="plane"
                  size={30}
                  color={tavelsListScreenFocused ? ThemeColor : '#615F6B'}
                />
                <View style={{ flex: 1 }} />
                <Text
                  style={{
                    color: tavelsListScreenFocused ? ThemeColor : '#615F6C',
                    fontSize: 10,
                  }}
                >
                  推荐
                </Text>
              </View>
            </TouchableOpacity>

            <View style={{ width: 64 }} />
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('MessageScreen')
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Icon
                  name="comments"
                  size={30}
                  color={messageScreenFocused ? ThemeColor : '#615F6B'}
                />
                <View style={{ flex: 1 }} />

                <Text
                  style={{
                    color: messageScreenFocused ? ThemeColor : '#615F6C',
                    fontSize: 10,
                  }}
                >
                  消息
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flex: 1 }}
              activeOpacity={0.9}
              onPress={() => {
                navigation.navigate('MineScreen')
              }}
            >
              <View
                style={{
                  alignItems: 'center',
                  flex: 1,
                  paddingBottom: 5,
                  paddingTop: 5,
                }}
              >
                <Icon
                  name="user"
                  size={30}
                  color={mineScreenFocused ? ThemeColor : '#615F6B'}
                />
                <View style={{ flex: 1 }} />

                <Text
                  style={{
                    color: mineScreenFocused ? ThemeColor : '#615F6C',
                    fontSize: 10,
                  }}
                >
                  我的
                </Text>
              </View>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={{
              borderRadius: 30,
              height: 64,
              width: 64,
              position: 'absolute',
              top: 0,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f5f5f5',
            }}
            activeOpacity={0.9}
            onPress={() => {
              navigation.navigate('UploadTravelsScreen')
            }}
          >
            <Icon name="plus-circle" size={55} color={ThemeColor} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    )
  }
}

export default TabbarComponent
