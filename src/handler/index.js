import React, {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
})

class IndexHandler extends React.Component {
  constructor(...args) {
    super(...args)

    this._handleTap = this._handleTap.bind(this)
    this.state = {
      status: false,
    }
  }

  _handleTap() {
    this.setState({status: !this.state.status})
  }

  render() {
    let {status} = this.state

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {status ? 'HI' : 'HEY'}
        </Text>
        <Text style={styles.instructions}>
          {this.props.text}
        </Text>
        <TouchableOpacity onPress={this._handleTap}>
          <Text>
            Touch me!
          </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default IndexHandler
