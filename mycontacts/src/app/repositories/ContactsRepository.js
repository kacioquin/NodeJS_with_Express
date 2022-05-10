const { v4: uuidv4 } = require('uuid');

const db = require('../../database')

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
  async findAll(orderBy = 'ASC') {
    const direction = orderBy.toUpperCase() === 'DESC' ? 'DESC' : 'ASC'
    const rows = await db.query(`SELECT * FROM contacts ORDER BY name ${direction}`);
    return rows;
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

async create({
  name, email, phone, category_id,
}) {
  const [ row ] = await db.query(`
    INSERT INTO contacts(name, email, phone, category_id)
    VALUES($1, $2, $3, $4)
    RETURNING *
    `, [name, email, phone, category_id]
  );
  
  return row;
}

  update(id, {
    name, email, phone, category_id,
  }) {
    return new Promise((resolve) => {
      const updatedContact = {
        id, name, email, phone, category_id,
      };

      contacts = contacts.map((contact) => (contact.id === id ? updatedContact : contact));

      resolve(updatedContact);
    });
  }
}

module.exports = new ContactRepository();
