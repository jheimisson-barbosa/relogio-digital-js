function atualizarRelogio(){
            const agora = new Date();

            hora = String(agora.getHours()).padStart(2,"0");
            minuto = String(agora.getMinutes()).padStart(2,"0");
            segundo = String(agora.getSeconds()).padStart(2,"0");

            const horaformatada= `${hora}:${minuto}:${segundo}`

            document.getElementById("txtHora").textContent = horaformatada;
  
        }
        
        function atualizarMensagem(){
            const agora = new Date();

            if(agora.getHours() > 6 && agora.getHours()<12){
                document.getElementById("txtSaudacao").innerHTML="<h2 id=txtSaudacao class=saudacao>Bom dia São Luís</h2>"
            }else if (agora.getHours() >=12 && agora.getHours()<18){
                 document.getElementById("txtSaudacao").innerHTML="<h2 id=txtSaudacao class=saudacao>Boa tarde São Luís</h2>"
            }else{
                document.getElementById("txtSaudacao").innerHTML="<h2 id=txtSaudacao class=saudacao>Boa noite São Luís</h2>"
            }

            let mes = agora.toLocaleString("pt-BR",{month : "long"})
            let dia = agora.getDay();
            let ano = agora.getFullYear();

            document.getElementById("txtData").innerHTML=`${dia} de ${mes} de ${ano}`;

        }
        setInterval(atualizarRelogio,1000);
        atualizarMensagem();
        atualizarRelogio();