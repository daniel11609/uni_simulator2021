import React from 'react';

export default class MoneyDisplay extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            amount: this.props.amount,
        }
    }

    componentDidMount() {
        this.ticker = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount() {
        clearInterval(this.ticker);
    }
    
    render() {
        return(
            <div>
                {this.state.amount+" "}
                {this.props.children}
            </div>
        );
    }


    tick() {
        let old_amount = this.state.amount

        // TODO: get currency
        this.setState({
            amount: old_amount+1
        })

    }
}

