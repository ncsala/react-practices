import React from "react";

export default class Home extends React.Component {

  // CONSTRUCTOR Solo si queremos usar estado local
  // constructor (props) {
  //   super(props)
  //   this.state = {
  //     name: '',
  //     lastName: '',
  //   }
  // }

  render() {
    return (
      <div>
        HOME {this.props.name} {this.props.age}
      </div>
    )
  }
}



// COMPARACION ENTRE COMPONENTE DE FUNCION Y COMPONENTE DE CLASE
// export default function Home({ name, age }) {

//   const [input, setInput] = React.useState({name: '', lastName:''});

//   return (
//     <div>
//       HOME {name} {age}
//     </div>
//   )
// }
