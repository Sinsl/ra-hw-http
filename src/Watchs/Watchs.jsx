import './watchs.css';
import { Form } from "./Form";
import { WatchsBox } from "./WatchsBox";
import { dataWatch } from './data';
import { useState } from 'react';


export const Watchs = () => {
  let [watchArr, setWatchArr] = useState(dataWatch);

  const onCloseHandler = (idx) => {
    setWatchArr(arr => arr.filter((el, index) => index !== idx));
  }

  const onSubmitHandler = (value) => {
    setWatchArr(arr => [...arr, value]);

  }

  return (
    <div className="watchs">
      <Form  submitHandler={onSubmitHandler}/>
      <WatchsBox dataWatch={watchArr} onClose={onCloseHandler}/>
    </div>
    
  );
}