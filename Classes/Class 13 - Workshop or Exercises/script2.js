class Book {
  constructor(title, publicationYear, author) {
    this._title = title;
    this._publicationYear = publicationYear;
    this._author = author instanceof Author ? author : null;
  }
  get title() {
    return this._title;
  }
  set title(title) {
    if (typeof title === "string" && title.trim() != "") {
      // tuka proveruvame dali e od tip string i dali e prazen string so trim metodata i dali ni vrakja samo prazno mesto
      this.title = title;
    } else {
      console.error("Invalid author, must be a non empty string");
    }
  }
  get publicationYear() {
    return this._publicationYear;
  }
  set title(year) {
    if (typeof year === "number" && year > 0) {
      this._publicationYear = year;
    } else {
      console.error("Invalid publication year must be a positive number");
    }
  }
  get author() {
    return this._author;
  }
  set author(author) {
    if (author instanceof Author) {
      this._author = author;
    } else {
      console.error("Invalid author, must be instance of author class");
    }
  }
  publishBook() {
    if (this._author) {
      this._author.addBook(this); // Ovde ja zemame od dole add book metodata vo klasata Author
    }
  }
}

class Author {
  constructor(name) {
    this._name = name;
    this._books = [];
  }
  get name() {
    return this._name;
  }
  set name(name) {
    if (typeof name === "string" && name.trim() !== "") {
      this._name = name;
    } else {
      console.error("Invalid name, must be a non empty string");
    }
  }

  get books() {
    return this._books.sort((a, b) => a.publicationYear - b.publicationYear);
  }

  addBook(book) {
    if (book instanceof Book) {
      this._books.push(book);
    } else {
      console.error("Invalid book. Must be an instance of Book class");
    }
  }

  publishNewBook(title, publicationYear) {
    const newBook = new Book(title, publicationYear, this); // this referencira na author klasata
    this.addBook(newBook);
  }

  publishNewEbook(title, publicationYear, fileFormat) {
    const newEbook = new Ebook(title, publicationYear, this, fileFormat);
    this.addBook() = newEbook;
  }
}

class Ebook extends Book {
  constructor(title, publicationYear, author, fileFormat) {
    super(title, publicationYear, author);
    this._fileFormat = fileFormat;
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(format) {
    const validFormats = ["PDF", "EPUB", "DOCX"];
    if (validFormats.includes(format.toUppercase())) {
      this._fileFormat = format.toUppercase();
    } else {
      console.error(
        `Invalid format. Allowed formats ${validFormats.join(",")}`
      );
    }
  }

  publishBook() {
    if (this._author) {
      this._author.books.addBook(this);
      console.log(`Ebook ${this._title} has been added digitally`);
    } else {
      console.error("Cannot publish ebook without an author");
    }
  }
}

const author1 = new Author("Alexander Dumas");
console.log(author1);

author1.publishNewBook("The Shitting and Pooping", 2025);
author1.publishNewBook("The Shit on the Train", 2020);
author1.publishNewEbook("Pissie Shitties", 2020, "pdf");
