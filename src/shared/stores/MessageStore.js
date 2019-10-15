import { action, computed, observable, decorate } from 'mobx'

class MessageStore {
    _isMessageDisplayed;
    _messageVariant;
    _message;

    constructor(RootStore) {
        this.rootStore = RootStore;
        this.setInitialStoreData()
    }
    setInitialStoreData() {
        this._isMessageDisplayed = false;
    }
    setMessageVariant(variant) {
        this._messageVariant = variant
    }
    displayMessage(msg) {
        this._message = msg;
        this._isMessageDisplayed = true
        setTimeout(()=> {
            this._isMessageDisplayed = false;
        }, 5000)
    }
}
decorate(MessageStore, {
    _isMessageDisplayed: observable,
    _messageVariant: observable,
    setMessageVariant: action,
    setDisplayedMessage: action,
})
export default MessageStore;