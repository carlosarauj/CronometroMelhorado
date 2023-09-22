function relogio(){

    function criaSeg(segundos){
        let data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'UTC'
        })
    }

    function iniciaRel(){
        timer = setInterval(function (){
            segundos++
            relogio.innerHTML = criaSeg(segundos)
        }, 1000)
    }

    let relogio = document.querySelector('#relogio')
    let segundos = 0
    let timer

    document.addEventListener('click', function(eve) {
        let el = eve.target
    
        if (el.classList.contains('zerar')){
            clearInterval(timer)
            relogio.innerHTML = '00:00:00'
            relogio.classList.remove('pausado')
            segundos = 0
        }

        if (el.classList.contains('iniciar')){
            relogio.classList.remove('pausado') 
            clearInterval(timer)
            iniciaRel()
        }

        if (el.classList.contains('pause')){
            clearInterval(timer)
            relogio.classList.add('pausado')

        }
    })

    }
relogio()