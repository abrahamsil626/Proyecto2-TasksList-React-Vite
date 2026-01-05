
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";


function App() {

  return (
    <main className="min-h-screen py-10 px-4 md:px-0">
      <div className="max-w-4xl mx-auto space-y-12">
        <header className="text-center space-y-2">
          <h1 className="text-5xl font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-500 drop-shadow-sm">
            GESTIÓN BÁSICA DE TAREAS
          </h1>
          <p className="text-gray-400 font-medium tracking-widest uppercase text-xs">Proyecto de Curso</p>
        </header>

        <div className="grid gap-12">
          <section>
            <TaskForm />
          </section>

          <section>
            <TaskList />
          </section>
        </div>
      </div>
    </main>
  );
}

export default App;