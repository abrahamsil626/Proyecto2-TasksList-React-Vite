
import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { addTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask({ title, description });
        setTitle("");
        setDescription("");
    };

    return (
        <form onSubmit={handleSubmit} className="glass p-8 rounded-2xl border border-white/10 space-y-6">
            <h2 className="text-xl font-semibold text-white/90 mb-4 flex items-center gap-2">
                <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                Initialize Task
            </h2>
            <div className="space-y-4">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Task Designation"
                    type="text"
                    value={title}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all"
                    autoFocus />
                <textarea
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Operation Parameters..."
                    value={description}
                    className="w-full bg-black/30 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all min-h-[100px] resize-none" />
            </div>
            <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-cyan-900/20 uppercase tracking-widest text-sm"
            >
                Execute Creation
            </button>
        </form>
    );
}

export default TaskForm;
