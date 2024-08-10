import './Home.css';
import Hero from './Hero';
import { Business as BusinessModel } from '../../Models/Business';
import { BUSINESS_DATA_MOCK } from '../../Mocks/business.mock';
import Business from '../../Components/Business';

export default function(){
    const business:BusinessModel[] = BUSINESS_DATA_MOCK;
    return <div className='Home'>
        <Hero/>
        <section className='companies'>
            {business.map(business=>(
                    <Business business={business}/>
            ))}
        </section>
    </div>
}