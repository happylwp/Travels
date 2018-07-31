/*eslint-disable*/
import { createBottomTabNavigator } from 'react-navigation'
import { View, Image } from 'react-native'
import { CachedImage } from 'react-native-cached-image'
import HomeScreen from './Screen/Home/HomeScreen'
import MessageScreen from './Screen/Message/MessageScreen'
import TravelListScreen from './Screen/TravelList/TravelsListScreen'
import UploadTravelsScreen from './Screen/Upload/UploadScreen'
import MineScreen from './Screen/Mine/MineScreen'
import Icon from 'react-native-vector-icons/FontAwesome'
import TabbarComponent from './TabbarComponent'
import { ThemeColor } from './utils/GlobleStyle'

export const TabRouter = createBottomTabNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: '首页',
        tabBarIcon: ({ tintColor, focused }) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1 }} />
            <Icon
              name="home"
              size={30}
              color={focused ? ThemeColor : '#615F6B'}
            />
          </View>
        ),
      },
    },
    TravelListScreen: {
      screen: TravelListScreen,
      navigationOptions: {
        tabBarLabel: '',
        tabBarIcon: ({ tintColor, focused }) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1 }} />
            <Icon
              name="plane-departure"
              size={30}
              color={focused ? ThemeColor : '#615F6B'}
            />
          </View>
        ),
      },
    },
    UploadTravelsScreen: {
      screen: UploadTravelsScreen,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: ' ',
        tabBarOnPress: () => {
          navigation.navigate('PublishCarGuideScreen')
        },

        tabBarIcon: ({ tintColor, focused }) => (
          <View
            style={{
              marginTop: -10,
              flex: 1,
              alignItems: 'center',
              backgroundColor: 'green',
            }}
          >
            <View style={{ flex: 1 }} />

            <View
              style={{
                height: 64,
                width: 64,
                borderRadius: 32,
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'blue',
              }}
            >
              <Icon name="plus-circle" size={30} color={ThemeColor} />
            </View>
          </View>
        ),
      }),
    },
    MessageScreen: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: '消息',
        tabBarIcon: ({ tintColor, focused }) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1 }} />
            <Icon
              name="comments"
              size={30}
              color={focused ? ThemeColor : '#615F6B'}
            />
          </View>
        ),
      },
    },
    MineScreen: {
      screen: MineScreen,
      navigationOptions: {
        tabBarLabel: '我的',
        tabBarIcon: ({ tintColor, focused }) => (
          <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ flex: 1 }} />
            <Icon
              name="user"
              size={30}
              color={focused ? ThemeColor : '#615F6B'}
            />
          </View>
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    tabBarComponent: props => <TabbarComponent {...props} />,
    tabBarOptions: {
      labelStyle: { margin: 0, height: 0 },
      activeTintColor: Theme_color,
      showIcon: true,
      showLabel: true,
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        height: 70,
      },
    },
  }
)

TabRouter.navigationOptions = ({ navigation }) => {
  const screen = navigation.state.routes[navigation.state.index]
  let { routeName, params } = screen
  let headerTitle

  switch (routeName) {
    case 'HomeScreen': {
      return { ...HomeScreen.navigationOptions({ navigation }) }
    }
    case 'TravelListScreen': {
      return { ...CarListScreen.navigationOptions({ navigation }) }
    }
    case 'MessageScreen': {
      return { ...MessageScreen.navigationOptions({ navigation }) }
    }
    case 'MineScreen': {
      return { ...MineScreen.navigationOptions({ navigation }) }
    }
  }
  return {
    headerTitle,
  }
}
