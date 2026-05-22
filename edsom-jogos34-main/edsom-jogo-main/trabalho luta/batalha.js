
function lutar(){
    const classe = document.getElementById('classe').value;
    const arma = document.getElementById('arma').value.trim();
    const log = document.getElementById('log');
    
    if(!arma){
    log.innerHTML= "❌ Você esqueceu de equipar uma arma";
    return;}
    
    const dado = Math.floor(Math.random()*20)+1;
    let resultado = `🎲 Dado: ${dado} | <strong>${classe}</strong> com <strong>${arma}</strong>`;
    
    switch(classe){
    case "guerreiro":

    if(arma.toLowerCase()==="espada" && dado>5){
    resultado += "<span class='sucesso'> SUCESSO:Você decapitou o monstro com um golpe de espada </span>"
        log.innerHTML= resultado

    }else if(dado >15){
    resultado += "<span class='sucesso'> VITÓRIA: na força bruta, você esmagou o inimigo</span>"
        log.innerHTML= resultado
    }else{
    resultado += "<span class='derrota'>FALHA: O mostro foi mais rápido. Sua"+ arma+ "ficou presa no chão!</span>"
    }
        log.innerHTML= resultado
    break;

    case "mago":
    if(arma.toLowerCase() === "cajado" && dado > 8){
    resultado += "<span span class= 'critico'>CRITICO:Seu cajado</span>"
        log.innerHTML= resultado
    }else if(dado === 20){
            resultado += "<span class=critico>MILAGRE:voce deu uma cajadada e desnortiou o inimigo</span>"
            log.innerHTML= resultado
    }else{
            resultado += "<span class=''derrota>FALHOU:seu feitiço deu reverso</span>"
            log.innerHTML= resultado
    }
    break
     case "arqueiro":
    if(arma.toLowerCase() === "arco" && dado > 8){
        resultado += "<span span class= 'critico'>CRITICO: sua flecha acertou no zoio </span>"
            log.innerHTML= resultado
        }else if(dado === 20){
                resultado += "<span class=critico>MILAGRE:voce acertou na cara milagre da lua </span>"
                log.innerHTML= resultado
        }else{
                resultado += "<span class=''derrota>FALHOU:voce errou  o inimigo tem script </span>"
                log.innerHTML= resultado
        }
        break;

        default:
            resultado += "voce abre a porta e nao ve nada  voce e milpe"
    }
     log.innerHTML= resultado
    
    
    }