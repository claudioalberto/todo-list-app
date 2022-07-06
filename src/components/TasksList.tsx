import { NoTasks } from "./NoTasks";
import { TaskItem } from "./TaskItem";


export function TasksList(){
    return(
        <div className="mt-16">
            <header>
                <div className="flex justify-between px-4">
                    <div>
                        <strong 
                            className="text-sm text-blue-400"
                        >
                            Tarefas criadas 
                            <span className="bg-gray-400 rounded-full text-gray-200 px-2 py-1 ml-2">
                                0
                            </span>
                        </strong>
                    </div>
                    <div>
                        <strong 
                            className="text-sm text-purple-600"
                        >
                            Concluídas 
                            <span className="bg-gray-400 rounded-full text-gray-200 px-2 ml-2 py-1">
                                2 de 5
                            </span>
                        </strong>
                    </div>
                </div>
            </header>
            <div className="border-t rounded-lg border-gray-400 mt-6 min-h-[300px]">
               <TaskItem 
                    id="1"
                    title="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
                    completed={true}
                />
               <TaskItem 
                    id="2"
                    title="Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer."
                    completed={false}
                />
            </div>
        </div>
    )
}