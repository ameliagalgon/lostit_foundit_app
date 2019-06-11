import uuidv4 from 'uuid/v4';

import sleep from '../utils/sleep';

import itemList from './mock/items';
import randomUser from './mock/user';

const mapContact = contact => {
  const { name, picture, phone, cell, email } = contact;

  return {
    id: uuidv4(),
    name: `${capitalize(name.first)} ${capitalize(name.last)}`,
    avatar: picture.large,
    phone,
    cell,
    email,
    favorite: Math.random() >= 0.5, // randomly generate favorite contacts
  };
};

export const fetchItems = async () => {
  await sleep(500);

  return itemList.results.map(item => {
    const { itemId, name } = item;
    return (
        {id: itemId, name}
    );
  });
};

export const fetchRandomUser = async () => {
  await sleep(500);

  return randomUser.results[0];
}
