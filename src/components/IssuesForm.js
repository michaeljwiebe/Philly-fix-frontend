import React, { Component } from 'react';

class IssuesForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			neighborhood: "",
			category: "",
			description: "",
			errorMsg: ""
		}

		this.updateNeighborhood = this.updateNeighborhood.bind(this);
		this.updateCategory = this.updateCategory.bind(this);
		this.updateDescription = this.updateDescription.bind(this);
		this.handleCreateIssue = this.handleCreateIssue.bind(this);

	}

	render() {

		let neighborhoods = this.props.neighborhoods.map(function(neighborhood, index) {

		return(
					<option key={index} value={neighborhood}>{neighborhood}</option>
			)
		})

		let categories = this.props.categories.map(function(category, index) {

			return(
						<option key={index} value={category}>{category}</option>
				)

		})
	
		return(
			<div className="issues-form-container">
				<select onChange={this.updateCategory} name="category" value={this.state.categories}>
					{categories}
				</select>
				<select onChange={this.updateNeighborhood} name="neighborhoods" value={this.state.neighborhoods}>
					{neighborhoods}
				</select>
				<textarea className="issues-description" rows="5" cols="50" maxLength="140" required placeholder="What Fix Does Philly Need?" onChange={this.updateDescription} value={this.state.description}></textarea>
				<div><button onClick={this.handleCreateIssue}>Add Your Issue</button></div>
				<div>{this.state.errorMsg}</div>
			</div>
			)
	}

	updateNeighborhood(event) {
		this.setState({neighborhood: event.target.value})
	}

	updateCategory(event) {
		this.setState({category: event.target.value})
	}

	updateDescription(event) {
		this.setState({description: event.target.value})
	}

	handleCreateIssue() {
	      if(this.state.category === "") {
          this.setState({
            errorMsg: "You must choose a category."
          });
          return
          }
        if(this.state.neighborhood === "") {
          this.setState({
            errorMsg: "You must choose a neighborhood."
          });
          return
          }
	    this.props.createIssue({
		    neighborhood: this.state.neighborhood,
		    category: this.state.category,
		    description: this.state.description
	  })
	  	this.setState({ description: "", errorMsg: ""})
	}

}

export default IssuesForm;