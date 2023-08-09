function Calcular(entrada) {
    let paragrafo = document.querySelector('.tela')

    if (paragrafo.innerHTML.length >= 14) {
        alert('Você excedeu o limite de numeros')

        switch (entrada) {
            case 'DEL':
                paragrafo.innerHTML = ''
                break

            case '=':
                let numeros = eval(paragrafo.innerHTML)
                paragrafo.innerHTML = numeros
                break
        }
    } else {     
        switch (entrada) {
            case 1:
                paragrafo.innerHTML += 1
                break
            case 2: 
                paragrafo.innerHTML += 2
                break

            case 3:
                paragrafo.innerHTML += 3
                break
            
            case 4:
                paragrafo.innerHTML += 4
                break

            case 5:
                paragrafo.innerHTML += 5
                break

            case 6:
                paragrafo.innerHTML += 6
                break

            case 7:
                paragrafo.innerHTML += 7
                break

            case 8:
                paragrafo.innerHTML += 8
                break

            case 9:
                paragrafo.innerHTML += 9
                break

            case 0:
                paragrafo.innerHTML += 0
                break

            case '+':
                paragrafo.innerHTML += '+'
                break

            case '/':
                paragrafo.innerHTML += '/'
                break
            
            case '-':
                paragrafo.innerHTML += '-'
                break

            case 'DEL':
                paragrafo.innerHTML = ''
                break

            case 'x':
                paragrafo.innerHTML += '*'
                break

            case '=':
                let numeros = eval(paragrafo.innerHTML)
                paragrafo.innerHTML = numeros
                break

        }
    }
}