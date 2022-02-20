import React from 'react'
import { ITask } from '../Interfaces'

//toto neni uplne interface typescriptu, ale volani jakeho nadrazeneho abych mohl mit pristup k props...?
interface Props {
  task: ITask
}

const TodoTask = ({ task }: Props) => {
  return
  ;<div className="tasks-subsubcontainer">
    <span>{task.taskName}</span>
    <span>{task.deadline}</span>
  </div>
}

export default TodoTask
