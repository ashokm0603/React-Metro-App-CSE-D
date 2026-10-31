# React JS : 
----------
    -> React is small javascript Library used to build UI (user interface)

    -> React Js is the Component Based 
    -> it support virtual Dom 
    -> using React We can Build SPA(Single page Applications) 


### way to create React App
----------------------------
    1. using CDN (content delivery network)
    2. using CLI (Command Line Interface)
        i. npx create-react-app appName  (deprecated react app)
        ii. npm create vite@latest 

## Components : 
---------------
    -> Components are the smallest UI blocks in the web page 
    -> Components are reusable 

### Types of Components in react : 
----------------------------------
##### 1. Class Based Components[CBC]
        -> Any Component which is declared using "class" keyword
        -> CBC is also called as a "state Full component" because here states are present
        -> CBC contains constructor and render()
        -> CBC supports life cycle methods
        -> "this and super" keywords are present 

    Syntax: 
        import {Component} from "react"
        class ClassName extends Component{
                render(){
                    return(
                        --here write HTML code---
                    )
                }
        }
        export default ClassName;

##### 2. Function Based Components 
        -> Any Component which is declared using function types
        -> FBC is also called as a "state Less component" because here states are not present
        -> FBC not contains constructor and render()
        -> FBC not supports life cycle methods
        -> "this and super" keywords are not present 

syntax -1 : 

    function FunctionName(){
        return(
            --here write html Code---
        )
    }
    export default FunctionName;

syntax -2 : 
    const FunctionName=()=>{
        return(
            --here write html Code---
        )
    }
    export default FunctionName;

syntax -3 : 
    const FunctionName=function(){
        return(
            --here write html Code---
        )
    }
    export default FunctionName;


### States in React 
-----------------
    ->States are used to hold the data 
    ->State are present only in Class Based Component 
    ->State are mutable in nature 

    Note: 
      ->If we want to declared states in Function based component here we require "hooks"
      ->hooks are introduced in react version 16.8 
      ->hooks are used to make function based component as a stateFull (dynamic)
      Ex: useState() , useEffect() , useRef() , useMemo() , useCallback() , useNavigate() , useContext() , useReduce()..etc


### Routers in react 
-----------------
    ->Routers are used to navigate from one component to another component 
    ->To install " react-router-dom" 

    ->react-router-dom package provides in build components 
        1. BrowserRouter 
        2. Routes 
        3. Route 
        4. useNavigate  ->hooks
        5. Link 
        6. Params 

## API Integration 
-------------------
    ->In React JS We can integrate API in 2 ways

     1.using fetch()
     2.using axios 