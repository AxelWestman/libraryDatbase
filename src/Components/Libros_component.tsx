import React, { useState, useEffect } from "react";
/*import Api from "../services/index";*/
import { Libross }  from "../interfaces/libros";

const Libros_component = () => {
  const [books, setBooks] = useState<Libross[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3000/api/v1/books");
      const data = await response.json();
      setBooks(data);
    };

    fetchData();
  }, []);

  return (
    <>
      <ul className="flex flex-wrap items-center justify-center gap-8 border mt-5 h-auto">
        {books.map((book) => (
          <li key={book.id} className="w-72 h-4/5 border-red-600 flex flex-col justify-center items-center">
            <div className="w-full flex justify-center h-80">
            <img src={book.imagen_url} className="object-cover"></img>
            </div>
            <div className="w-56">
              <h1 className="text-2xl ml-2">{book.titulo}</h1>
              <h2 className="text-lg ml-2">Autor: {book.autor}</h2>
              <h2 className="text-lg ml-2">Año de publicación: {book.anio_publicacion}</h2>
              <p className="ml-2">Genero: {book.genero}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Libros_component;