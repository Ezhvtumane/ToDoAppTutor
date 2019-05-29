import React, { Component } from 'react';

class Footer extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      character: {},
    };
  }

  componentDidMount() {
    this.setState({loading: true});
    fetch("https://swapi.co/api/people/1")
    .then(responce => responce.json())
    .then(data => this.setState({character: data, loading: false}))
  }

  render() {
    const text = this.state.loading ? 'loading' : this.state.character.name
    const style = {
      fontSize: 20,
      color: "blue"
    }
    return (
      <div>
        <p>{text}</p>
        <p style={style}>Footer component</p>
      </div>
    );
  }
}

export default Footer;