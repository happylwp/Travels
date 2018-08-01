import React, { Component } from "react"
import { Platform, Text, TouchableOpacity, View } from "react-native"
import Ionicons from "react-native-vector-icons/Ionicons"
import Feather from "react-native-vector-icons/Feather"
import { connect } from "react-redux"
import { NavigationActions } from "react-navigation"
import _ from 'lodash'

@connect(({ app }) => ({ ...app }))
class FakeSearchHeader extends Component {
  render() {
    const { onDefaultLocation } = this.props

    return (
     <View style={{ flex: 1 }}>
        <View style={{ flex: 1, paddingHorizontal: 25, paddingBottom: 10, paddingTop: (Platform.OS === 'android' ? 10 : 0) }}>
          <View style={{ backgroundColor: '#E8E8E8', borderRadius: 5, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity onPress={() => { }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
                <Text style={{ fontSize: 14, color: '#333333' }}>
                  {!_.isNil(onDefaultLocation) ? onDefaultLocation.city || '全国' : '全国'}
                </Text>
                <Ionicons name='ios-arrow-down-outline' size={8} color='#323232' style={{ marginLeft: 5 }} />
              </View>

            </TouchableOpacity>

            <View style={{ width: 1, paddingVertical: 8 }}>
              <View style={{ flex: 1, backgroundColor: '#bbbbbb' }} />
            </View>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => {
              const navigationAction = NavigationActions.navigate({ routeName: 'SearchScreen' })
              this.props.dispatch(navigationAction)
            }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
                <Feather name='search' size={15} color='#B3B2B3' style={{ marginRight: 8 }} />
                <Text style={{ fontSize: 14, color: '#999999', }}>
                  请输入景点城市/景点名
                                      </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}

// <View style={{ flex: 1 }}>
//   <View style={{ flex: 1, paddingHorizontal: 25, paddingBottom: 10, paddingTop: (Platform.OS === 'android' ? 10 : 0) }}>
//     <View style={{ backgroundColor: '#E8E8E8', borderRadius: 5, flex: 1, flexDirection: 'row', alignItems: 'center' }}>
//       <TouchableOpacity onPress={() => { }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
//           <Text style={{ fontSize: 14, color: '#333333' }}>
//             {!_.isNil(onDefaultLocation) ? onDefaultLocation.city || '全国' : '全国'}
//           </Text>
//           <Ionicons name='ios-arrow-down-outline' size={8} color='#323232' style={{ marginLeft: 5 }} />
//         </View>

//       </TouchableOpacity>

//       <View style={{ width: 1, paddingVertical: 8 }}>
//         <View style={{ flex: 1, backgroundColor: '#bbbbbb' }} />
//       </View>
//       <TouchableOpacity style={{ flex: 1 }} onPress={() => {
//         const navigationAction = NavigationActions.navigate({ routeName: 'SearchScreen' })
//         this.props.dispatch(navigationAction)
//       }}>
//         <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12 }}>
//           <Feather name='search' size={15} color='#B3B2B3' style={{ marginRight: 8 }} />
//           <Text style={{ fontSize: 14, color: '#999999', }}>
//             请输入景点城市/景点名
//                                 </Text>
//         </View>
//       </TouchableOpacity>
//     </View>
//   </View>
// </View>

export default FakeSearchHeader
