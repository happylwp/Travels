import React, { PureComponent } from 'react'
import { View, SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

@connect()
class TravelsListScreen extends PureComponent {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text>分享消息</Text>
        </View>
      </SafeAreaView>
    )
  }
}

export default TravelsListScreen
