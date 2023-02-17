import { useEffect } from 'react';
export default function Signup({ setPage }) {
  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);
  return <div>signup</div>;
}
