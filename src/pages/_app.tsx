import React  from 'react'
import Head from 'next/head'
import App, { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import createStore, { initialiseStore } from '../ducks/createStore'
import { Provider } from 'react-redux'

export default function MyApp (props) {
  const { Component, pageProps } = props
  const reduxStore = createStore(pageProps.initialReduxState)

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Provider store={reduxStore}>
        <Head>
          <title>My page</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </React.Fragment>
  )
}

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  //initialise redux store on server side
  const reduxStore = await initialiseStore();

  appProps.pageProps = {
    ...appProps.pageProps,
    initialReduxState: reduxStore.getState(),
  };

  return appProps;
};
