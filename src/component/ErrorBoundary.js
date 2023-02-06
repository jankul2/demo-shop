import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props){
        super(props);
        this.state={hasError:false}
    }
    static getDerivedStateFromError(error){
        return {hasError:true}
    }
    componentDidCatch(error,errorInfo){
        console.log('errorInfo',errorInfo)

    }
  render() {
    if(this.state.hasError){
        return (
        <div className='error-page'>
         <h1>500</h1>
         <p>Page is not found!</p>
        </div>);

    }
    return this.props.children;
   
  }
}
