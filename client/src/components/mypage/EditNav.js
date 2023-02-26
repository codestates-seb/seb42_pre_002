import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin-right: 25px;
  > span {
    padding: 6px 12px;
  }

  > ul {
    width: 100%;
    margin: 4px 0;
    > li {
      width: 100%;
      border-radius: 1000px;
      padding: 6px 12px;

      &:hover {
        background-color: #e3e6e8;
      }

      &.selected {
        color: #ffffff;
        background-color: #f48225;

        &:hover {
          background-color: #da680b;
        }
      }
    }
  }
`;

const EditNav = () => {
  return (
    <Wrapper>
      <span>PERSONAL INFORMATION</span>
      <ul>
        <li className="selected">Edit Profile</li>
      </ul>
    </Wrapper>
  );
};

export default EditNav;
