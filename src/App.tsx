import React from 'react';
import {Form} from './Components/Form/Form'
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     <Form/>
    </div>
    </ThemeProvider>
  );
}

export default App;
