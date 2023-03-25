import React, { useContext, useEffect } from "react";
import RowEdad from "./RowEdad";
import { EdadContext } from "../../contexts/edadContext";

const TableEdad = () => {
  const { edadesList, obtenerEdades } = useContext(EdadContext);

  useEffect(() => {
    obtenerEdades();
    // eslint-disable-next-line
  }, []);

  if (edadesList.length === 0)
    return (
      <center>
        <p>No existen edades.</p>
      </center>
    );

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Edad Min</th>
            <th>Edad Max</th>
          </tr>
        </thead>
        <tbody>
          {edadesList.map((edad) => (
            <RowEdad edad={edad} key={edad.TABLAID} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableEdad;
