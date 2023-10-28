import React, {Component} from 'react'
import './App.css'

const Contacts = ({ contacts }) => {
  return (
    <div>
		<center><h1> Contact List </h1></center>
		<hr />
		{contacts.map((contact) => (
			<div class = "card">
				<div class = "card-body">
					<h4 class = "card-title">{contact.name}</h4>
					<h5 class = "card-subtitle mb-2 text-muted">{contact.email}</h5>
					<h5 class = "card-text">{contact.company.catchPhrase}</h5>
				</div>
				<hr />
			</div>
		))}
    </div>
  );
}

class App extends Component {
  state = {
    contacts: []
  }
  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((data) => {
      this.setState({ contacts: data })
    })
    .catch(console.log)
  }
  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );}}

export default App;
