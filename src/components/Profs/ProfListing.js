import React from 'react';
//<ProfListing prof={{id:0,name:"Herberto", img:"", pop:0,ex:2}}/>
export default class ProfListing extends React.Component
{
    constructor(props) {
        super(props);
        this.state = {
           id:this.props.prof.id,
           ex:this.props.prof.ex,
           pop:this.props.prof.pop,
           img:this.props.prof.img,
           name:this.props.prof.name,
           locked:this.props.locked
        }
    }

   
    
    render() {
        return(
            <div class="card" style={{width: "18rem"}}>
                <img src={this.state.img} class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{this.state.name}</h5>
                    <p class="card-text">
                        <ul><li>
                            Popularity: {this.state.pop}
                            </li>
                            <li>
                            Exmatriculation:{this.state.ex}
                            </li></ul>
                    </p>
                </div>
                <div class="card-footer">
                   {this.props.locked?(
                       <button type="button" class="btn btn-primary">Unlock</button>
                   ):(
                    <button type="button" class="btn btn-primary">Add to room</button>
                   )} 
                </div>
                </div>
        );
    }


   
    
}

