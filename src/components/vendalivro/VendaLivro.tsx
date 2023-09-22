import api from '../../hooks/Data';
import { useEffect, useState } from 'react';
import './VendaLivro.scss';
import axios from 'axios';

export default function VendaLivro() {

    const [nome, setNome] = useState('');
    const [descricao, setDescricao] = useState('');
    const [editora, setEditora] = useState('');
    const [estado, setEstado] = useState([]);
    const [tipo, setTipo] = useState([]);
    const [categoria, setCategoria] = useState([]);
    const [preco, setPreco] = useState('');
    const [imagem, setImagem] = useState('');
    const [erro, setErro] = useState('');

    const getPosts = async () => {
        try {
            const responseTipo = await api.get("/api/tipos");
            const responseCategoria = await api.get("/api/categorias");
            const resposeEstado = await api.get("/api/estados");

            setEstado(resposeEstado.data);
            setCategoria(responseCategoria.data);
            setTipo(responseTipo.data);

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getPosts();
    }, [])

    function addEspaço(palavra: string) {
        let palavraFinal = "";

        palavraFinal = palavra.replace(/_/g, " ");

        return palavraFinal;
    }

    return (



        <div className="venda-livro">
            <form action="processar_formulario.php" method="POST" encType='multipart/form-data'>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" name="nome" required /><br /><br />

                <label htmlFor="descricao">Descrição:</label>
                <textarea id="descricao" name="descricao" required></textarea><br /><br />

                <label htmlFor="editora">Editora:</label>
                <input type="text" id="editora" name="editora" required /><br /><br />

                <label htmlFor="estado">Estado:</label>
                <select id="estado" name="estado" required>
                    {
                        estado.map((item: any, index) => (
                            <option key={index} value={index}>
                                {addEspaço(item)}
                                {item.id}
                            </option>
                        ))
                    }
                </select><br /><br />

                <label htmlFor="tipo">Tipo:</label>
                <select id="tipo" name="tipo" required>
                    {
                        tipo.map((item: any, index) => (
                            <option key={index} value={index}>
                                {addEspaço(item)}
                            </option>
                        ))
                    }
                </select><br /><br />

                <label htmlFor="categoria">Categoria:</label>
                <select id="categoria" name="categoria" required>
                    {
                        categoria.map((item: any, index) => (
                            <option key={index} value={index}>
                                {addEspaço(item)}
                            </option>
                        ))
                    }
                </select><br /><br />

                <label htmlFor="preco">Preço:</label>
                <input type="number" id="preco" name="preco" step="0.01" required /><br /><br />

                <label htmlFor="nomeAutor">Nome do Autor:</label>
                <input type="text" id="nomeAutor" name="nomeAutor" required /><br /><br />

                <label htmlFor="imagem">Imagem:</label>
                <input type="file" id="imagem" name="imagem" accept="image/*" required /><br /><br />

                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}
