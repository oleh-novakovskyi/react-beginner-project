import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Categories from "./components/Categories";
import ShowFullProduct from "./components/ShowFullProduct";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: [],
      currentProducts: [],
      products: [
        {
          id: 1,
          title: "Блюголд",
          img: "01.png",
          desc: "Ягоди лохини цього популярного сорту світло-сині, з щільною ароматною м’якоттю.Та й самі кущики пишні і красиві, тому стануть чудовою прикрасою будь-якого саду. ",
          category: "middle",
          price: "100",
        },
        {
          id: 2,
          title: "Блюкроп",
          img: "02.png",
          desc: "Цей середньостиглий американський сорт лохини був виведений понад півстоліття тому. Ягоди світло-сині, великі з пружною м’якоттю. Їх легко можна впізнати за характерною плескатою формою.",
          category: "middle",
          price: "120",
        },
        {
          id: 3,
          title: "Еліот",
          img: "03.png",
          desc: "Елліот, або пізнь остиглий старожил плантацій. Кущ високорослий – від 1.5 м до 2 м дорослі кущі, пряморослий, гілки вертикально-спрямовані. Досить густий, щільний, помірно розлогий кущ – вимагає частого і сильного підрізування для отримання більшої продуктивності, більшого розміру і кращої якості ягід.",
          category: "small",
          price: "90",
        },
        {
          id: 4,
          title: "Спа рта н",
          img: "04.png",
          desc: "Один з  ранніх – дозріває в липні, один з великих – вага до 2 г. Радує Спартан і врожайністю – до 6 кг з куща. Цвіте пізно, що зменшує ризик потрапляння під повторні пізні заморозки.",
          category: "small",
          price: "80",
        },
        {
          id: 5,
          title: "Блюджей",
          img: "05.png",
          desc: "Урожайність 3.6-6 кг / з куща. Цвітіння на початку-середині травня, дозріває в середині липня-початку серпня, мало не одночасно з Блюкроп. До 70% в перший збір, інші – в другий, плодоносить протягом 2-3 тижнів. Можливість механізованого збирання робить сорт особливо привабливим для малого і середнього агробізнесу.",
          category: "large",
          price: "150",
        },
        {
          id: 6,
          title: "Дюк",
          img: "06.png",
          desc: "Цей сорт надзвичайно популярний у себе на батьківщині в Америці. І це не дивно: рослини стійкі до морозів, стабільно дають високий урожай. Кущам Дюка не страшні весняні заморозки, тому що вони пізно зацвітають, зате п лоди дають досить рано – вже в середині липня.",
          category: "middle",
          price: "160",
        },
        {
          id: 7,
          title: "Бригіта Блю",
          img: "07.png",
          desc: "Плоди у лохини сорту Бригіта Блю мають високі товарні якості. Вони великі до 15 мм, світлого синьо-блакитного кольору, міцні (добре зберігаються), транспортабельні, після дозрівання не обсипаються. Сорт пізнього терміну дозрівання (з середини серпня, ягоди достигають рівномірно), плоди міцні, середнього розміру, кисло-солодкого смаку, врожайність 4 – 6 кг з куща.",
          category: "small",
          price: "115",
        },
        {
          id: 8,
          title: "Торо",
          img: "08.png",
          desc: "Кущ Торо має прекрасний декоративний вигляд. Ягода дозріває в кінці липня-початку серпня. Урожайність висока. Урожай збирається в 2 збори.",
          category: "middle",
          price: "125",
        },
        {
          id: 9,
          title: "Патріот",
          img: "09.png",
          desc: "Кущі цього сорту відмінно почувають себе в ґрунті будь-якого типу, хоча найбільше люблять важкі, добре зволожені ґрунти. А ще вони чудово зимують, не бояться фітофторозу стебел.",
          category: "middle",
          price: "145",
        },
        {
          id: 10,
          title: "Атлантис",
          img: "10.png",
          desc: "Велика, щільна ягода, діаметром 18-20 мм, зі світлою м’якоттю і винно-солодким смаком.  Дозріває в кінці липня – середині серпня. Плодоносити починає на 3 рік. Врожайність досягає 10 кг з куща. ",
          category: "large",
          price: "165",
        },
      ],
      showFullProduct: false,
      fullProduct: {}
    };
    this.state.currentProducts = this.state.products;
    this.addToOrder = this.addToOrder.bind(this);
    this.deleteOrder = this.deleteOrder.bind(this);
    this.chooseCategory = this.chooseCategory.bind(this);
    this.onShowProduct = this.onShowProduct.bind(this);
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Products onShowProduct={this.onShowProduct} products={this.state.currentProducts} onAdd={this.addToOrder} />
        <Footer />
        {this.state.showFullProduct && <ShowFullProduct onShowProduct={this.onShowProduct} product={this.state.fullProduct} onAdd={this.addToOrder} />}
      </div>
    );
  }

  onShowProduct(product) {
    this.setState({fullProduct: product});
    this.setState({showFullProduct: !this.state.showFullProduct});
  }
  chooseCategory(category) {
    if(category === 'all'){
      this.setState({currentProducts: this.state.products});
      return
    }
    this.setState({
      currentProducts: this.state.products.filter(el => el.category === category)
    })
  }

  deleteOrder(id){
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }
  addToOrder(product) {
    let isInArray = false;
    this.state.orders.forEach(el => {
      if(el.id === product.id) 
        isInArray = true;
    })
    if(!isInArray)
    this.setState({ orders: [...this.state.orders, product] });
  }
}

export default App;
