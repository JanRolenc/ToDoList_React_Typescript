import React, { FC, ChangeEvent, useState } from 'react'
import './App.css'
import { ITask } from './Interfaces' //todoList je pole objektu a potrebuji teda interface
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [task, setTask] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleInputsChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //jedna fce pro oba inputy pomoci if; void potvrzuje, fce nebude nic vracet
    if (event.target.name === 'task') {
      setTask(event.target.value)
    } else {
      setDeadline(Number(event.target.value)) //value musim naparsovat
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline }
    setTodoList([...todoList, newTask])
    // console.log(todoList)
    setTask('') //VYMAZE obsah inputu po odkliku; !musim ale u inputu pridat value={task}
    setDeadline(0)
  }

  const removeTask = (): void => {}

  return (
    <div className="App">
      <div className="header-container">
        <div className="container">
          <div className="inputs">
            <input
              name="task"
              value={task} //!nutne pro funkcnost vymazani inputu po kliku na tlacitko
              type="text"
              placeholder="Tasks..."
              onChange={handleInputsChange}
            />
            <input
              type="number"
              name="deadline"
              value={deadline}
              placeholder="Deadline (in days)..."
              onChange={handleInputsChange}
            />
          </div>
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
      <div className="tasks-container">
        <div className="tasks-subcontainer">
          {todoList.length ? (
            todoList.map((task: ITask, key: number) => (
              <TodoTask key={key} task={task} />
            ))
          ) : (
            <span></span>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
