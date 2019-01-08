import React, { Component } from 'react';
import { getProducts } from './dataReadingServices/productsReadingService';
import './App.css';

class App extends Component {
  state = {
    products: [],
    isError: false,
    isLoading: false,
  }

  loadData = () => {
    this.setState({
      isLoading: true,
      isError: false,
    });

    getProducts()
      .then(res => {
        this.setState({
          products: res.data,
          isLoading: false,
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          isError: true,
          isLoading: false,
        });
      });
  }

  componentDidMount() {
    this.loadData();
  }

  buildBody = () => {
    const { isError, isLoading, products } = this.state;

    if (isError) {
      return (
        <>
          <p style={{ color: 'red' }}>ERROR</p>
          <button onClick={this.loadData}>Repeat</button>
        </>
      );
    }

    if (isLoading) {
      return <p style={{ color: 'blue' }}>LOADING...</p>
    }

    return (
      <>
        <div>products count: {products.length}</div>
        {products.map((p, index) => (<p>{index + 1}. {p}</p>))}
      </>
    );
  }

  render() {


    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to JWT-Auth-App!
          </p>
        </header>
        <div>
          {this.buildBody()}
        </div>
      </div>
    );
  }
}

export default App;
