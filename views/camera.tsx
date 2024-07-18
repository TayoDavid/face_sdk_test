import React, {useEffect, useRef} from 'react';
import {
  Dimensions,
  findNodeHandle,
  PixelRatio,
  StyleSheet,
  UIManager,
  View,
} from 'react-native';
import {DaonViewManager} from '../module/daon_sdk_react_native/src/native_view/NativeViewManager';

const createFragment = (viewId: number | null) =>
  UIManager.dispatchViewManagerCommand(viewId, 'create', [viewId]);

// @ts-ignore
export const CameraScreen = () => {
  const ref = useRef(null);

  useEffect(() => {
    const viewId = findNodeHandle(ref.current);
    createFragment(viewId);
  }, []);

  return (
    <View>
      <View>
        <DaonViewManager style={styles.viewManager} ref={ref} />
      </View>
    </View>
  );
};

const widowDimension = Dimensions.get('screen');

export const styles = StyleSheet.create({
  viewManager: {
    width: PixelRatio.getPixelSizeForLayoutSize(widowDimension.width),
    height: PixelRatio.getPixelSizeForLayoutSize(widowDimension.height),
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    height: '100%',
  },
});
