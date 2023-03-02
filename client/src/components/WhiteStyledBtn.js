import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: inherit;
  border-radius: 3px;
  border: 1px solid #9fa6ad;
  color: #6a737c;

  &:hover {
    background-color: #f8f9f9;
    border: 1px solid #9fa6ad;
    color: #525960;
    cursor: pointer;
  }
`;

const StyledBtn = ({ title, width, height, onClick }) => {
  return (
    <StyledButton width={width} height={height} onClick={onClick}>
      {title}
    </StyledButton>
  );
};

export default StyledBtn;
