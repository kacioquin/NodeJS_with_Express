const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Cassio',
    email: 'teste@abc.com',
    phone: '1212121212',
    category_id: uuid(),
  },
];

class ContactRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactRepository();
