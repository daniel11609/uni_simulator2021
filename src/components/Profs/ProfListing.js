import React from 'react';
import '../../component-design/Profs/ProfListing.css'
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
        const testelements = [{image: this.state.img, name: this.state.name, pop: this.state.pop, ex: this.state.ex}, {image: this.state.img, name: this.state.name, pop: this.state.pop, ex: this.state.ex}];

        const reshtml = [];

        for (const [idx, val] of testelements.entries()){
            reshtml.push(
            <div className='ProfBumper'>
                <div class="card" style={{width: "18rem"}}>
                    <img src={val.image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h5 class="card-title">{val.name}</h5>
                        <p class="card-text">
                            <ul><li>
                                Popularity: {val.pop}
                                </li>
                                <li>
                                Exmatriculation:{val.ex}
                                </li></ul>
                        </p>
                    </div>
                    <div class="card-footer">
                        <button type="button" class="btn btn-primary">Add to room</button>
                    </div>
                </div>
            </div>)
        }

        return(
            <div className='ProfList'>{reshtml}</div>
            
        );
    }


   
    
}

