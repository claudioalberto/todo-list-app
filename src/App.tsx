import { PlusCircle } from "phosphor-react"
import { Header } from "./components/Header"
import { TasksList } from "./components/TasksList"


function App() {
  
  return (
    <div className="">
      <Header />
      <main className="mx-auto max-w-[738px] -mt-8">
        <form 
          className="flex"
        >
          <input 
            className="flex-1 gap-2 bg-gray-500 border border-gray-700 p-4 rounded-lg text-gray-100 placeholder-gray-300 focus-within:border-purple-600"
            type="text" 
            placeholder="Adicione uma nova tarefa" />
          <button
            className="flex ml-2 items-center gap-2 text-white bg-blue-400 p-4 rounded-lg transition-colors hover:bg-blue-600 "
          >
            Criar <PlusCircle size={16}/>
          </button>
        </form>
        <TasksList />
      </main>
    </div>
  )
}

export default App
