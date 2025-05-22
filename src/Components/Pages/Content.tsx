import React, { useState } from "react";
import TodoList from "../List/TodoList";
import TodoListEmpty from "../List/TodoListEmpty";

const Content = () => {
  type TodoItem = {
    Records: string;
    id: number;
    completed: boolean;
  };
  const [record, setRecord] = useState<string>("");
  const [todo, setTodo] = useState<TodoItem[]>([]);
  const [completeRec, setCompleterec] = useState<TodoItem[]>([]);
  const addTodo = () => {
    try {
      const newTodo: TodoItem = {
        Records: record,
        id: Date.now(),
        completed: false,
      };

      setTodo([...todo, newTodo]);
    } catch (error) {
      console.error(error);
    } finally {
      setRecord("");
    }
  };
  const recordInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRecord(event.target.value);
  };

  const deleteTodo = (key: number) => {
    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== key));
  };

  const completeTodo = (key: number) => {
    const updatedTodos = todo.map((item) =>
      item.id === key ? { ...item, completed: true } : item
    );

    const completedItem = updatedTodos.find((item) => item.completed === true);
    if (completedItem) {
      setCompleterec((prev) => [...prev, completedItem]);
    }

    setTodo((prevTodo) => prevTodo.filter((todo) => todo.id !== key));
  };

  const deleteCompletedTodo = (key: number) => {
    setCompleterec((prevCompleted) =>
      prevCompleted.filter((completeRec) => completeRec.id !== key)
    );
  };
  return (
    <section className="h-[calc(100vh-(56px*2))]">
      <div
        className={`h-full flex items-center flex-2 flex-col ${
          todo.length > 0 || completeRec.length > 0
            ? "duration-1000 "
            : "justify-center "
        }`}
      >
        <div
          className={`bg-gray-100 flex flex-row gap-2  my-7 p-7 rounded-md shadow-sm h-32 items-center max-md:p-2 max-md:my-2 max-md:h-24`}
        >
          <input
            className="h-10 bg-gray-100 p-2 rounded-sm shadow-md border-purple-500 border-1 w-96 max-md:w-64  "
            type="text"
            placeholder="Add Todo +..."
            onChange={recordInputs}
            value={record}
          />
          <button
            onClick={addTodo}
            className="h-10 py-2 px-4 bg-purple-500 text-md font-bold rounded-md shadow-md text-gray-50 hover:bg-purple-700 hover:cursor-pointer"
          >
            Add +
          </button>
        </div>
        {todo.length > 0 ? (
          <div className="w-1/2 my-2 max-md:w-3/4">
            <div className="flex">
              <p className="px-2 w-full text-purple-600">Todo List</p>
            </div>

            {todo.map((t) => (
              <TodoList
                todoKey={t.id}
                todo={t.Records}
                delete={() => deleteTodo(t.id)}
                complete={() => completeTodo(t.id)}
                disabled={false}
                bgColor="bg-purple-500"
                txtColor="text-purple-600"
              />
            ))}
          </div>
        ) : (
          <div className="w-1/2">
            <TodoListEmpty />
          </div>
        )}
        {completeRec.length > 0 ? (
          <div className="w-1/2 my-2 max-md:w-3/4">
             <div className="flex flex-col">
               
              <p className="px-2 w-full text-green-600">Completed List</p>
            </div>
            {completeRec.map((c) => (
              <TodoList
                todoKey={c.id}
                todo={c.Records}
                delete={() => deleteCompletedTodo(c.id)}
                complete={() => completeTodo(c.id)}
                disabled={true}
                bgColor="bg-green-500"
                txtColor="text-green-600"
              />
            ))}
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Content;
