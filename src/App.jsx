import './App.css'
import Task from './tasks/Task';
import { Watchs } from './Watchs/Watchs';


function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;Жизненный цикл и работа с HTTP&quot;</h1>
      </header>
      <Task title={"Задача 1: Мировые часы"} component={<Watchs />}/>
      {/* <Task title={"Задача 2"} component={<Listing  items={etsy}/>}/> */}
      {/* <Task title={"Задача 3"} component={<Chat />}/> */}
    </div>
  )
}

export default App