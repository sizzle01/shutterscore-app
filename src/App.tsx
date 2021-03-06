import React from 'react'
import { Form } from './Components/Form/Form'
import { SideBar } from './Components/sideBar'
import { ThemeProvider } from '@material-ui/core/styles'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import { Button } from '../src/Components/Button/Button'
import theme from './theme'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import { RouteComponentProps } from '@reach/router'
import { Dashboard } from './Components/Dashboard'
import { WalletCard } from './Components/WalletCard'
import { Cards } from './Components/Cards'
import { Icon } from './Components/Icon'
import { Slider } from './Components/Carousel'
import { MobileHomePage } from './Components/MobileHomePage'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import { CardInfo } from './Components/CardInfo'

const RouterPage = (
  props: { pageComponent: JSX.Element } & RouteComponentProps,
) => props.pageComponent

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MobileHomePage />} />
            <Route path="/form" element={<Form slider={<Slider />} />} />
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  DashboardTitle="Dashboard"
                  cardOption={
                    <Cards wallet={<WalletCard balance="$255,356,001" />} />
                  }
                />
              }
            />

            <Route
              path="/cards"
              element={
                <Dashboard
                  DashboardTitle="My cards"
                  cardButton={
                    <Button
                      startIcon={<AddCircleOutlineIcon />}
                      action="Add new card"
                    />
                  }
                  cardOption={<Cards />}
                  mobileAddCard={
                    <Icon IconType="AddCircleOutlineIcon" style="" />
                  }
                />
              }
            />
            <Route path="/card" element={<CardInfo />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  )
}

export default App
