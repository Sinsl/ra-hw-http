import { Note } from "./Note";
import PropTypes from 'prop-types';


export const NotesBox = ({data, onDelete}) => {



  return (
    <div className="notes-box">
      {
        data.map(item => (
          <Note 
            key={item.id}
            item={item}
            onDelete={onDelete}
          />
        ))
      }
    </div>
  );
}

NotesBox.propTypes = {
  data: PropTypes.array,
  onDelete: PropTypes.func
}