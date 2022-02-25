import React, { FC, ChangeEvent, useState } from 'react'
import './App.css'
import { ITask } from './Interfaces' //todoList je pole objektu a potrebuji teda interface
import TodoTask from './Components/TodoTask'

const App: FC = () => {
  const [taskName, setTaskName] = useState<string>('')
  const [deadline, setDeadline] = useState<number>(0)
  const [todoList, setTodoList] = useState<ITask[]>([])

  const handleInputsChange = (event: ChangeEvent<HTMLInputElement>): void => {
    //jedna fce pro oba inputy pomoci if; void potvrzuje, ze fce nebude nic vracet
    if (event.target.name === 'task') {
      setTaskName(event.target.value)
    } else {
      setDeadline(Number(event.target.value)) //value musim naparsovat
    }
  }

  const addTask = (): void => {
    const newTask = { taskName: taskName, deadline: deadline }
    setTodoList([...todoList, newTask])
    // console.log(todoList)
    setTaskName('') //VYMAZE obsah inputu po odkliku; !musim ale u inputu pridat value={task}
    setDeadline(0)
  }

  const removeTask = (taskNameToDelete: string): void => {
    setTodoList(
      todoList.filter((task) => {
        return task.taskName !== taskNameToDelete
      }),
    )
  }

  return (
    <div className="App">
      <div className="header">
        <div className="header-elements-container">
          <div className="inputs-container">
            <input
              name="task"
              value={taskName} //!nutne pro funkcnost vymazani inputu po kliku na tlacitko
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
      <div className="tasksList-container">
        {todoList.length
          ? todoList.map((task: ITask, key: number) => (
              <TodoTask key={key} task={task} removeTask={removeTask} />
            ))
          : null}
      </div>
    </div>
  )
}

export default App
