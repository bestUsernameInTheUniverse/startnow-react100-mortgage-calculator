import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      balance: 0,
      rate: 0,
      term: 15,
      output: 0
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  
  handleSubmit(event) {
    event.preventDefault();
    var result = this.mortgageCalculatorMath();
    this.setState({ output: result })
  }

  mortgageCalculatorMath() {
    const P = parseFloat(this.state.balance);
    const r = parseFloat(this.state.rate)/100/12;
    const n = parseInt(this.state.term)*12;

    const M = P * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)

    return Math.ceil(M * 100) / 100;
  }
  
  render() {
    return (
      <div className='container'>
        <form onSubmit={this.handleSubmit}>
          <h1>Mortgage Calculator</h1>
          
          <label className="form-group">
            Loan Balance
            <input name="balance" className="form-control" type="text" value={this.state.loanBalance} onChange={this.handleChange}/>
          </label>

          <label>
            Interest Rate (%)
            <input name="rate" type="text" value={this.state.interestRate} onChange={this.handleChange}/>
          </label>

          <label>
            Loan Term (years)
            <select name="term" value={this.state.loanTerm} onChange={this.handleChange}>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </label>

          <button type="submit" className="btn btn-primary">Calculate</button>
        </form>

        <div id="output" className="output">
          <h2 className="outputText">Monthly Mortgage Payment: ${this.state.output}</h2>
        </div>
      </div>
    );
  }
}
