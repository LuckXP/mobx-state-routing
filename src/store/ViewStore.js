import { observable, computed, action } from 'mobx';
import { fromPromise } from 'mobx-utils';

class ViewStore {
    fetch = null;

    // @observable currentUserIP = null;
    @observable currentView = null;

    constructor(fetch) {
        this.fetch = fetch
    }

    // @computed get isAuthenticated() {
    //     return this.currentUserIP !== null
    // }

    @computed get currentPath() {
        switch(this.currentView.section) {
            case "intro": return "/intro/"

            case 1: return `/section/${this.currentView.section}/question/${this.currentView.question}/`

        }
    }

    @action showIntro() {
        this.currentView = {
            section: "intro",
        }
    }

    @action showSection(sectionId, questionId) {
        this.currentView = {
            section: sectionId,
            question: questionId
        }
    }



    // @action showDocument(documentId) {
    //     this.currentView = {
    //         name: "document",
    //         documentId,
    //         document: fromPromise(
    //             this.isAuthenticated
    //                 ? this.fetch(`/json/${documentId}.json`)
    //                 : Promise.reject("Authentication required")
    //         )
    //     }
    // }

    // @action performLogin(username, password, callback) {
    //     this.fetch(`/json/${username}-${password}.json`)
    //         .then(user => {
    //             this.currentUserIP = user
    //             callback(true)
    //         })
    //         .catch(err => {
    //             callback(false)
    //         })
    // }
}

export default ViewStore;
