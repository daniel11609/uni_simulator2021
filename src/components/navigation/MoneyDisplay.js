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
            <div style={{display: "flex", justifyContent: "flex-end"}}>
                {this.state.amount+" "}
                <span style={{width: "8px"}} />
                {this.props.children}
            </div>
        );
    }
   
    tick() {
        let user_name = localStorage.getItem("user_name");

        let amount = JSON.parse(localStorage.getItem(user_name+"_currencies_"+this.props.id));

        // TODO: get currency
        this.setState({
            amount: amount.amount
        })

    }
}

