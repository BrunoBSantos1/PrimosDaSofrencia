alert("Olá meus queridos, nós da banda Primos da Sofrencia. Desjamos que tenha uma boa navegação em nosso site");
//=================== Consumindo uma API de CEP para pegar o nome da Cidade e o Estado============================================
document.querySelector('.form').addEventListener('submit', async (event)=>{
    event.preventDefault();

    let input = document.querySelector('#Ccep').value;
    if(input !== ""){
        let url = ` https://viacep.com.br/ws/${encodeURI(input)}/json/ `;
        let result = await fetch(url);
        let json = await result.json();
            showInfo({
                localidade: json.localidade,
                uf: json.uf,
            })
    }
});
function showInfo(json){
    document.querySelector('#Ccidade').value = `${json.localidade}`;
    document.querySelector('#Cuf').value = `${json.uf}`;
}
//==================================================================================================================================
