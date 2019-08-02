import React from 'react';

import './card-list.style.css';
import Card from '../card/card.component';

export const CardList = (props) => (
    <div className="card-list">
    {
      props.peoples.map(people=>{
          return <Card key={people.name} people={people} />
      })
    }
    </div>
);
