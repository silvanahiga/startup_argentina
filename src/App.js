import React from 'react';
import './App.css';
import Filter from "./components/Filter";
import Card from "./components/Card";


class App extends React.Component {
  constructor(props) {
    super(props);

    ////dejamos guardado al info en una variable
    const data = [
      { id: 1, name: "Changa", description: "Somos una marca de zapatos de cuero", img: "https://corteszapaterias.com/archivos/secciones/zapatos-verano-2019.jpg" },
      { id: 2, name: "Publica.la", description: "Con publica.la podras:", img: "https://s3.amazonaws.com/tinycards/image/472c7710cec29ff735abe6983757f32d" },
      { id: 3, name: "Lution Bot", description: "Somos una startup orientada en la creacion de", img: "https://media.wired.com/photos/5b6df22751297c21002b4536/master/w_2560%2Cc_limit/HackerBot.jpg" },
      { id: 4, name: "Tan Intensa", description: " Somos una empresa de indumentaria y accesorios", img: "https://laopinionla.files.wordpress.com/2018/08/81pxzh6pal-_sx522_3.jpg?quality=80&strip=all&w=940" },

    ];

    this.state = {
      input: "",
      companies: data, //aca muestra el array original
      filteredCompanies: data, //aca se guarda el array filtrado


    }
  }


  handleCallback(val) {
    console.log(val)

    const filteredCompanies = this.state.companies.filter((company) => {
      if (company.name.indexOf(val) > -1) {
        return company
      }
    })
    this.setState({
      filteredCompanies: filteredCompanies
    })


  }

  render() {
    return (

      <div className="App">
        <div className="header">
          <h3>STARTUP ARGENTINA</h3>

          <Filter dataInput={(data) => this.handleCallback(data)} />
          <a>agregar startup </a>
        </div>

        <div className="box">

          {this.state.filteredCompanies.map((company, key) => {

            return (
              <Card key={key} name={company.name} description={company.description} image={company.img} />

            )
          })
          }

        </div>
      </div>
    );


  }
}

export default App;
