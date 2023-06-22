import React from 'react';
import NewBook from '../components/NewBook';

import BooksList from '../components/BooksList';
import Card from '../components/UI/Card';

const BOOKS_DATA = [
  {
    id: 1,
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
    category: 'Action',
  },
  {
    id: 2,
    title: 'Dune',
    author: 'Frank Herbert',
    category: 'Science Fiction',
  },
  {
    id: 3,
    title: 'Capital in the Twenty-First Century',
    author: 'Suzanne Collins',
    category: 'Economy',
  },
];

const BooksPage = () => (
  <section className="BooksPage">
    <Card>
      <BooksList books={BOOKS_DATA} />
      <NewBook />
    </Card>
  </section>
);

export default BooksPage;
