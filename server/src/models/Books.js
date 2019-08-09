module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    description: DataTypes.TEXT,
    bookImage: DataTypes.STRING,
    googleBooksId: DataTypes.STRING,
    listType: DataTypes.STRING
  })

  return Book
}
/*
{
  "title": "book data",
  "author": "book data",
  "genre": "book data",
  "description": "book data",
  "bookImage": "book data",
  "googleBooksId": "book data",
  "listType": "book data"
}*/
