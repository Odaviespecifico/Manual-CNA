console.log('versão 1.4 - Ajuste de imagens no Kids e essentials')
function checkpassword() {
    while (true) {
    let userPass = prompt('Digite o código de acesso:')
    if (userPass != null) {
        userPass = userPass.toUpperCase()
    }

    console.log(userPass)
    console.log(password)

    if (userPass == password) {
        console.log('Você digitou a senha correta')
        localStorage.setItem('visited','true')
        break
    }
    
    else {
        console.log('Você digitou a senha incorreta')
        alert('senha incorreta')
    }
}
}

visited = localStorage.getItem('visited')
var password = 'CFCNA'
var userPass ='Errada'

if (visited != null) {
    console.log()
}
else {
    checkpassword()
}



