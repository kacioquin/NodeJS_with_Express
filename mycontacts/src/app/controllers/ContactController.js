class ContactController {
  index(request, response) {
    // retorna uma listagem de contatos
    response.send('Send from ContactController!');
  }

  show() {
    // retorna um contato por id
  }

  store() {
    // cria os contatos
  }

  update() {
    // atualiza um contato por id
  }

  delete() {
    // deleta um contato por id
  }
}

module.exports = new ContactController();
