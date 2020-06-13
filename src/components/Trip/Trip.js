import React, { Component } from 'react';
import $ from 'jquery';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import home from '../../static/images/home.png';
import banierrtrip from '../../static/images/banieretrip.png';
import logo from '../../static/images/BIRAMAWA LOGO 3D 8.png';
import logo1 from '../../static/images/logo.png';
import bgmobiletrip from '../../static/images/bgmobiletrip.png';
import sn from '../../static/images/sn.png';

import './Trip.scss';
import lac from '../../static/images/686_ragdefault.png';
import image4 from '../../static/images/images.png';
import bgtripdesk from '../../static/images/bgtripdesk.png';
import image3 from '../../static/images/image3.png';
import image2 from '../../static/images/images2.png';
import logotrips from '../../static/images/logotrips.png';
import ragdefault from '../../static/images/686_ragdefault.png';
import images from '../../static/images/images.png';
import part1 from '../../static/images/part1.png';
import part2 from '../../static/images/part2.png';
import part3 from '../../static/images/part3.png';
import part4 from '../../static/images/part4.png';
import part5 from '../../static/images/part5.png';
import couizine from '../../static/images/cuizine.png';
import picine from '../../static/images/picine.png';
import lit from '../../static/images/lit.png';
import imageyaris from '../../static/images/imageyaris.jpg';
import facebook from '../../static/images/facebook.png';
import linkedin from '../../static/images/linkedin.png';
import instagram from '../../static/images/instagram.png';
import twiter from '../../static/images/twiter.png';
import homebmw from '../../static/images/home-bmw-serie-2.png';
import axios from 'axios';
import voiture1 from '../../static/images/voiture1.png';
import voiture2 from '../../static/images/voiture2.png';
import voiture3 from '../../static/images/voiture3.png';
import voiture4 from '../../static/images/voiture4.png';
import voiture5 from '../../static/images/voiture5.png';
import voiture6 from '../../static/images/voiture6.png';

class Trip extends Component {

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


 sites = [
   {
     id:1,
     titre: 'site 1',
     description: 'description de la site',
     prix: '2052132455',
     image: ragdefault
   },
   {
     id:2,
     titre: 'site 2',
     description: 'description de la site',
     prix: '3002132455',
     image: images
   },
   {
     id:3,
     titre: 'site 3',
     description: 'description de la site',
     prix: '3102132455',
     image: image3
   },
   {
     id:4,
     titre: 'site 4',
     description: 'description de la site',
     prix: '3202132455',
     image: images
   },
   {
     id:5,
     titre: 'site 5',
     description: 'description de la site',
     prix: '4002132455',
     image: ragdefault
   },
   {
     id:3,
     titre: 'site 3',
     description: 'description de la site',
     prix: '3102132455',
     image: image3
   },
   {
     id:4,
     titre: 'site 4',
     description: 'description de la site',
     prix: '3202132455',
     image: images
   },
   {
     id:5,
     titre: 'site 5',
     description: 'description de la site',
     prix: '4002132455',
     image: ragdefault
   }
 ]

 hebergements =  [
   {
     id:1,
     titre: 'hébergement 1',
     description: 'description de la hébergement',
     prix: '2052132455',
     image: ragdefault
   },
   {
     id:2,
     titre: 'hébergement 2',
     description: 'description de la hébergement',
     prix: '3002132455',
     image: images
   },
   {
     id:3,
     titre: 'hébergement 3',
     description: 'description de la hébergement',
     prix: '3102132455',
     image: image3
   },
   {
     id:4,
     titre: 'hébergement 4',
     description: 'description de la hébergement',
     prix: '3202132455',
     image: images
   },
   {
     id:5,
     titre: 'hébergement 5',
     description: 'description de la hébergement',
     prix: '4002132455',
     image: ragdefault
   }
 ]

 partenaires =  [
   {
     id:1,
     titre: 'partenaire 1',
     description: 'description de la partenaire',
     prix: '2052132455',
     image: part1
   },
   {
     id:2,
     titre: 'partenaire 2',
     description: 'description de la partenaire',
     image: part2
   },
   {
     id:3,
     titre: 'hébergement 3',
     description: 'description de la partenaire',
     prix: '3102132455',
     image: part3
   },
   {
     id:4,
     titre: 'partenaire 4',
     description: 'description de la partenaire',
     prix: '3202132455',
     image: part4
   },
   {
     id:5,
     titre: 'partenaire 5',
     description: 'description de la partenaire',
     prix: '4002132455',
     image: part5
   },
   {
     id:6,
     titre: 'partenaire 6',
     description: 'description de la partenaire',
     prix: '3202132455',
     image: part4
   }
 ]

 sitesIndex  = 0;
 hebergementsIndex  = 0;
 partnairesIndex = 0;

 siteSelected = {
   id:5,
   titre: 'site 5',
   description: 'description de la site',
   prix: '4002132455',
   image: {ragdefault,ragdefault,ragdefault,ragdefault,ragdefault}
 };
 hebergemeSelected = {}

 async getDatasSites(){

   let url = this.host + "trip/sites";

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


         (datas.message).forEach((item, i) => {
           let el  = {};
           let image = [];
            item.image = item.image.split(",");


            if(item.image.length==1){
              image.push(item.image[0],item.image[0],item.image[0],item.image[0],item.image[0]);
              item.image = image;
            }
            else if(item.image.length==2){
              image.push(item.image[0],item.image[1],item.image[0],item.image[1],item.image[0]);
              item.image = image;
            }
            else if(item.image.length==3){
              image.push(item.image[0],item.image[1],item.image[2],item.image[0],item.image[0]);
               item.image = image;
            }
            else if(item.image.length==4){
              image.push(item.image[0],item.image[1],item.image[2],item.image[3],item.image[0]);
               item.image = image;
            }

         });

         this.setState({sites:datas.message,siteSelected:datas.message[0]});
         console.log(this.state.sites);
       }else
         console.log(rep);
     });

 }

 async getDatasHebergement(){

   let url = this.host + "trip/hebergements";

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
         (datas.message).forEach((item, i) => {
           let el  = {};
           let image = [];
            item.image = item.image.split(",");


            if(item.image.length==1){
              image.push(item.image[0],item.image[0],item.image[0],item.image[0]);
              item.image = image;
            }
            else if(item.image.length==2){
              image.push(item.image[0],item.image[1],item.image[0],item.image[1]);
              item.image = image;
            }
            else if(item.image.length==3){
              image.push(item.image[0],item.image[1],item.image[2],item.image[0]);
               item.image = image;
            }

         });

         this.setState({hebergements:datas.message,hebergemeSelected:datas.message[0],imgHebergementSelected: (datas.message[0]).image[0]});

         console.log(datas);
       }else
         console.log(rep);
     });

 }

 async getDatasPartenaires(){

   let url = this.host +  "trip/partenaire";

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

         this.setState({partenaires:datas.message});

         console.log(datas);
       }else
         console.log(rep);
     });

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

 sitesShowNext (){
   let index = 0;

   if((this.state.indexSites + 1) < (this.state.sites).length &&  (this.state.sites).length  >= 4){
     index = this.state.indexSites + 1;
     this.setState({indexSites:index})
     this.setState({indexSites:index,indexSiteEnd:index,indexSiteBeggin:index-4})

   }

 }

 partenairesShowNext (){
   let index = 0;

   if((this.state.indexPartenaire + 1) < (this.state.partenaires).length &&  (this.state.partenaires).length  >= 5){
     index = this.state.indexPartenaire + 1;
     this.setState({indexPartenaire:index,indexPartenaireEnd:index,indexPartenaireBeggin:index-5})
   }

 }

 hebergementsShowNext (){
   let index = 0;

   if((this.state.indexHebergement + 1) < (this.state.sites).length &&  (this.state.sites).length  >= 3){
     index = this.state.indexHebergement + 1;
     this.setState({indexSites:index})
     this.setState({indexHebergement:index,indexHebergementEnd:index,indexHebergementBeggin:index-3})

   }

 }
   //<img className="d-block w-100" src={logotrips}  alt="Third slide"/>

 sitesShowPrevious (){
   let index = 0;

   if((this.state.indexSites - 4) >  0 && (this.state.sites).length  >= 4 ){
     index = this.state.indexSites - 1;
     this.setState({indexSites:index,indexSiteEnd:index,indexSiteBeggin:index-4})
   }
 }

 partenairesShowPrevious (){
   let index = 0;

   if((this.state.indexPartenaire- 5) >  0 && (this.state.partenaires).length  >= 5 ){
     index = this.state.indexPartenaire - 1;
     this.setState({indexPartenaire:index,indexPartenaireEnd:index,indexPartenaireBeggin:index-5})
   }
 }

 hebergementsShowPrevious (){
   let index = 0;

   if((this.state.indexHebergement - 3) >  0 && (this.state.hebergements).length  >= 3 ){
     index = this.state.indexHebergement - 1;
     this.setState({indexSites:index,indexHebergementEnd:index,indexHebergementBeggin:index-3})
   }
 }

  hebergemeSelected =    {
       id:1,
       titre: 'hébergement 1',
       description: 'description de la hébergement',
       prix: '2052132455',
       image: [ragdefault,ragdefault,ragdefault,ragdefault,ragdefault]
     };

    constructor(props){
        super(props);
        this.state = {indexCarBeggin:0,indexCarEnd:4,selectedVoiture:this.voitures[0],voitures:this.voitures,hebergemeSelected:this.hebergemeSelected,indexPartenaire:4,indexHebergement:2,indexSites:3,date: new Date(),partenaires:this.partenaires,hebergements:this.hebergements,sites:this.sites,siteSelected:this.siteSelected,indexSiteBeggin:0,indexSiteEnd:4,indexHebergementBeggin:0,indexHebergementEnd:3,indexPartenaireBeggin:0,indexPartenaireEnd:5,imgHebergementSelected:''};
        this.clearInterval();
        this.hauteurPage();
        this.getDatasSites();
        this.getDatasHebergement();
        this.getDatasCars();
        this.getDatasPartenaires();
        $("document").ready(()=>{
          this.switchV(1);
          this.showmenu();
          //this.sitesShowNext();
          this.switchP(1);
           (document.getElementById('sitesNextButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.sitesShowNext();
           });

           (document.getElementById('sitesPreviousButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.sitesShowPrevious();
           });

           (document.getElementById('hebergementsNextButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.hebergementsShowNext();
           });

           (document.getElementById('hebergementsPreviousButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.hebergementsShowPrevious();
           });

           (document.getElementById('partenaireNextButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.partenairesShowNext();
           });

           (document.getElementById('partenairePreviousButton')).addEventListener('click',(e)=>{
              e.preventDefault();
              this.partenairesShowPrevious();
           });

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
    clearInterval(){
        let idI=parseInt(sessionStorage.getItem("idInterval"));
        console.log(idI);
        clearInterval(idI);
      }

    hauteurPage(){
      $(document).ready(()=>{
            let h1=window.outerHeight+30;
        // console.log(h);
        //  console.log(h1);
        //  document.getElementById("menu").style.height=h1+10+"px";
        //  document.getElementById("menu1").style.height=h1+"px";
          document.getElementById("container").style.minHeight="100vh";
          document.getElementById("container").style.maxHeight="100vh";
      });

    }

    switchV(el){
      switch(el){
        case 1:{
          // document.getElementById("sect1").style.display="block";
          // document.getElementById("sect2").style.display="none";
          // document.getElementById("sect3").style.display="none";
          // document.getElementById("sect4").style.display="none";

          document.getElementById("li1").style.borderBottom="4px solid rgb(255, 208, 48)";
          document.getElementById("li2").style.borderBottom="0px";
          document.getElementById("li3").style.borderBottom="0px";
          document.getElementById("li4").style.borderBottom="0px";

          // document.getElementById("li1").style.color="#FFFFFF";
          // document.getElementById("li2").style.color="#FFFFFF";
          // document.getElementById("li3").style.color="#FFFFFF";
          // document.getElementById("li4").style.color="#FFFFFF";

          break;

        }
        case 2:{
          // document.getElementById("container").style.backgroundImage="none";
          // document.getElementById("sect1").style.display="none";
          // document.getElementById("sect2").style.display="block";
          // document.getElementById("sect3").style.display="none";
          // document.getElementById("sect4").style.display="none";

          document.getElementById("li1").style.borderBottom="0px";
          document.getElementById("li2").style.borderBottom="4px solid rgb(255, 208, 48)";
          document.getElementById("li3").style.borderBottom="0px";
          document.getElementById("li4").style.borderBottom="0px";

          // document.getElementById("li1").style.color="#744A61";
          // document.getElementById("li2").style.color="#744A61";
          // document.getElementById("li3").style.color="#744A61";
          // document.getElementById("li4").style.color="#744A61";
          break;
        }
        case 3:{
          // document.getElementById("container").style.backgroundImage="none";
          // document.getElementById("sect1").style.display="none";
          // document.getElementById("sect2").style.display="none";
          // document.getElementById("sect3").style.display="block";
          // document.getElementById("sect4").style.display="none";

          document.getElementById("li1").style.borderBottom="0px";
          document.getElementById("li2").style.borderBottom="0px";
          document.getElementById("li3").style.borderBottom="4px solid rgb(255, 208, 48)";
          document.getElementById("li4").style.borderBottom="0px";

          // document.getElementById("li1").style.color="##FFFFFF";
          // document.getElementById("li2").style.color="#744A61";
          // document.getElementById("li3").style.color="#744A61";
          // document.getElementById("li4").style.color="#744A61";
          break;
        }

        case 4:{
          // document.getElementById("container").style.backgroundImage="none";
          // document.getElementById("sect1").style.display="none";
          // document.getElementById("sect2").style.display="none";
          // document.getElementById("sect3").style.display="none";
          // document.getElementById("sect4").style.display="block";

          document.getElementById("li1").style.borderBottom="0px";
          document.getElementById("li2").style.borderBottom="0px";
          document.getElementById("li3").style.borderBottom="0px";
          document.getElementById("li4").style.borderBottom="4px solid rgb(255, 208, 48)";
          //
          // document.getElementById("li1").style.color="#744A61";
          // document.getElementById("li2").style.color="#744A61";
          // document.getElementById("li3").style.color="#744A61";
          // document.getElementById("li4").style.color="#744A61";
          break;
        }
      }
    }

    changeBackground(bElement, bUrl) {
           return bElement.style.backgroundImage = "url("+bUrl+")";
    }

    showModaleSites(el){
      this.setState({siteSelected:el})
      document.getElementById('modaleSites').style.display = 'block';
    }

    modaleSitesChange(el){
      this.siteSelected = el
      console.log(this.siteSelected)

      let titreSiteSeclected = document.getElementById('titreSiteSeclected');
      titreSiteSeclected.innerHTML = this.siteSelected.titre;

      let imagesSelected = document.querySelectorAll('.imagesSelected');
      imagesSelected.forEach((item, i) => {
        item.src=this.siteSelected.image[i];
      });

      let descriptionSelected = document.getElementById('descriptionSelected');
      descriptionSelected.innerHTML = this.siteSelected.description;

      let autresSitesCimilaires1 = document.querySelector('#autresSitesCimilaires1');
      let autresSitesCimilaires2 = document.querySelector('#autresSitesCimilaires2');
      let autresSitesCimilaires3 = document.querySelector('#autresSitesCimilaires3');
      let autresSitesCimilaires4 = document.querySelector('#autresSitesCimilaires4');
      let autresSitesCimilaires5 = document.querySelector('#autresSitesCimilaires5');

      this.sites.forEach((item, i) => {

        if((item.description===this.siteSelected.description) && (item.id!=this.siteSelected.id)){
          console.log(item)
          if(i==0) {
            autresSitesCimilaires1.src = item.image[0];
            autresSitesCimilaires1.alt = item.id;
          }
          else if (i==1) {
            autresSitesCimilaires2.src = item.image[1];
            autresSitesCimilaires2.alt = item.id;

          }
          else if (i==2) {
            autresSitesCimilaires3.src = item.image[2];
            autresSitesCimilaires3.alt = item.id;
          }
          else if (i==3) {
            autresSitesCimilaires4.src = item.image[3];
            autresSitesCimilaires4.alt = item.id;
          }
          else if (i==4) {
            autresSitesCimilaires5.src = item.image[4];
            autresSitesCimilaires5.alt = item.id;
          }
        }
      });
    }

    clickAutresSites (el){
      console.log(el)
      this.sites.forEach((item, i) => {
        if(item.id==parseInt(el.alt)){
          this.siteSelected=item;
        }
      });

      this.modaleSitesChange(this.siteSelected);
    }

    hideModaleSites(){
      document.getElementById('modaleSites').style.display = 'none';
    }

    showModaleHebergement(el){
      document.getElementById('modaleHebergement').style.display = 'block';
      this.setState({hebergemeSelected:el});
    }

    selectsiteMobile (site){
      this.setState({siteSelected:site});
      this.switchP(5);
    }

    modaleHebergementChange(el){
      this.hebergemeSelected = el
      console.log(this.hebergemeSelected)

      let hebergemeSelectedtitre = document.getElementById('hebergemeSelectedtitre');
      hebergemeSelectedtitre.innerHTML = this.hebergemeSelected.titre;

      let imagesSelectedHeber = document.querySelectorAll('.imagesSelectedHeber');
      imagesSelectedHeber.forEach((item, i) => {
        item.src=this.hebergemeSelected.image;
      });

      let hebergemeSelectedDescrip = document.getElementById('hebergemeSelectedDescrip');
      hebergemeSelectedDescrip.innerHTML = this.hebergemeSelected.description;

      let autreHebergment1 = document.querySelector('#autreHebergment1');
      let autreHebergment2 = document.querySelector('#autreHebergment2');
      let autreHebergment3 = document.querySelector('#autreHebergment3');
      let autreHebergment4 = document.querySelector('#autreHebergment4');
      let autreHebergment5 = document.querySelector('#autreHebergment5');

      this.hebergements.forEach((item, i) => {
        if((item.description===this.hebergemeSelected.description) && (item.id!=this.hebergemeSelected.id)){
          if(i==0) {
            autreHebergment1.src = item.image;
            autreHebergment1.alt = item.id;
          }
          else if (i==1) {
            autreHebergment2.src = item.image;
            autreHebergment2.alt = item.id;

          }
          else if (i==2) {
            autreHebergment3.src = item.image;
            autreHebergment3.alt = item.id;
          }
          else if (i==3) {
            autreHebergment4.src = item.image;
            autreHebergment4.alt = item.id;
          }
          else if (i==4) {
            autreHebergment5.src = item.image;
            autreHebergment5.alt = item.id;
          }
        }
      });
    }

    clickAutresHeberg (el){
      console.log(el)
      this.hebergements.forEach((item, i) => {
        if(item.id==parseInt(el.alt)){
          this.hebergemeSelected=item;
        }
      });

      this.modaleHebergementChange(this.hebergemeSelected);
    }

    hideModaleHebergement(){
      document.getElementById('modaleHebergement').style.display = 'none';
    }

    voirPlussite (){
      let index= 0;
       if((this.state.indexSiteEnd + 2) < this.state.sites.length){
          index = this.state.indexSiteEnd + 2;
         this.setState({indexSiteEnd:index});
       }else{
          index = this.state.sites.length;
         this.setState({indexSiteEnd:index});
       }
    }

    heberPlus (){
      let index= 0;
      if((this.state.indexHebergementEnd + 2) < this.state.hebergements.length){
         index = this.state.indexHebergementEnd + 2;
        this.setState({indexHebergementEnd:index});
      }else{
         index = this.state.hebergements.length;
        this.setState({indexHebergementEnd:index});
      }
    }

    selectedHeberg (heb){
      this.setState({hebergemeSelected:heb})
      this.switchP(6);
    }

    voituresPlus (){
      let index= 0;
      if((this.state.indexCarEnd + 2) < this.state.voitures.length){
         index = this.state.indexCarEnd + 2;
        this.setState({indexCarEnd:index});
      }else{
         index = this.state.voitures.length;
        this.setState({indexCarEnd:index});
      }
    }

    selectedVoit (v){
      this.setState({selectedVoiture:v})
      this.switchP(7);
    }

    switchP(num){
      switch (num) {
        case 1:{
          document.querySelector("#tripAcceuilMobile").style.display = "block";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "none";


          break;
        }

        case 2:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "block";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "none";
          break;
        }
        case 3:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "block";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "none";
          break;
        }
        case 4:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "block";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "none";
          break;
        }
        case 5:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "block";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "none";
          break;
        }
        case 6:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "block";
          document.querySelector("#voitureDetailMobile").style.display = "none";
          break;
        }
        case 7:{
          document.querySelector("#tripAcceuilMobile").style.display = "none";
          document.querySelector("#sitesExeptionMobile").style.display = "none";
          document.querySelector("#hebergementMobile").style.display = "none";
          document.querySelector("#voirturetMobile").style.display = "none";
          document.querySelector("#siteDetailMobile").style.display = "none";
          document.querySelector("#hebergemantDetailMobile").style.display = "none";
          document.querySelector("#voitureDetailMobile").style.display = "block";
          break;
        }

        default:

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

    render() {
        return (
        <div className="container" id="container">
          <div className="row" >
            <div className="col-12 desktop" style={{backgroundImage:"url("+bgtripdesk+")",backgroundRepeat: "no-repeat",backgroundSize: "100% 100vh"}}>
              <div id="m" style={{display:"none"}}>
                  <div >
                    <img src={logo1} alt="logo" />
                  </div>
                  <ul id="ul" >
                    <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span></li>
                    <li ><Link to="/car" >BIRAWAMA CAR</Link></li>
                    <li ><Link to="/trip">BIRAWAMA TRIP</Link><img src={sn} alt="facebook" style={{width:"3rem"}} /></li>
                    <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                  </ul>

              </div>
              <div id="triangle" style={{display:"none"}}></div>
                <div className="row">
                    <div className="col-4">
                        <img width="100%" src={logotrips} alt="image yaris" style={{minWidth:"20%",maxWidth:"20%",marginLeft:"25%"}}/>
                    </div>
                    <div className="col-8" style={{paddingTop:'1%',paddingRight:'8%', textAlign:'right'}}>
                      <ul id="menuc" style={{marginRight:"5%"}}>
                        <li ><a href="#sect1" id="li1" onClick={()=>{this.switchV(1);return false;}} style={{ color:"#FFFFFF"}}>BIRAMAWA TRIP</a></li>
                        <li ><a href="#sect2" id="li2" onClick={()=>{this.switchV(2);return false;}} style={{color:"#FFFFFF"}}>SITES D'EXCEPTION</a></li>
                        <li ><a href="#sect3" id="li3" onClick={()=>{this.switchV(3);return false;}} style={{color:"#FFFFFF"}}>HEBERGEMENT</a></li>
                        <li ><a href="#sect4" id="li4" onClick={()=>{this.switchV(4);return false;}} style={{color:"#FFFFFF"}}>NOS PARTENAIRES</a></li>
                      </ul>
                    </div>
                </div>
                <div className="row" id="sect1" >
                  <div className="col-12" >
                      <div className="row">
                        <div className="col-2">
                          <i onClick={()=> this.showmenu()} className="fas fa-align-left" style={{padding:'0.5rem',fontSize:'1.5em',marginLeft:"4%",marginTop:"25%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: '0px 3px 6px #00000029',borderRadius: '3px 39px 39px 45px'}}></i>
                        </div>
                         <div className="col-10">

                        </div>
                      </div>
                      <div className="row titre" >
                        <div className="col-12">
                          <h1>
                              <span style={{color:"white"}}>Venez  Visiter  le  Sénégal</span>
                          </h1>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-4">
                        </div>
                        <div className="col-4" style={{backgroundColor:'white',color:'white',maxHeight:'0.3rem', fontSize:'0.1em'}}>
                              <span>Venez</span>
                        </div>
                      </div>
                      <div className="row" style={{marginTop:'2%',textAlign:'center', color:'#744A61'}}>
                        <div className="col-12">
                          <h4 style={{color:"white"}}>
                              Chercher un site
                          </h4>
                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-4">
                        </div>
                        <div className="col-4" style={{paddingLeft:'2%',textAlign:'center'}}>
                          <form style={{width:"90%",border: '1px solid #FFFFFF',borderRadius: '17px'}} className="from-inline">
                            <input type="search" style={{width:"73%",borderLeft: '1px solid #FFFFFF',borderTop: '1px solid #FFFFFF',borderBottom: '1px solid #744A61',borderRadius: '17px 0px 0px 17px',opacity: "0"}}/>
                            <input style={{maxWidth:'27%',minWidth:'27%',border: '1px solid #FFFFFF',borderRadius: '17px 17px 17px 17px',marginLeft:"0px",borderLeft: '0px solid #744A61',opacity: "1",font: "Regular 18px/21px Arial",letterSpacing:"0px",background: '#FFFFFF 0% 0% no-repeat padding-box'}} type="button" value="OK" />
                          </form>
                        </div>
                      </div>
                      <div className="row" >
                        <div className="col-12" style={{marginTop:"4%",marginBottom:"2%"}}>
                            <div className="row">
                              <div className="col-2">
                                <div className="col-12">

                                </div>
                              </div>
                              <div className="col-7 pub" >
                                <div className="col-12 degrade">
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
                        </div>
                      </div>
                      <div className="row " style={{position:"fixed",bottom:'0rem',left:'47%'}}>
                        <div className="col-12 align-middle">
                            <div style={{height:"0.2em",width:"3.7rem",backgroundColor:"#FFFFFF",marginBottom:"0.2em"}}></div>
                            <div style={{height:"0.2em",width:"3.7em",backgroundColor:"#FFFFFF",marginBottom:"0.2em"}}></div>
                            <div style={{height:"0.1em",width:"3.7rem",backgroundColor:"#FFFFFF",marginBottom:"0.2em"}}></div>
                            <div id="triangle2" style={{borderTop: '20px solid #FFFFFF'}}></div>
                        </div>
                      </div>
                    </div>
                </div>
                <div className="row" id="sect2" style={{marginTop:'25rem'}}>
                  <div className="col-12" >
                    <div className="row titre1" >
                      <div className="col-12">
                        <h1>
                            <b>SITES D'EXCEPTION</b>
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-5">
                      </div>
                      <div className="col-2

                        " style={{backgroundColor:'#744A61',color:'white',maxHeight:'0.3rem', fontSize:'0.1em'}}>
                            <span>Venez</span>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:'2rem'}}>
                      <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                          <div className="carousel-inner">
                            <div className="carousel-item  active">
                                <div className="row" style={{paddingLeft:"1%"}}>
                                  {this.state.sites.slice(this.state.indexSiteBeggin,this.state.indexSiteEnd).map((site, index) => (
                                        <div className="col-3" key={index}>
                                          <img key={index}  id='site1' onClick={()=>this.showModaleSites(site)} className="d-block w-100" src={site.image[0]}  alt="First slide"/>
                                        </div>
                                  ))}
                                </div>
                            </div>
                          </div>
                          <a id ="sitesPreviousButton" className="carousel-control-prev"  role="button">
                            <span   className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a id ="sitesNextButton" className="carousel-control-next"  role="button">
                            <span  className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span  className="sr-only">Next</span>
                          </a>
                          </div>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-12" style={{marginTop:"4%",marginBottom:"2%"}}>
                          <div className="row">
                            <div className="col-2">
                              <div className="col-12">

                              </div>
                            </div>
                            <div className="col-7 pub" >
                              <div className="col-12 degrade">
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
                      </div>
                    </div>
                    <div className="row modaleSites" id="modaleSites" style={{position:"fixed",top:"2%",left:'15%',zIndex:"999",minWidth:"70%",maxWidth:"70%",minHeight:"96%",maxHeight:"96%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 3px 6px #00000029",border: "1px solid #B0B0B0",borderRadius: "53px"}}>
                      <div className="col-12" style={{textAlign:'right', paddingRight:'4rem',paddingTop:'1rem'}}>
                        <span onClick={()=>this.hideModaleSites()} style={{backgroundColor:'#B0B0B0',textAlign:'right', paddingBottom:'0.5rem',paddingTop:'0.5rem', paddingLeft:'0.8rem',paddingRight:'0.8rem',border: '1px solid #B0B0B0',borderRadius:'50%'}}>
                          X-
                        </span>
                      </div>
                      <div className="col-12" style={{paddingTop:'-4rem'}}>
                        <div className="row">
                            <div className="col-8">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row carousel-innerMod1" style={{marginTop:'0rem'}}>
                                    <div className="col-12">
                                      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                          <div className="carousel-item  active">
                                              <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[0]}  alt="First slide"/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[0]}  alt="Second slide"/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[0]}  alt="Third slide"/>
                                          </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-1">
                                </div>
                                <div className="col-2">
                                  <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[0]}  alt="First slide" style={{maxWidth: '72% !important'}}/>
                                </div>
                                <div className="col-2">
                                  <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[1]}  alt="First slide" style={{maxWidth: '72% !important'}}/>
                                </div>
                                <div className="col-2">
                                  <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[2]}  alt="First slide" style={{maxWidth: '72% !important'}}/>
                                </div>
                                <div className="col-2">
                                  <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[3]}  alt="First slide" style={{maxWidth: '72% !important'}}/>
                                </div>
                                <div className="col-2">
                                  <img  className="d-block w-100 imagesSelected" src={this.state.siteSelected.image[4]}  alt="First slide" style={{maxWidth: '72% !important'}}/>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12" style={{paddingTop:'1rem',paddingLeft:'3rem'}}>
                                  <span style={{padding:'0.5rem',fontSize:"1.5em",textAlign: 'left',font: 'Regular 32px/38px Glacial Indifference',letterSpacing: '0px',color: '#FFFFFF',background: "#5283C6 0% 0% no-repeat padding-box",border: "1px solid #FFFFFF",borderRadius: "2px"}}>
                                    Contacter: {this.state.siteSelected.contacte}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="col-4" style={{paddingTop:'2.5rem'}}>
                              <div className="row">
                                <div className="col-12">
                                  <h3 style={{fontSize:"0.5em",textAlign:'left', color:'#744A61',font: 'Bold 34px/41px Glacial Indifference'}}>
                                    <b id='titreSiteSeclected'>LAC ROSE</b>
                                  </h3>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12" id='descriptionSelected'>
                                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                </div>
                              </div>
                              <div className="row pubmodal" style={{border:'1px solid black',marginTop:"2rem",width:"100%"}}>
                                <div className="col-12" style={{minHeight:'15rem'}}>
                                  <span  className="reduc">
                                     -15
                                  </span>
                                  <span className="titre">
                                     Du nouveau chez Biramawa
                                  </span>
                                  <span className="plus">
                                     En savoir plus
                                  </span>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <h3 style={{fontSize:"0.5em",textAlign:'center', color:'#744A61',font: 'Bold 34px/41px Glacial Indifference'}}>
                              <b>AUTRES SITES SIMILAIRES</b>
                            </h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1">
                          </div>

                          <div className="col-2">
                            <img id="autresSitesCimilaires1" onClick={()=>this.showModaleSites(this.state.sites[0])}   className="d-block w-100" src={this.state.sites[0].image[0]}  alt="First slide"/>
                          </div>
                          <div className="col-2">
                            <img id="autresSitesCimilaires2" onClick={()=>this.showModaleSites(this.state.sites[1])}   className="d-block w-100" src={this.state.sites[1].image[0]}  alt="First slide"/>
                          </div>
                          <div className="col-2">
                            <img  id="autresSitesCimilaires3" onClick={()=>this.showModaleSites(this.state.sites[2])}   className="d-block w-100" src={this.state.sites[2].image[0]}  alt="First slide"/>
                          </div>
                          <div className="col-2">
                            <img id="autresSitesCimilaires4"  onClick={()=>this.showModaleSites(this.state.sites[3])}   className="d-block w-100" src={this.state.sites[3].image[0]}  alt="First slide"/>
                          </div>
                          <div className="col-2">
                            <img id="autresSitesCimilaires5" onClick={()=>this.showModaleSites(this.state.sites[4])}   className="d-block w-100" src={this.state.sites[4].image[0]}  alt="First slide"/>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="row" id="sect3" style={{marginTop:'10rem'}}>
                  <div className="col-12" >
                    <div className="row titre1" >
                      <div className="col-12">
                        <h1>
                            <b>HÉBERGEMENT</b>
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-5">
                      </div>
                      <div className="col-2

                        " style={{backgroundColor:'#744A61',color:'white',maxHeight:'0.3rem', fontSize:'0.1em'}}>
                            <span>Venez</span>
                      </div>
                    </div>
                    <div className="row carousel-inner2" style={{marginTop:'2rem'}}>
                      <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row" style={{paddingLeft:"8%"}}>
                                  {this.state.hebergements.slice(this.state.indexHebergementBeggin,this.state.indexHebergementEnd).map((heb, index) => (
                                        <div key={index} className="col-3" style={{marginLeft:'4%'}}>
                                          <img key={index} id='hebergement1' onClick={()=>this.showModaleHebergement(heb)} className="d-block w-100" src={heb.image[0]}  alt="First slide"/>
                                        </div>
                                  ))}
                                </div>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src={logotrips}  alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src={logotrips}  alt="Third slide"/>
                            </div>
                          </div>
                          <a id='hebergementsPreviousButton' className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a id='hebergementsNextButton' className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                          </div>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-12" style={{marginTop:"4%",marginBottom:"2%"}}>
                          <div className="row">
                            <div className="col-2">
                              <div className="col-12">

                              </div>
                            </div>
                            <div className="col-7 pub" >
                              <div className="col-12 degrade">
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
                      </div>
                    </div>

                    <div className="row modaleHebergement" id="modaleHebergement" style={{position:"fixed",top:"2%",left:'15%',zIndex:"999",minWidth:"70%",maxWidth:"70%",minHeight:"96%",maxHeight:"96%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 3px 6px #00000029",border: "1px solid #B0B0B0",borderRadius: "53px"}}>
                      <div className="col-12" style={{textAlign:'right', paddingRight:'4rem',paddingTop:'1rem'}}>
                        <span onClick={()=>this.hideModaleHebergement()} style={{backgroundColor:'#B0B0B0',textAlign:'right', paddingBottom:'0.5rem',paddingTop:'0.5rem', paddingLeft:'0.8rem',paddingRight:'0.8rem',border: '1px solid #B0B0B0',borderRadius:'50%'}}>
                          X
                        </span>
                      </div>
                      <div className="col-12">
                        <div className="row">
                            <div className="col-8">
                              <div className="row">
                                <div className="col-12">
                                  <div className="row carousel-innerMod1" style={{marginTop:'0rem'}}>
                                    <div className="col-12">
                                      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                                        <ol className="carousel-indicators">
                                          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                        </ol>
                                        <div className="carousel-inner">
                                          <div className="carousel-item  active">
                                              <img className="d-block w-100 imagesSelectedHeber" src={this.state.imgHebergementSelected}  alt="First slide"/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100 imagesSelectedHeber" src={this.state.imgHebergementSelected}  alt="Second slide"/>
                                          </div>
                                          <div className="carousel-item">
                                            <img className="d-block w-100 imagesSelectedHeber" src={this.state.imgHebergementSelected}  alt="Third slide"/>
                                          </div>
                                        </div>
                                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Previous</span>
                                        </a>
                                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                          <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                          <span className="sr-only">Next</span>
                                        </a>
                                        </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div className="row" style={{marginTop:"-2rem"}}>
                                <div className="col-12" style={{paddingTop:'1rem',paddingLeft:'3rem'}}>
                                  <span style={{padding:'0.5rem',fontSize:"1.5em",textAlign: 'left',font: 'Regular 32px/38px Glacial Indifference',letterSpacing: '0px',color: '#FFFFFF',background: "#5283C6 0% 0% no-repeat padding-box",border: "1px solid #FFFFFF",borderRadius: "2px"}}>
                                    Contacter: {this.state.hebergemeSelected.contacte}
                                  </span>
                                </div>
                              </div>

                            </div>
                            <div className="col-4" style={{paddingTop:'2.5rem'}}>
                              <div className="row">
                                <div className="col-12">
                                  <h3 style={{fontSize:"0.5em",textAlign:'left', color:'#744A61',font: 'Bold 34px/41px Glacial Indifference'}}>
                                    <b id="hebergemeSelectedtitre">LAC ROSE</b>
                                  </h3>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12" id="hebergemeSelectedDescrip">
                                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
                                </div>
                              </div>
                              <div className="row pubmodal" style={{border:'1px solid black',marginTop:"2rem",width:"100%"}}>
                                <div className="col-12" style={{minHeight:'15rem'}}>
                                  <span  className="reduc">
                                     -15
                                  </span>
                                  <span className="titre">
                                     Du nouveau chez Biramawa
                                  </span>
                                  <span className="plus">
                                     En savoir plus
                                  </span>
                                </div>
                              </div>
                            </div>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="row">
                          <div className="col-12">
                            <h3 style={{fontSize:"0.5em",textAlign:'center', color:'#744A61',font: 'Bold 34px/41px Glacial Indifference'}}>
                              <b>HÉBERGEMENTS SIMILAIRES</b>
                            </h3>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-1">
                          </div>
                          <div className="col-2">
                            <img id='autreHebergment1'  onClick={()=> this.setState({imgHebergementSelected:this.state.hebergemeSelected.image[0]})}  className="d-block w-100" src={this.state.hebergemeSelected.image[0]}  alt="First slide" style={{maxHeight:"7rem"}}/>
                          </div>
                          <div className="col-2">
                            <img id='autreHebergment2' onClick={()=> this.setState({imgHebergementSelected:this.state.hebergemeSelected.image[1]})}  className="d-block w-100" src={this.state.hebergemeSelected.image[1]}  alt="First slide" style={{maxHeight:"7rem"}}/>
                          </div>
                          <div className="col-2">
                            <img id='autreHebergment3' onClick={()=> this.setState({imgHebergementSelected:this.state.hebergemeSelected.image[2]})}  className="d-block w-100" src={this.state.hebergemeSelected.image[2]}  alt="First slide" style={{maxHeight:"7rem"}}/>
                          </div>
                          <div className="col-2">
                            <img id='autreHebergment4' onClick={()=> this.setState({imgHebergementSelected:this.state.hebergemeSelected.image[3]})}  className="d-block w-100" src={this.state.hebergemeSelected.image[3]}  alt="First slide" style={{maxHeight:"7rem"}}/>
                          </div>
                          <div className="col-2">
                            <img id='autreHebergment5' onClick={()=> this.setState({imgHebergementSelected:this.state.hebergemeSelected.image[4]})}  className="d-block w-100" src={this.state.hebergemeSelected.image[4]}  alt="First slide" style={{maxHeight:"7rem"}}/>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row" id="sect4" style={{marginTop:'10rem'}}>
                  <div className="col-12" >
                    <div className="row titre1" >
                      <div className="col-12">
                        <h1>
                            <b>NOS PARTENAIRES</b>
                        </h1>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-5">
                      </div>
                      <div className="col-2

                        " style={{backgroundColor:'#744A61',color:'white',maxHeight:'0.3rem', fontSize:'0.1em'}}>
                            <span>Venez</span>
                      </div>
                    </div>
                    <div className="row carousel-inner3" style={{marginTop:'2rem'}}>
                      <div className="col-12">
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                          <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                          </ol>
                          <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="row">
                                  <div className="col-1">
                                  </div>
                                  {this.state.partenaires.slice(this.state.indexPartenaireBeggin,this.state.indexPartenaireEnd).map((part, index) => (
                                        <div className="col-2" key={index}>
                                          <img key={index} id='partenaire1' className="d-block w-100" src={part.image}  alt="First slide"/>
                                        </div>
                                  ))}

                                </div>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src={logotrips}  alt="Second slide"/>
                            </div>
                            <div className="carousel-item">
                              <img className="d-block w-100" src={logotrips}  alt="Third slide"/>
                            </div>
                          </div>
                          <a  id="partenairePreviousButton" className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                          </a>
                          <a  id="partenaireNextButton" className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                          </a>
                          </div>
                      </div>
                    </div>
                    <div className="row" style={{marginTop:'10rem'}}>
                      <div className="col-12 foot"  style={{backgroundColor:'#744A61',bottom:'0',teft:'6rem'}}>
                        <div className="row">
                          <div className="col-3">
                            <h1 style={{textAlign:'right',fontSize: '1.8em',letterSpacing: '0px !important',color: '#FFFFFF !important'}}>
                                  Qui sommes-nous ?
                            </h1>
                          </div>
                          <div className="col-3">
                            <h1 style={{paddingLeft:'1rem',textAlign:'left',fontSize: '1.8em',letterSpacing: '0px !important',color: '#FFFFFF !important'}}>
                                  Nous contacter :
                            </h1>
                            <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '1em'}}>
                              <i className="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                            </p>
                            <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '1em'}}>
                              <i className="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
                            </p>
                          </div>
                          <div className="col-3">
                            <p>
                                  Conditions d'utilisation du <br/> site et chartes de diffusion <br/> de publicité
                            </p>
                            <p>
                                  Politique de confidentialité
                            </p>
                          </div>
                          <div className="col-3">
                            <h1 style={{textAlign:'center',fontSize: '1.8em',letterSpacing: '0px !important',color: '#FFFFFF !important'}}>
                                Suivez-nous :
                            </h1>
                            <div className="row">
                              <div className="col-2">
                              </div>
                              <div className="col-2">
                                <img style={{maxWidth:'2.5rem'}} className="d-block w-100" src={facebook}  alt="Third slide"/>
                              </div>
                              <div className="col-2">
                                <img style={{maxWidth:'2.5rem'}} className="d-block w-100" src={twiter}  alt="Third slide"/>
                              </div>
                              <div className="col-2">
                                <img style={{maxWidth:'2.5rem'}} className="d-block w-100" src={linkedin}  alt="Third slide"/>
                              </div>
                              <div className="col-2">
                                <img style={{maxWidth:'2.5rem'}} className="d-block w-100" src={instagram}  alt="Third slide"/>
                              </div>
                              <div className="col-2">
                              </div>
                            </div>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          <div className="row" >
              <div className="col-12 mobile" style={{padding:"0"}}>
                <div className="row">
                    <div className="col-12">
                      <div  className="row" id="menuMobile">
                        <div  className="col-5" style={{paddingLeft:'2rem',paddingTop:'-2rem'}}>
                           <img src={logo1} alt="facebook" style={{width:"3rem"}} />
                        </div>
                        <div  className="col-5" style={{paddingLeft:'2rem',paddingTop:'-2rem'}}>
                          <img src={sn} alt="facebook" style={{width:"3rem"}} />
                        </div>
                        <div  className="col-2" style={{paddingTop:"0.5rem"}}>
                          <i id="menubars" className="fas fa-bars" style={{fontSize:"2.4em"}}></i>
                        </div>
                      </div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-12" id='carhome'>
                          <div  className="row">
                            <div  className="col-12">
                              <div id="mm">
                                <div  className="col-12">
                                  <span style={{color:'#AD5793'}} id="fermermenumobile">
                                    X
                                  </span>
                                 </div>
                                  <div id="logo">
                                    <img src={logo1} alt="logo" />
                                  </div>
                                  <ul id="ul" >
                                    <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" /><Link to="/">BIRAWAMA</Link></span></li>
                                    <li ><Link to="/car">BIRAWAMA CAR</Link></li>
                                    <li ><Link to="/trip">BIRAWAMA TRIP</Link><img src={sn} alt="facebook" style={{width:"3rem"}} /><img src={sn} alt="facebook" style={{width:"3rem"}} /></li>
                                    <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                                  </ul>
                              </div>
                              <div id="trianglemm" ></div>

                            </div>
                          </div>
                        </div>
                </div>
                <div  className="col-12" id="tripAcceuilMobile">
                    <div className="row" id="bodyMobile">
                        <div className="col-12">
                          <p style={{font: "Bold 26px/32px Montserrat",color: "#FFD93D",textAlign:"center",marginTop:"2rem"}}>
                             BIRAMAWA TRIP
                          </p>
                        </div>
                        <div className="col-12">
                          <p style={{font: "Regular 18px/22px Glacial Indifference",color: "#FFFFFF",textAlign:"center",marginTop:"1rem"}}>
                            VENEZ VISITER LE SENEGAL
                          </p>
                        </div>
                        <div  className="col-12" >
                          <form style={{marginLeft:"10%",marginTop:"2%",width:"auto"}} className="from-inline">
                            <input type="search" style={{color:"#FFFFFF !important",borderRadius: '14px 0px 0px 14px',border: "1px solid #E4E4E4",background:'transparent'}}/>
                            <input style={{borderRadius: '14px',border: "1px solid #FFFFFF",backgroundColor:"#FFFFFF",marginLeft:"-1rem",opacity: "1",font: "Regular 18px/21px Arial",letterSpacing:"0px"}} type="button" value="Recherche" />
                          </form>
                        </div>
                        <div  className="col-12" style={{marginTop:"2rem",textAlign:"center"}}>
                          <div id='pubmm' className="pubmm" style={{height:'20rem',width:"90%",marginLeft:'0rem'}}>
                            <div className="col-12 degrade" id='degrade' style={{width:"90%",marginLeft:'0.8rem'}}>
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
                    <div  className="row">
                      <div className="col-12">
                          <div  className="row" style={{width:"96%",margin:"2%"}}>
                            <div  className="col-12" style={{paddingTop:"30%",textAlign:"center",minHeight:"15rem",marginTop:"0rem"}} id="siteMenuMobile">
                              <span onClick={()=>this.switchP(2)} style={{color: "#FCFCFC",font: "Regular 31px/35px Montserrat",border: "3px solid #FFFFFF",transform: "matrix(-1, 0, 0, -1, 0, 0)"}}  >
                                SITES D'EXCEPTION
                              </span>
                            </div>
                          </div>
                          <div  className="row" style={{width:"96%",margin:"2%"}}>
                            <div  className="col-12" style={{paddingTop:"30%",textAlign:"center",minHeight:"15rem",marginTop:"0rem"}} id="mebergMenuMobile">
                              <span  onClick={()=>this.switchP(3)} style={{color: "#FCFCFC",font: "Regular 31px/35px Montserrat",border: "3px solid #FFFFFF",transform: "matrix(-1, 0, 0, -1, 0, 0)"}}  >
                                HEBERGEMENTS
                              </span>
                            </div>
                          </div>
                          <div  className="row" style={{textAlign:"center",width:"96%",margin:"2%"}}>
                            <div  className="col-12" style={{paddingTop:"30%",minHeight:"15rem",marginTop:"0rem"}} id="voitureMenuMobile">
                              <span  onClick={()=>this.switchP(4)} style={{color: "#FCFCFC",font: "Regular 31px/35px Montserrat",border: "3px solid #FFFFFF",transform: "matrix(-1, 0, 0, -1, 0, 0)"}} >
                                NOS VOITURES
                              </span>
                            </div>
                          </div>

                          <div  className="row">
                            <div  className="col-12" style={{textAlign:"center",marginTop:"2rem"}}>
                              <p>
                                <span style={{textAlign:"center",font: "Regular 29px/35px Montserrat",color: "#744A61",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow:"0px 1px 5px #00000029",border: "1px solid #744A61"}}>
                                  NOS PARTENAIRES
                                </span>
                              </p>
                            </div>
                          </div>
                          <div className="col-12">
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
                                    <i className="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                  </p>
                                </div>
                              </div>
                              <div  className="row" >
                                <div  className="col-12" >
                                  <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                    <i className="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
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
                <div  className="row">
                  <div  className="col-12" style={{marginTop:"0rem",textAlign:"center"}}>
                    <div className="row" id="sitesExeptionMobile">
                      <div className="col-12">
                        <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                          <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> SITE D'EXEPTION
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row" style={{width:"98%",marginLeft:"1%"}}>

                          {this.state.sites.slice(this.state.indexSiteBeggin,this.state.indexSiteEnd).map((site, index) => (
                            <div className="col-12" style={{border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                              <div className="row">
                                <div className="col-12">
                                    <img onClick={()=>this.selectsiteMobile(site)} src={site.image[0]} alt="facebook" style={{width:"100%"}} />
                                  </div>
                                </div>
                                <div className="col-12" style={{position:"absolute",top:"40%",left:"2%"}}>
                                  <p style={{color: "#050505",font: "Bold 20px/24px Glacial Indifference"}}>
                                      <span style={{padding:"1rem",borderRadius: "41px",border: "2px solid #FCFCFC",color: "#FCFCFC",font: "Bold 17px/20px Glacial Indifference"}}>{site.titre}</span>
                                  </p>
                                </div>
                            </div>
                          ))}
                          <div className="col-12" style={{marginTop: "2rem"}}>
                            <p style={{textAlign: "center",font: "Bold 20px/24px Glacial Indifference"}}>
                                <span onClick={()=>this.voirPlussite()}  style={{padding:"0.5rem",borderRadius: "11px",boxShadow: "0px 0px 3px #00000029",background: "#FFFFFF 0% 0% no-repeat padding-box"}}><i className="fa fa-arrow-down"></i> voir plus</span>
                            </p>
                          </div>

                          <div className="col-12">
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
                                    <i className="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                  </p>
                                </div>
                              </div>
                              <div  className="row" >
                                <div  className="col-12" >
                                  <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                    <i className="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
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
                    <div className="row" id="hebergementMobile">
                      <div className="col-12">
                        <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                          <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> HEBERGEMENT
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row" style={{width:"98%",marginLeft:"1%"}}>
                          {this.state.hebergements.slice(this.state.indexHebergementBeggin,this.state.indexHebergementEnd).map((heb, index) => (
                            <div key={index} className="col-12" style={{boxShadow: "0px 1px 5px #00000063",border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                              <div className="row">
                                <div className="col-12">
                                    <img onClick={()=>this.selectedHeberg(heb)} src={heb.image[0]} alt="facebook" style={{width:"100%"}} />
                                  </div>
                                </div>
                                <div className="col-12">
                                  <p style={{textAlign: "center"}}>
                                      <span style={{color: "#744A61",font: "Bold 16px/19px Glacial Indifference"}}><i className="fas fa-map-marker-alt"></i> {heb.lieux}</span>
                                  </p>
                                  <p style={{textAlign: "center"}}>
                                      <span style={{color: "#744A61",font: "Bold 23px/28px Glacial Indifference"}}>{heb.titre}</span>
                                  </p>
                                </div>
                            </div>
                          ))}

                          <div className="col-12" style={{marginTop: "2rem"}}>
                            <p style={{textAlign: "center",font: "Bold 20px/24px Glacial Indifference"}}>
                                <span onClick={()=>this.heberPlus()} style={{padding:"0.5rem",borderRadius: "11px",boxShadow: "0px 0px 3px #00000029",background: "#FFFFFF 0% 0% no-repeat padding-box"}}><i className="fa fa-arrow-down"></i> voir plus</span>
                            </p>
                          </div>

                          <div className="col-12">
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
                                    <i className="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                  </p>
                                </div>
                              </div>
                              <div  className="row" >
                                <div  className="col-12" >
                                  <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                    <i className="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
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
                    <div className="row" id="voirturetMobile">
                      <div className="col-12" id='carplus' style={{marginTop:"1rem"}}>
                      <div className="row">
                        <div className="col-12">
                          <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                            <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> Page Précédente
                          </p>
                        </div>
                      </div>
                      <div className="row" style={{width:"98%",marginLeft:"1%"}}>
                        {this.state.voitures.slice(this.state.indexCarBeggin,this.state.indexCarEnd).map((voiture, index) => (
                          <div key={index} className="col-12" style={{border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                            <div className="row">
                              <div className="col-12">
                                  <img onClick={()=>{this.selectedVoit(voiture)}} src={voiture.image.v1} alt="facebook" style={{width:"100%"}} />
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <p style={{color: "#050505",font: "Bold 20px/24px Glacial Indifference"}}>
                                      {voiture.nom}
                                  </p>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col-12">
                                  <p style={{color: "#744A61",font: "Bold 23px/28px Glacial Indifference"}}>
                                      {voiture.prix}
                                  </p>
                                </div>
                              </div>
                          </div>
                        ))}

                        <div className="col-12" style={{marginTop: "2rem"}}>
                          <p style={{textAlign: "center",font: "Bold 20px/24px Glacial Indifference"}}>
                              <span onClick={()=>this.voituresPlus()} style={{padding:"0.5rem",borderRadius: "11px",boxShadow: "0px 0px 3px #00000029",background: "#FFFFFF 0% 0% no-repeat padding-box"}}><i className="fa fa-arrow-down"></i> voir plus</span>
                          </p>
                        </div>
                        <div className="col-12">
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
                                  <i className="fa fa-envelope " style={{color:'#77B5FE'}}></i> contacte@biramawa.com
                                </p>
                              </div>
                            </div>
                            <div  className="row" >
                              <div  className="col-12" >
                                <p style={{paddingLeft:'1rem',textAlign:'left',fontSize: '0.8em',color:"white"}}>
                                  <i className="fa fa-phone " style={{color:'#77B5FE'}}></i> +33652930592
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
                    <div className="row" id="siteDetailMobile">
                      <div className="col-12">
                        <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                          <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> {this.state.siteSelected.nom}
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row" style={{width:"98%",marginLeft:"1%"}}>
                          <div className="col-12" style={{boxShadow: "0px 1px 5px #00000063",border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                            <div className="row">
                              <div className="col-12">
                                  <img src={this.state.siteSelected.image[0]} alt="facebook" style={{width:"100%"}} />
                                </div>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                              <div className="col-12">
                                <p style={{textAlign: "center",font: "Bold 25px/30px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.siteSelected.nom}
                                </p>
                                <p style={{textAlign: "center",font: "Regular 20px/24px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.siteSelected.description}
                                </p>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                            <div className="row" >
                              <div className="col-6">
                                <div className="row" style={{width:"80%",textAlign:"center",color: "#FFFFFF",font: "Regular 15px/18px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#5283C6"}}>

                                      Contacter <br/> {this.state.siteSelected.contacte}

                                </div>
                              </div>
                              <div className="col-6" >
                                <div className="row" style={{padding:"0.6rem",width:"60%",marginLeft:"20%",boxShadow: "0px 3px 6px #00000029",color: "#744A61",font: "Regular 21px/25px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#FFFFFF"}}>
                                    <span onClick={()=>this.switchP(1)}>
                                      Fermer
                                    </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" id="hebergemantDetailMobile">
                      <div className="col-12">
                        <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                          <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> {this.state.hebergemeSelected.nom}
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row" style={{width:"98%",marginLeft:"1%"}}>
                          <div className="col-12" style={{boxShadow: "0px 1px 5px #00000063",border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                            <div className="row">
                              <div className="col-12">
                                  <img src={this.state.hebergemeSelected.image[0]} alt="facebook" style={{width:"100%"}} />
                                </div>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                              <div className="col-12">
                                <p style={{textAlign: "center",font: "Bold 25px/30px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.hebergemeSelected.nom}
                                </p>
                                <p style={{textAlign: "center",font: "Regular 20px/24px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.hebergemeSelected.description}
                                </p>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                            <div className="row" >
                              <div className="col-6">
                                <div className="row" style={{width:"80%",textAlign:"center",color: "#FFFFFF",font: "Regular 15px/18px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#5283C6"}}>

                                      Contacter <br/> {this.state.hebergemeSelected.contacte}

                                </div>
                              </div>
                              <div className="col-6" >
                                <div className="row" style={{padding:"0.6rem",width:"60%",marginLeft:"20%",boxShadow: "0px 3px 6px #00000029",color: "#744A61",font: "Regular 21px/25px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#FFFFFF"}}>
                                    <span onClick={()=>this.switchP(1)}>
                                      Fermer
                                    </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" id="voitureDetailMobile">
                      <div className="col-12">
                        <p style={{marginTop:"2rem",font: "Bold 25px/30px Glacial Indifference",color: "#744A61",textAlign:"center"}}>
                          <i onClick={()=>this.switchP(1)} className="fas fa-angle-left" style={{padding:"0.2rem",color:"#FFD030",border: "2px solid #FFD030",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 0px 3px #00000029",borderRadius: "8px"}}></i> {this.state.selectedVoiture.nom}
                        </p>
                      </div>
                      <div className="col-12">
                        <div className="row" style={{width:"98%",marginLeft:"1%"}}>
                          <div className="col-12" style={{boxShadow: "0px 1px 5px #00000063",border: "1px solid #E4E4E4",padding:'1rem',marginTop:"1rem"}}>
                            <div className="row">
                              <div className="col-12">
                                  <img src={this.state.selectedVoiture.image.v1} alt="facebook" style={{width:"100%"}} />
                                </div>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                              <div className="col-12">
                                <p style={{textAlign: "center",font: "Bold 25px/30px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.selectedVoiture.prix} CFA
                                </p>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                              <div className="col-12">
                                <p style={{textAlign: "center",font: "Bold 25px/30px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.selectedVoiture.nom}
                                </p>
                                <p style={{textAlign: "center",font: "Regular 20px/24px Glacial Indifference",color: "#744A61"}}>
                                  {this.state.selectedVoiture.description}
                                </p>
                              </div>
                          </div>
                          <div className="col-12" style={{padding:'1rem',marginTop:"1rem"}}>
                            <div className="row" >
                              <div className="col-6">
                                <div className="row" style={{width:"80%",textAlign:"center",color: "#FFFFFF",font: "Regular 15px/18px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#5283C6"}}>

                                      Contacter <br/> {this.state.selectedVoiture.contacte}

                                </div>
                              </div>
                              <div className="col-6" >
                                <div className="row" style={{padding:"0.6rem",width:"60%",marginLeft:"20%",boxShadow: "0px 3px 6px #00000029",color: "#744A61",font: "Regular 21px/25px Glacial Indifference",border: "1px solid #FFFFFF",borderRadius: "2px",backgroundColor: "#FFFFFF"}}>
                                    <span onClick={()=>this.switchP(1)}>
                                      Fermer
                                    </span>
                                </div>
                              </div>
                            </div>
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

export default Trip;
