import React, {Component} from 'react'
import './App.css'

function findImgURL(name) {
	return `https://api.dicebear.com/7.x/adventurer/svg?seed=${name.charAt(0)}`;
}


const Contacts = ({ contacts }) => {
  return (
    <div class="body">
		<h1> Contact List </h1>
		{contacts.map((contact) => (
			<div class = "card">
				<div class = "card-body">
					<div class="imgCl"><center><img src = {findImgURL(contact.name)} alt="Img"/></center></div>
					<h4 class = "card-title">{contact.name}</h4>
					<h5 class = "card-subtitle mb-2 text-muted">✉️ {contact.email}</h5>
					<h5>📞 {contact.phone}</h5>
					<h5 class = "card-subtitle last">🌐︎ http://{contact.website}</h5>
					<div class = "menu">
						<div class ="menu item first"> ❤️ </div>
						<div class ="menu item"> ✏️ </div>
						<div class ="menu item last"> 🗑️ </div>
					</div>
				</div>
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
