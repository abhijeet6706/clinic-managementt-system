// Import Firebase SDK and necessary services
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
  import {
    doc,
    setDoc,
    getDoc,
  } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';
  import { db, auth } from './firebase.js';
  
  // DOM Elements
  const loginSection = document.getElementById('loginSection');
  const registrationSection = document.getElementById('registrationSection');
  const loginEmail = document.getElementById('loginEmail');
  const loginPassword = document.getElementById('loginPassword');
  const loginButton = document.getElementById('loginButton');
  const loginError = document.getElementById('loginError');
  const registerEmail = document.getElementById('registerEmail');
  const registerPassword = document.getElementById('registerPassword');
  const registerRole = document.getElementById('registerRole');
  const registerButton = document.getElementById('registerButton');
  const registerError = document.getElementById('registerError');
  const switchToRegisterButton = document.getElementById('switchToRegisterButton');
  const switchToLoginButton = document.getElementById('switchToLoginButton');
  
  const container = document.getElementById('container');

  switchToRegisterButton.addEventListener('click', () => {
    container.classList.add("active");
});

switchToLoginButton.addEventListener('click', () => {
    container.classList.remove("active");
});
  
  // Login User
  loginButton.addEventListener('click', async () => {
    const email = loginEmail.value;
    const password = loginPassword.value;
  
    if (!email || !password) {
      alert('Both fields are required.')
      return;
    }
  
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      // Check user's role from Firestore
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        const userData = userDoc.data();
        const role = userData.role;
  
        // Redirect based on role
        if (role === 'receptionist') {
          window.location.href = '/receptionist.html';
        } else if (role === 'doctor') {
          window.location.href = '/doctor.html';
        }
      } else {
        alert('User role not found!')
      }
    } catch (error) {
      alert(error.message)
    }
  });
  
  // Register User
  registerButton.addEventListener('click', async () => {
    const email = registerEmail.value;
    const password = registerPassword.value;
    const role = registerRole.value;
    console.log(email);    
  
    if (!email || !password || !role) {
      alert('All fields are required.')
      return;
    }
  
    try {
      // Register with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
  
      // Save role in Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        role: role,
      });
  
      registerError.textContent = '';
      alert('User registered successfully! You can now log in.');
      window.location.href = '/auth.html';
    } catch (error) {
    alert(error.message)
    }
  });
  
