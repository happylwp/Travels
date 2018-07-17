import Toast from 'react-native-root-toast'

export const appToast = (message, position = 'bottom') => {
  let p = Toast.positions.CENTER
  //
  if (position === 'top') {
    p = Toast.positions.TOP
  }
  else if (position === 'bottom') {
    // p = Toast.positions.BOTTOM;
    p = -150
  }
  else {
    p = Toast.positions.CENTER
  }
  let toast = Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: p,
    shadow: false,
    animation: true,
    hideOnPress: true,
    delay: 0,
    onShow: () => {
      /*calls on toast\`s appear animation start*/
    },
    onShown: () => {
      /*calls on toast\`s appear animation end.*/
    },
    onHide: () => {
      /*calls on toast\`s hide animation start.*/
    },
    onHidden: () => {
      /*calls on toast\`s hide animation end.*/
    }
  })
  setTimeout(function () {
    Toast.hide(toast)
  }, 2000)
}
