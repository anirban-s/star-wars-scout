import React from 'react';
import './card.style.css';

class Card extends React.Component {

  constructor(){
    super();

    this.state ={
      showDetails:false
    }
  }

  hideDetails = () => {
    this.setState({showDetails: false});
  }

  showDetails = (event) => {
    this.setState({showDetails: true});
  }

  render(){
    return (
      <div className="people card">
        <h2>{ this.props.people.name }</h2>

        {
          this.state.showDetails
          ?
          (
            <div>

              <div onClick={this.hideDetails}>
                <i className='fa fa-chevron-circle-up fa-5px'></i>
              </div>
              <ul className='details'>
      					<li>Height: {this.props.people.height}</li>
      					<li>Hair Color: {this.props.people.hair_color}</li>
      					<li>Skin Color: {this.props.people.skin_color}</li>
      					<li>Eye Color: {this.props.people.eye_color}</li>
      					<li>Birth Year: {this.props.people.birth_year}</li>
      					<li>Gender: {this.props.people.gender}</li>
	        	</ul>
            </div>
          )
          :
          (
            <div onClick={this.showDetails}>
              <i className='fa fa-chevron-circle-down fa-5px'></i>
            </div>
          )
        }
      </div>
    );
  }


}


export default Card;
