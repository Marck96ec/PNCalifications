import React, { useContext, useEffect } from "react";
import RowAnio from "./RowAnio";
import { AnioContext } from "../../contexts/anioContext";

const TableAnio = () => {
  const { aniosList, obtenerAnios } = useContext(AnioContext);

  useEffect(() => {
    obtenerAnios();
    // eslint-disable-next-line
  }, []);

  if (aniosList.length === 0)
    return (
      <center>
        <p>No existen años.</p>
      </center>
    );

  return (
    <div className="table-container">
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Acciones</th>
            <th>Descripcion</th>
            <th>Nota Minima</th>
          </tr>
        </thead>
        <tbody>
          {aniosList.map((anio) => (
            <RowAnio anio={anio} key={anio.idanio} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableAnio;
