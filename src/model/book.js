class Book {
    constructor(title, author, isbn, category, yop) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.category = category;
        this.yop = yop;
    }
    compareByTitle(secondBook){
        const myTitle = this.title;
        const yourTitle = secondBook.title;
        return myTitle.localeCompare(yourTitle);
    }

    compareByAuthor(secondBook){
        const myAuthor = this.author;
        const yourAuthor = secondBook.author;
        return myAuthor.localeCompare(yourAuthor);
    }

    compareByCategory(secondBook){
        const myCategory = this.category;
        const yourCategory = secondBook.category;
        return myCategory.localeCompare(yourCategory);
    }

    compareByYop(secondBook){
        const myYop= this.yop;
        const yourYop = secondBook.yop;
        return myYop.localeCompare(yourYop);
    }

    
}

export default Book;