import React from 'react'
import { Form } from './Components/Form/Form'
import { SideBar } from './Components/sideBar'
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './theme'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RouteComponentProps } from '@reach/router'
import { Dashboard } from './Components/Dashboard'
import { WalletCard } from './Components/WalletCard'
const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Router>
          <RouterPage
            path="/dashboard"
            pageComponent={<Dashboard DashboardTitle="Dashboard" />}
          />
          <RouterPage
            path="cards"
            pageComponent={<Dashboard DashboardTitle="My cards" />}
          />

          <RouterPage path="/form" pageComponent={<Form />} />
        </Router>
      </div>
    </ThemeProvider>
  )
}

export default App
