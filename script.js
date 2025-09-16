const form=document.getElementById("formulario");
const nome=document.getElementById("nome");
const email=document.getElementById("email");
const tel=document.getElementById("telefone");
const cpf=document.getElementById("cpf");
const dtnasc=document.getElementById("datanascimento");

form.addEventListener("submit",function(e) {
    e.preventDefault();
    if (nome.value.trim().length<3){
        alert("O nome deve ter pelo menos 3 caracteres.");
        return;
    }
    if (!email.value.includes("@")){
        alert("Digite um e-mail válido.");
        return;
    }
    tel.value=tel.value.replace(/\D/g, "");
    if(tel.value.length<10){
        alert("Digite um telefone válido.");
        return;
    }
    cpf.value=cpf.value.replace(/\D/g, "");
    if(cpf.value.length!==11){
        alert("Digite um CPF válido com 11 números.");
        return;
    }
    const nascimento = new Date(dtnasc.value);
    const hoje=new Date();
    let idade=hoje.getFullYear()-nascimento.getFullYear();
    const mes=hoje.getMonth()-nascimento.getMonth();
    if (mes<0||(mes===0 && hoje.getDate()<nascimentogetDate())) {
      idade--;
    }
    if (idade < 18) {
        alert("Você precisa ter pelo menos 18 anos.");
        return;
    }
    
    console.log("Nome:", nome.value);
    console.log("Email:", email.value);
    console.log("Telfone:", tel.value);
    console.log("CPF:", cpf.value);
    console.log("Data de Nascimento:", dtnasc.value);
    alert("Formulário enviado com sucesso!")
});
tel.addEventListener("input",function(e){
    let valor = e.target.value.replace(/\D/g, "");
    valor = valor.length <=10
        ? valor.replace(/(\d{2})(\d{4})(\d{0,4})/,"($1)$2-$3")
        : valor.replace(/(\d{2})(\d{5})(\d{0,4})/,"($1)$2-$3");
    e.target.value=valor;
});

cpf.addEventListener("input",function(e){
    let valor = e.target.value.replace(/\D/g, "");
    valor=valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor=valor.replace(/(\d{3})(\d)/, "$1.$2");
    valor=valor.replace(/(\d{3})(\d{1,2})$/, "$1.$2");
    e.target.value=valor;
});
