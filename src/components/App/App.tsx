import Feedback from "../Feedback/Feedback";
import { GlobalStyle } from "../GlobalStyle"
import { Layout } from "../Layout"
// import { useState } from "react";
import Options from "../Options/Options";

function App() {

  return (
    <Layout>
      <Feedback />
      <Options/>
      <GlobalStyle />
    </Layout>
  )
}

export default App
