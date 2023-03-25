import React, { useContext, useEffect } from "react";
import RowDestreza from "./RowDestreza";
import { DestrezaContext } from "../../contexts/destrezaContext";

const TableDestreza = () => {
  const { destrezasList, obtenerDestrezas } = useContext(DestrezaContext);

  useEffect(() => {
    obtenerDestrezas();
    // eslint-disable-next-line
  }, []);

  if (destrezasList.length === 0)
    return (
      <center>
        <p>No existen destrezas.</p>
      </center>
    );

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Descripcion Destreza</th>
          </tr>
        </thead>
        <tbody>
          {destrezasList.map((destreza) => (
            <RowDestreza destreza={destreza} key={destreza.idDestreza} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableDestreza;
