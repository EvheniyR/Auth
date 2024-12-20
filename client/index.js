const form = document.getElementById('form');
const URL = 'http://localhost:3000/signup';

async function setUser(email, password) {
  const requestData = {
    email: email,
    password: password,
  };

  const response = await fetch(URL, {
    method: 'POST',
    body: JSON.stringify(requestData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { accessToken } = await response.json();

  // localStorage.setItem('token', accessToken); худший вариант, использовать можно, но куки лучше
  // document.cookie = `token=${accessToken}`; лучший вариант. Если самостоятельно сможете разобраться - используйте его
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const email = document.querySelector('.input-email').value;
  const password = document.querySelector('.input-password').value;

  setUser(email, password);
});
