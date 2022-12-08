document.getElementById('sessionBtn').addEventListener('click', () => {
  const input = document.getElementById('session');
  sessionStorage.setItem('info', input.value);
  input.value = '';

});

document.getElementById('readSesssion').addEventListener('click', () => {
    const session = sessionStorage.getItem('info');
    alert('Sessão: ' + session);
});


document.getElementById('localBtn').addEventListener('click', () => {
  const input = document.getElementById('local');
  localStorage.setItem('info', input.value);
  input.value = '';
});

document.getElementById('readLocal').addEventListener('click', () => {
    const local = localStorage.getItem('info');
    alert('Local: ' + local);
});



document.getElementById('cookieBtn').addEventListener('click', function () {
    const input = document.getElementById('cookie')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'info=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022,9, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path
    
    console.log(document.cookie)
    input.value = ''
    
  })


  
  document.getElementById('cookie2Btn').addEventListener('click', function () {
    const input = document.getElementById('cookie2')
    // cookieName=value; expires=UTCStringDate; path=/;
    const cookie = 'text=' + input.value + ';'
    const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
    const path = 'path=/;'
    document.cookie = cookie + expiration + path

    console.log(document.cookie)


    input.value = ''
    
  })



