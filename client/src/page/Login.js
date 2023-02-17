import { useEffect } from 'react';
export default function Login({ setPage }) {
  useEffect(() => {
    setPage({ navi: false, foot: false });
  }, []);
  return <div>login</div>;
}
