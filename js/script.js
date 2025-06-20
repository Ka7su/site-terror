document.addEventListener('DOMContentLoaded', function() {
    const botoes = document.querySelectorAll('.ler-mais');
    botoes.forEach(botao => {
        botao.addEventListener('click', function() {
            const titulo = this.closest('.carta-historia').querySelector('h3').textContent;
            const modal = document.createElement('div');
            modal.innerHTML = `
                <div style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.9);display:flex;justify-content:center;align-items:center;z-index:1000;">
                    <div style="background:#111;padding:2rem;border:2px solid #8b0000;max-width:500px;width:90%;">
                        <h2 style="color:#8b0000;margin-top:0;">${titulo}</h2>
                        <p>Conteúdo da história...</p>
                        <button style="background:#8b0000;color:white;border:none;padding:0.7rem 1.5rem;margin-top:1rem;cursor:pointer;">Fechar</button>
                    </div>
                </div>
            `;
            document.body.appendChild(modal);
            modal.querySelector('button').addEventListener('click', function() {
                modal.remove();
            });
        });
    });

    const form = document.getElementById('formContato');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nome = document.getElementById('nome').value.trim();
            const email = document.getElementById('email').value.trim();
            const assunto = document.getElementById('assunto').value;
            const mensagem = document.getElementById('mensagem').value.trim();
            
            if (nome && email && assunto && mensagem.length >= 20) {
                alert('Mensagem enviada com sucesso!');
                form.reset();
            } else {
                alert('Preencha todos os campos corretamente');
            }
        });
    }
});