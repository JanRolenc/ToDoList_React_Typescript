import React from 'react'
import { ITask } from '../Interfaces' //toto se mi nacetlo samo, jakmile jsem dal interface Props
import './tasks.css'

//toto neni uplne interface typescriptu, ale volani jakeho nadrazeneho abych mohl mit pristup k props...?
interface Props {
  task: ITask
  removeTask(taskNameToDelete: string): void //removeTask je fce typu void s argumentem typu string
}

const TodoTask = ({ task, removeTask }: Props) => {
  return (
    <div className="task-container">
      <div className="task-content">
        <span>{task.taskName}</span>
        <span>{task.deadline}</span>
      </div>
      <button
        onClick={() => {
          removeTask(task.taskName)
        }}
      >
        X
      </button>
    </div>
  )
}

export default TodoTask
