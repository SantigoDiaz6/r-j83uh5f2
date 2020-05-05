import React from 'react'

class Counter extends React.Component {
    constructor() {
      super();
    
      this.state = {counter:0};
    }
  
  
    handleChange = (event) => {
      const cadena = event.target.value
      this.setState({
        counter: cadena.length
      })
    }
  
  }

  export default Counter