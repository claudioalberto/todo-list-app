import { Clipboard } from "./ClipboardIcon";

export function NoTasks() {
    return (
        <div className="flex border-t rounded-lg border-gray-400 mt-6 flex-col items-center justify-center pt-16">
            <Clipboard />
            <strong
                className="text-gray-300 mt-4"
            >Você ainda não tem tarefas cadastradas</strong>
            <span className="text-gray-300">Crie tarefas e organize seus items a fazer</span>
        </div>
    );
}