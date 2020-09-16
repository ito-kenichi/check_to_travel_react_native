import * as React from 'react';
import { 
  StyleSheet,
  View, 
  FlatList, 
  TouchableOpacity,
  Image,
} from 'react-native';

export default class Single2 extends React.Component {

  componentDidMount() {
    this.props.navigation.addListener('didFocus', () => console.log('フォーカス時'))
    console.log("レンダリング時 : 2")
  }

  constructor(props) {
    super(props);
    this.state = {
      numColumns:3,
      items:[
        {req : require('../assets/images/image000.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image001.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image002.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image003.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image004.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image005.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image006.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image007.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image008.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image009.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image010.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image011.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image012.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image013.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image014.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image015.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
        {req : require('../assets/images/image016.png'), colCode : '#7f8c8d', backgroundColor : '#6e7b7c' },
      ]
    };
  }

  changeColor(index) {
    let items_copy = this.state.items.slice();
    if(this.state.items[index].backgroundColor == '#6e7b7c') {
        items_copy[index] = {req : this.state.items[index].req, colCode : this.state.items[index].colCode, backgroundColor : '#1e6b6c' };
    } else {
        items_copy[index] = {req : this.state.items[index].req, colCode : this.state.items[index].colCode, backgroundColor : '#6e7b7c' };
    }
    this.setState({ items: items_copy})
   }
   renderItem = ({item, index}) => {
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <View style={[styles.itemContainer, {backgroundColor : this.state.items[index].backgroundColor} ]}>
        <TouchableOpacity
              style={styles.image}
              onPress={() => this.changeColor(index)}>
              <Image
                style={styles.image}
                source={this.state.items[index].req}
              />
        </TouchableOpacity>
      </View>
    );
  }

  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  }

  render() {
    return (
        <FlatList
        data={this.formatRow(this.state.items, this.state.numColumns)}
        style={styles.container}
        renderItem={this.renderItem}
        numColumns={this.state.numColumns}
        keyExtractor={(item, index) => index.toString()}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  item: {
    backgroundColor: '#6495ED',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 1,
  },
  image: {
    width: 100,
    height: 100,
  }
}); 