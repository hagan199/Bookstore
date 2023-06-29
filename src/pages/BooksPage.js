import React from 'react';
import NewBook from '../components/NewBook';

import BooksList from '../components/BooksList';
import Card from '../components/UI/Card';

const BooksPage = () => (
  <section className="BooksPage">
    <Card>
      <BooksList />
      <NewBook />
    </Card>
  </section>

);

export default BooksPage;
