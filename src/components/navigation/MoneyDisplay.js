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
    load_from_storage(key) {
        // we convert the string json data to a real object and return it
        return JSON.parse(localStorage.getItem(this.state.user_name+"_"+key));
    }
    tick() {
        let amount = this.load_from_storage("currencies_"+this.props.id)

        // TODO: get currency
        this.setState({
            amount: amount
        })

    }
}

