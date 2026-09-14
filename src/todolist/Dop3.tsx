import {useState} from 'react';
import { TodolistDop3} from './TodolistDop3.tsx';
import {v1} from 'uuid';


export type FilterValuesType = 'all' | 'active' | 'completed';
export type TodolistsType = { id: string, title: string }
export type TasksStateType = {
    [key: string]: TasksType
}
type TasksType={
    data: Task[]
    filter: FilterValuesType
}
export type Task={
    id:string
    title:string
    isDone: boolean
}

export const Dop3 = () => {
    const todolistId1 = v1();
    const todolistId2 = v1();

    const [todolists, setTodolists] = useState<Array<TodolistsType>>([
        {id: todolistId1, title: 'What to learn'},
        {id: todolistId2, title: 'What to buy'}
    ])

    const [tasks, setTasks] = useState<TasksStateType>({
        [todolistId1]: {
            data: [
                {id: v1(), title: 'HTML&CSS1111', isDone: true},
                {id: v1(), title: 'JS1111', isDone: true}
            ],
            filter: 'all'
        },
        [todolistId2]: {
            data: [
                {id: v1(), title: 'HTML&CSS22222', isDone: true},
                {id: v1(), title: 'JS2222', isDone: true}
            ],
            filter: 'all'
        }
    });


    const removeTodolist = (todolistId: string) => {
        setTodolists(todolists.filter(el => el.id !== todolistId))
        delete tasks[todolistId]

    }


    function removeTask(todolistId: string, taskId: string) {
        setTasks({...tasks, [todolistId]: {...tasks[todolistId], data: tasks[todolistId].data.filter(el => el.id !== taskId)}   })
    }

    function addTask(todolistId: string, title: string) {
        const newTask = {id: v1(), title: title, isDone: false};
        setTasks({...tasks, [todolistId]: {...tasks[todolistId], data: [newTask, ...tasks[todolistId].data]}})
        // let newTasks = [task, ...tasks];
        // setTasks(newTasks);
    }

    function changeStatus(todolistId: string, taskId: string, newIsDone: boolean) {
        setTasks({ ...tasks, [todolistId]: {...tasks[todolistId], data: tasks[todolistId].data.map(el => el.id === taskId ? {...el, isDone: newIsDone} : el)}
        })
    }

    function changeFilter(todolistId: string, value: FilterValuesType) {
       setTasks({...tasks, [todolistId]: {...tasks[todolistId], filter: value}})
    }

    return (
        <div className="App">
            {todolists.map((el) => {
                let tasksForTodolist = tasks[el.id].data;
                if (tasks[el.id].filter === 'active') {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === false);
                }
                if (tasks[el.id].filter === 'completed') {
                    tasksForTodolist = tasks[el.id].data.filter(t => t.isDone === true);
                }
                return (
                    <TodolistDop3
                        key={el.id}
                        todolistId={el.id}
                        title={el.title}
                        tasks={tasksForTodolist}
                        removeTask={removeTask}
                        changeFilter={changeFilter}
                        addTask={addTask}
                        changeTaskStatus={changeStatus}
                        filter={tasks[el.id].filter}
                        removeTodolist={removeTodolist}
                    />
                )
            })}


        </div>
    );
}
