import styled from 'styled-components';

const TagContainer = styled.li`
  margin-right: 4px;
  list-style: none;
  > div {
    font-size: 12px;
    color: rgb(57, 115, 157);
    background-color: rgb(225, 236, 244);
    display: inline-block;
    padding: 0.4em 0.5em;
    margin: 2px 2px 2px 0;
    line-height: 1;
    white-space: nowrap;
    text-decoration: none;
    text-align: center;
    border: 1px solid transparent;
    border-radius: 3px;
  }
`;

const Tag = ({ text }) => {
  return (
    <TagContainer>
      <div>{text}</div>
    </TagContainer>
  );
};

export default Tag;
