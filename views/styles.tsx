import {Dimensions, PixelRatio, StyleSheet} from 'react-native';

const widowDimension = Dimensions.get('screen');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  outerContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  imgBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  img: {
    width: 300,
    height: 300,
    justifyContent: 'center',
  },
  touchOpacity: {
    height: 52,
    margin: 12,
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 8,
    borderWidth: 1,
  },
  input: {
    height: 52,
    margin: 12,
    color: 'black',
    borderColor: 'grey',
    borderRadius: 8,
    borderWidth: 1,
    padding: 10,
  },
  labelText: {
    fontSize: 16,
    marginLeft: 12,
    color: 'black',
  },
  text: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  viewManager: {
    width: PixelRatio.getPixelSizeForLayoutSize(widowDimension.width),
    height: PixelRatio.getPixelSizeForLayoutSize(widowDimension.height),
  },
  largeText: {
    fontSize: 24,
    color: 'black',
  },
  cameraContainer: {
    marginTop: 16,
    alignSelf: 'center',
    backgroundColor: 'transparent',
  },
  loadingOverlayBg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,50,0.45)',
  },
  menuText: {color: 'blue', fontWeight: 'bold', fontSize: 14},
});
