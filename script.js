function CalcularMedia(){
    
    nota1 = parseFloat(document.getElementById("nota1").value); //Converter para float
    nota2 = parseFloat(document.getElementById("nota2").value);
    nota3 = parseFloat(document.getElementById("nota3").value);
    //if (nota1 || nota2 || nota )
    
    
    media = (nota1+nota2+nota3) /3;
    document.getElementById("media").textContent = media.toFixed(2);

    if(media >=  7){
        document.getElementById("situacao").textContent = "Aluno(a) foi aprovado(a)";
    }else if(media > 5 && media < 7){
        document.getElementById("situacao").textContent = "Aluno(a) em recuperação";
    }else{
        document.getElementById("situacao").textContent = "Aluno(a) reprovado";
    }    
}
function Limpar(){
    
        // Limpar os campos de entrada
        document.getElementById("nota1").value = '';
        document.getElementById("nota2").value = '';
        document.getElementById("nota3").value = '';
    
        // Limpar os campos de exibição
        document.getElementById("media").textContent = '';
        document.getElementById("situacao").textContent = '';
}



