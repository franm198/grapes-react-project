import WineCard from '../../components/WineCard/WineCard';
import Wines from './../../data/Types/Wines';
import './WineCardCont.scss';

type WineCardContProps = {
    data: Wines[];
}

const WineCardCont = ({data}: WineCardContProps)=> {
    
    return (
        <section className='wine-card-container'>
            {data.map((wines: Wines) => {
                return (
                
                    <WineCard key={wines.id} wines={wines} />
                    
                )
            })}
        </section>
    )
}
export default WineCardCont