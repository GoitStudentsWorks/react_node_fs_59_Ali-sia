import TaskColumnCard from "./TaskColumnCard/TaskColumnCard";

export default function ColumnTasksList() {
    return (
        <div>
            <TaskColumnCard />
        </div>
    )
}


// 1. Компонент отримує в пропсах колекцію завдань групи
// 2. Компонент рендерить колекцію компонентів TaskColumnCard
// 3. Компонент має максимальну висоту визначену пропорційно до висоти пристрою юзера.
// 4. Компонент має скрол, якщо висота списку карточок завдань більша визначеної висоти компонента.