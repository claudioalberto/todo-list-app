import { v4 as uuidv4 } from 'uuid';
import { PlusCircle } from "phosphor-react"
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { NoTasks } from './components/NoTasks';


const source = [
  {
    id: uuidv4(),
    title: 'Terminar o desafio',
    isCompleted: true,
  },
  {
    id: uuidv4(),
    title: 'Terminar de estudar ReactJS',
    isCompleted: false,
  }
]


function App() {


  const [tasks, setTasks] = useState(source)
  const [newTaskValue, setNewTaskValue] = useState('')
  const tasksCompleted = tasks.filter(task => task.isCompleted).length;

  function handleNewTask(event: FormEvent) {
    event.preventDefault()
    setTasks([{
      id: uuidv4(),
      title: newTaskValue,
      isCompleted: false,
    }, ...tasks])
    setNewTaskValue('')
  }

  function completeTask(taskID: string){
    const taskWithOnTaskCompleted = tasks.map(task => {
      if (task.id === taskID) {
        task.isCompleted = !task.isCompleted;
      }
      return task
    })
    setTasks(taskWithOnTaskCompleted)
  }

  function handleTaskFieldChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTaskValue(event.target.value)

  }
  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é Obrigatório! 👍')
  }

  function deleteTask(taskId: string) {
    const tasksWithoutDeletedOne = tasks.filter(task => {
      if (task.id !== taskId) return task
    })
    setTasks(tasksWithoutDeletedOne)
  }


  return (
    <div className="">
      <Header />
      <main className="mx-auto md:max-w-[738px] -mt-8 px-8 md:px-0">
        <form
          className="flex"
          onSubmit={handleNewTask}
        >
          <input
            className="flex-1 gap-2 bg-gray-500 border border-gray-700 p-4 rounded-lg text-gray-100 placeholder-gray-300 focus-within:border-purple-600"
            type="text"
            name='taskField'
            required
            onChange={handleTaskFieldChange}
            value={newTaskValue}
            onInvalid={handleNewTaskInvalid}
            placeholder="Adicione uma nova tarefa" />
          <button
            className="flex ml-2 items-center gap-2 text-white bg-blue-600 p-4 rounded-lg transition-colors hover:bg-blue-400 "
          >
            <span className="hidden md:block">Criar</span>
            <PlusCircle className="text-2xl md:text-xl" />
          </button>
        </form>
        <div className="mt-16">
          <header>
            <div className="flex justify-between md:px-4">
              <div>
                <strong
                  className="text-sm text-blue-400"
                >
                  Tarefas criadas
                  <span className="bg-gray-400 rounded-full text-gray-200 px-2 py-1 ml-2">
                    {tasks.length}
                  </span>
                </strong>
              </div>
              <div>
                <strong
                  className="text-sm text-purple-600"
                >
                  Concluídas
                  <span className="bg-gray-400 rounded-full text-gray-200 px-2 ml-2 py-1">
                    {tasksCompleted} de {tasks.length}
                  </span>
                </strong>
              </div>
            </div>
          </header>
          { tasks.length > 0 && tasks !== null
            ? <TasksList taskList={tasks} onDeleteTask={deleteTask} onCompletedTask={completeTask} />
            : <NoTasks />
          }
        </div>
      </main >
    </div >
  )
}

export default App
