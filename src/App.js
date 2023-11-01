import React, { useEffect } from 'react'
import Login from './components/Login'
import { useStateProvider } from './util/StateProvider';
import { reducerCases } from './util/Constants';
import Music from './components/Music';

export default function App() {
  const [{ token }, dispatch] = useStateProvider()
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const token = hash.substring(1).split("&")[0].split("=")[1];
      if (token) {
        dispatch({ type: reducerCases.SET_TOKEN, token });
      }
    }
  }, [dispatch, token])
  return (
    <div>
      {token ? <Music/> : <Login/>}
    </div>
  )
}

