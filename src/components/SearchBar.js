import React, { Component } from 'react';

class SearchBar extends Component {

    state = {
        searchTerm: ""
    };

    onInputChange = (event) => {

        this.setState({
            searchTerm: event.target.value
        });
    };

    onFormSubmit = (event) => {

        event.preventDefault();
        
        // Call callback from parent component

        this.props.onFormSubmit(this.state.searchTerm);

    }

  render() {

    return (

      <div className="search-bar ui segment">

       <form onSubmit={this.onFormSubmit} className="ui form">
      
            <div className="field">
            
                <label>Video search</label>
                <input type="text" value={this.state.searchTerm} onChange={this.onInputChange}></input>

            </div>
       
       </form>

      </div>
    )
  }
}

export default SearchBar;
