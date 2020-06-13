  import React, { Component } from 'react';
import './Automobile.scss';
import sn from '../../static/images/sn.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import home from '../../static/images/home.png';
import $ from 'jquery';
import imageyaris from '../../static/images/imageyaris.jpg';
import logo from '../../static/images/logo.png';
import maq1 from '../../static/images/maq1.png';
import mrq2 from '../../static/images/mrq2.png';
import mrq3 from '../../static/images/mrq3.png';
import mrq4 from '../../static/images/mrq4.png';
import mrq5 from '../../static/images/mrq5.png';
import mrq6 from '../../static/images/mrq6.png';
import mrq7 from '../../static/images/mrq7.png';
import mrq8 from '../../static/images/mrq8.png';
import mrq9 from '../../static/images/mrq9.png';
import mrq10 from '../../static/images/mrq10.png';
import mrq11 from '../../static/images/mrq11.png';
import mrq12 from '../../static/images/mrq12.png';
import voiture1 from '../../static/images/voiture1.png';
import voiture2 from '../../static/images/voiture2.png';
import voiture3 from '../../static/images/voiture3.png';
import voiture4 from '../../static/images/voiture4.png';
import voiture5 from '../../static/images/voiture5.png';
import voiture6 from '../../static/images/voiture6.png';
import axios from 'axios';


class Automobile extends Component {
  //host = "http://localhost/backend-birawam-slim/index.php/";
  host = "http://web-biramawa.com/backend-birawam-slim/index.php/"

  voitures = [
    {
      id:1,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture 1',
      description: 'description de la voiture',
      prix: '2052132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:2,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture ',
      description: 'description de la voiture',
      prix: '3002132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:3,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture 3',
      description: 'description de la voiture',
      prix: '3102132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:4,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture ',
      description: 'description de la voiture',
      prix: '3202132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:5,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture  5',
      description: 'description de la voiture',
      prix: '4002132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:6,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture 6',
      description: 'description de la voiture',
      prix: '4002132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    },
    {
      id:7,
      Marque: "m",
      Model:'mo',
      Annee:'1996',
      Kilometrage: '1525',
      carburant:"4244",
      boiteVitesse:'sdfsd',
      nom: 'voiture 7',
      description: 'description de la voiture',
      prix: '4002132455',
      image: {
        v1:voiture1,
        v2:voiture2,
        v3:voiture3,
        v4:voiture4,
        v5:voiture5,
        v6:voiture6
      }
    }
  ]

  selectedVoiture = {
    id:7,
    Marque: "m",
    Model:'mo',
    Annee:'1996',
    Kilometrage: '1525',
    carburant:"4244",
    boiteVitesse:'sdfsd',
    nom: 'voiture 7',
    description: 'description de la voiture',
    prix: '4002132455',
    image: {
      v1:voiture1,
      v2:voiture2,
      v3:voiture3,
      v4:voiture4,
      v5:voiture5,
      v6:voiture6
    }
  }

  selectedImg = voiture1;

  voituresIndex  = 0;

  voitureSelected = {}


  voituresShowNext (){
    let src = "";
    let voituresEls = document.querySelectorAll(".unevoiture");

    console.log(this.voituresIndex)

    if(this.voituresIndex==0){

      src = (this.voitures)[0].image.v1;
      voituresEls[0].querySelector(".voitureImg").src = src;

      src = (this.voitures)[1].image.v1;
      voituresEls[1].querySelector(".voitureImg").src = src;

      src = (this.voitures)[2].image.v1;
      voituresEls[2].querySelector(".voitureImg").src = src;

      src = (this.voitures)[3].image.v1;
      voituresEls[3].querySelector(".voitureImg").src = src;

      src = (this.voitures)[4].image.v1;
      voituresEls[4].querySelector(".voitureImg").src = src;

      src = (this.voitures)[5].image.v1;
      voituresEls[5].querySelector(".voitureImg").src = src;

      this.voituresIndex+=5
    }else{
      if((this.voituresIndex +  1) < this.voitures.length){
        src = (this.voitures)[this.voituresIndex -4].image.v1;
        voituresEls[0].querySelector(".voitureImg").src = src;

        src = (this.voitures)[this.voituresIndex -3].image.v1;
        voituresEls[1].querySelector(".voitureImg").src = src;

        src = (this.voitures)[this.voituresIndex -2].image.v1;
        voituresEls[2].querySelector(".voitureImg").src = src;

        src = (this.voitures)[this.voituresIndex -1].image.v1;
        voituresEls[3].querySelector(".voitureImg").src = src;

        src = (this.voitures)[this.voituresIndex].image.v1;
        voituresEls[4].querySelector(".voitureImg").src = src;


        this.voituresIndex++;
        src = (this.voitures)[this.voituresIndex].image.v1;
        voituresEls[5].querySelector(".voitureImg").src = src;

      }

    }

  }

  voituresShowPlus (){
    if((this.state.indexCarEnd+3) < this.state.voitures.length + 3){
      let index = this.state.indexCarEnd+3;
      this.setState({indexCarEnd:index})
    }else{
      let index = this.state.voitures.length;
      this.setState({indexCarEnd:index})
    }
  }

   showmenu(){
     if(this.state.menuStatut=='none'){
       document.getElementById("m").style.display = this.state.menuStatut;
       document.getElementById("triangle").style.display = this.state.menuStatut;
       this.setState({menuStatut:'block'});
     }else{
       document.getElementById("m").style.display = this.state.menuStatut;
       document.getElementById("triangle").style.display = this.state.menuStatut;
       this.setState({menuStatut:'none'});
     }
  }



  selectMarque(marque){
    console.log(marque);
    this.switchV(2);
    this.getDatasCarsMarque(marque);
  }
    constructor(props){
      super(props);
      this.state = {indexMarqueEnd:6,indexMarqueBeggin:0,date: new Date(),voitures:this.voitures,selectedVoiture:this.selectedVoiture,selectedImg:this.selectedImg,indexCarBeggin:0,indexCarEnd:6,indexCarMobilBeggin:0,indexCarMobilEnd:2,voirplusend:3,marques:[],menuStatut:"none"};
      this.getDatasCars();
      this.getDatasMarques();
      $("document").ready(()=>{
          this.switchV(1);
          //this.voituresShowNext()
          this.showmenu()
            if (window.matchMedia("(max-width: 700px)").matches) {
              /* The viewport is less than, or equal to, 700 pixels wide */
              //(document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block';
              console.log("mobile")
              document.querySelector(".desktop").style.display="none";
              (document.querySelector("#fermermenumobile")).addEventListener('click',function(e){
                  e.preventDefault();
                  (document.querySelector("#mm")).style.display="none";
                  (document.querySelector("#trianglemm")).style.display="none";
              });

              (document.querySelector("#menubars")).addEventListener('click',function(e){
                  e.preventDefault();
                  (document.querySelector("#mm")).style.display="block";
                  (document.querySelector("#trianglemm")).style.display="block";
                  let hmm=$("#mm").innerHeight();

                  document.getElementById("trianglemm").style.position="fixed";

                  document.getElementById("trianglemm").style.top=hmm+"px";
              });


            } else {
              /* The viewport is greater than 700 pixels wide */
              // (document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block';
              console.log("Desktop")
              document.querySelector(".mobile").style.display="none";
            }
          }

      );

    }

    async getDatasCars(){

      let url = this.host + "car/cars";

      const form = new FormData()
      form.set('option', 'all')

        axios({
          url:url,
          method:'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data:form
        }).then(rep=>{
          if(rep.status===200){
            let datas=rep.data;

            this.voitures = [];

            (datas.message).forEach((item, i) => {
              let el  = {};
              let image = {};
               item.image = item.image.split(",");
               el.id = item.id;
               el.Marque = item.marque;
               el.Model = item.model;
               el.Annee = item.annee;
               el.Kilometrage = item.kilometrage;
               el.carburant = item.carburant;
               el.boiteVitesse = item.boiteVitesse;
               el.nom = item.nom;
               el.description = item.description;
               el.prix = item.prix;
               if(item.image.length==1){
                 image.v1 = item.image[0];
                 image.v2 = item.image[0];
                 image.v3 = item.image[0];
                 image.v4 = item.image[0];
                 image.v5 = item.image[0];
                 image.v6 = item.image[0];
                  el.image = image;
               }
               else if(item.image.length==2){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[0];
                 image.v4 = item.image[1];
                 image.v5 = item.image[0];
                 image.v6 = item.image[1];
                  el.image = image;
               }
               else if(item.image.length==3){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[0];
                 image.v5 = item.image[1];
                 image.v6 = item.image[2];
                  el.image = image;
               }
               else if(item.image.length==4){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[0];
                 image.v6 = item.image[1];
                  el.image = image;
               }

               else if(item.image.length==5){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[4];
                 image.v6 = item.image[0];
                  el.image = image;
               }
               else if(item.image.length>=6){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[4];
                 image.v6 = item.image[5];
                 el.image = image;
               }

               this.voitures.push(el);

            });


            console.log(this.voitures);
            this.setState({voitures:this.voitures,selectedVoiture:this.voitures[0]});
          }else
            console.log(rep);
        });

    }

    async getDatasCarsMarque(marque){

      let url = this.host + "car/carsMarque";

      const form = new FormData()
      form.set('marque', marque.nom)

        axios({
          url:url,
          method:'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data:form
        }).then(rep=>{
          if(rep.status===200){
            let datas=rep.data;

            this.voitures = [];

            (datas.message).forEach((item, i) => {
              let el  = {};
              let image = {};
               item.image = item.image.split(",");
               el.id = item.id;
               el.Marque = item.marque;
               el.Model = item.model;
               el.Annee = item.annee;
               el.Kilometrage = item.kilometrage;
               el.carburant = item.carburant;
               el.boiteVitesse = item.boiteVitesse;
               el.nom = item.nom;
               el.description = item.description;
               el.prix = item.prix;
               if(item.image.length==1){
                 image.v1 = item.image[0];
                 image.v2 = item.image[0];
                 image.v3 = item.image[0];
                 image.v4 = item.image[0];
                 image.v5 = item.image[0];
                 image.v6 = item.image[0];
                  el.image = image;
               }
               else if(item.image.length==2){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[0];
                 image.v4 = item.image[1];
                 image.v5 = item.image[0];
                 image.v6 = item.image[1];
                  el.image = image;
               }
               else if(item.image.length==3){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[0];
                 image.v5 = item.image[1];
                 image.v6 = item.image[2];
                  el.image = image;
               }
               else if(item.image.length==4){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[0];
                 image.v6 = item.image[1];
                  el.image = image;
               }

               else if(item.image.length==5){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[4];
                 image.v6 = item.image[0];
                  el.image = image;
               }
               else if(item.image.length>=6){
                 image.v1 = item.image[0];
                 image.v2 = item.image[1];
                 image.v3 = item.image[2];
                 image.v4 = item.image[3];
                 image.v5 = item.image[4];
                 image.v6 = item.image[5];
                 el.image = image;
               }

               this.voitures.push(el);

            });


            console.log(this.voitures);
            this.setState({voitures:this.voitures,selectedVoiture:this.voitures[0]});
          }else
            console.log(rep);
        });

    }

    async getDatasMarques(){

      let url = this.host + "car/marques";

      const form = new FormData()
      form.set('option', 'all')

        axios({
          url:url,
          method:'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data:form
        }).then(rep=>{
          if(rep.status===200){
            let datas=rep.data;




            console.log(datas);
            this.setState({marques:datas.message});
          }else
            console.log(rep);
        });

    }

    switchV(el){
      switch(el){
        case 1:{
          document.getElementById("vev").style.display="block";
          document.getElementById("li1").style.borderBottom="4px solid rgb(255, 208, 48)";

          document.getElementById("vel").style.display="none";
          document.getElementById("li2").style.borderBottom="0px";
          break;
        }
        case 2:{
          document.getElementById("vev").style.display="none";
          document.getElementById("li1").style.borderBottom="0px";

          document.getElementById("vel").style.display="block";
          document.getElementById("li2").style.borderBottom="4px solid rgb(255, 208, 48)";
          break;
        }
      }
    }
    hidePopup(){
      document.getElementById("popup").style.display="none";
    }
    showPopup(el){
      console.log(el)
      document.getElementById("popup").style.display="block";

      this.setState({selectedVoiture:el,selectedImg:el.image.v1});
    }

    changeIamgeSelected(img){

      this.setState({selectedImg:img});
    }

    carplusVoiture (){
      document.getElementById("carhome").style.display="none";
      document.getElementById("carplus").style.display="block";
    }

    carPrevious (){
      document.getElementById("carhome").style.display="block";
      document.getElementById("carplus").style.display="none";
    }

    voirplusDevoiture (){
      console.log("bonjour")
      if((this.state.voirplusend + 3)< this.state.voitures.length){
        let index = this.state.voirplusend + 3;
        this.setState({voirplusend:index});
      }else{
        let index = this.state.voirplusend;
        this.setState({voirplusend:index});
      }
    }

    displayVev = () =>{
      if (this.state.voitures) {
        return  this.state.voitures.slice(this.state.indexCarBeggin,this.state.indexCarEnd).map((el,i)=>{
          return(
            <div id={el.id} onClick={()=>this.showPopup(el)} className="col-lg-4 col-md-4 col-xs-12 col-sm-12 imgauto">
                <div className="el" >
                  <div>Marque : {el.Marque} </div>
                  <div>Model : {el.Model}</div>
                  <div>Annee : {el.Annee}</div>
                  <div>Kilometrage : {el.Kilometrage}</div>
                  <div>carburant : {el.carburant}</div>
                  <div>Boite de vitesse : {el.boiteVitesse}</div>
                  <div>prix de la voiture : {el.prix} CFA</div>
                </div>
                <div className="mag" style={{margin:"1.5em"}} >
                  <img width="100%" src={el.image.v1} alt="image yaris" />
                </div>
                <div class="row infoVoiture" >
                  <div class="col-12">
                    <h6><b>{el.nom}</b></h6>
                  </div>
                  <div class="col-12" style={{color:"#744A61"}}>
                      <h6><b>{el.prix} CFA</b></h6>
                  </div>
                </div>
            </div>
          )
        });
      }
    }
    old(){
      return(
      <div>
      <div onClick={()=>this.showPopup()} className="col-lg-3 col-md- col-xs-12 col-sm-12 imgauto">
      <div className="el" >
        <div>Marque :jfjfjfj</div>
        <div>Model :jfjfjfj</div>
        <div>Annee :jfjfjfj</div>
        <div>Kilometrage :jfjfjfj</div>
        <div>carburant :jfjfjfj</div>
        <div>Boite de vitesse :jfjfjfj</div>
        <div>prix de la voiture :jfjfjfj</div>
      </div>
      <div className="mag" style={{margin:"1.5em"}} >
        <img width="100%" src={imageyaris} alt="image yaris" />
      </div>
      <div>Toyota yaris 12000 0000</div>
    </div>
    <div style={{boxShadow:"10px 5px 5px grey",margin:"1.5em"}} className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <img width="100%" src={imageyaris} alt="image yaris" />
      <div>Toyota yaris 12000 0000</div>
    </div>
    <div style={{boxShadow:"10px 5px 5px grey",margin:"1.5em"}} className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <img width="100%" src={imageyaris} alt="image yaris" />
      <div>Toyota yaris 12000 0000</div>
    </div>
    <div style={{boxShadow:"10px 5px 5px grey",margin:"1.5em"}} className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <img width="100%" src={imageyaris} alt="image yaris" />
      <div>Toyota yaris 12000 0000</div>
    </div>
    <div style={{boxShadow:"10px 5px 5px grey",margin:"1.5em"}} className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <img width="100%" src={imageyaris} alt="image yaris" />
      <div>Toyota yaris 12000 0000</div>
    </div>
    <div style={{boxShadow:"10px 5px 5px grey",margin:"1.5em"}} className="col-lg-3 col-md-3 col-xs-12 col-sm-12">
      <img width="100%" src={imageyaris} alt="image yaris" />
      <div>Toyota yaris 12000 0000</div>
    </div>
    </div>
      )
    }
    render() {
        return (
          <div id="content">
            <div class="row">
                <div class="col-12 desktop">
                  <div id="m" style={{display:"none"}}>
                      <div id="logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <ul id="ul" >
                        <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span></li>
                        <li ><Link to="/car">BIRAWAMA CAR</Link></li>
                        <li ><Link to="/trip">BIRAWAMA TRIP</Link><img src={sn} alt="facebook" style={{width:"3rem"}} /></li>
                        <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                      </ul>

                  </div>
                  <div id="triangle" style={{display:"none"}}></div>
                    <div class="row">
                        <div class="col-4">
                            <img width="100%" src={logo} alt="image yaris" style={{minWidth:"15%",maxWidth:"15%",marginLeft:"25%"}}/>
                        </div>
                        <div class="col-8"  style={{textAlign: 'right', paddingRight:'4%'}}>
                          <ul id="menuc" style={{marginRight:"5%"}}>
                            <li id="li1" onClick={()=>this.switchV(1)} style={{ color:"#744A61"}}>VOITURES EN VENTE</li>
                            <li id="li2" onClick={()=>this.switchV(2)} style={{color:"#744A61"}}>VOITURES EN LOCATION</li>
                          </ul>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12" id="vev">
                          <div class="col-12">
                            <div class="row">
                              <div class="col-2">
                                <i onClick={()=> this.showmenu()} class="fas fa-align-left" style={{fontSize:'1.5em',marginLeft:"4%",marginTop:"25%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: '0px 3px 6px #00000029',borderRadius: '3px 39px 39px 45px'}}></i>
                              </div>
                               <div class="col-10">
                                  <form style={{marginLeft:"28%",marginTop:"2%",width:"auto"}} className="from-inline">
                                    <input type="search" style={{border: "1px solid #E4E4E4"}}/>
                                    <input style={{border: "1px solid #FFD332",backgroundColor:"#FFD332",marginLeft:"0px",opacity: "1",font: "Regular 18px/21px Arial",letterSpacing:"0px"}} type="button" value="Recherche" />
                                  </form>
                              </div>
                            </div>
                          </div>
                          <div class="col-12" style={{marginTop:"2%",marginBottom:"2%"}}>
                              <div class="row">
                                <div class="col-2">
                                  <div class="col-12">

                                  </div>
                                </div>
                                <div class="col-7 pub" >
                                  <div class="col-12 degrade">
                                    <span class="titre">
                                        Du nouveau chez
                                    </span>
                                    <span class="reduction">
                                        -15%
                                    </span>
                                    <span class="voirplus">
                                        En savoir plus <i class="fad fa-chevron-double-right" style={{color:"black"}}></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-2">

                              </div>
                              <div class="col-8" style={{border:'1px solid black', marginTop:'2rem'}}>
                                <div class="row">
                                  {this.state.marques.slice(this.state.indexMarqueBeggin,this.state.indexMarqueEnd).map((marque, index) => (
                                    <div key={index} class="col-2" style={{margin:'0',padding:'0'}}>
                                        <img  onClick={()=>this.selectMarque(marque)} width="100%" src={marque.image} alt="image yaris" style={{minWidth:"100%",maxWidth:"100%",border:'1px solid black',margin:'0',padding:'0'}}/>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-12" style={{marginTop:"4%"}}>
                              <div class="row">
                                <div class="col-2">
                                  <div class="col-12">

                                  </div>
                                </div>
                                <div class="col-7 pub" >
                                  <div class="col-12 degrade">
                                    <span class="titre">
                                        Du nouveau chez
                                    </span>
                                    <span class="reduction">
                                        -15%
                                    </span>
                                    <span class="voirplus">
                                        En savoir plus <i class="fad fa-chevron-double-right" style={{color:"black"}}></i>
                                    </span>
                                  </div>
                                </div>
                              </div>
                          </div>
                       </div>
                        <div id="vel" class="col-12">
                          <div  class="row">
                              <div class="col-12">
                                <div class="row">
                                  <div class="col-2">
                                    <i class="fas fa-align-left" style={{fontSize:'1.5em',marginLeft:"8%",marginTop:"25%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: '0px 3px 6px #00000029',borderRadius: '3px 39px 39px 45px'}}></i>
                                  </div>
                                   <div class="col-10">
                                      <form style={{marginLeft:"28%",marginTop:"2%",width:"auto"}} className="from-inline">
                                        <input type="search" style={{border: "1px solid #E4E4E4"}}/>
                                        <input style={{border: "1px solid #FFD332",backgroundColor:"#FFD332",marginLeft:"0px",opacity: "1",font: "Regular 18px/21px Arial",letterSpacing:"0px"}} type="button" value="Recherche" />
                                      </form>
                                  </div>
                                </div>
                              </div>
                          </div>
                        <div style={{display:"none"}} id="popup" >
                            <span onClick={()=>this.hidePopup()} style={{position:"relative",left:"95%",top:"5px",width:"3%",border:"1px solid black",cursor:"pointer",padding:'1rem',borderRadius:'50%',background: '#E4E4E4'}}>X</span>
                            <div className="row" >
                                <div className="col-10 pub" >
                                  <div className="col-9 degrade">
                                    <span className="titre">
                                        Du nouveau chez
                                    </span>
                                    <span className="reduction">
                                        -15%
                                    </span>
                                    <span className="voirplus">
                                        En savoir plus <i className="fad fa-chevron-double-right" style={{color:"black"}}></i>
                                    </span>
                                  </div>
                                </div>
                            </div>
                            <div className="row">
                              <div className="col-4" style={{paddingTop:'4rem'}}>
                                <div className="row">
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v1)}} className="d-block w-100" src={this.state.selectedVoiture.image.v1}  alt="First slide" style={{ minHeight: '6rem',maxHeight: '6rem'}}/>
                                  </div>
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v2)}} className="d-block w-100" src={this.state.selectedVoiture.image.v2}  alt="First slide" style={{ minHeight: '6rem',maxHeight: '6rem'}}/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop:"1rem"}}>
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v3)}} className="d-block w-100" src={this.state.selectedVoiture.image.v3}  alt="First slide" style={{ minHeight: '6rem',maxHeight: '6rem'}}/>
                                  </div>
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v4)}} className="d-block w-100" src={this.state.selectedVoiture.image.v4}  alt="First slide" style={{ minHeight: '6rem',maxHeight: '6rem'}}/>
                                  </div>
                                </div>
                                <div className="row" style={{marginTop:"1rem"}}>
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v5)}} className="d-block w-100" src={this.state.selectedVoiture.image.v5}  alt="First slide" style={{minHeight: '6rem', maxHeight: '6rem'}}/>
                                  </div>
                                  <div className="col-6">
                                    <img  onClick={()=>{this.changeIamgeSelected(this.state.selectedVoiture.image.v6)}} className="d-block w-100" src={this.state.selectedVoiture.image.v6}  alt="First slide" style={{ minHeight: '6rem',maxHeight: '6rem'}}/>
                                  </div>
                                </div>
                              </div>
                              <div className="col-8">
                                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" style={{marginTop:"2rem"}}>

                                  <div className="carousel-inner">
                                    <div className="carousel-item  active">
                                      <img  onClick={()=>{}} className="d-block w-100" src={this.state.selectedImg}  alt="First slide" style={{maxWidth:'100%',minWidth:'100%',maxHeight:'23rem',minHeight:'23rem'}}/>
                                    </div>
                                  </div>
                                  <a id ="sitesPreviousButton" className="carousel-control-prev"  role="button">
                                    <span  style={{backgroundColor: 'black',padding: '1.5rem',borderRadius: '50%'}} className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                  </a>
                                  <a id ="sitesNextButton" className="carousel-control-next"  role="button">
                                    <span style={{backgroundColor: 'black',padding: '1.5rem',borderRadius: '50%'}}  className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span  className="sr-only">Next</span>
                                  </a>
                                  </div>

                              </div>
                            </div>
                            <div className="row" style={{paddingTop:'2rem'}}>
                              <div className="col-4" style={{paddingTop:'1rem'}}>
                                <span className="col-4" style={{marginTop:"4rem",marginLeft:"2rem",color:"white",padding:'0.8rem',background: '#5283C6',border: '1px solid #FFFFFF',borderRadius: '2px',fontSize:'1.5em',paddingLeft:"1.5rem",paddingRight:"1.5rem"}}>
                                  +33652930592
                                </span>
                              </div>
                              <div className="col-4">
                                <span style={{font: 'Bold 30px/61px Glacial Indifference',letterSpacing: '0px',color: '#050505'}}>
                                  {this.state.selectedVoiture.nom}
                                </span>
                              </div>
                              <div className="col-4">
                                <span style={{font: 'Bold 30px/61px Glacial Indifference',letterSpacing: '0px',color: '#FFD332'}}>
                                   {this.state.selectedVoiture.prix} CFA
                                </span>
                              </div>
                            </div>
                          </div>
                          <div  style={{width:"70%",marginLeft:"13%",marginTop:"2em"}} className="row ">
                            {this.displayVev()}
                          </div>
                          <div  style={{width:"70%",marginLeft:"13%",marginTop:"2em",textAlign:'center'}} className="row ">
                            <div  className="col-12 ">
                              <p>
                                <span onClick={()=>this.voituresShowPlus()} style={{background: '#FFD332 0% 0% no-repeat padding-box',opacity: '1',padding:'0.7rem',paddingLeft:"2rem",paddingRight:"2rem"}}>
                                  Voir plus
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12 mobile">
                      <div class="row">
                          <div class="col-12">
                            <div  className="row" id="menuMobile">
                              <div  className="col-9" style={{paddingLeft:'2rem',paddingTop:'-2rem'}}>
                                 <img src={logo} alt="facebook" style={{width:"3rem"}} />
                              </div>
                              <div  className="col-3" style={{paddingTop:"0rem"}}>
                                <i id="menubars" className="fas fa-bars" style={{fontSize:"2.4em"}}></i>
                              </div>
                            </div>
                          </div>

                      </div>
                      <div class="row">
                          <div class="col-12" id='carhome'>
                                <div  className="row" id="bodyMobile">
                                  <div  className="col-12">
                                    <div id="mm">
                                      <div  className="col-12">
                                        <span style={{color:'#AD5793'}} id="fermermenumobile">
                                          X
                                        </span>
                                       </div>
                                        <div id="logo">
                                          <img src={logo} alt="logo" />
                                        </div>
                                        <ul id="ul" >
                                          <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" /><Link to="/">BIRAWAMA</Link></span></li>
                                          <li ><Link to="/car">BIRAWAMA CAR</Link></li>
                                          <li ><Link to="/trip">BIRAWAMA TRIP</Link></li>
                                          <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                                        </ul>
                                    </div>
                                    <div id="trianglemm" ></div>

                                  </div>
                                </div>

                                <div  className="col-12" style={{backgroundColor:'#F5F5F5'}}>
                                  <div  className="row">
                                    <div  className="col-12" style={{paddingBottom:"2rem",backgroundColor:'#FFFFFF',marginTop:'0.3rem'}}>
                                      <div  className="row">
                                        <div  className="col-12">
                                            <h1  className="col-12" style={{font: 'Bold 26px/32px Montserrat',  letterSpacing: '0px',color: '#FFD93D',textAlign:'center', marginTop:'2rem'}}>
                                               BIRAMAWA CAR
                                            </h1>
                                          </div>
                                      </div>
                                      <div  className="row">
                                        <div  className="col-1">
                                        </div>
                                        <div  className="col-5">
                                          <span style={{borderBottom:'4px solid #FFD93D',fontSize:'0.8em',font: 'Regular 6px/16px Roboto',letterSpacing: '0px',color: '#AD5793'}}>
                                            VOITURE EN VENTE
                                          </span>
                                        </div>
                                        <div  className="col-6">
                                          <span style={{fontSize:'0.8em',font: 'Regular 6px/16px Roboto',letterSpacing: '0px',color: '#AD5793'}}>
                                            VOITURE EN LOCATION
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div  className="col-12" style={{backgroundColor:'#F5F5F5'}}>
                                    <div  className="row">
                                      <div  className="col-12" >
                                        <form style={{marginLeft:"4%",marginTop:"2%",width:"auto"}} className="from-inline">
                                          <input type="search" style={{borderRadius: '14px 0px 0px 14px',border: "1px solid #E4E4E4"}}/>
                                          <input style={{borderRadius: '14px',border: "1px solid #FFD332",backgroundColor:"#FFD332",marginLeft:"-1rem",opacity: "1",font: "Regular 18px/21px Arial",letterSpacing:"0px"}} type="button" value="Recherche" />
                                        </form>
                                      </div>

                                      <div  className="col-12" style={{marginTop:"2rem"}}>
                                        <p style={{color:"#AD5793",textAlign:"center",font: "Bold 15px/19px Montserrat"}}>
                                          Top des annonces
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div  className="col-12" style={{marginTop:"2rem"}}>
                                    <div  className="row" style={{paddingLeft:'15%'}}>
                                      {this.state.voitures.slice(this.state.indexCarMobilBeggin,this.state.indexCarMobilEnd).map((voiture, index) => (
                                        <div  className="col-5" style={{backgroundColor:"white"}}>
                                          <div  className="row">
                                            <div  className="col-12">
                                              <img src={voiture.image.v1} alt="logo" style={{minWidth:'100%',maxWidth:'100%',minHeight:'6rem',maxHeight:'6rem',marginTop:'1rem'}}/>
                                            </div>
                                          </div>
                                          <div  className="row">
                                            <div  className="col-12" style={{marginTop:"0.5rem",textAlign:"center",font: "Bold 10px/13px Glacial Indifference",color: "#050505"}}>
                                              {voiture.nom}
                                            </div>
                                          </div>
                                          <div  className="row">
                                            <div  className="col-12" style={{textAlign:"center",font: "Bold 16px/19px Glacial Indifference",color: "#744A61"}}>
                                              {voiture.prix} CFA
                                            </div>
                                          </div>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                  <div  className="col-12" style={{marginTop:"2rem",textAlign:"center"}}>
                                    <p><span onClick={() => {this.carplusVoiture();return false;}} style={{font: "Regular 15px/18px Glacial Indifference",color: "#1472B2"}}>
                                      Voir la liste complete….
                                    </span>
                                    </p>
                                  </div>
                                </div>
                                <div  className="row" style={{marginTop:"2rem",textAlign:"center"}}>
                                  <div  className="col-12" style={{marginTop:"0rem",textAlign:"center"}}>
                                    <div id='pubmm' className="pubmm" style={{height:'20rem',width:"90%",marginLeft:'5rem'}}>
                                      <div className="col-12 degrade" id='degrade'>
                                        <span className="titre" id="titrepub" style={{Bold :"30px/34px Arial"}}>
                                            Du nouveau chez BIRAMAWA
                                        </span>
                                        <span className="reduction" id="reductionpub">
                                            -15%
                                        </span>
                                        <span className="voirplus" id="voirpluspub">
                                          <i style={{color:"black"}} className="fas fa-angle-double-right"></i>  En savoir plus
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div  className="row" style={{marginTop:"0rem",textAlign:"center"}}>
                                  <div  className="col-12" style={{marginTop:"0rem",textAlign:"center"}}>
                                    <p  style={{marginTop:"0rem",textAlign:"center",font: "Bold 15px/19px Montserrat",color: "#AD5793",textTransform: "uppercase"}}>
                                      Les marques automobiles
                                    </p>
                                  </div>
                                  <div  className="col-12" style={{marginTop:"0rem",textAlign:"center"}}>
                                    <div  className="row" style={{width:"96%",marginLeft:"2%"}}>
                                      {this.state.marques.slice(this.state.indexMarqueBeggin,this.state.indexMarqueEnd).map((marque, index) => (
                                        <div  className="col-3">
                                          <img src={marque.image} alt="logo" style={{minWidth:'100%',maxWidth:'100%',minHeight:'4rem',maxHeight:'4rem',marginTop:'1rem'}}/>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                                <div  className="row">
                                  <div  className="col-12" style={{marginTop:"2rem",textAlign:"center"}}>
                                    <p><a style={{font: "Regular 15px/18px Glacial Indifference",color: "#1472B2"}}>
                                      Voir la liste complete….
                                    </a>
                                    </p>
                                  </div>
                                </div>
                                <div  className="row" style={{marginTop:"2rem",textAlign:"center",background: "#744A61 0% 0% no-repeat padding-box"}}>
                                  <div  className="col-12" >
                                    <p style={{font: "Regular 17px/20px Arial",color:"white"}}>
                                      Qui sommes nous?
                                    </p>
                                  </div>
                                  <div  className="col-6" >
                                    <div  className="row" >
                                      <div  className="col-12" >
                                        <p style={{font: "Regular 17px/20px Arial",color:"white"}} >
                                          Nous Contacter
                                        </p>
                                      </div>
                                    </div>
                                    <div  className="row" >
                                      <div  className="col-12" >
                                        <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.7em',color:"white"}}>
                                          <i class="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                        </p>
                                      </div>
                                    </div>
                                    <div  className="row" >
                                      <div  className="col-12" >
                                        <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                          <i class="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                  <div  className="col-6" style={{font: "Regular 17px/20px Arial",color:"white"}}>
                                    Conditions d'utilisation du site et chartes de diffusion de publicité
                                  </div>
                                </div>
                          </div>
                          <div class="col-12" id='carplus' style={{marginTop:"1rem",display:"none"}}>
                            <div class="row">
                              <div class="col-12">
                                <p onClick={() => {this.carPrevious();return false;}} style={{font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                                  <i class="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> Page Précédente
                                </p>
                              </div>
                            </div>
                            <div class="row" style={{width:"98%",marginLeft:"1%"}}>
                              {this.state.voitures.slice(this.state.indexCarMobilBeggin,this.state.voirplusend).map((voiture, index) => (
                                <div key={index} class="col-12" style={{border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                                  <div class="row">
                                    <div class="col-12">
                                        <img src={voiture.image.v1} alt="facebook" style={{width:"100%"}} />
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <p style={{color: "#050505",font: "Bold 20px/24px Glacial Indifference"}}>
                                            {voiture.nom}
                                        </p>
                                      </div>
                                    </div>
                                    <div class="row">
                                      <div class="col-12">
                                        <p style={{color: "#744A61",font: "Bold 23px/28px Glacial Indifference"}}>
                                            {voiture.prix} CFA
                                        </p>
                                      </div>
                                    </div>
                                </div>
                              ))}

                              <div className="col-12" style={{marginTop: "2rem"}}>
                                <p style={{textAlign: "center",font: "Bold 20px/24px Glacial Indifference"}}>
                                    <span onClick={()=>{this.voirplusDevoiture()}} style={{padding:"0.5rem",borderRadius: "11px",boxShadow: "0px 0px 3px #00000029",background: "#FFFFFF 0% 0% no-repeat padding-box"}}><i className="fa fa-arrow-down"></i> voir plus</span>
                                </p>
                              </div>
                              <div class="col-12">
                                <div  className="row" style={{marginTop:"2rem",textAlign:"center",background: "#744A61 0% 0% no-repeat padding-box"}}>
                                <div  className="col-12" >
                                  <p style={{font: "Regular 17px/20px Arial",color:"white"}}>
                                    Qui sommes nous?
                                  </p>
                                </div>
                                <div  className="col-6" >
                                  <div  className="row" >
                                    <div  className="col-12" >
                                      <p style={{font: "Regular 17px/20px Arial",color:"white"}} >
                                        Nous Contacter
                                      </p>
                                    </div>
                                  </div>
                                  <div  className="row" >
                                    <div  className="col-12" >
                                      <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.7em',color:"white"}}>
                                        <i class="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                      </p>
                                    </div>
                                  </div>
                                  <div  className="row" >
                                    <div  className="col-12" >
                                      <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                        <i class="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
                                      </p>
                                    </div>
                                  </div>
                                </div>
                                <div  className="col-6" style={{font: "Regular 17px/20px Arial",color:"white"}}>
                                  Conditions d'utilisation du site et chartes de diffusion de publicité
                                </div>
                              </div>
                              </div>
                            </div>
                          </div>
                        </div>
                </div>
              </div>
          </div>
        );
    }
}

export default Automobile;
