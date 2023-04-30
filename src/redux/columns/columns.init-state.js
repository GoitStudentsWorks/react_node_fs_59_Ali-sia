export const columnsInitState = {
    filter: '',
    columns: {
        categories: [
            { id: 'column1', title: 'To do', number: 1 },
            { id: 'column2', title: 'In progress', number: 2 },
            { id: 'column3', title: 'Done', number: 3 },
        ],
        numbers: [],
        isLoading: false,
        error: null,
    },
};