import alt from '../alt'
import _ from 'underscore'

class RollAction {
  constructor() {
    this.generateActions('rollFinished')
  }

  roll() {
    this.dispatch()

    setTimeout(() => {
      let result = [
        '親勝火鍋店',
        '學校自助餐', 
        '阿根廷牛排',
        '大福',
        '傻瓜乾麵', 
        '奧客牛排',
        '東萊排骨',
      ]
      this.actions.rollFinished(_.chain(result).shuffle().map(r => {return {name: r}}).value().slice(0, 3))
    }, 2000)
  }
}

export default alt.createActions(RollAction)
