const { v4: uuidv4 } = require('uuid');

let contacts = [
  {
    id: uuidv4(),
    name: 'Cassio',
    email: 'teste@abc.com',
    phone: '1212121212',
    category_id: uuidv4(),
  },
  {
    id: uuidv4(),
    name: 'Noah',
    email: 'teste@abc.com',
    phone: '1212121212',
    category_id: uuidv4(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }

  findByEmail(email) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.email === email),
    ));
  }

  delete(id) {
    return new Promise((resolve) => {
      contacts = contacts.filter((contact) => contact.id !== id);
      resolve();
    });
  }

  create({
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const newContact = {
        id: uuidv4(),
        name,
        email,
        phone,
        category_id,
      };

      contacts.push(newContact);
      resolve(newContact);
    });
  }
}

module.exports = new ContactRepository();
