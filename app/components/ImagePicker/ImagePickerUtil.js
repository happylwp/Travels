import ImagePicker from 'react-native-image-crop-picker'

export const pickImages = props =>
  new Promise((resolve, reject) => {
    ImagePicker.openPicker({
      compressImageQuality: 0.5,
      mediaType: 'photo',
      loadingLabelText: '图片处理中',
      multiple: true,
      maxFiles: 100,
      ...props,
    })
      .then(results => {
        resolve(results)
      })
      .catch(e => {
        reject(e)
      })
  })

export const takePhotos = props =>
  new Promise((resolve, reject) => {
    ImagePicker.openCamera({
      compressImageQuality: 0.5,
      mediaType: 'photo',
      loadingLabelText: '图片处理中',
      ...props,
    })
      .then(results => {
        resolve([results])
      })
      .catch(e => {
        reject(e)
      })
  })
