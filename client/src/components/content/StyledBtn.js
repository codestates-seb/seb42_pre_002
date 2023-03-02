import styled from 'styled-components';

const StyledButton = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 3px;
  background-color: hsl(206, 100%, 52%);
  border: 1px solid hsl(206, 100%, 52%);
  box-shadow: inset 0 1px 0 0 rgba(255, 255, 255, 0.4);
  color: hsl(0, 0%, 100%);

  &:hover {
    background-color: hsl(206, 100%, 40%);
    border: 1px solid hsl(206, 100%, 40%);
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
