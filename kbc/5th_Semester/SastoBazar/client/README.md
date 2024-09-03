# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh



functional component and class component

class component :-
use simle js class and extends components then it is called class component. 

functional component:- 
    stateless
    (no builtin state and lifecycle)
    lightweight
    introduction to hooks. (can use state and lifecycle method)



Routing in ReactJS
-Single Page Applicatin (SPA)

react-router-dom provides us three components:
    <BrowserRouter>
        it gets, changes and loads url in browser.
    <Routes>
        this is the collection of routes for different pages. it wraps all the routes in this single component.
    <Route>
        it takes two props, i.e path and element. what name to provide to the element in the browser and what to load in the browser.

!NavLink and Link
    NavLink provides the current navigation.


Lifecycle methods
    -in three stages
        1. Mount
        2. Update 
        3. Unmount
    
    useEffect method in React can handle all 3 stages. this method is used when we require some effect. This is the alternative of lifecycle method. This is a high order function. 
    
    Syntax

    useEffect(() => {
    first
  
    return () => {
      second
    }
  }, [third])
  

Cross Origin Resource Sharing(CORS): it is the process of communicating between server and frontend of different ports. so there is a concept of cors. This is performed through backend. The frontend (browser ) should be given access by backend. for eg. frontend is react and backend may be django, asp, php etc. thus, communication between react and other backend is required. thus cors helps in communicating this process. 

const corsOptions = {
    origin: "https://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 201,
};


Controlled Component: 
    if a input is controlled using state it is called controlled component

    this can be used when the input fields are less. but if there are more then it's gonna be very hard as multiple states has to be defined. thus, another concept was defined. 