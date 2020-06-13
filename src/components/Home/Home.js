import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import logo from '../../static/images/logo.png';
import trip from '../../static/images/trip.png';
import sn from '../../static/images/sn.png';
import mag from '../../static/images/mag.png';
import birawama3d from '../../static/images/BIRAMAWA3D2.png'
import facebook from '../../static/images/facebook.png';
import twiter from '../../static/images/twiter.png';
import linkedin from '../../static/images/linkedin.png';
import whatsapp from '../../static/images/whatsapp.png';
import home from '../../static/images/home.png';
import bgpub from '../../static/images/bgpub.png';
import homebmw from '../../static/images/home-bmw-serie-2.png';
import magazine from '../../static/images/magazine.png';
import tripslide from '../../static/images/tripslide.png';
import bgmobilemag from '../../static/images/bgmobilemag.png';
import bgtripmobile from '../../static/images/bgtripmobile.png';


import './home.scss';
class Home extends Component {
    //host = "http://localhost/backend-birawam-slim/index.php/";
    host = "http://web-biramawa.com/backend-birawam-slim/index.php/"
    constructor(){
        super();

        this.state={
         statuMenuMobile:0,
         slideMobile:homebmw,
         redirect: null,
          w:25,
          idimgslide:1,
          iId:0,
          idSlide:0,
          imgSlide:[{url:"BIRAMAWA3D2.png",text:"BIRAWAMA"},{url:"home-bmw-serie-2.png",text:"BIRAWAMA CAR"},{url:"trip.png",text:"BIRAWAMA TRIP"},{url:"mag.png",text:"BIRAWAMA MAGAZINE"}],
          bgDesk:homebmw

        }

        let intervaId=setInterval(()=>{
          try{
          this.changeSlideMobile();
          this.slide()
          //this.backImgLevel(this.state.idimgslide);
          //document.getElementById("menu").setAttribute("src",'../../static/images/'+this.state.imgSlide[this.state.idimgslide]);

          }catch{}
        },5000);
        sessionStorage.setItem("idInterval",intervaId);
        this.hauteurPage();


        $("document").ready(()=>{
            this.bare();
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
              let data=rep.data;

            }
            console.log(rep);
          });

      }

      auth = ()=> {

        let url = this.host;

        const form = new FormData()
        form.set('username', 'malcoded')

          axios({
            url:url,
            method:'post',
            headers: { 'Content-Type': 'multipart/form-data' },
            data:form
          }).then(rep=>{
            if(rep.status===200){
              let data=rep.data;

            }
            console.log(rep);
          });

      }

      changeSlideMobile (){
          console.log(this.state.idSlide)
          document.getElementById("menu").setAttribute("src",'../../static/images/'+this.state.imgSlide[this.state.idimgslide]);
          if(this.state.idSlide==0){
            (document.querySelector("#titrePage")).innerHTML="BIRAMAWA CAR";
            (document.querySelector("#chargebar1")).style.backgroundColor="#FFFF6B";
            (document.querySelector("#chargebar2")).style.backgroundColor="";
            (document.querySelector("#chargebar3")).style.backgroundColor="";
            this.setState({idSlide:1,slideMobile:homebmw});


          }
          else if(this.state.idSlide==1){
            (document.querySelector("#titrePage")).innerHTML="BIRAMAWA TRIP";
            (document.querySelector("#chargebar1")).style.backgroundColor="#FFFF6B";
            (document.querySelector("#chargebar2")).style.backgroundColor="#FFFF6B";
            (document.querySelector("#chargebar3")).style.backgroundColor="";
            this.setState({idSlide:2,slideMobile:bgmobilemag});
          }
          else if(this.state.idSlide==2){
            (document.querySelector("#titrePage")).innerHTML="BIRAMAWA MAGAZINE";
            (document.querySelector("#chargebar1")).style.backgroundColor="#FFFF6B";
            (document.querySelector("#chargebar2")).style.backgroundColor="#FFFF6B";
            (document.querySelector("#chargebar3")).style.backgroundColor="#FFFF6B";
            this.setState({idSlide:0,slideMobile:bgtripmobile});
          }
      }

      slide(){
       // setTimeout(()=>{
       // console.log(this.state.imgSlide.length);
       let id=this.state.idimgslide;
        if(id==0){
          this.setState({bgDesk:homebmw});
          this.setState({idimgslide:1})
          (document.getElementById("menu")).style.backgroundImage="url("+ "../../static/images/home-bmw-serie-2.png" +")";

        }else if(id==1){
          this.setState({bgDesk:tripslide});
          this.setState({idimgslide:2})
          (document.getElementById("menu")).style.backgroundImage="url("+ "../../static/images/tripslide.png" +")";
        }
        else if(id==2){
          this.setState({bgDesk:magazine});
          this.setState({idimgslide:0})
          (document.getElementById("menu")).style.backgroundImage="url("+ "../../static/images/magazine.png" +")";
        }
      }
      bare(){

        if(this.state.w<=100){
            document.getElementById("bare").style.width=""+this.state.w+"%";
            document.getElementById("bare").style.backgroundColor="#FFD030";
            //console.log(w);
            //this.slide();
            let W=this.state.w+25;
            this.setState({w:W});
        }else{
          this.setState({w:25});
          //this.setState({idimgslide:0});
          /*if(this.state.idimgslide===4){
            this.setState({idimgslide:0});
          }*/

          let W=this.state.w+25;
          this.setState({w:W});

          //this.setState({idimgslide:this.state.idimgslide+1});
        }
       // w=10;
      }
      hauteurPage(){
        $(document).ready(()=>{
              let h1=window.outerHeight+30;
          // console.log(h);
          //  console.log(h1);
          //  document.getElementById("menu").style.height=h1+10+"px";
          //  document.getElementById("menu1").style.height=h1+"px";
            document.getElementById("menu").style.minHeight="100vh";
            document.getElementById("menu1").style.minHeight="100vh";
            let hm=$("#m").innerHeight();
            let hmm=$("#mm").innerHeight();

            document.getElementById("triangle").style.position="fixed";
            document.getElementById("trianglemm").style.position="fixed";

            document.getElementById("triangle").style.top=hm+"px";
            document.getElementById("trianglemm").style.top=hmm+"px";
        });

      }

      showermenu(){
        if(this.state.statuMenuMobile==0){
          document.getElementById("mm").style.display="block";
          document.getElementById("trianglemm").style.display="block";
          this.setState({statuMenuMobile:1})
        }
        else{
          document.getElementById("mm").style.display="none";
          document.getElementById("trianglemm").style.display="none";
          this.setState({statuMenuMobile:0})
        }
      }

      backImgLevel(id){
        let element1=document.getElementById("0");
        let element2=document.getElementById("1");
        let element3=document.getElementById("2");
        let element4=document.getElementById("3");
        switch(id){
            case 0:{
                element1.style.backgroundColor="rgb(114,64,90)";
                element2.style.backgroundColor="white";
                element3.style.backgroundColor="white";
                element4.style.backgroundColor="white";
                break;
            }
            case 1:{
                element1.style.backgroundColor="white";
                element2.style.backgroundColor="rgb(114,64,90)";
                element3.style.backgroundColor="white";
                element4.style.backgroundColor="white";
                break;
            }
            case 2:{
                element1.style.backgroundColor="white";
                element2.style.backgroundColor="white";
                element3.style.backgroundColor="rgb(114,64,90)";
                element4.style.backgroundColor="white";
                break;
            }
            case 3:{
              element1.style.backgroundColor="white";
              element2.style.backgroundColor="white";
              element3.style.backgroundColor="white";
              element4.style.backgroundColor="rgb(114,64,90)";
              break;
          }
    }
  }


    render() {
        return (
      <div style={{position:"absolute",top:"0px",opacity:"1",backgroundImage:"url("+this.state.bgDesk+")"}} id="menu" className="container menuMagazine" >
        <div  className="row">
          <div  className="col-12 desktop">
                <div  style={{position:"absolute",top:"0px",width:"100%"}} id="menu1" >
                  <div id="m">
                      <div id="logo">
                        <img src={logo} alt="logo" />
                      </div>
                      <ul id="ul" >
                        <li id="menuli1" className="li li1" style={{backgroundColor: "rgb(255, 208, 48)"}}><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span></li>
                        <li style={{paddingLeft:'1rem'}} id="menuli2" ><Link to="/car">BIRAWAMA CAR</Link></li>
                        <li style={{paddingLeft:'1rem'}} id="menuli3" ><Link to="/trip">BIRAWAMA TRIP</Link><img src={sn} alt="facebook" style={{width:"3rem"}} /></li>
                        <li style={{paddingLeft:'1rem'}} id="menuli4" ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>
                      </ul>

                  </div>
                  <div id="triangle"></div>
                    <div style={{marginTop:"-15%"}}>
                      <h3 id="text">{this.state.imgSlide[this.state.idimgslide].text}</h3>

                    </div>
                    <div id="imgLevel">
                      <div id="0"></div>
                      <div id="1"></div>
                      <div id="2"></div>
                      <div id="3"></div>
                    </div>
                    <div style={{marginTop:"10%"}} id="flech">
                      <div style={{height:"0.2em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
                      <div style={{height:"0.2em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
                      <div style={{height:"0.1em",width:"100%",backgroundColor:"rgba(255, 208, 48,0.6)",marginBottom:"0.2em"}}></div>
                      <div id="triangle2"></div>
                    </div>
                    <div className="bar">
                        <div id="bare" className="percentage has-tip"  style={{width: "10%"}} data-perc="50%">
                      </div>
                    </div>

                </div>

                <div style={{position:'fixed',right:'1rem',top:"1rem",opacity:"0.2"}}>
                  <Link to="/admin">admin</Link>
                </div>
                <div id="socialMediaTop">
                      <div><img src={facebook} alt="facebook" /></div>
                      <div><img src={twiter} alt="twiter" /></div>
                      <div><img src={linkedin} alt="linkedin" /></div>
                      <div><img src={whatsapp} alt="whatsapp" /></div>
                </div>
                <div id="promo" className="row">
                    <div id="back" className="col-12">
                      <div><h3 style={{marginTop:"2.5rem", marginLeft:"4rem"}}><b>Du nouveau chez BIRAWAMA</b></h3></div>
                      <span id="p">-15%</span>
                      <div id="suite"><b style={{marginRight:"0.3em"}}>En Savoir Plus</b><i></i></div>
                    </div>
                 </div>
           </div>
           <div  className="col-12 mobile" id="mobile" style={{backgroundImage:"url("+this.state.slideMobile+")"}}>
              <div  className="row ">
                 <div  className="col-12 degradeVertival">
                       <div  className="row">
                         <div  className="col-12">
                           <div  className="row">
                               <div  className="col-10" style={{paddingTop:'1rem'}}>
                                  <img src={logo} alt="facebook" style={{width:"3rem"}} />
                               </div>
                               <div  className="col-2" style={{paddingTop:"1.5rem"}}>
                                 <i onClick={()=>this.showermenu()} id="menubars" className="fas fa-bars" style={{fontSize:"2.4em"}}></i>
                               </div>
                           </div>
                         </div>
                       </div>
                       <div  className="row">
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
                                 <li className="li"><span><img style={{marginRight:"0.4em"}} src={home} alt="home" />BIRAWAMA</span></li>
                                 <li ><Link to="/car">BIRAWAMA CAR</Link></li>
                                 <li ><Link to="/trip">BIRAWAMA TRIP</Link><img src={sn} alt="facebook" style={{width:"3rem"}} /></li>
                                 <li ><Link to="/magazine">BIRAWAMA MAGAZINE</Link></li>

                               </ul>

                           </div>
                           <div id="trianglemm" ></div>

                         </div>
                         <div  className="col-12" style={{marginTop:'2rem'}}>
                           <div  className="row">
                             <div  className="col-10">

                             </div>
                             <div  className="col-2">
                               <div  className="row">
                                 <div  className="col-12">
                                   <div><img src={facebook} alt="facebook" style={{width:"2rem"}}/></div>
                                 </div>
                                 <div  className="col-12">
                                   <div><img src={twiter} alt="twiter" style={{width:"2rem"}}/></div>
                                 </div>
                                 <div  className="col-12">
                                   <div><img src={linkedin} alt="linkedin" style={{width:"2rem"}}/></div>
                                 </div>
                                 <div  className="col-12">
                                  <div><img src={whatsapp} alt="whatsapp" style={{width:"2rem"}}/></div>
                                 </div>
                               </div>
                             </div>

                           </div>
                         </div>
                         <div  className="col-12" style={{marginTop:'2rem'}}>
                           <h3 id='titrePage' style={{paddingLeft:"1rem",font: 'Regular 20px/39px Glacial Indifference',letterSpacing:'0px',color: '#FAFAFA'}}> BIRAMAWA CAR</h3>
                         </div>
                         <div  className="col-12" style={{marginTop:'1rem'}}>
                           <div id='pubmm' className="col-11 pubmm" style={{height:'25rem',width:"90%",marginLeft:'1rem'}}>
                             <div className="col-12 degrade" id='degrade'>
                               <span className="titre" id="titrepub">
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
                        <div  className="col-12" style={{position:'fixed',bottom:"0",left:'0',fontSize:"0.5em",minHeight:'0.5rem'}}>
                          <div  className="row">
                            <div  className="col-4" id="chargebar1" style={{fontSize:"0.5em",minHeight:'0.5rem',backgroundColor:"#FFFF6B"}}>

                            </div>
                            <div  className="col-4" id="chargebar2" style={{fontSize:"0.5em",minHeight:'0.5rem'}}>

                            </div>
                            <div  className="col-4" id="chargebar3" style={{fontSize:"0.5em",minHeight:'0.5rem'}}>

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

export default Home;
