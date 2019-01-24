import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Url from 'url-parse';
import Navigation from './components/Navigation.jsx';
import CardDisplay from './components/CardDisplay.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: {},
      cardLinks: [],
      activeCard: {},
      activeCardPosition: '0',
      isCollapsed: true
    }
    
    this.getMenu = this.getMenu.bind(this);
    this.storeMenu = this.storeMenu.bind(this);
    this.switchCard = this.switchCard.bind(this);
    this.toggleCollapse = this.toggleCollapse.bind(this);
  }
  
  componentDidMount() {
    let url = new Url(window.location.href);
    let id = url.pathname.split('/')[2];
    this.getMenu(id);
  }

  getMenu(id) {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3003/api/restaurants/${id}/menu`,
      success: this.storeMenu
    })
  }

  storeMenu(menu) {
    let cardLinks = menu.cards.map((card, i) => {
      return {
        name: card.name,
        position: i
      }
    });
    let activeCard = menu.cards[0];
    
    this.setState({ menu, cardLinks, activeCard });
  }
  
  switchCard(position) {
    let activeCard = this.state.menu.cards[position];
    this.setState({activeCard, activeCardPosition: position});
  }

  toggleCollapse() {
    this.setState({isCollapsed: !this.state.isCollapsed});
  }

  render() { 
    return ( 
      <div>
        <h1 id="menu-title">Menu</h1>
        <Navigation cardLinks={this.state.cardLinks} activeCardPosition={this.state.activeCardPosition} switchCard={this.switchCard}/>
        {this.state.activeCard.sections ? (<CardDisplay card={this.state.activeCard} isCollapsed={this.state.isCollapsed}/>) : (null)}
        <div id="menu-button-wrapper">
          {this.state.isCollapsed ? (
            <button className="menu-expand" onClick={this.toggleCollapse}>View full menu</button>
          ) : (
            <button className="menu-collapse" onClick={this.toggleCollapse}>Collapse menu</button>
          )}
        </div>
      </div>
     );
  }
}

ReactDOM.render(<App />, document.getElementById('menu-app'));

export default App;
