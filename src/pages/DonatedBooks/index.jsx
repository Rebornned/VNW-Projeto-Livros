import "./design-donatedbooks.scss"

function DonatedBooks() {
    return (
        <main className="main_donatedbooks">
            <section>
                <h2>Livros Doados</h2>
                <div className="list_div">
                    <div className="book">
                        <img src="assets/ui_imgs/donatedbook.png" alt="Imagem do livro - O protagonista" />
                        <p>O protagonista</p>
                        <p>Susanne Andrade</p>
                        <p>Ficção</p>                            

                    </div>
                </div>
            </section>
        </main>
    )
}

export default DonatedBooks;