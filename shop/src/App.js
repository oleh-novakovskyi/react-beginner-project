import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Products from "./components/Products";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
        id: 1,
        title: 'Лохина Блюголд (Bluegold)',
        img: '350x350.jpg',
        desc: 'Ягоди лохини цього популярного сорту світло-сині, з щільною ароматною м’якоттю.Та й самі кущики пишні і красиві, тому стануть чудовою прикрасою будь-якого саду. ',
        category: 'medium',
        price: '100',        
      },
      {
        id: 2,
        title: 'Лохина Блюкроп',
        img: '350x350.jpg',
        desc: 'Цей середньостиглий американський сорт лохини був виведений понад півстоліття тому. Ягоди світло-сині, великі з пружною м’якоттю. Їх легко можна впізнати за характерною плескатою формою.',
        category: 'medium',
        price: '120',
      },
      {
        id: 3,
        title: 'Лохина Еліот',
        img: '350x350.jpg',
        desc: 'Лохина Елліот, або пізнь остиглий старожил плантацій. Кущ високорослий – від 1.5 м до 2 м дорослі кущі, пряморослий, гілки вертикально-спрямовані. Досить густий, щільний, помірно розлогий кущ – вимагає частого і сильного підрізування для отримання більшої продуктивності, більшого розміру і кращої якості ягід.',
        category: 'small',
        price: '90',
      },
      {
        id: 4,
        title: 'Спа рта н',
        img: '350x350.jpg',
        desc: 'Один з  ранніх – дозріває в липні, один з великих – вага до 2 г. Радує лохина Спартан і врожайністю – до 6 кг з куща. Цвіте пізно, що зменшує ризик потрапляння під повторні пізні заморозки.',
        category: 'small',
        price: '80',
      },
      {
        id: 5,
        title: 'Блюджей',
        img: '350x350.jpg',
        desc: 'Урожайність 3.6-6 кг / з куща. Цвітіння на початку-середині травня, дозріває в середині липня-початку серпня, мало не одночасно з Блюкроп. До 70% в перший збір, інші – в другий, плодоносить протягом 2-3 тижнів. Можливість механізованого збирання робить сорт особливо привабливим для малого і середнього агробізнесу.',
        category: 'large',
        price: '150',
      },
      {
        id: 6,
        title: 'Лохина Дюк',
        img: '350x350.jpg',
        desc: 'Цей сорт надзвичайно популярний у себе на батьківщині в Америці. І це не дивно: рослини стійкі до морозів, стабільно дають високий урожай. Кущам Дюка не страшні весняні заморозки, тому що вони пізно зацвітають, зате п лоди дають досить рано – вже в середині липня.',
        category: 'medium',
        price: '160',
      },
      {
        id: 7,
        title: 'Бригіта Блю',
        img: '350x350.jpg',
        desc: 'Плоди у лохини сорту Бригіта Блю мають високі товарні якості. Вони великі до 15 мм, світлого синьо-блакитного кольору, міцні (добре зберігаються), транспортабельні, після дозрівання не обсипаються. Сорт пізнього терміну дозрівання (з середини серпня, ягоди достигають рівномірно), плоди міцні, середнього розміру, кисло-солодкого смаку, врожайність 4 – 6 кг з куща.',
        category: 'small',
        price: '115',
      },
      {
        id: 8,
        title: 'Лохина Торо',
        img: '350x350.jpg',
        desc: 'Кущ Торо має прекрасний декоративний вигляд. Ягода дозріває в кінці липня-початку серпня. Урожайність висока. Урожай збирається в 2 збори.',
        category: 'medium',
        price: '125',
      },
      {
        id: 9,
        title: 'Патріот',
        img: '350x350.jpg',
        desc: 'Кущі цього сорту відмінно почувають себе в ґрунті будь-якого типу, хоча найбільше люблять важкі, добре зволожені ґрунти. А ще вони чудово зимують, не бояться фітофторозу стебел.',
        category: 'medium',
        price: '145',
      },
      {
        id: 10,
        title: 'Атлантис',
        img: '350x350.jpg',
        desc: 'Велика, щільна ягода, діаметром 18-20 мм, зі світлою м’якоттю і винно-солодким смаком.  Дозріває в кінці липня – середині серпня. Плодоносити починає на 3 рік. Врожайність досягає 10 кг з куща. ',
        category: 'large',
        price: '165',
      },
      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Products products={this.state.products} />
        <Footer />
      </div>
    );
  }
}

export default App;
