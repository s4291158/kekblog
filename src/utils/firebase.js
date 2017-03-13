import _firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBvkOA7iYvytOghbOMCJmc8luEUIvsXdUY',
  databaseURL: 'https://kekblog-72a76.firebaseio.com/'
}

_firebase.initializeApp(config)

_firebase.auth()
.signInWithEmailAndPassword('mike@answer.ky', '12345678')
.catch(function(error) {
  var errorCode = error.code
  var errorMessage = error.message
  console.log(errorMessage)
})

export const firebase = _firebase
