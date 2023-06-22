import React from 'react';
import Card from './UI/Card';

const categories = ['Category', 'Action', 'Romance', 'Economy', 'History', 'Fantasy', 'Science Fiction'];

const NewBook = () => (
  <Card>
    <h3>Add New Book</h3>
    <form>
      <div>
        <label htmlFor="title">
          Book Title:
          <input type="text" id="title" name="title" placeholder="Book Title" />
        </label>
      </div>
      <div>
        <label htmlFor="author">
          Author:
          <input type="text" id="author" name="author" placeholder="Author" />
        </label>
      </div>
      <div>
        <label htmlFor="category">
          Category:
          <select id="category" name="category">
            {categories.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <button type="button">Add Book</button>
      </div>
    </form>
  </Card>
);

export default NewBook;
