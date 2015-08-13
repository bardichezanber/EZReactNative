import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  ListView,
} from 'react-native'

import connectToStores from 'alt/utils/connectToStores'
import rollStore from '../store/rollStore'
import rollAction from '../action/rollAction'

var styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  rollButton: {
    width: 100,
    padding: 4,
    backgroundColor: '#333',
    borderRadius: 5,
    marginBottom: 20,
  },
  rollButtonText: {
    textAlign: 'center',
    fontSize: 20,
    color: '#FFFFFF',
  },
  list: {
    flexDirection: 'row',
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    padding: 10,
    height: 60,
  },
})

class RollHandler extends React.Component {
  constructor(...args) {
    super(...args)

    this._handlePressRoll = this._handlePressRoll.bind(this)
  }

  static getStores() {
    return [rollStore]
  }

  static getPropsFromStores () {
    return rollStore.getState()
  }

  _handlePressRoll() {
    if (!this.props.rolling) {
      rollAction.roll()
    }
  }

  render() {
    let {result, rolling} = this.props,
      ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePressRoll}>
          <View style={styles.rollButton}>
            <Text style={styles.rollButtonText}>
              Roll
            </Text>
          </View>
        </TouchableOpacity>
        {rolling ? <Text>Rolling</Text> : <ListView
          style={styles.list}
          dataSource={ds.cloneWithRows(result)}
          renderRow={(rowData) => (
            <TouchableHighlight style={styles.row}>
              <Text>{rowData}</Text>
            </TouchableHighlight>
          )}/>}
      </View>
    )
  }
}

export default connectToStores(RollHandler)
