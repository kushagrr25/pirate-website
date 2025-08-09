import './home.css'
import timerboard from './timerboard.png'
import parrot from './parrot.png'
function Home() {
return(
  <>

  <div className="timerboard" style={{ backgroundImage: `url(${timerboard})` }}>
    <img className='parrot' src={parrot} />
    <div className="timerboard_inner">
      Event will start in:
      <br></br>
        99d:99h:99m
    </div>
  </div>
  </>
);

}
export default Home;