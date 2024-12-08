import './design-donation.scss'

function Donation () {
    return (
        <main className='main_donation'>
            <section>
                <h2> Por favor, preencha o formulário com suas informações e as informações do Livro </h2>
                <div>
                    <figure>
                        <img src="assets/ui_imgs/book.png" alt="Imagem de um livro" />
                        <h2>Informações do livro</h2>
                    </figure>
                    <input type="text" name='tittle' placeholder='Título'/>
                    <input type="text" name='category' placeholder='Categoria'/>
                    <input type="text" name='author' placeholder='Autor'/>
                    <input type="text" name='img_link' placeholder='Link da imagem'/>
                    <button type='submit'> Doar </button>
                </div>
            </section>
        </main>
    )
}

export default Donation;