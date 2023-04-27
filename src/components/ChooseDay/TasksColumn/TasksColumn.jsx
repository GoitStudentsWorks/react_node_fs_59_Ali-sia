
import { AddTaskBtn } from "components/Buttons/AddTaskBtn/AddTaskBtn";
import ColumnHeadBar from "./ColumnHeadBar/ColumnHeadBar";
import ColumnTasksList from "./ColumnsTasksList/ColumnsTasksList";
import { TaskColumnsWrapper } from "./TasksColumn.styled";


export default function TasksColumn() {

    const tasksCollection = {};
    return (
        <TaskColumnsWrapper>
            <ColumnHeadBar />
            {tasksCollection && <ColumnTasksList />}
            
            <AddTaskBtn />
        </TaskColumnsWrapper>
    )
}

// 1. Компонент отримує в пропсах заголовок групи завданнь та колекцію завданнь цієї групи.
// 2. Компонент рендерить:
//  - ColumnHeadBar - компонент з назвою колонки та кнопою для створення завдання в цій колонці.
//  - ColumnTasksList - компонент що показує список завдань, рендериться за умови, що відповідні завдання є в наявності.
//  - AddTaskBtn - кнопка для додавання завдання в колонку.