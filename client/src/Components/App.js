import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import { Component } from 'react'
import Routes from './routes/Routes'
import Alert from './shared/Alert'
import Navigation from './layout/Navigation'


class App extends Component {

  constructor() {
    super()
    this.state = {
      showAlert: false,
      alertText: ''
    }
  }

  handleAlert(alertText, showAlert = true) {
    this.setState({ showAlert, alertText })
  }


  render() {

    return (
      (
        <>

          <main style={{ flex: '1' }}>

            <Navigation style={{ marginTop: "10px" }} />

            <Routes style={{ marginTop: "10px" }} handleAlert={alertText => this.handleAlert(alertText)} />

            <Alert handleAlert={(alertText, showAlert) => this.handleAlert(alertText, showAlert)} show={this.state.showAlert} text={this.state.alertText} />

          </main>

        </>
      )
    )
  }
}

export default App