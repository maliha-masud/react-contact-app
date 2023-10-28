## React Contact List App

App Component fetches users from API using the link: [http://jsonplaceholder.typicode.com/users](http://jsonplaceholder.typicode.com/users)

A user avatar is displayed in a contact card format.

* To fetch an avatar for a user, the first letter of the user's name is passed to the below API:
	https://api.dicebear.com/7.x/adventurer/svg?seed={usernameInitial}

> Example: 
>* Name: Leanne Graham; First Letter of name: L
	https://api.dicebear.com/7.x/adventurer/svg?seed=L
