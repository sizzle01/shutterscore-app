import React from 'react';
import {Form} from './Components/Form/Form';
import {SideBar} from './Components/sideBar'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";



function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
      <SideBar />
     <Form/>
    </div>
    </ThemeProvider>
  );
}

export default App;
