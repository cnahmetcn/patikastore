import React from 'react';
import {
  SafeAreaView,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import store from './store.json';
import ProductCard from './components/ProductCard';

function App() {
  const renderProducts = ({item}) => <ProductCard products={item} />;

  const [text] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>PatikaStore</Text>
        <TextInput
          inlineImageLeft="search_icon"
          style={styles.input}
          placeholder="Ara..."
          value={text}
        />
      </View>
      <FlatList
        style={styles.flat}
        horizontal={false}
        numColumns={2}
        data={store}
        renderItem={renderProducts}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    color: 'purple',
    fontWeight: 'bold',
    marginLeft: 5,
    fontSize: 40,
  },
  input: {
    height: 50,
    margin: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  flat: {
    flex: 1,
  },
});

export default App;
