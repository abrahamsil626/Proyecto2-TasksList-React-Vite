
import TaskCard from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {

    const { tasks } = useContext(TaskContext);

    if (tasks.length === 0) {
        return (
            <div className="glass p-12 rounded-2xl border border-white/10 text-center space-y-4">
                <div className="text-gray-500 text-5xl opacity-20">📭</div>
                <h2 className="text-xl font-medium text-gray-400">Archive Empty</h2>
                <p className="text-gray-600 text-sm">No active tasks detected in the neural buffer.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            }
        </div>
    );
}

export default TaskList;
