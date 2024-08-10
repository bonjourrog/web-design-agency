import { BusinessProps } from '../Business.props';
import './Business.css';

const Business: React.FC<BusinessProps> = ({business})=>{
    return <div className='company'>
    {business.image?<img className='company__image' src={business.image} alt={`${business.name} logo`} style={{width:business.width?`${business.width}`:undefined}}/>:<p className='company__text' style={{fontFamily:`${business.font}`}}>{business.name}</p>}
</div>
}
export default Business;