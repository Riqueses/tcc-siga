function confirmarSaida(event) {
   if (!confirm("Sua conta será deslogada!!")) {
        event.preventDefault(); // Impede a navegação
    }
}


//Aviso de perda de dados antes de fechar a página
//window.addEventListener('beforeunload', function (e) {
    // Mensagem padrão para navegadores modernos
//    var message = 'Você tem certeza que deseja sair?';
    
    // Para navegadores antigos
//    e.returnValue = message;
    
    // Para navegadores modernos
//    return message;
//});