import PropTypes from 'prop-types';

export const Note = ({item, onDelete}) => {

  const onDeleteHandler = (e) => {
    const id = e.target.closest('.note').dataset.id;
    onDelete(id);
  }
  
  return (
    <div className="note" data-id={item.id}>
        {item.content}
        <div className="material-icons icon-close" onClick={onDeleteHandler}>close</div>
    </div>
  );
}

Note.propTypes = {
  item: PropTypes.object,
  onDelete: PropTypes.func
}