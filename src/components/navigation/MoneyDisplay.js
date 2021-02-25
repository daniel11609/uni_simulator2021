import React from 'react';

export default class MoneyDisplay extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
                    currency:this.props.currency,
                    amount:0,
              }
        }
    
    render()
    {
        return(<div>{this.state.amount+" "+this.state.currency}</div>);
    }
    componentDidMount(){
        this.ticker = setInterval(()=>this.tick(),1000);
    }

    componentWillUnmount()
    {
        clearInterval(this.ticker);
    }
    tick(){
        let oldamount = this.state.amount
        //Imolementieren woher wie die Wärhung beommen
        this.setState({
            amount: oldamount+1
        })

    }
}

