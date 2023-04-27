
import './homepage.css';
import '../layout/layout.css';
import { NavLink} from 'react-router-dom';
import Recomendation from '../../components/recomendation/Recomendation';

const Homepage = () => {


  return (
    <div>

      <div className='banner'>
        <div className='gradient'>
          <img src='/image/background.jpeg' className='banner-ImgBackground' alt='poster'></img>
          <div className='container'>
            <div className='banner-header'>
              <h3>Information about movies and series</h3>
              <h3 className='banner-header-h3'>for free</h3>
            </div>
              <NavLink to='/search' className='banner-btn-tosearch'>To start searching</NavLink>
          </div>
        </div>
      </div>
      
      <div className="recomendation">
        <Recomendation />
      </div>

    </div>
  )
}

export default Homepage

