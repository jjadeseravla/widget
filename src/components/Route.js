import React, {useState, useEffect} from 'react'; //no need to import react cos no jsx
// import { Route } from 'workbox-routing';

const Route = ({ path, children }) => { //prop children is anything rendered inside the <Route/> component.  
  //so in App.js accordion, list, dropdown and translate are all components that Route has wrapped in, so all
  //of those are the children props passed down to Route
  
  const [currentPath, setCurrentPath] = useState(window.location.pathname); //gets Route to update

  const onLocationChange = () => {
    setCurrentPath(window.location.pathname)
  }

  useEffect(() => {
    window.addEventListener('popstate', onLocationChange);

    return () => { //cleanup func
      window.removeEventListener('popstate', onLocationChange);
    }
  }, [])

  return window.location.pathname === path ? children : null;
  //window.location.pathname could be replaced by currentPath too -> theyre the same
}

export default Route;