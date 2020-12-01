import './Header.css';
import Select from '../Select/Select';

function Header(props) {
  return(
    <div className="Header">
        <h1>Новости</h1>
        <Select changeSorting={props.changeSorting}/>
    </div>
  ) 
}

export default Header;