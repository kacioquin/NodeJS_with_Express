const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // retorna uma listagem de contatos
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
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
