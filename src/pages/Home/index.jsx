import './design-home.scss'

function Home() {
    return (
        <main className='main_home'>
            <section className='home_up'>
                <h1>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h1>
            </section>
            <section className='home_down'>
                <h2>Por que devo doar?</h2>
                <div>
                    <figure>
                        <img src="assets/ui_imgs/community.png" alt="Imagem de comunidade"></img>
                        <p> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>

                    </figure>
                    <figure>
                        <img src="assets/ui_imgs/reading.png" alt="Imagem de leitura"></img>
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                
                    </figure>
                    <figure>
                        <img src="assets/ui_imgs/transform.png" alt="Imagem de transformação social"></img>
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                        
                    </figure>
                    <figure>
                        <img src="assets/ui_imgs/balance.png" alt="Imagem de uma balança"></img>
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                        
                    </figure>
                </div>
            </section>
        </main>
    )
}

export default Home;