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
      <ul className=" max-w-[1500px] border border-green-500 flex flex-wrap items-center justify-center gap-2 mt-5 ">
        {books.map((book) => (
          <li key={book.id} className="w-72 md:w-auto md:h-auto flex flex-col md:flex-row justify-center items-center">
            <div className="flex justify-center h-auto">
            <img src={book.imagen_url} className=" w-72 md:h-[160px] md:w-[112px]"></img>
            </div>
            <div className="w-72 md:w-80 md:h-[160px] bg-zinc-200">
              <h1 className="text-xl ml-2 font-bold">{book.titulo}</h1>
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