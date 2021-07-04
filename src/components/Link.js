import React from 'react';

const Link = ({ className, href, children }) => {
  
  const onClick = (e) => {

    if (e.metaKey || e.ctrlKey) {
      return; //open in new tab by mac hold down command
    }

    e.preventDefault(); //prevents page reloading ( - the normal behaviour of the browser)
    window.history.pushState({}, '', href); //url will update correctly (but not the content!)
    //tell dropdown components that the url has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  
  return (
      <a onClick={onClick} className={className} href={href}>
        {children}
      </a>
  )
}

export default Link;