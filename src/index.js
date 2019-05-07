import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const BACKEND_API = 'http://localhost:1337'

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
      const data = await axios.get(BACKEND_API)
      this.setState({ message: data })
    } catch (error) {
      this.setState({
        error: 'The client is working correctly but no backend API was found.',
      })
    }
  }
  render() {
    return (
      <div>
        <h3>Hello from React!</h3>
        <p>{this.state.message || this.state.error}</p>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
