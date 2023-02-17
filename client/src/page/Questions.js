import { useEffect } from 'react';

export default function Questions({ setPage }) {
  useEffect(() => {
    setPage({ navi: true, foot: true });
  }, []);
  return (
    <div>
      <div>
        <div>All Questions</div>
        <div>Ask Questions</div>
      </div>
      <div>
        <div>{/*data.map(el=>)*/}</div>
        <div>
          <div>Newest</div>
          <div>Active</div>
          <div>Bountied</div>
          <div>Unanswered</div>
          <div>More</div>
        </div>
        <div>Filter</div>
      </div>
      <div>{/*data.map(el=>)*/}</div>
    </div>
  );
}
