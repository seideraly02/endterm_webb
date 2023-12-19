import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      items: [
        {
          id: 1,
          title: "Стул",
          img: "nar.jpeg",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
        {
          id: 2,
          title: "Кресло",
          img: "naruto-vs-sasuke.avif",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
        {
          id: 3,
          title: "Sasuke",
          img: "sasuke.png",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
        {
          id: 4,
          title: "Sasuke",
          img: "lis.jpeg",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
        {
          id: 5,
          title: "мы",
          img: "мы.webp",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
        {
          id: 6,
          title: "vs",
          img: "vs.jpeg",
          desc: "loream ipsum dolor sit, consecteur adisicing",
          category: "chairs",
        },
      ]
    };
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
  }

  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Items items={this.state.items} onAdd={this.addToOrder} />
        <Footer />
      </div>
    );
  }

  deleteOrder(id) {
   this.setState({orders: this.state.orders.filter(el => el.id !==id)})
  }

  addToOrder(item) {
    const isInArray = this.state.orders.some((el) => el.id === item.id);
    if (!isInArray) {
      this.setState((prevState) => ({
        orders: [...prevState.orders, item]
      }));
    }
  }
}

export default App;