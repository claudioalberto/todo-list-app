import { useState } from "react";
import { NoTasks } from "./NoTasks";
import { TaskItem } from "./TaskItem";

interface Task {
    id: string;
    title: string;
    isCompleted: boolean;
}
interface Tasks {
    taskList: Task[]
    onDeleteTask: (taskId: string) => void;
    onCompletedTask: (taskId: string) => void;
}

export function TasksList({ taskList, onDeleteTask, onCompletedTask }: Tasks) {
    return (
        <div className="mt-6 min-h-[300px]">
            {taskList.map(task => (
                <TaskItem
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    isCompleted={task.isCompleted}
                    onDeleteTask={onDeleteTask}
                    onCompletedTask={onCompletedTask}
                />
            ))}
        </div>
    )
}