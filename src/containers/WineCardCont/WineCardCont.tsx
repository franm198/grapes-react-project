import React from 'react';
import WineCard from '../../components/WineCard/WineCard';
import Wines from '../../data/Types/Wines';
import './WineCardCont.scss';

type WineCardContProps = {
  data: Wines[];
};

const WineCardCont: React.FC<WineCardContProps> = ({ data }) => {
  return (
    <section className='wine-card-container'>
      {data.length === 0 ? (
        <div className="no-results">
          <h2>There is no wine to be found here...</h2>
        </div>
      ) : (
        data.map((wine,index) => (
          <WineCard key={index} wines={wine} /> 
        ))
      )}
    </section>
  );
};

export default WineCardCont;