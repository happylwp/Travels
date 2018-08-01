import React, { PureComponent } from 'react'
import { View, SafeAreaView, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { BackColor } from '../../utils/GlobleStyle'

@connect(({ TRAVELSLIST }) => ({ ...TRAVELSLIST }))
class TravelsListScreen extends PureComponent {
  static navigationOptions = () => ({
    title: '',
  })

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>分享消息</Text>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BackColor,
  },
})

export default TravelsListScreen
