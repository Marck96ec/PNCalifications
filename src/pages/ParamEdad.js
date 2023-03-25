import React from "react";
import Layout from "../components/commons/Layout";
import TableEdad from "../components/paramedad/TableEdad";
import ToolbarEdad from "../components/paramedad/ToolbarEdad";
import Modal from "../components/commons/Modal";
import FormEdad from "../components/paramedad/FormEdad";
import { EdadContextProvider } from "../contexts/edadContext";

const ParamEdad = () => {
  return (
    <Layout>
      <EdadContextProvider>
        <div className="panel">
          <div className="panel-heading">Edad</div>
          <div className="box">
            <ToolbarEdad />
            <TableEdad />
          </div>
        </div>

        <Modal>
          <FormEdad />
        </Modal>
      </EdadContextProvider>
    </Layout>
  );
};

export default ParamEdad;
