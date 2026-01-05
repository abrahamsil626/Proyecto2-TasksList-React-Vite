
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCard({ task }) {
    const { deleteTask } = useContext(TaskContext);
    return (
        <div className="glass neo-blur p-6 rounded-2xl border border-white/10 group transition-all duration-300 hover:translate-y-[-4px]">
            <div className="flex justify-between items-start mb-4">
                <span className="text-[10px] font-bold text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded border border-cyan-400/20 uppercase tracking-tighter">
                    Active Module
                </span>
                <div className="flex gap-2">
                    <button className="text-gray-500 hover:text-cyan-400 transition-colors">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="text-gray-500 hover:text-red-400 transition-colors"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </div>
            <h2 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors break-words">
                {task.title}
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                {task.description}
            </p>
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-[10px] font-bold">
                    ID
                </div>
                <div className="flex flex-col">
                    <span className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Hash Code</span>
                    <span className="text-[10px] text-gray-400 font-mono">0x{task.id.toString().substring(0, 8)}...</span>
                </div>
            </div>
        </div>
    );
}

export default TaskCard;
