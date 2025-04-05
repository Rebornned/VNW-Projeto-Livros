import { useState, useEffect } from "react";
import axios from "axios";
import "./design-donatedbooks.scss";

function DonatedBooks() {
    // Estado para armazenar os livros
    const [books, setBooks] = useState([]);

    // useEffect para buscar os livros da API
    useEffect(() => {
        // Função para fazer a requisição GET à API
        const fetchBooks = async () => {
            try {
                const response = await axios.get("https://books-api-flask-vnw.onrender.com/livros"); // Endereço da sua API
                console.log("Livros recebidos:", response.data);  // Adiciona esse log para verificar a resposta
                setBooks(response.data); // Atualiza o estado com os livros retornados
            } catch (error) {
                console.error("Erro ao carregar livros:", error);
            }
        };

        fetchBooks(); // Chama a função para carregar os livros ao montar o componente
    }, []); // [] significa que o efeito será executado apenas uma vez após o componente ser montado

    return (
        <main className="main_donatedbooks">
            <section>
                <h2>Livros Doados</h2>
                <div className="list_div">
                    {/* Mapeia os livros e exibe cada um */}
                    {books.map((book) => (
                        <div key={book.id} className="book">
                            <img src={book.imagem_url} alt={`Imagem do livro - ${book.titulo}`} />
                            <p>{book.titulo}</p>
                            <p>{book.autor}</p>
                            <p>{book.categoria}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}

export default DonatedBooks;
