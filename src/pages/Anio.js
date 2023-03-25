import React from "react";
import Layout from "../components/commons/Layout";
import TableAnio from "../components/anio/TableAnio";
import ToolbarAnio from "../components/anio/ToolbarAnio";
import Modal from "../components/commons/Modal";
import FormAnio from "../components/anio/FormAnio";
import { AnioContextProvider } from "../contexts/anioContext";

const Anio = () => {
  return (
    <Layout>
      <AnioContextProvider>
        <div className="panel">
          <div className="panel-heading">Año</div>
          <div className="box">
            <ToolbarAnio />
            <TableAnio />
          </div>
        </div>

        <Modal>
          <FormAnio />
        </Modal>
      </AnioContextProvider>
    </Layout>
  );
};

export default Anio;
