import { action, computed, observable, decorate } from 'mobx'

class AuthStore {
    _isLogged;
    _token;

    constructor(RootStore) {
        this.rootStore = RootStore;
        this.setInitialStoreData()
    }
    setInitialStoreData() {
        this._isLogged = false;
    }
    setLogged(logged) {
        this._isLogged = logged;
    }
    setToken(tkn) {
        this.token = tkn;
    }
}
decorate(AuthStore, {
    _isLogged: observable,
    setInitialStoreData: action,
    setLogged: action,
    setToken: action,
})
export default AuthStore;