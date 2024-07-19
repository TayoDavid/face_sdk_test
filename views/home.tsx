/* eslint-disable react-native/no-inline-styles */
import * as React from 'react';
import {
  NativeModules,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

// @ts-ignore
export const Home = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const {DaonSdkReactNativeModule} = NativeModules;

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <View>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        />

        <TouchableOpacity
          onPress={() => {
            DaonSdkReactNativeModule.addLicense(
              '{"signature":"dWVBSGegPDsnVr6yN97\\/FKNRunGp0eCF2b+\\/UCEsbPAgKvEB34BqkZZ82MVptijn2CwCdMx2fZ0hY5eoVM13Zf8McwLr2B5pLHM0qrLCRjl8aO2BA+wXi1rILIsasJHzBmNyx8aBy62sF9yBooesYq36lDmNcZNGed1EkT1cYlCz\\/nMUxUvBaoW5RIzOJBe92591XchbSW5VUwZW2DHznelWkCL7ofVKC0+U0zlI685J3D21+zabN4FovxX8ZLa6ADHnyiF\\/oA97xNxaryczpev3R5g65RYvceA3v\\/Z0lu0+Jco4UVBP6Z+Ongru\\/FCp+ecvsUlw6Ccj+KzzO7RCEA==","organization":"DAON","signed":{"features":["ALL"],"expiry":"2030-12-24 00:00:00","applicationIdentifier":"com.daon.*"},"version":"2.1"}',
            );
            navigation.navigate('CameraScreen');
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>Start Camera</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
