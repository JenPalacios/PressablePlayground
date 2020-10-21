/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Pressable, SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';

const DATA = [
  {
    id: '1',
    title: 'First Item',
  },
  {
    id: '2',
    title: 'Second Item',
  },
  {
    id: '3',
    title: 'Third Item',
  },
  {
    id: '4',
    title: 'Fourth Item',
  },
  {
    id: '5',
    title: 'Fifth Item',
  },
  {
    id: '6',
    title: 'Sixth Item',
  },
  {
    id: '7',
    title: 'Fourth Item',
  },
  {
    id: '8',
    title: 'Fourth Item',
  },
  {
    id: '9',
    title: 'Fourth Item',
  },
  {
    id: '10',
    title: 'Fourth Item',
  },
  {
    id: '11',
    title: 'Fourth Item',
  },
  {
    id: '12',
    title: 'Fourth Item',
  },
  {
    id: '13',
    title: 'Fourth Item',
  },
  {
    id: '14',
    title: 'Fourth Item',
  },
  {
    id: '15',
    title: 'Fourth Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Pressable style={({ pressed }) => [
      {
        backgroundColor: pressed
          ? 'rgb(210, 230, 255)'
          : 'white'
      },
      styles.wrapperCustom
    ]}>
      {({ pressed }) => (
        <Text style={styles.text}>
          {pressed ? 'Pressed!' : `Press Me ${title}`}
        </Text>
      )}
    </Pressable>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  wrapperCustom: {
    flex: 1,
    borderRadius: 8,
    padding: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  text: {
    width: 200,
    height: 200,
  }
});

export default App;
