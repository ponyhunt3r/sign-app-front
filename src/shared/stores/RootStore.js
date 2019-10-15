import AuthStore from './AuthStore'
import MessageStore from './MessageStore'

class RootStore {
    constructor() {
        this.authStore = new AuthStore(this)
        this.messageStore = new MessageStore(this)
    }
}

export default new RootStore();