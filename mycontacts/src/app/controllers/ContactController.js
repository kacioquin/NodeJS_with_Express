const ContactRepository = require('../repositories/ContactsRepository');

class ContactController {
  async index(request, response) {
    // retorna uma listagem de contatos
    const contacts = await ContactRepository.findAll();

    response.json(contacts);
  }

  async show(request, response) {
    // retorna um contato por id
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    response.json(contact);
  }

  async store(request, response) {
    // cria os contatos
    const {
      name, email, phone, category_id,
    } = request.body;

    if (!name) {
      return response.status(400).json({ error: 'Name is required' });
    }

    const contactExists = await ContactRepository.findByEmail(email);

    if (contactExists) {
      return response.status(400).json({ error: 'This email is already been taken' });
    }

    const contact = await ContactRepository.create({
      name, email, phone, category_id,
    });

    response.json(contact);
  }

  update() {
    // atualiza um contato por id
  }

  async delete(request, response) {
    // deleta um contato por id
    const { id } = request.params;

    const contact = await ContactRepository.findById(id);

    if (!contact) {
      return response.status(404).json({ error: 'User not found' });
    }

    await ContactRepository.delete(id);

    // 204 - No Content
    response.sendStatus(204);
  }
}

module.exports = new ContactController();
