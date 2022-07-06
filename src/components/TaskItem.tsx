import { Check, RadioButton, Trash } from "phosphor-react";

export function TaskItem() {

    /* 
    * TODO:
    - [ ] Create a status for the task item: check and uncheck (boolean)
    - [ ] Install Library ClassNames to do verification by status properties
    */
    return (
        <div
            className="flex items-start gap-3 bg-gray-500 border border-gray-400 rounded-lg p-4 mb-3"
        >
            <div>
                <RadioButton size={24} />
            </div>
            <div>
                <span className="text-gray-100 line-through text-gray-300">
                    Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
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