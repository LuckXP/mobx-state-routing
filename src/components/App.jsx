import React from 'react';
import { observer } from 'mobx-react';
import DevTools from 'mobx-react-devtools';
import { observable } from 'mobx';

export const App = observer(({ store }) => (
    <div>
        { renderCurrentView(store) }
        <DevTools />
    </div>
))

function renderCurrentView(store) {
    const view = store.currentView;
    switch (view.section) {
        case "intro":
            return <Intro store={store} />
        case 1:
            return <Section store={store} />
    }
}

const Intro = observer(({ store }) => (
    <div>
      <h1>this is the intro</h1>
      <button onClick={() => store.showSection(1,0)}>lets get started</button>
    </div>
))

const Section = observer(({ store }) => (
    <div>
      <h1>section {store.currentView.section}, question {store.currentView.question}</h1>
      <button onClick={() => store.showSection(1,1)}>Next</button>
      <button onClick={() => store.showSection(1,1)}>Next</button>
    </div>
))
