// Configuração do Firebase de seu aplicativo
//ADICIONE OS LINKS DO FIREBASE AQUI

const firebaseConfig = {
  apiKey: 'AIzaSyAZJq4dIJW7NXqydBQVtmqY63W1uWpwfKM',
  authDomain: 'a-32dd4.firebaseapp.com',
  databaseURL: 'https://a-32dd4-default-rtdb.firebaseio.com',
  projectId: 'a-32dd4',
  storageBucket: 'a-32dd4.appspot.com',
  messagingSenderId: '392732979051',
  appId: '1:392732979051:web:5c375c8a1f17829b2fa62e',
  measurementId: 'G-TB91TPXZ24'
}
// Inicialize o Firebase
firebase.initializeApp(firebaseConfig)

function addUser() {
  user_name = document.getElementById('user_name').value
  firebase.database().ref('/').child(user_name).update({
    purpose: 'adding user'
  })
  /*
    Armazene o nome de usuário em localStorage
    
    

    Programe window.location para que o usuário possa navegar até a página chat_room.html.
*/
  localStorage.setItem('user_name', user_name)
  window.location = 'chat_room.html'
}
