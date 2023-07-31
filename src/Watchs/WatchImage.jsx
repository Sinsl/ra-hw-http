import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export const WatchImage = ({id, title, zone, onClose}) => {
  const [deg, setDeg] = useState({hour: 0, minute: 0, second: 0});
  
  const getDegTime = () => {
    const date = new Date();
    date.setHours(date.getUTCHours() + Number(zone));
    return {
      hour: date.getHours() * 30 + Math.floor(date.getMinutes() * 0.6),
      minute: date.getMinutes() * 6,
      second: date.getSeconds() * 6,
    }
  }

  useEffect(() => {
    setDeg(getDegTime());
    const intervalId = setInterval(() => {
      setDeg(getDegTime());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className='watch-container'>
      <div className='watch-title'>{title}</div>
      <div className='watch-close' onClick={() => onClose(id)}>+</div>
      <div className='watch-img'>
        <div className='arrow-hour' style={{rotate: `${deg.hour}deg`}}></div>
        <div className='arrow-minute' style={{rotate: `${deg.minute}deg`}}></div>
        <div className='arrow-second' style={{rotate: `${deg.second}deg`}}></div>
      </div>
    </div>

  );
}

WatchImage.propTypes = {
  title: PropTypes.string,
  zone: PropTypes.string,
  onClose: PropTypes.func,
  id: PropTypes.number
}