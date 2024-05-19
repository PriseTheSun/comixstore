class FiltragemLivros {
    constructor(livros) {
        this.livros = livros;
    }

    filtrarPorTitulo(titulo){
        return this.livros.filter(livro => livro.nome.toLowerCase().includes(titulo.toLowerCase()));
    }

    filtrarPorAutor(autor) {
        return this.livros.filter(livro => livro.autor === autor);
    }

    filtrarPorEditora(editora) {
        return this.livros.filter(livro => livro.editora === editora);
    }

}
