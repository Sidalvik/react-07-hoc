import './App.css';
import Separator from './Components/Separator/Separator';
import Time from './Components/Time/Time';

function App() {
  return (
    <div className="App">
      <h1 className=''>Курс React.<br></br>Домашнее задание по&nbsp;теме<br></br>"Композиция компонентов"</h1>
      <h2 className='mx-auto text-center'>Задание 1. "Форматирование даты публикации (Times)"</h2>
      <div className='task-1' id='task-1'>
        <Time/>
      </div>
      <Separator/>
    </div>
  );
}

export default App;
