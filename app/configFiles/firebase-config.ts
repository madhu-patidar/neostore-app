import * as firebase from 'firebase'
 

let config = {
    apiKey: "AIzaSyAajO6UYcVaKI8VBcglda3hXgXfm4esrr0",
    authDomain: "push-notification-eae71.firebaseapp.com",
    databaseURL: "https://push-notification-eae71.firebaseio.com",
    projectId: "push-notification-eae71",
    storageBucket: "push-notification-eae71.appspot.com",
    messagingSenderId: "542772561613"
  };

  

  
export default  !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();

  
  
  /*messaging.usePublicVapidKey("BEFET2KeH0xNrm8TNJwA84-zw13a-6eLHPO7J_6bBnhGQuFcbOxNp8KeRaenjFbuFZhSiDFMvhpnf_iHabkl9y8");
    
  messaging.requestPermission()
    .then(()=>{
    console.log('Token Permission Granted')
    return messaging.getToken()
    })
    .then(token=>{
    console.log("Token- ",token)
    })
    .catch(err=>console.log("Token Permission rejected",err))*/

