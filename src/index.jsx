import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './components/App';
import './index.scss';

const renderApp = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('app'),
    );
};

async function init() {
    try {
        renderApp(App);

        if (module.hot) {
            module.hot.accept('./components/App.jsx', () => {
                // eslint-disable-next-line global-require
                const HotApp = require('./components/App').default;
                renderApp(HotApp);
            });
        }
    } catch (err) {
        // eslint-disable-next-line no-console
        console.warn('no chayns environment found', err);
    }
}

init();
