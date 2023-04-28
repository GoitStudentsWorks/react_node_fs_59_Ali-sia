import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 108px;

  margin-bottom: 14px;

  padding-top: 14px;
  padding-bottom: 18px;
  padding-left: 15px;
  padding-right: 12px;

  border: 1px solid rgba(220, 227, 229, 0.8);
  border-radius: 8px;

  background-color: rgba(247, 246, 249, 1);
`;

export const StatsContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: space-between;
`;

export const TaskDescription = styled.div`
  height: 16px;

  cursor: pointer;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: end;
`;

export const UserAvatar = styled.img`
  width: 32px;
  height: 32px;

  border: 1.8px solid #3e85f3;
  border-radius: 50%;
`;

const PriorityIndicator = styled.div`
  display: flex;
  align-items: center;

  height: 20px;
  margin-left: 8px;
  padding: 4px 12px;

  border-radius: 4px;

  color: rgba(247, 246, 249, 1);

  font-family: 'Inter';
  font-weight: 600;
  font-size: 10px;
  cursor: default;

  text-transform: capitalize;
`;

export const LowPriority = styled(PriorityIndicator)`
  background-color: rgba(114, 194, 248, 1);
`;

export const MediumPriority = styled(PriorityIndicator)`
  background-color: rgba(243, 178, 73, 1);
`;

export const HighPriority = styled(PriorityIndicator)`
  background-color: rgba(234, 61, 101, 1);
`;

export const ToolbarContainer = styled.div``;
