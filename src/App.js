import React, {Component} from 'react';
import Header from './components/header';
import Projects from './components/projects';
import Button from './components/button';
import Mision from './components/mision';
import Footer from './components/footer';
import ModalContainer from './components/modalContainer';
import Modal from './components/modal';

class App extends Component {
  state = {
    modalVisible:false
  }
  openModal = () => {
    this.setState({
      modalVisible:true
    })
  }
  closeModal = () => {
    this.setState({
      modalVisible:false
    })
  }

  
  render() {
    var visits;
    if (localStorage.getItem("visits") === null) {
      localStorage.setItem("visits", 3885);
      visits = Number(localStorage.getItem("visits"))
    } else {
      visits = Number(localStorage.getItem("visits")) + 1;
      localStorage.setItem("visits", visits);
    }
    
    return (
      <div>
        <Header visits={visits}/>
        <Projects/>
        <Button openModal={this.openModal}/>
        <Mision/>
        <Footer/>
        {
          this.state.modalVisible &&
          <ModalContainer>
            <Modal closeModal={this.closeModal}>

            </Modal>
          </ModalContainer>
        }
      </div>
    );
  }
}

export default App;
