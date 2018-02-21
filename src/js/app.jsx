import React from 'react';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      loanBalance: 0,
      interestRate: 0,
      loanTerm: 15,
      output: 0
    };
  }

  componentDidMount() {
    document.title = "Yuri's Mortgage Calculator";
  }

  handleLoanBalanceChange(event) {
    this.setState({ loanBalance: event.target.value });
  }

  handleInterestRateChange(event) {
    this.setState({ interestRate: event.target.value });
  }

  handleLoanTermChange(event) {
    this.setState({ loanTerm: event.target.value })
  }
  
  handleSubmit(event) {
    var result = this.mortgageCalculatorMath();
    event.preventDefault();
    this.setState({ output: result })
  }

  mortgageCalculatorMath() {
    var M, P, r, n;

    P = parseFloat(this.state.loanBalance);
    r = parseFloat(this.state.interestRate)/100/12;
    n = parseInt(this.state.loanTerm)*12;

    console.log(P, r, n);

    M = P * (r * ((1 + r) ** n)) / (((1 + r) ** n) - 1)

    return Math.ceil(M * 100) / 100;
  }
  
  render() {
    return (
      <div className='container'>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <h1>Mortgage Calculator</h1>
          
          <label className="form-group">
            Loan Balance
            <input 
              name="balance"
              className="form-control"
              type="text" 
              value={this.state.loanBalance} 
              onChange={(e) => this.handleLoanBalanceChange(e)}
            />
          </label>

          <label>
            Interest Rate (%)
            <input
              name="rate"
              type="text" 
              value={this.state.interestRate} 
              onChange={(e) => this.handleInterestRateChange(e)}
            />
          </label>

          <label>
            Loan Term (years)
            <select name="term" value={this.state.loanTerm} onChange={(e) => this.handleLoanTermChange(e)}>
              <option value="15">15</option>
              <option value="30">30</option>
            </select>
          </label>

          <button name="submit" className="btn btn-primary">Calculate</button>
        </form>

        <div id="output" className="output">
          <h2 className="outputText">Monthly Mortgage Payment: ${this.state.output}</h2>
        </div>
      </div>
    );
  }
}
