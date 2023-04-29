import styled from 'styled-components';

export const TasksListContainer = styled.div`
  /* TODO: виставити padding і margin контейнера, а для цього перевірити стилі батьківського компонента */
  margin-top: 14px;

  max-height: 80vh;
  overflow-y: auto;

  /* scrollbar width and height */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* background of the scrollbar*/
  ::-webkit-scrollbar-track {
    background-color: rgba(242, 242, 242, 1);
  }

  /* Style the thumb (the part of the scrollbar that's draggable) */
  ::-webkit-scrollbar-thumb {
    width: 6px;
    height: 112px;

    background-color: rgba(231, 229, 229, 1);
    border-radius: 5px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #888;
  }
`;
