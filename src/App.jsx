import './App.css'
import Task from './tasks/Task';
import { Watchs } from './Watchs/Watchs';
import { Notes } from './CRUD/Notes';


function App() {
  return (
    <div className='main'>
      <header className='title'>
        <h1>Домашнее задание к теме &quot;Жизненный цикл и работа с HTTP&quot;</h1>
      </header>
      <Task title={"Задача 1: Мировые часы"} component={<Watchs />}/>
      <Task title={"Задача 2: CRUD"} component={<Notes />}/>
    </div>
  )
}

export default App