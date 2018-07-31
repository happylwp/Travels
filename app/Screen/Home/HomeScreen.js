import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Text } from 'react-native'
import { connect } from 'react-redux'
import { BackColor } from '../../utils/GlobleStyle'

@connect()
class HomeScreen extends Component {
  static navigationOptions = () => ({
    title: null,
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>首页</Text>
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
    backgroundColor: BackColor,
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default HomeScreen
