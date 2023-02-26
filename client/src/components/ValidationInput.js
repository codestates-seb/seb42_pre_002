import styled from 'styled-components';

import validIcon from '../esset/notValid.svg';

const Wrapper = styled.div`
  > div {
    width: 100%;
    padding: 8px 9px;
    height: 33.5px;
    border: 1px solid #babfc4;
    border-radius: 3px;

    display: flex;
    align-items: center;

    > input {
      width: 100%;
      border: none;
      background-color: inherit;
      outline: none;
    }

    &:focus-within {
      border: 1px solid hsl(206, 90%, 69.5%);
      box-shadow: 0px 0px 0px 4px rgba(0, 116, 204, 0.15);
    }

    &.notValid {
      border: 1px solid #de4f54;
      > img {
        display: block;
      }
    }

    > img {
      display: none;
    }
  }
  > span {
    display: none;

    &.notValid {
      color: #de4f54;
      display: inline-block;
    }
  }
`;

const ValidationInput = ({
  value,
  setValue,
  valid,
  setValid,
  validFn,
  errMsg,
}) => {
  return (
    <Wrapper>
      <div className={valid ? '' : 'notValid'}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onBlur={() => (validFn() ? setValid(false) : setValid(true))}
        />
        <img src={validIcon} alt="valid" />
      </div>
      <span className={valid ? '' : 'notValid'}>{errMsg}</span>
    </Wrapper>
  );
};

export default ValidationInput;
