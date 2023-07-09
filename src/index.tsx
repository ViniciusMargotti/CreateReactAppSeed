import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import './styles/Root.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from './webvitals/reportWebVitals';
import { ThemeProvider } from '@mui/material';
import App from './App';
import i18nFit from './i18n';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate as ReduxPersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './store';
import { darkTheme } from 'mui-material-components-tsdx';

const elementRoot: any = document.getElementById('root');
const root = ReactDOM.createRoot(elementRoot);

root.render(
    <React.StrictMode>
        <ReduxProvider store={store}>
            <ReduxPersistGate loading={null} persistor={persistor}>
                <I18nextProvider i18n={i18nFit}>
                    <ThemeProvider theme={darkTheme}>
                        <App />
                    </ThemeProvider>
                </I18nextProvider>
            </ReduxPersistGate>
        </ReduxProvider>
    </React.StrictMode>,
);

reportWebVitals();
