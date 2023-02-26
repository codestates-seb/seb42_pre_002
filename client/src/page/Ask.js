import { useEffect } from 'react';
export default function Ask({ setPage }) {
  useEffect(() => {
    setPage({ navi: false, foot: true });
  }, []);
  return <div>Ask</div>;
}
