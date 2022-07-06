import { Clipboard } from "./ClipboardIcon";

export function NoTasks() {
    return (
        <div className="flex flex-col items-center justify-center mt-16">
            <Clipboard />
            <strong
                className="text-gray-300 mt-4"
            >Você ainda não tem tarefas cadastradas</strong>
            <span className="text-gray-300">Crie tarefas e organize seus items a fazer</span>
        </div>
    );
}