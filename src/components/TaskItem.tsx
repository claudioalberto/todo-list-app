import classNames from "classnames";
import { Check, Circle, RadioButton, Trash } from "phosphor-react";
import { useState } from "react";

interface TaskProps{
    id: string;
    title: string;
    completed: boolean;
}


export function TaskItem(props: TaskProps) {
    let completed = props.completed;
    const [taskCompleted, setTaskCompleted] = useState(completed);
    /* 
    * TODO:
    - [ ] Create a status for the task item: check and uncheck (boolean)
    - [ ] Install Library ClassNames to do verification by status properties
    */

    function handleCompleteTask(){
        setTaskCompleted(status => {
            return !status;
        });
        
    }

    return (
        <div
            className="flex items-start gap-3 bg-gray-500 border border-gray-400 rounded-lg p-4 mb-3"
        >
            <div>
                <input 
                    type="checkbox"
                    className="appearance-none border-2 transition-colors border-blue-400 hover:bg-blue-600/20 rounded-full h-5 w-5"
                />
            </div>
            <div>
                <span 
                    className={
                        classNames("", { 
                            "line-through text-gray-300" : taskCompleted,
                            'text-white' : !taskCompleted
                        }
                        )
                    }
                >
                    {props.title}
                </span>
            </div>
            <button>
                <Trash
                    size={20}
                    className="text-gray-300 hover:text-red-500 hover:bg-gray-400 rounded-lg p-1 box-content"
                />
            </button>
        </div>
    )
}