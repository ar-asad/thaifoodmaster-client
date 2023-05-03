import React from 'react';

const Blog = () => {
    return (
        <div className='m-8'>
            <h2 className='text-xl font-semibold'>Question-1 : Tell us the differences between uncontrolled and controlled components?</h2>
            <p className='text-lg mb-3'>Ansewer :Uncontrolled component: Uncontrolled component are not directly controlled by the parent component or application.Simple form inputs like text fields, checkboxes, and radio buttons the examples of uncontrol component.User can easily emplement input validation and error handling, while uncontrolled components.
                Controlled component: Controlled components are more complex but user can more control over the user interface.Control component are directly controlled by the user application.User can require more complex validation logic.
            </p>

            <h2 className='text-xl font-semibold'>Question-2 : How to validate React props using PropTypes?  </h2>
            <p className='text-lg mb-3'>Ansewer : We can validate the types of props passed to React components through ReactPropTypes. In the component do the proptypes seted using reactProptypes when props pass in the componet it checked if it no  matched it throw an warning.If a prop is passed with the wrong type ReactPropTypes throw a error in the console.</p>

            <h2 className='text-xl font-semibold'>Question-1 :  Tell us the difference between nodejs and express js? </h2>
            <p className='text-lg mb-3'>Ansewer :Node.js is a runtime environment for executing JavaScript code outside of a browser, on the server-side while Express.js is a web application framework built on top of Node.js. Developers to run JavaScript code outside of a web browser. Devloper can handle server-side routing system by using express.js framework where Node js is not provide routing system. Before when express .js not came that time devlopers needed to write more code for a simple funtionality in server side but present now devoloper easily handle it just writes simple simple code using express.js framework.</p>

            <h2 className='text-xl font-semibold'>Question-1 :  What is a custom hook, and why will you create a custom hook?  </h2>
            <p className='text-lg mb-3'>Ansewer :Custom hook is a JavaScript function which build react js. When we need use same code or same fuction in deffernts place we can handle it by using custom hooks. We can use same logic in deffernts place just simple call this custom hooks.Custom hooks helps us keep our code organized, reduce code duplication, and make our components more modular and easier to test.</p>

        </div>
    );
};

export default Blog;