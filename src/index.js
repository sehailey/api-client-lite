import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const BACKEND_API = '/api'

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    this.fetchApi()
  }

  async fetchApi() {
    try {
      await axios.get(BACKEND_API)
      this.setState({ message: 'Hello from Express!' })
    } catch (error) {
      this.setState({
        message:
          'The client is working correctly but no backend API was found.',
      })
    }
  }
  render() {
    return (
      <div>
        <h3>Hello from React!</h3>
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
