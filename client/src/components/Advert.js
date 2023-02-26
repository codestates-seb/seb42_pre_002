import styled from 'styled-components';

const Wrap = styled.div`
  width: 298px;
  border-radius: 3px;
  /* margin-bottom: 16px; */
  border: 1px solid hsl(47, 65%, 84%);
  background-color: hsl(47, 87%, 94%);
  box-shadow: 0 1px 2px hsla(0, 0%, 0%, 0.05), 0 1px 4px hsla(0, 0%, 0%, 0.05),
    0 2px 8px hsla(0, 0%, 0%, 0.05);
  margin: 12px 0;
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

const OlDiv = styled.div`
  width: 100%;

  cursor: pointer;
  overflow-wrap: break-word;
  > ol {
    list-style-type: disc;
    > li {
      display: list-item;
      list-style-type: disc !important;
      list-style-position: inside;

      margin: 16px 0;
      padding: 0 24px;
      color: #3b4045;
    }
  }
`;

export default function Advert({ title, list }) {
  return (
    <Wrap>
      <TitleDiv>{title}</TitleDiv>
      <OlDiv>
        <ol>
          {list.map((x, idx) => {
            return <li key={idx}>{x}</li>;
          })}
        </ol>
      </OlDiv>
    </Wrap>
  );
}
