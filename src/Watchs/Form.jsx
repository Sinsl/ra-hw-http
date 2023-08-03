import { useState } from "react";
import PropTypes from 'prop-types';


export const Form = ({submitHandler}) => {
  const [city, setCity] = useState('');
  const [zone, setZone] = useState('');

  const clear = () => {
    setCity('');
    setZone('');
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const txtCity = city === '' ? 'Без названия' : city;
    const txtZone = zone === '' ? '0' : zone;
    submitHandler({title: txtCity, zone: txtZone});
    clear();
  }

  const cityHandler = (e) => {
    setCity(e.target.value);
  }
  const zoneHandler = (e) => {
    setZone(e.target.value);
  }

  return (
    <form className="watch-form">
      <label>
        <p>Название</p>
        <input type="text" value={city} onChange={cityHandler}/>
      </label>
      <label>
        <p>Временная зона</p>
        <input type="text" value={zone} onChange={zoneHandler}/>
      </label>
      <button onClick={onSubmitHandler}>Добавить</button>
    </form>
    
  );
}

Form.propTypes = {
  submitHandler: PropTypes.func
}