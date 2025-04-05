import { useState } from 'react';
import './design-donation.scss';
import axios from 'axios';

function Donation () {
    const [message, setMessage] = useState('');  // Definindo o estado

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Coleta os dados do formulário
        const formData = {
            titulo: e.target.titulo.value,
            categoria: e.target.categoria.value,
            autor: e.target.autor.value,
            imagem_url: e.target.img_link.value 
        };

        // Validação dos campos
        if (!formData.titulo || !formData.categoria || !formData.autor || !formData.imagem_url) {
            setMessage('Por favor, preencha todos os campos antes de enviar o formulário.');
            return;  // Não envia nenhum dado.
        }

        console.log('Dados enviados:', formData);

        try {
            const response = await axios.post(
                'http://127.0.0.1:5000/doar',
                formData,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            // Sucesso
            setMessage(response.data.mensagem || 'Livro doado com sucesso!');
        } catch (error) {
            // Tratamento de erros
            console.error('Erro ao enviar os dados:', error);
            // Logs de erros
            if (error.response) {
                // Se a resposta do servidor está presente
                setMessage(error.response.data?.erro || 'Erro desconhecido ao enviar os dados');
            } else if (error.request) {
                // requisição foi feita mas não houve resposta
                setMessage('Sem resposta do servidor');
            } else {
                // Possível erro de configuração
                setMessage('Erro ao enviar os dados: ' + error.message);
            }
        }
        e.target.reset(); // Limpa o formulário após o envio
    };

    return (
        <main className='main_donation'>
            <section>
                <h2> Por favor, preencha o formulário com suas informações e as informações do Livro </h2>
                <div>
                    <figure>
                        <img src="assets/ui_imgs/book.png" alt="Imagem de um livro" />
                        <h2>Informações do livro</h2>
                    </figure>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name='titulo' placeholder='Título'/>
                        <input type="text" name='categoria' placeholder='Categoria'/>
                        <input type="text" name='autor' placeholder='Autor'/>
                        <input type="text" name='img_link' placeholder='Link da imagem'/>
                        <button type='submit'> Doar </button>
                    </form>
                    {message && <p>{message}</p>} 
                </div>
            </section>
        </main>
    );
}

export default Donation;
