import IndexHandler from './handler/index'
import RollHandler from './handler/roll'

const tabs = [
  {name: 'index', title: '首頁', handler: IndexHandler},
  {name: 'roll', title: '骰餐廳', handler: RollHandler},
]

export default tabs
