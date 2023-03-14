import '@/styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import '../design/common.css'
import { useEffect } from 'react'
function App({ Component, pageProps }) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  return <Component {...pageProps} />
}
export default App