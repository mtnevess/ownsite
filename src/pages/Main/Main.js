import React, { Component } from 'react';
import perfil from '../../assets/img/perfil.jpg';
import instagramIcon from '../../assets/img/instagramIcon.png';
import facebookIcon from '../../assets/img/facebookIcon.png';
import linkedinIcon from '../../assets/img/linkedinIcon.png';
import githubIcon from '../../assets/img/githubIcon.png';
import lolIcon from '../../assets/img/leagueoflegendsIcon.png';
import steamIcon from '../../assets/img/steamIcon.png';
import psnIcon from '../../assets/img/psnIcon.png';
import malIcon from '../../assets/img/malIcon.png';
import './Main.css';

export class Main extends Component {
    render() {
        return (
            <div>
            <center>
                <img src={perfil} className="imgPerfil" height="250px" width="250px"/> <br />
                <span className="nomePerfil">Matheus Neves</span>
                <br />
                <span className="contentPerfil">
                Student, 19, Unicamp - Computer Engineering <br />
                Interests: Economics, Financial Markets, Data Science <br />
                A small page on the internet to share thoughts and ideias. <br />
                Find me: <br />    
                <div class="socialIcons">
                <div style={{width:"60px",height:"60px"}}><img src={facebookIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={instagramIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={linkedinIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={githubIcon} className="icon" width="50px" height="50px"/></div>
                </div>
                Personal:
                <div class="socialIcons">
                <div style={{width:"60px",height:"60px"}}><img src={lolIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={steamIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={psnIcon} className="icon" width="50px" height="50px"/></div>
                <div style={{width:"60px",height:"60px"}}><img src={malIcon} className="icon" width="50px" height="50px"/></div>
                </div>
                Topics: <br />
                <div className="topicSection">
                    <div className="topicBox"> abc </div>
                    <div className="topicBox">Economics</div>
                    <div className="topicBox">Financial Markets</div>
                    <div className="topicBox">Thoughts</div>
                    <div className="topicBox">Quotes</div>
                    <div className="topicBox">Top Movies</div>
                    <div className="topicBox">Top Anime</div>
                    <div className="topicBox">Books</div>
                    <div className="topicBox">Games</div>
                    <div className="topicBox">Songs</div>
                </div>
                </span>    
            </center>
            </div>
        )
    }
}

export default Main
