// This file should have the extension .jsx so that plunker compiles all the JSX
// The index.html file will include this file as script.js (not .jsx) however

// Define a component:
var  Button = React.createClass({
localhandleclick: function() {
  this.props.localhandleclick(this.props.increment);
},
  render: function() {
    return (
     <button onClick={this.localhandleclick} >{this.props.increment}
     </button>
    );
  }
});

var Result = React.createClass({
  
  render: function() {
    return (
    <div>
    {this.props.localCounter}
    </div>
    );
  }
});

var Main = React.createClass({
 
 getInitialState: function() {
    return {counter: 0}
  },
 handleclick: function(increment) {
    this.setState( {counter: this.state.counter+increment});
  },
  render: function() {
    return (
      <div>
      
     <Button localhandleclick={this.handleclick} increment={5}/>
     <Result localCounter={this.state.counter}/>
     </div>
    );
  }
});

// Render a component to the browser:
ReactDOM.render(
  <Main />, // What to render (an instance of the Main component)
  document.getElementById('container') // Where to render it
);

// If nothing appears in the browser, check the dev-tools console for errors.

// ******************************************************
// *  Checkout the new jsComplete Interactive Lab!!     *
// *  http://jscomplete.com/interactive-learning-demo/  *
// ******************************************************