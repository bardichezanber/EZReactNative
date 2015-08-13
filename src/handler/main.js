import React, {
  View,
  StyleSheet,
  TabBarIOS,
  Navigator,
} from 'react-native'
import tabs from '../tabs'

class MainHandler extends React.Component {
  constructor(...args) {
    super(...args)
    this.state = {selectedTab: 0}
  }

  _handlePressTab(tab) {
    this.refs.navigator.jumpTo(tab)
    this.setState({selectedTab: tabs.findIndex(tabInTabs => tabInTabs.name === tab.name)})
  }

  renderScene(route, navigator) {
    let {handler, ...others} = route,
      Component = handler

    return (
      <View style={styles.appContainer}>
        <Component navigator={navigator} {...others}/>
      </View>
    );
  }

  render() {
    let {route} = this.props,
      items = tabs.map(tab => {
        let selected = tab.name === tabs[this.state.selectedTab].name
        return (
          <TabBarIOS.Item
            key={tab.name}
            icon={tab.icon}
            badge={tab.badge}
            title={tab.title}
            selected={selected}
            onPress={this._handlePressTab.bind(this, tab)}>
            <View/>
          </TabBarIOS.Item>
        )
      })
    let tabBar = (
      <TabBarIOS
        style={styles.tabBar}
        tintColor="white"
        barTintColor="lightgray">
        {items}
      </TabBarIOS>
    )

    return (
      <Navigator
        ref='navigator'
        navigationBar={tabBar}
        renderScene={this.renderScene.bind(this)}
        initialRoute={tabs[0]}
        initialRouteStack={tabs}/>
    );
  }
}

var styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f9f9f9'
  },
  tabBar: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 0.1,
  },
})


export default MainHandler
