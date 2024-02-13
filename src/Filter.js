import React from 'react'

export default function Filter() {
    const [filters, setFilters] = useState({
        name: '',
        author: '',
        Category: '',
        publish_date: ''
      });
      const [books, setBooks] = useState([]);
      useEffect(() => {
        fetch('db.json')
          .then((response) => response.json())
          .then((data) => setBooks(data));
      }, []);
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
      };
      const filteredBooks = books.filter((book) => {
        return (
          book.name.toLowerCase().includes(filters.name.toLowerCase()) &&
          book.author.toLowerCase().includes(filters.author.toLowerCase()) &&
          book.Category.toLowerCase().includes(filters.category.toLowerCase()) &&
          book.publish_date.includes(filters.publish_date)
        );
      });
  return (
   
    <div>
        <div>
  <label>Name:</label>
  <input type="text" name="name" value={filters.name} onChange={handleInputChange} />
</div>
<div>
  <label>Author:</label>
  <input type="text" name="author" value={filters.author} onChange={handleInputChange} />
</div>
<div>
  <label>Category:</label>
  <input type="text" name="category" value={filters.category} onChange={handleInputChange} />
</div>
<div>
  <label>Publish Date:</label>
  <input type="text" name="publish_date" value={filters.publish_date} onChange={handleInputChange} />
</div>
        <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Author</th>
      <th>Category</th>
      <th>Publish Date</th>
    </tr>
  </thead>
  <tbody>
    {filteredBooks.map((book) => (
      <tr key={book.id}>
        <td>{book.name}</td>
        <td>{book.author}</td>
        <td>{book.category}</td>
        <td>{book.publish_date}</td>
      </tr>
    ))}
  </tbody>
</table>
      
    </div>
  )
}
