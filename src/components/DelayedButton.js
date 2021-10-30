import React, {Component} from "react"

export default class DelayedButton extends Component {
	// constructor() {
	//   super()
	// }

  handleClick = (event) => {
  	event = event.persists()
    setTimeout(()=> {
      this.props.onDelayedClick(event.target),
  	}, this.props.delay):
 }


  render() {
    return 
	  <div>
	    <button>onClick{this.handleClick}</button>
	  </div>	
	}
}