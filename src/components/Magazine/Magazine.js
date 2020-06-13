import React, { useRef ,Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import home from '../../static/images/home.png';
import logo1 from '../../static/images/logo.png';
import FlipPage from 'react-flip-page';
import FlipPageMobile from 'react-flip-page';
import './Magazine.scss';
import $ from 'jquery';
import sn from '../../static/images/sn.png';
import page1 from '../../static/images/page1.png';
import page2 from '../../static/images/page7.png';
import page3 from '../../static/images/page3.png';
import page4 from '../../static/images/page6.png';
import page5 from '../../static/images/page5.png';
import page6 from '../../static/images/page6.png';

import mag1 from '../../static/images/mag1.png';
import mag2 from '../../static/images/mag2.png';
import mag3 from '../../static/images/mag3.png';
import magazine2 from '../../static/images/magazine2.jpeg';
import magazine3 from '../../static/images/magazine3.jpeg';
import logotrips from '../../static/images/logotrips.png';
import etendre from '../../static/images/etendre.png';
import axios from 'axios';
import Book from 'react-page-flip'
import Flipbook from 'flipbook-vue/src/Flipbook.vue'

class Magazine extends Component {

    state = {  }
    // host = "http://localhost/backend-birawam-slim/index.php/";
    host = "http://web-biramawa.com/backend-birawam-slim/index.php/"
    flipPage = this;
    flipPageMobile = this;

    onNext = () => {
      this.flipPage.gotoNextPage();
    };

    onPrev = () => {
      this.flipPage.gotoPreviousPage();
    };

    onNextMobile = () => {
      this.flipPageMobile.gotoNextPage();
    };

    onPrevMobile = () => {
      this.flipPageMobile.gotoPreviousPage();
    };

    magazineSave =  [
        {
          id:1,
          nom: "magazine 1",
          couverture: mag1,
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        },
        {
          id:2,
          nom: "magazine 2",
          couverture: magazine2,
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        },
        {
          id:3,
          couverture: magazine3,
          nom: "magazine 3",
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        }
        ,
        {
          id:4,
          couverture: mag1,
          nom: "magazine 4",
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        }
        ,
        {
          id:5,
          couverture: mag1,
          nom: "magazine 5",
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        },,
        {
          id:1,
          nom: "magazine 1",
          couverture: mag1,
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        },
        {
          id:2,
          nom: "magazine 2",
          couverture: magazine2,
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
        },
        {
          id:3,
          couverture: magazine3,
          nom: "magazine 3",
          date:'01-05-2020',
          pages: [page1,page2,page3,page4,page5,page6]
        }
      ]
    magazines = [
      {
        id:1,
        nom: "magazine 1",
        couverture: mag1,
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
      },
      {
        id:2,
        nom: "magazine 2",
        couverture: magazine2,
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
      },
      {
        id:3,
        couverture: magazine3,
        nom: "magazine 3",
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6]
      },
      {
        id:1,
        nom: "magazine 1",
        couverture: mag1,
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
      },
      {
        id:2,
        nom: "magazine 2",
        couverture: magazine2,
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6,page1,page2,page3,page4,page5,page6]
      },
      {
        id:3,
        couverture: magazine3,
        nom: "magazine 3",
        date:'01-05-2020',
        pages: [page1,page2,page3,page4,page5,page6]
      }
    ]

    selectedmagazine = {
      id:3,
      couverture: mag1,
      nom: "magazine 3",
      date:'01-05-2020',
      pages: [page1,page2,page3,page4,page5,page6]
    };

    selectedPage = page1;

    pageIndex = 0;
    magazineIndex = 0;

    async getDatasCars(){

      let url = this.host + "magazine/magazines";

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

            console.log(datas)
            // this.voitures = [];

            // (datas.message).forEach((item, i) => {
            //   let el  = {};
            //   let image = {};
            //    item.image = item.image.split(",");
            //    el.id = item.id;
            //    el.Marque = item.marque;
            //    el.Model = item.model;
            //    el.Annee = item.annee;
            //    el.Kilometrage = item.kilometrage;
            //    el.carburant = item.carburant;
            //    el.boiteVitesse = item.boiteVitesse;
            //    el.nom = item.nom;
            //    el.description = item.description;
            //    el.prix = item.prix;
            //    if(item.image.length==1){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[0];
            //      image.v3 = item.image[0];
            //      image.v4 = item.image[0];
            //      image.v5 = item.image[0];
            //      image.v6 = item.image[0];
            //       el.image = image;
            //    }
            //    else if(item.image.length==2){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[1];
            //      image.v3 = item.image[0];
            //      image.v4 = item.image[1];
            //      image.v5 = item.image[0];
            //      image.v6 = item.image[1];
            //       el.image = image;
            //    }
            //    else if(item.image.length==3){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[1];
            //      image.v3 = item.image[2];
            //      image.v4 = item.image[0];
            //      image.v5 = item.image[1];
            //      image.v6 = item.image[2];
            //       el.image = image;
            //    }
            //    else if(item.image.length==4){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[1];
            //      image.v3 = item.image[2];
            //      image.v4 = item.image[3];
            //      image.v5 = item.image[0];
            //      image.v6 = item.image[1];
            //       el.image = image;
            //    }
            //
            //    else if(item.image.length==5){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[1];
            //      image.v3 = item.image[2];
            //      image.v4 = item.image[3];
            //      image.v5 = item.image[4];
            //      image.v6 = item.image[0];
            //       el.image = image;
            //    }
            //    else if(item.image.length>=6){
            //      image.v1 = item.image[0];
            //      image.v2 = item.image[1];
            //      image.v3 = item.image[2];
            //      image.v4 = item.image[3];
            //      image.v5 = item.image[4];
            //      image.v6 = item.image[5];
            //      el.image = image;
            //    }
            //
            //    this.voitures.push(el);
            //
            // });


            console.log(this.voitures);
            this.setState({voitures:this.voitures,selectedVoiture:this.voitures[0]});
          }else
            console.log(rep);
        });

    }


    hauteurPage(){
      $(document).ready(()=>{
          document.getElementById("container").style.minHeight="100vh";
          document.getElementById("container").style.maxHeight="100vh";
      });

    }

    clearInterval(){
        let idI=parseInt(sessionStorage.getItem("idInterval"));
        console.log(idI);
        clearInterval(idI);
      }

    constructor(props){
        super(props);

        (this.magazines)[0] = this.magazineSave[0];
        (this.magazines)[1] = this.magazineSave[1];
        (this.magazines)[2] = this.magazineSave[2];

        this.state = {indexSite:3,indexMagBeggin:0,indexMagEnd:3,indexPageBeggin:0,indexPageEnd:6,zoom:1,date: new Date(),magazines:this.magazines,selectedmagazine:this.magazines[0],selectedPage:this.selectedPage,indexPage:this.pageIndex,magazineIndex:2};

        this.clearInterval();
        // this.hauteurPage();


        $("document").ready(()=>{
            this.switchV();
            console.log(this.state.selectedmagazine);
            this.getDatasMagazines();
            //document.getElementById("bodyMobileTrip").style.backgroundImage="url('../../static/images/bgmobtrip.png')";
            if (window.matchMedia("(max-width: 700px)").matches) {
              /* The viewport is less than, or equal to, 700 pixels wide */
              //(document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block';
              console.log("mobile");
              document.querySelector(".desktop").style.display="none";
              (document.querySelector("#fermermenumobile")).addEventListener('click',function(e){
                  e.preventDefault();
                  (document.querySelector("#mm")).style.display="none";
                  (document.querySelector("#trianglemm")).style.display="none";
              });
              //
              (document.querySelector("#menubars")).addEventListener('click',function(e){
                  e.preventDefault();
                  (document.querySelector("#mm")).style.display="block";
                  (document.querySelector("#trianglemm")).style.display="block";
                  let hmm=$("#mm").innerHeight();

                  document.getElementById("trianglemm").style.position="fixed";

                  document.getElementById("trianglemm").style.top=hmm+"px";
              });

              (document.getElementById('magazineNextButtonmm')).addEventListener('click',(e)=>{
                 e.preventDefault();
                 this.nextMagazine();
              });

              (document.getElementById('magazinePreviousButtonmm')).addEventListener('click',(e)=>{
                 e.preventDefault();
                 this.previousMagazine();
              });



            }
            else {
              /* The viewport is greater than 700 pixels wide */
              // (document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block';
              console.log("Desktop")
              document.querySelector(".mobile").style.display="none";

              // (document.getElementById('magazineNextButton')).addEventListener('click',(e)=>{
              //    e.preventDefault();
              //    this.nextMagazine();
              // });
              //
              // (document.getElementById('magazinePreviousButton')).addEventListener('click',(e)=>{
              //    e.preventDefault();
              //    this.previousMagazine();
              // });

              // (document.getElementById('magazineNextButtonmm')).addEventListener('click',(e)=>{
              //    e.preventDefault();
              //    this.nextMagazine();
              // });
              //
              // (document.getElementById('magazinePreviousButtonmm')).addEventListener('click',(e)=>{
              //    e.preventDefault();
              //    this.previousMagazine();
              // });
            }

          }
        );




    }

    selectMagazine(magazine){
      this.setState({selectedmagazine:magazine});
    }

    selectMagazineItem(index){
      //this.setState({selectedPage:page,indexPage:index});
      this.flipPage.gotoPage(index);
    }

    nextPage(){
      let index = 0;

      if((this.state.indexPageEnd + 1) < (this.state.selectedmagazine).pages.length &&  (this.state.selectedmagazine).pages.length  >= 6){
        index = this.state.indexPageEnd + 1;
        this.setState({indexPageEnd:index})
        this.setState({indexPageBeggin:index-6})

      }

    }

    prevousPage(){
      let index = 0;

      if((this.state.indexPageEnd - 6) >  0 && (this.state.selectedmagazine).pages.length  >= 6 ){
        index = this.state.indexPageEnd - 1;
        this.setState({indexPageEnd:index})
        this.setState({indexPageBeggin:index-6})
      }
    }

    nextMagazine (){
      let index = 0;


      if((this.state.indexMagEnd + 1) < (this.state.magazines).length &&  (this.state.magazines).length  >= 3){
        index = this.state.indexMagEnd + 1;
        this.setState({indexMagEnd:index})
        this.setState({indexMagBeggin:index-3})
      }
      console.log(this.state.indexMagEnd)
    }


    previousMagazine (){
      let index = 0;

      if((this.state.indexMagEnd - 3) >  0 && (this.state.magazines).length  >= 3 ){
        index = this.state.indexMagEnd - 1;
        this.setState({indexMagEnd:index})
        this.setState({indexMagBeggin:index-3})
      }
      console.log(this.state.indexMagEnd)
    }


    switchV(){
      switch(this.state.zoom){
        case 1:{
          this.flipPage.height="600";
          document.getElementById("zoomPage").classList.remove("zoompage");
        //  document.getElementById("FlipPage").style.height="100% !important";
          this.setState({zoom:2})
          break;
        }
        case 2:{
          this.flipPage.height="650";
          document.getElementById("zoomPage").classList.add("zoompage");
          //document.getElementById("FlipPage").style.height="100% !important";
          this.setState({zoom:1})
          break;
        }
      }
    }

    async getDatasMagazines(){

      let url = this.host +"magazine/magazines";

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

            console.log(datas.message);
            //if (window.matchMedia("(max-width: 700px)").matches) {
              /* The viewport is less than, or equal to, 700 pixels wide */
              //(document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block';
            //console.log("mobile")

              // datas.message.forEach((item, i) => {
              //    item.pages = item.pages_mobile;
              //    date = new Date(item.dateSortie);
              //    item.date = (date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear());
              // });

          //  } else {
              /* The viewport is greater than 700 pixels wide */
              // (document.querySelector(".container-destop")).style.display = 'none';
              // (document.querySelector(".container-mobile")).style.display = 'block'
              let date=null;
              datas.message.forEach((item, i) => {
                  item.pages = item.pages_desktop;
                 date = new Date(item.dateSortie);
                 item.date = (date.getDay()+'-'+date.getMonth()+'-'+date.getFullYear());
              });




          //  }
            console.log("http://flowpaper.com/flipbook/https://flowpaper.com/example.pdf");
            console.log("http://flowpaper.com/flipbook/"+datas.message[0].pages);


            this.setState({magazines:datas.message,selectedmagazine:datas.message[0]});

          }else
            console.log(rep);
        });

    }
    render() {
        return (
          <div className="container" style={{minHeight:'100vh',maxHeight:'100vh'}} >
            <div className="row">
              <div className="col-12 desktop" id="desktop">
                <div id="nozoom">
                  <div className="row" style={{minHeight:'100%',maxHeight:'100%'}}>
                    <div className="col-1" style={{minHeight:'50%',maxHeight:'50%',marginTop:"0rem"}}>
                      <div className="row">
                        <div className="12">
                          <img  src={logotrips} alt="image yaris" style={{width: "58%",marginLeft: "5%",marginTop: "5%"}}/>
                        </div>
                      </div>
                      <div className="row" style={{marginTop:"0.5rem"}}>
                        <div className="12">
                          <div className="row">
                            <div className="col-12">
                              <i className="fas fa-align-left" style={{padding:'0.5rem',fontSize:'1.5em',marginLeft:"3rem",marginTop:"5%",background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: '0px 3px 6px #00000029',borderRadius: '3px 39px 39px 45px'}}></i>
                            </div>
                            <div className="col-12">
                              <span className="reduc" style={{position:"absolute",top:'10rem',left:'20%',padding:'1rem',backgroundColor:'#744A61',borderRadius:'50%',opacity:"1",color:'#FFD030',font: 'Bold 32px/48px Arial'}}>
                                -15
                              </span>
                              <span className="titre" style={{position:"absolute",top:"18rem",font: 'Bold 16px/24px Arial',letterSpacing: '0px',color: '#FFFFFF'}}>
                                Du nouveau <br /> chez <br />BIRAMAWA
                              </span>
                              <span className="plus" style={{position:"absolute",top:"25rem",right:'30%',padding:'0.5rem',backgroundColor:'#FFD030',color:'black'}}>
                                voir plus
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="row publeft">
                        <div className="col-12 ">

                        </div>
                      </div>

                    </div>
                    <div className="col-9" style={{minHeight:'100%',maxHeight:'100%'}}>
                      <div className="row titrepage" >
                        <div className="col-12">
                          <h6><span style={{borderBottom:'4px solid #FFD030'}}>BIRAMAWA MAGAZINE</span></h6>
                        </div>
                      </div>

                      <div className="row" id="zoomPage" style={{minHeight:'50%',maxHeight:'50%',marginTop:'2rem'}}>
                        <div className="col-12 magazinebook" id='magazinebook'>
                          <div className="row" >
                            <div className="col-12 pageItem" >
                              <div className="row">
                                <div className="col-12" style={{padding:'0',margin:'0'}}>
                                  <iframe frameborder="10"  width="100%" height="700" src={this.state.selectedmagazine.pages} scrolling="no" marginwidth="0" marginheight="0" allowFullScreen></iframe>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                    <div className="col-2" style={{minHeight:'25%',maxHeight:'25%',marginTop:"5%"}}>
                      <div className="row" style={{background: '#FFFFFF 0% 0% no-repeat padding-box',boxShadow: '1px 3px 6px #00000029',borderRadius: '62px',opacity: '1',marginLeft:'10%',minWidth:'80%',maxWidth:'80%',minHeight:'95%',maxHeight:'95%',backgroundColor:'white'}}>
                        <div className="col-12">
                          <div className="row" style={{marginTop:"1rem"}}>
                            <div className="col-12">
                              <button onClick={() => {this.nextMagazine();}} style={{background:"none",border:"none", marginLeft:'40%'}}>
                                <i id="magazinePreviousButtonmm" className="fas fa-angle-up" style={{color: '#744A61',border:'1px solid #744A61', padding:'0.5rem',borderRadius:"50%"}}></i>
                              </button>
                          </div>
                          </div>
                          <div className="row bodyListMagazine" style={{maxHeight: '100%'}}>
                            <div className="col-12" style={{maxHeight: '100%'}}>
                              <div className="row">
                                {this.state.magazines.slice(this.state.indexMagBeggin,this.state.indexMagEnd).map((mag, index) => (
                                      <div key={index} className="col-12" style={{maxHeight: '21vh',minHeight: '21vh',textAlign:"center",paddingTop:'2%'}}>
                                        <img  onClick={()=> this.selectMagazine(mag)} key={index}  src={mag.couverture} alt="image yaris" style={{maxHeight: "6rem",minHeight: "6rem"}}/>
                                        <p style={{color:'#744A61'}}>{mag.date}</p>
                                      </div>
                                ))}
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-12" style={{marginTop: "-4rem"}}>
                              <button onClick={() => {this.previousMagazine();}} style={{background:"none",border:"none", marginLeft:'40%',marginTop:"-1rem"}}>
                                  <i id="magazineNextButtonmm" className="fas fa-angle-down" style={{color: '#744A61',border:'1px solid #744A61', padding:'0.5rem',borderRadius:"50%"}}></i>
                              </button>
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
              <div className="col-12 mobile" id="mobile">
                <div class="row">
                    <div class="col-12">
                      <div  className="row" id="menuMobile">
                        <div  className="col-9" style={{paddingTop:'1rem'}}>
                           <img src={logo1} alt="facebook" style={{width:"3rem"}} />
                        </div>
                        <div  className="col-3" style={{paddingTop:'1.5rem',paddingTop:"1.5rem"}}>
                          <i id="menubars" className="fas fa-bars" style={{fontSize:"2.4em"}}></i>
                        </div>
                      </div>
                    </div>

                </div>
                <div  className="row" id="bodyMobile">
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
                          <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span></li>
                          <li ><Link to="/car">BIRAWAMA CAR</Link></li>
                          <li ><Link to="/trip">BIRAWAMA TRIP</Link></li>
                          <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                        </ul>

                    </div>
                    <div id="trianglemm" ></div>

                  </div>
                  <div  className="col-12">
                    <div  className="row" style={{width:"98%",padding:'0',margin:"1%"}}>
                      <div  className="col-2">
                        <div className="row" >
                          <div className="col-12">
                            <button onClick={() =>  this.previousMagazine()} style={{background:"none",border:"none", marginTop:'2rem'}}>
                              <i  className="fas fa-angle-left" style={{color: '#744A61',border:'1px solid #744A61', padding:'0.5rem',borderRadius:"50%", marginRight:'2rem'}}></i>
                            </button>
                        </div>
                        </div>
                      </div>
                      {this.state.magazines.slice(this.state.indexMagBeggin,this.state.indexMagEnd).map((mag, index) => (
                            <div  className="col-3" style={{borderRadius: "7px",textAlign:"center"}}>
                              <div  className="row">
                                <div  className="col-12" style={{textAlign:"center"}}>
                                      <img src={mag.couverture} alt="logo" style={{height:"7rem",minWidth:"100%",maxWidth:"100%"}}/>
                                  </div>
                                </div>
                              <div  className="row">
                                <div  className="col-12" style={{textAlign:"center"}}>
                                    <p style={{letterSpacing:"0px",font: "Bold Montserrat",color: "#AD5793",textAlign:"center",fontSize:"0.5em"}}>
                                      LE {mag.date}
                                    </p>
                                  </div>
                                </div>
                            </div>
                      ))}
                      <div  className="col-1">
                        <div className="row" >
                          <div className="col-12">
                            <button onClick={() => this.nextMagazine()} style={{background:"none",border:"none", marginTop:'2rem'}}>
                              <i  className="fas fa-angle-right" style={{color: '#744A61',border:'1px solid #744A61', padding:'0.5rem',borderRadius:"50%", marginLeft:'0'}}></i>
                            </button>
                        </div>
                        </div>
                      </div>
                    </div>
                    <div className="row" >
                      <div className="col-12" style={{position:"absolute",top:"-1rem",left:"0",textAlign:"center"}}>
                        <span style={{background: "#FFFFFF 0% 0% no-repeat padding-box",boxShadow: "0px 3px 6px #00000029",border:"1px solid black",padding:'0.5rem',borderRadius:"50%"}}>
                          <i className="fas fa-envelope"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div  className="col-12">
                    <div className="col-12" style={{padding:'0',margin:'0'}}>
                      <iframe frameborder="2"  width="100%" height="700" src={this.state.selectedmagazine.pages} scrolling="no" marginwidth="0" marginheight="0" allowFullScreen></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default Magazine;
