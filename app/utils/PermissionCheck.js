import Permissions from 'react-native-permissions'

export const PermissionType = {
  Photo: 'photo', // 相册
  Camera: 'camera', // 相机
  Location: 'location', // 定位
  Notification: 'notification', // 推送
}

export const CheckPermission = type =>
  new Promise((resolve, reject) => {
    Permissions.request(type)
      .then(response => {
        if (response === 'authorized') {
          resolve(response)
        } else {
          reject(new Error(message(type)))
        }
      })
      .catch(err => {
        reject(err)
      })
  })

const message = type => {
  switch (type) {
    case PermissionType.Photo:
      return 'Travels需要使用您的相册，请前往设置去开启相册权限'
    case PermissionType.Camera:
      return 'Travels需要使用您的相机，请前往设置去开启相机权限'
    case PermissionType.Location:
      return 'Travels需要使用您的位置，请前往设置去开启定位权限'
    default:
      return null
  }
}
