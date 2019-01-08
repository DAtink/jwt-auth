import React from 'react';
import { getProducts } from '../dataReadingServices/productsReadingService';

class Content extends React.Component {
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

    render() {
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
}

export default Content;