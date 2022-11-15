// import logo from './logo.svg';
// import './App.css';

import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Sepatu from './images/sepatu.jpg'
import './App.css'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Judul(props) {
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home" className='ms-auto'>Kidyoo Store</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Kartu(props) {
  return (
    <>
      <div className='card mx-auto mt-5'>
        <img src={Sepatu} className='card-img-top' />
        <div className='card-body'>
          <h6 className='card-title'>{props.namabarang}</h6>
          <p className='text-danger'>IDR {props.harga}</p>
          <hr />
        </div>
      </div>
    </>
  );
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nama: 'Rudio',
      namabarang: 'Sepatu Aerostreet Massive Low Hitam Putih',
      harga: 129900,
      jumlah: 0,
      total: 0
    }
  }



  tambah = () => {
    this.setState({

      jumlah: this.state.jumlah + 1,
      total: this.state.harga * (this.state.jumlah + 1)

    })
  }

  kurang = () => {
    if (this.state.jumlah > 0) {
      this.setState({

        jumlah: this.state.jumlah - 1,
        total: this.state.harga * (this.state.jumlah - 1)

      })

    }

  }

  render() {
    return (
      <>
        <Judul />
        <Kartu namabarang={this.state.namabarang} harga={this.state.harga} />
        <div className='card mx-auto mt-2 p-3'>
          <div className='row'>
            <div className='col-4 text-center'><button className='btn btn-success text-light' onClick={this.kurang}>-</button></div>
            <div className='col-4 text-center'><h3>{this.state.jumlah}</h3></div>
            <div className='col-4 text-center'><button className='btn btn-success text-light' onClick={this.tambah}>+</button></div>
          </div>

          <hr />

          <div>IDR : Rp {this.state.total}</div>
        </div>
      </>
    );
  }
}







// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nama: 'RPL',
//       jumlah: 0
//     }
//   }

//   tambah = () => {
//     this.setState({ jumlah: this.state.jumlah + 1 })
//   }

//   kurang = () => {
//     if (this.state.jumlah > 0) {
//       this.setState({ jumlah: this.state.jumlah - 1 })
//     }

//   }

//   render() {
//     return (
//       <>
//         <h1>{this.state.jumlah}</h1>
//         <button onClick={this.kurang}>-</button>
//         <button onClick={this.tambah}>+</button>
//       </>
//     );
//   }
// }

export default App;