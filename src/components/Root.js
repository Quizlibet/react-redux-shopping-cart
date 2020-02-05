import React from 'react'
import PropTypes from 'prop-types'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from './App';

const theme = createMuiTheme();

const Root = ({ store }) => (
  <Provider store={store}>
    <MuiThemeProvider theme={theme}>
    <Router>
      <Route path="/" component={App}>
      </Route>
    </Router>
    </MuiThemeProvider>
  </Provider>
)
Root.propTypes = {
  store: PropTypes.object.isRequired
}
export default Root