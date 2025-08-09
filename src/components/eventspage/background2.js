import background2 from './background2.png';
import './background2.css'
import compass from './compass.png';
function Background2(){
   return(
    <>
      <div className='back' style={{backgroundImage: `url(${background2})`}}>
        <img className='compass2' src={compass}></img>




      </div>

    </>
   );
}
export default Background2;