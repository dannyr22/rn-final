import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
// import 'info.plist';
// import 'strings.xml';

// import {SERVICE_KEY} from '/ios/rnFinal/info';

const Key = () => {
  // let KEY = Bundle.main.object(forInfoDictionaryKey: “Service_Key”)
  // print(serverUrl)
  return (
    <SafeAreaView>
      <View>
        {/* <Text>{SERVICE_KEY}</Text> */}
        <Text>I am going to be a key</Text>
      </View>
    </SafeAreaView>
  );
};

export default Key;

const styles = StyleSheet.create({});
