import { useState } from 'react';
import './Main.css';
import { Check } from 'lucide-react';

export default function Main() {
  const [input, setInput] = useState('');
  const [novaTarefa, setTarefa] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setTarefa(input);
    setInput('');
  }

  return (
    <div className="main">
      <h1>Lista de tarefas</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          placeholder="Digite sua tarefa!"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => setTarefa()} type="submit">
          <Check />
        </button>
      </form>

      <h2>{novaTarefa}</h2>
    </div>
  );
}
