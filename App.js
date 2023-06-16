import React from 'react';
import ReactDOM from 'react-dom/client';

// Heading is just an object and not an <h1> Tag
// Props of an object are attributes + children


/**
 * 
 * 
 * <div id = "parent">
 *    <div id = "child">
 *      <h1>I am h1 tag</h1>
 *      <h2>I am h2 tag</h2>
 *    </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */
// 

const heading = <h1>Namaste React </h1>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
