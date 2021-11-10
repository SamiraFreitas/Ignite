import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { useState } from 'react';
import Modal from 'react-modal'
import { GlobalStyle } from './styles/global';
Modal.setAppElement('#root');
export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }


    function handleCloserNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>

      <Modal 
      isOpen={isNewTransactionModalOpen} 
      onRequestClose={handleCloserNewTransactionModal}
      >
       <h2>Cadastrar Transação</h2>
       </Modal>
      <GlobalStyle/>
    </>
  );
}


