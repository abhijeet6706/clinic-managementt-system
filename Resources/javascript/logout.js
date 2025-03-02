// Select the logout button
import { signOut } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { auth } from './firebase.js';
const logoutButton = document.getElementById('logoutButton');

// Logout functionality
logoutButton.addEventListener('click', async () => {
  try {
    await signOut(auth);
    alert('Logged out successfully!');
    // Redirect to login page
    window.location.href = '/auth.html'; // Replace with your login page URL
  } catch (error) {
    console.error('Error logging out:', error.message);
  }
});
