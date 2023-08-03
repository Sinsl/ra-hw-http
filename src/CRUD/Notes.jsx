import { NotesBox } from "./NotesBox";
import { NotesForm } from "./NotesForm";
import { useEffect, useState } from "react";


import './notes.css';

export const Notes = () => {

  let [notesList, setNotesList] = useState([]);
  let [isLoad, setLoad] = useState(false);
  const apiUrl = import.meta.env.VITE_URL;

  const request = async (options) => {
    const response = await fetch(apiUrl + options.url, {
        method: options.method,
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(options.data)
    });  
      
      if(options.method !== 'GET') {
        request({ url: '/notes', method: 'GET' });
      } else {
        const result = await response.json();
        setNotesList(result);
      }
  }

  useEffect(() => {
    (async () => {
      await fetch(apiUrl + '/ping');
      setLoad(true);
      await request({ url: '/notes', method: 'GET' });      
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const deleteHandler = async (id) => {
    await request({ url: '/notes/' + id, method: 'DELETE' });
  }


  const updateHandler = async () => {
    await request({ url: '/notes', method: 'GET' });
  }

  const onSubmitHandler = async (value) => {
    await request({ url: '/notes', method: 'POST', data: {content: value} });
  }


  return (
    <div className="notes">
      <div className="notes-header">
        <div className="notes-title">Notes</div>
        <div className="material-icons icon-sync" onClick={updateHandler}>sync</div>
      </div>
      {!isLoad && <div className="server">Сервер на Render запускается. Минуточку...</div>}
      {isLoad && <NotesBox data={notesList} onDelete={deleteHandler}/>}
      <NotesForm onSubmit={onSubmitHandler}/>
    </div>    
  );
}