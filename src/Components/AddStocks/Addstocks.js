import React, { Component } from 'react';
import './Addstocks.css';
import AddForm from '../Form/AddForm/AddForm'
class Addstocks extends Component {
      render() {
        return (
                <div className="AddStocksTitle" >
                <h2>Add stocks to My stocks</h2>
              
                    {this.props.stockNames.map((item, index) => (
                         <li key={index}>
                         <button
                            className="StockButton"
                            onClick={() => {
                            this.props.clickEvent(item);
                         }}>
                        {item.symbol}
                        </button>

                        <span>{item.name}</span>
                        </li>
                        
                    ))}
                    {/* {companyArray} */}
               
                              
                
                
                {/* :<div >{showMessage}</div> */}
                :<h1>Loading...</h1>}
                }

                {(this.state.showModal)?
                <AddForm
                id={this.state.id}
                companyName={this.state.companyName}
                companySymbol={this.state.companySymbol}
                showModal={this.state.showModal}
                addStockToDb={(a,b,c)=>this.props.addStockToDb(a,b,c)}
                closeButton={()=>{this.props.closeButton()}}
                />:null}
                </div>
                

        )
    }
}

export default Addstocks
