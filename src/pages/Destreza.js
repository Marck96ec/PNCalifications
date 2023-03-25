import React from "react";
import Layout from "../components/commons/Layout";
import TableDestreza from "../components/destreza/TableDestreza";
import ToolbarDestreza from "../components/destreza/ToolbarDestreza";
import Modal from "../components/commons/Modal";
import FormDestreza from "../components/destreza/FormDestreza";
import { DestrezaContextProvider } from "../contexts/destrezaContext";

const Clientes = () => {
  return (
    <Layout>
      <DestrezaContextProvider>
        <div className="panel">
          <div className="panel-heading">Destreza</div>
          <div className="box">
            <ToolbarDestreza />
            <TableDestreza />
          </div>
        </div>

        <Modal>
          <FormDestreza />
        </Modal>
      </DestrezaContextProvider>
    </Layout>
  );
};

export default Clientes;
