import { Clipboard } from "./ClipboardIcon";

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
                                0
                            </span>
                        </strong>
                    </div>
                </div>
            </header>
            <div className="border-t rounded-lg border-gray-400 mt-6 min-h-[300px]">
                <div className="flex flex-col items-center justify-center mt-12">
                    <Clipboard />
                    <strong
                        className="text-gray-300 mt-4"
                    >Você ainda não tem tarefas cadastradas</strong>
                    <span className="text-gray-300">Crie tarefas e organize seus items a fazer</span>
                </div>
            </div>
        </div>
    )
}