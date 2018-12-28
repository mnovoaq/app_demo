//Dependecies
import React, { Component } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//Assets
import "materialize-css/dist/css/materialize.min.css";

//Components
class Sidebar extends Component {

    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    static propTypes = {
      title: PropTypes.string.isRequired,
      items: PropTypes.array.isRequired
    };

    render() {
        const { title, items } = this.props;
        return (
            <div>
                <ul id="slide-out" className="sidenav ">
                {
                  items && items.map((item, key) => <li key={key}><Link to={item.url}>{item.title}</Link></li>
                  )
                }
                </ul>

                <a href="#" data-target="slide-out" className="sidenav-trigger">
                    <i className="material-icons">menu</i>
                </a>
            </div>
        );
    }
}

export default Sidebar;
