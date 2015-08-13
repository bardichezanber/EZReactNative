import alt from '../alt'
import rollAction from '../action/rollAction'

class RollStore {
    constructor () {
        this.bindActions(rollAction)

        this.result = []
        this.rolling = false
    }

    onRoll() {
        this.result = []
        this.rolling = true
    }

    onRollFinished(result) {
        this.result = result
        this.rolling = false
    }
}

export default alt.createStore(RollStore, "RollStore")
