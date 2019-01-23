class FontChooser extends React.Component {

    constructor(props) {
	super(props);
	this.state = {bold:this.props.bold == 'true'? true:false, click:false, size:parseInt(this.props.size)};	
    }
	
	clickHandle(){
		this.setState({click:!this.state.click});
			
		
	}

	incrementSize(){

		if(this.state.size < this.props.max){
		this.setState({size: this.state.size + 1});		
		}
		
	}

	decrementSize(){
		if(this.state.size > this.props.min){
		this.setState({size: this.state.size - 1});		
		}
			
	}

	checkBoxBold(){
		
		this.setState({bold:!this.state.bold});

	}

	doubleClick(){
		this.setState({size:parseInt(this.props.size)});		
	}



    render() {

		var size = this.state.size
		var bold = this.state.bold ? 'bold' : 'normal' ;
		var color = this.state.size >= parseInt(this.props.max)  || this.state.size <= parseInt(this.props.min) ? 'red': 'black';

	return(
	       <div>
	       <input type="checkbox" id="boldCheckbox" onChange = {this.checkBoxBold.bind(this)} hidden = {!this.state.click} checked = {this.state.bold}/>
		   <button id="decreaseButton" onClick = {this.decrementSize.bind(this)} hidden = {!this.state.click}>-</button>
	       <span id="fontSizeSpan" style = {{color:color}} onDoubleClick = {this.doubleClick.bind(this)} hidden = {!this.state.click}>{this.state.size}</span>
	       <button id="increaseButton" onClick = {this.incrementSize.bind(this)} hidden = {!this.state.click}>+</button>
	       <span id="textSpan" style = {{fontWeight:bold, fontSize:size}}  onClick = {this.clickHandle.bind(this)}>{this.props.text}</span>
	       </div>
	);
    }
}

