import PropTypes from 'prop-types';
import { useState } from 'react';

export const NotesForm = ({onSubmit}) => {
  const [text, setText] = useState('');

  const onSubmitHandler = () => {
    const value = text === '' ? 'Без текста' : text;
    onSubmit(value);
    setText('');
  }

  const onChangeHandler = (e) => {
    const value = e.target.value;
    setText(value);
  }

  return (
    <form className="notes-form">
      <textarea name="note" rows="10" onChange={onChangeHandler} value={text}></textarea>
      <div className="material-icons icon-arrow" onClick={onSubmitHandler}>keyboard_double_arrow_right</div>
    </form>
  );
} 

NotesForm.propTypes = {
  onSubmit: PropTypes.func
}