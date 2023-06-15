// Import the functions from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5UgUG3kn7OHYRkOMaxNv1WxYOETvHsHQ",
  authDomain: "itsmikestang.firebaseapp.com",
  projectId: "itsmikestang",
  storageBucket: "itsmikestang.appspot.com",
  messagingSenderId: "703521344182",
  appId: "1:703521344182:web:d575ccb83ab82d710e7417",
  measurementId: "G-960FNJRZEM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, 'cities');
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}


// light and dark mode theme set

function setTheme() {
	localStorage.clear();
	console.log('settheme called')
	var theme = localStorage.getItem('theme');
	console.log('theme gotten')
	console.log(theme)
	
	
	if (theme) {
		console.log('yes theme')
		if (theme == "dark-theme") {
			document.getElementById('body').classList.add('dark-theme');
			console.log('existing, set to dark-theme')
			document.getElementById('theme-icon').setAttribute('name','sunny-outline');
		}
	
		if (theme == "light-theme") {
			document.getElementById('body').classList.add('light-theme');
			console.log('existing, set to light-theme')
			document.getElementById('theme-icon').setAttribute('name','moon-outline');
		} 
	} else {
		console.log('no theme')
		if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
			document.getElementById('body').classList.add('dark-theme');
			console.log('new, set to dark-theme')
			document.getElementById('theme-icon').setAttribute('name','sunny-outline');
		} else {
			document.getElementById('body').classList.add('light-theme');
			localStorage.setItem('theme', 'light-theme');
			console.log('new, set to light-theme')
			document.getElementById('theme-icon').setAttribute('name','moon-outline');
		}
	}
}

setTheme();	

function changeTheme() {
	if (document.getElementById('body').classList.contains('light-theme')) {
		document.getElementById('body').classList.remove('light-theme');
		document.getElementById('body').classList.add('dark-theme');
		localStorage.setItem('theme', 'dark-theme');
		console.log('user change, set to dark-theme')
		document.getElementById('theme-icon').setAttribute('name','sunny-outline');
	} else {
		document.getElementById('body').classList.remove('dark-theme');
		document.getElementById('body').classList.add('light-theme');
		localStorage.setItem('theme', 'light-theme');
		console.log('user change, set to light-theme')
		document.getElementById('theme-icon').setAttribute('name','moon-outline');
	}	
}
