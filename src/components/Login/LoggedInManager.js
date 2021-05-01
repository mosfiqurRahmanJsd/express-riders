// firebase
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "../../firebase.config";

export const initializeLoginFramework = () => {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
};

export const handleGoogleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((result) => {
      const { displayName, email } = result.user;
      const signedInUser = {
        isSignIn: true,
        name: displayName,
        email: email,
      };
      return signedInUser;
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
      console.log(errorCode, errorMessage, email, credential);
    });
};

// create user

export const createUserWithEmailAndPassword = (name, email, password) => {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      // empty error message
      const newUserInfo = res.user;
      newUserInfo.error = "";
      newUserInfo.success = true;
      // Signed in
      updateUserName(name)
      return newUserInfo;
      // ...
    })
    .catch((error) => {
      const newUserInfo = {};
      newUserInfo.error = error.message;
      newUserInfo.success = false;
      return newUserInfo;
    });
};



export const signInWithEmailAndPassword = (email, password) => {
  return firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        const newUserInfo = res.user;
        newUserInfo.error = "";
        newUserInfo.success = true;
        return newUserInfo; 
      })
      .catch((error) => {
        const newUserInfo = {};
        newUserInfo.error = error.message;
        newUserInfo.success = false;
        return newUserInfo; 
      });
}




const updateUserName = (name) => {
  const user = firebase.auth().currentUser;
  user
    .updateProfile({
      displayName: name,
    })
    .then(function () {
      console.log("user name updated successfully");
    })
    .catch(function (error) {
      console.log(error);
    });
};