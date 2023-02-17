import { useEffect } from 'react';

export default function Content({ setPage }) {
  useEffect(() => {
    setPage({ navi: true, foot: true });
  }, []);

  return <div>content</div>;
}
