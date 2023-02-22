import styled from 'styled-components';

// const Ad = styled.div`
//   width: 298px;

//   > :nth-child(1) {
//     list-style-type: disc;
//     list-style: none;
//     background-color: hsl(47, 87%, 94%);
//     border: 1px solid hsl(47, 65%, 84%);
//     border-top-left-radius: 3px;
//     border-top-right-radius: 3px;
//     border-bottom-left-radius: 3px;
//     border-bottom-right-radius: 3px;
//     margin-bottom: 16px;
//     box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
//       0 2px 8px hsla(0, 0%, 0%, 0.05);
//     ul {
//       list-style-type: disc;
//     }
//   }
// `;

// const CLi = styled.li`
//   list-style-type: disc;
//   display: flex;
//   margin: 12px 0;
//   padding: 0 16px;
//   color: #3b4045;
//   clear: both;
//   > div {
//     > div {
//       color: #3b4045;
//       width: 244px;
//       cursor: pointer;
//       overflow-wrap: break-word;
//     }
//   }
// `;

const Wrap = styled.div`
  width: 298px;
  border-radius: 3px;
  /* margin-bottom: 16px; */
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 87%, 94%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
`;

const TitleDiv = styled.div`
  width: 100%;
  padding: 12px 15px;
  background-color: hsl(47, 83%, 91%);
  border-bottom: 1px solid hsl(47, 65%, 84%);
  font-size: 16px;
  font-weight: 500;
  color: #525960;
`;

const UlDiv = styled.div`
  width: 100%;

  cursor: pointer;
  overflow-wrap: break-word;
  > ul {
    list-style-type: disc;
    > li {
      display: list-item;
      list-style-type: disc;
      list-style-position: inside;
      display: flex;
      margin: 16px 0;
      padding: 0 45px;
      color: #3b4045;
    }
  }
`;

export default function Advert({ title, list }) {
  return (
    <Wrap>
      <TitleDiv>{title}</TitleDiv>
      <UlDiv>
        <ul>
          {list.map((x, idx) => {
            return <li key={idx}>{x}</li>;
          })}
        </ul>
      </UlDiv>
    </Wrap>
  );
}