import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'

@connect()
class MessageScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>消息</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default MessageScreen
