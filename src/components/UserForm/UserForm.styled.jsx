import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import photoPlug from './ph_user.svg';
import { HiPlus } from 'react-icons/hi';
import {
  between,
  greaterThan,
  lesserThan,
} from './../../helpers/breakpoints.styled';

export const StyledForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 335px;
  margin: 0 auto;
  padding: 59px 18px 40px;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.normal};

  ${lesserThan(
    'mobile',
    `
    margin: 0 20px;
    `
  )}

  ${greaterThan(
    'tablet',
    `
    max-width: 704px;
    padding-right: 175px;
    padding-left: 175px;
    padding-top: 184px;
    `
  )}

    ${greaterThan(
    'laptop',
    `
    max-width: 1087px;
    padding-right: 175px;
    padding-left: 175px;
    padding-top: 204px;
    `
  )}
`;

export const Photo = styled.img`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};

  ${greaterThan(
    'tablet',
    `
    top: 100px; 
    width: 124px;
    height: 124px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 120px; 
    `
  )}
`;

export const Plug = styled.div`
  position: absolute;
  left: 50%;
  top: 0px;
  transform: translate(-50%, -50%);
  width: 72px;
  height: 72px;

  background-color: ${({ theme }) => theme.colors.bgcUserProfileTheme};
  background-image: url(${photoPlug});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radii.round};

  ${greaterThan(
    'tablet',
    `
    top: 100px;
    width: 124px;
    height: 124px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 120px; 
    `
  )}
`;

export const LabelPhotoSelection = styled.label`
  position: absolute;
  left: calc(50% + 16px);
  top: 34px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;

  cursor: pointer;
  border: none;
  border-radius: ${({ theme }) => theme.radii.round};
  background: ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.loginBtn};
  }

  ${greaterThan(
    'tablet',
    `
    top: 160px;
    left: calc(50% + 28px);
    width: 24px;
    height: 24px;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    top: 180px; 
    `
  )}
`;

export const PhotoSelection = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UserName = styled.h2`
  text-align: center;
  margin-bottom: 8px;

  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileNameTheme};

  ${greaterThan(
    'tablet',
    `
    font-size: ${({ theme }) => theme.fontSizes.l};
    line-height: 1;
    `
  )}
`;

export const UserRole = styled.p`
  text-align: center;
  margin-bottom: 40px;

  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileRoleTheme};

  ${greaterThan(
    'tablet',
    `
    font-size: ${({ theme }) => theme.fontSizes.s};
    `
  )}

  ${greaterThan(
    'laptop',
    `
    margin-bottom: 44px;
    `
  )}
`;

export const Wrapper = styled.div`
  ${greaterThan(
    'laptop',
    `
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 50px;
    justify-content: center;
    width: 785px;
    margin: 0 auto;
    `
  )}
`;

export const SelectionIcon = styled(HiPlus)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;

  color: ${({ theme }) => theme.colors.white};

  ${greaterThan(
    'tablet',
    `
        width: 16px;
        height: 16px;
    `
  )}
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 18px;

  ${between(
    'tablet',
    'laptop',
    `
    max-width: 354px;
    margin: 0 auto 24px;
    `
  )}
`;

export const LabelName = styled.span`
  margin-bottom: 8px;

  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileLabelTheme};

  ${greaterThan(
    'tablet',
    `
    font-size: ${({ theme }) => theme.fontSizes.s};
    `
  )}
`;

export const Input = styled.input`
  padding: 12px 14px;

  font-weight: ${({ theme }) => theme.fontWeights.normal};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileInputTheme};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.borderUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.light};

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-thickness: 2px;
  }

  ${greaterThan(
    'tablet',
    `
    font-size: ${({ theme }) => theme.fontSizes.m};
    `
  )}
`;

export const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 12px 14px;

  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.textUserProfileInputTheme};
  background-color: inherit;
  border: 1px solid ${({ theme }) => theme.colors.borderUserProfileTheme};
  border-radius: ${({ theme }) => theme.radii.light};

  &:focus-visible {
    outline: none;
  }

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.primary};
  }

  &:focus {
    text-decoration: underline;
    text-decoration-color: ${({ theme }) => theme.colors.primary};
    text-decoration-thickness: 2px;
  }

  ${greaterThan(
    'tablet',
    `
    font-size: ${({ theme }) => theme.fontSizes.m};
    `
  )}
`;

export const StyledCalendar = styled.div`
  .react-datepicker {
    font-size: 14px;
    color: #333;
  }

  .react-datepicker__header {
    background-color: #0074d9;
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
    padding-top: 8px;
    position: relative;
  }

  .react-datepicker__current-month {
    font-weight: bold;
    margin-top: 8px;
    margin-bottom: 0;
    text-align: center;
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .react-datepicker__day-name {
    color: #999;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
    width: 2rem;
  }

  .react-datepicker__month {
    margin: 0;
    padding: 0;
    text-align: center;
  }

  .react-datepicker__month-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
  }

  .react-datepicker__month-text {
    color: #999;
    font-size: 12px;
    text-align: center;
    text-transform: uppercase;
  }

  .react-datepicker__day {
    color: #333;
    font-size: 14px;
    text-align: center;
    width: 2rem;
    height: 2rem;
    line-height: 2rem;
    margin: 2px;
    border-radius: 50%;

    &:hover {
      background-color: #0074d9;
      color: #fff;
    }
  }

  .react-datepicker__day--selected {
    background-color: #0074d9;
    color: #fff;
  }

  .react-datepicker__day--keyboard-selected {
    background-color: #0074d9;
    color: #fff;
  }

  .react-datepicker__day--in-range {
    background-color: #0074d9;
    color: #fff;
  }

  .react-datepicker__day--in-selecting-range {
    background-color: rgba(0, 116, 217, 0.5);
    color: #fff;
  }

  .react-datepicker__day--range-start {
    border-top-left-radius: 50%;
    border-bottom-left-radius: 50%;
  }

  .react-datepicker__day--range-end {
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
  }

  .react-datepicker__day--today {
    background-color: #fff;
    color: #0074d9;
    font-weight: bold;
  }

  .react-datepicker__day--disabled {
    color: #ccc;
    cursor: not-allowed;
  }
`;

export const Button = styled.button`
  width: 58%;
  height: 46px;
  margin: 22px auto 0;

  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  font-size: ${({ theme }) => theme.fontSizes.s};
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary};
  border: 2px solid transparent;
  border-radius: ${({ theme }) => theme.radii.normal};

  &:hover,
  &:focus {
    box-shadow: ${props => props.theme.shadows.loginBtn};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${between(
    'tablet',
    'laptop',
    `
    width: 226px;
    height: 48px;
    margin: 16px auto 0;
    `
  )}

  ${greaterThan(
    'laptop',
    `
    width: 226px;
    height: 48px;
    margin: 70px auto 60px;
    `
  )}
`;
