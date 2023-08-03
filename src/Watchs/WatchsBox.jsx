import PropTypes from 'prop-types';
import { WatchImage } from './WatchImage';

export const WatchsBox = ({dataWatch, onClose}) => {

  return (
    <div className="watchs-box">
      {dataWatch.map((elem, idx) => (
        <WatchImage 
          key={idx}
          id={idx}
          title={elem.title}
          zone={elem.zone}
          onClose={onClose}
        />
      ))}
    </div>
  );
}
WatchsBox.propTypes = {
  dataWatch: PropTypes.array,
  onClose: PropTypes.func
}