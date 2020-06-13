import React, { Component } from 'react';
import './Admin.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import $ from 'jquery';
import axios from 'axios';
import imageyaris from '../../static/images/imageyaris.jpg';


class Admin extends Component {

    //host = "http://localhost/backend-birawam-slim/index.php/";
    host = "http://web-biramawa.com/backend-birawam-slim/index.php/"
    constructor(props){
      super(props);
      this.state = {date: new Date(),nbrImgVoiture:[1],imagesCars:"",imagesSite:"",nbrImgSite:[1],imagesHebergement:"",nbrImgHebergement:[1],imagesMagazineMobile:"",nbrImgMagazineMobile:[1],imagesMagazineDesk:"",nbrImgMagazineDesk:[1],imageCouverture:"",imagePartenaire:"",imageMarque:""}
    }


    nouvelleImagevoiture (){
       let tab = this.state.nbrImgVoiture;
       let length = tab.length;
       tab.push(length+1);
       this.setState({nbrImgVoiture:tab});
    }

    nouvelleImageSite (){
       let tab = this.state.nbrImgSite;
       let length = tab.length;
       tab.push(length+1);
       this.setState({nbrImgSite:tab});
    }

    modaleChargemant(option,message){
      document.getElementById("operation").innerHTML=message;
      document.getElementById("modaleCharg").style.display=option;
    }

    nouvelleImageHebergement (){
       let tab = this.state.nbrImgHebergement;
       let length = tab.length;
       tab.push(length+1);
       this.setState({nbrImgHebergement:tab});
    }

    nouvelleImageMagazineMobile (){
       let tab = this.state.nbrImgMagazineMobile;
       let length = tab.length;
       tab.push(length+1);
       this.setState({nbrImgMagazineMobile:tab});
    }

    nouvelleImageMagazineDesk (){
       let tab = this.state.nbrImgMagazineDesk;
       let length = tab.length;
       tab.push(length+1);
       this.setState({nbrImgMagazineDesk:tab});
    }

    async uploadsImageMarque(){
            this.modaleChargemant('block','Operation en cour .......')
            let input = document.getElementById("MarqueInput");
            let img = document.getElementById("imgMarqueInput");
            let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
            let imageMarque = this.state.imageMarque;
            let src="";
            console.log(input)
            console.log(img)

            let url = this.host + "file/onUploadfile";

            const form = new FormData()
            form.set('uploads', input.files[0])

              axios({
                url:url,
                method:'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                data:form
              }).then(rep=>{
                if(rep.status===200){
                  let datas=rep.data;

                  console.log(datas)
                  src = origine+datas.generatedName;
                  console.log(src);
                  img.setAttribute("src",src);

                  imageMarque = src;
                  this.modaleChargemant('none','Operation en cour .......')
                  this.setState({imageMarque:imageMarque});
                }else
                  console.log(rep);
              });

          }

    async uploadsImagePartenaire(){
            this.modaleChargemant('block','Operation en cour .......')
            let input = document.getElementById("PartenaireInput");
            let img = document.getElementById("imgPartenaireInput");
            let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
            let imagePartenaire = this.state.imagePartenaire;
            let src="";
            console.log(input)
            console.log(img)

            let url = this.host+ "file/onUploadfile";

            const form = new FormData()
            form.set('uploads', input.files[0])

              axios({
                url:url,
                method:'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                data:form
              }).then(rep=>{
                if(rep.status===200){
                  let datas=rep.data;

                  console.log(datas)
                  src = origine+datas.generatedName;
                  console.log(src);
                  img.setAttribute("src",src);

                  imagePartenaire = src;
                  this.modaleChargemant('none','Operation en cour .......')
                  this.setState({imagePartenaire:imagePartenaire});
                }else
                  console.log(rep);
              });

          }

    async uploadsImageCouverture(){
            this.modaleChargemant('block','Operation en cour .......')
            let input = document.getElementById("CouvertureInput");
            let img = document.getElementById("imgCouvertureInput");
            let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
            let imageCouverture = this.state.imageCouverture;
            let src="";
            console.log(input)
            console.log(img)

            let url = this.host +"file/onUploadfile";

            const form = new FormData()
            form.set('uploads', input.files[0])

              axios({
                url:url,
                method:'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                data:form
              }).then(rep=>{
                if(rep.status===200){
                  let datas=rep.data;

                  console.log(datas)
                  src = origine+datas.generatedName;
                  console.log(src);
                  img.setAttribute("src",src);

                  imageCouverture = src;
                  this.modaleChargemant('none','Operation en cour .......')
                  this.setState({imageCouverture:imageCouverture});
                }else
                  console.log(rep);
              });

          }
  async uploadsImagesMagazineMobile(myid){
          this.modaleChargemant('block','Operation en cour .......')
          let input = document.getElementById("MagazineMobileInput"+myid);
          let img = document.getElementById("imgMagazineMobileInput"+myid);
          let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
          let imagesMagazineMobile = this.state.imagesMagazineMobile;
          let src="";
          console.log(input)
          console.log(img)

          let url = this.host + "file/onUploadfile";

          const form = new FormData()
          form.set('uploads', input.files[0])

            axios({
              url:url,
              method:'post',
              headers: { 'Content-Type': 'multipart/form-data' },
              data:form
            }).then(rep=>{
              if(rep.status===200){
                let datas=rep.data;

                console.log(datas)
                src = origine+datas.generatedName;
                console.log(src);
                img.setAttribute("src",src);
                if(imagesMagazineMobile==""){
                  imagesMagazineMobile = src;
                }else{
                  imagesMagazineMobile += ","+src;
                }
                this.modaleChargemant('none','Operation en cour .......')
                this.setState({imagesMagazineMobile:imagesMagazineMobile});
              }else
                console.log(rep);
            });

        }

  async uploadsImagesMagazineDesk(myid){
      this.modaleChargemant('block','Operation en cour .......')
        let input = document.getElementById("MagazineDeskInput"+myid);
        let img = document.getElementById("imgMagazineDeskInput"+myid);
        let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
        let imagesMagazineDesk = this.state.imagesMagazineDesk;
        let src="";
        console.log(input)
        console.log(img)

        let url = this.host + "file/onUploadfile";

        const form = new FormData()
        form.set('uploads', input.files[0])

          axios({
            url:url,
            method:'post',
            headers: { 'Content-Type': 'multipart/form-data' },
            data:form
          }).then(rep=>{
            if(rep.status===200){
              let datas=rep.data;

              console.log(datas)
              src = origine+datas.generatedName;
              console.log(src);
              img.setAttribute("src",src);
              if(imagesMagazineDesk==""){
                imagesMagazineDesk = src;
              }else{
                imagesMagazineDesk += ","+src;
              }
              this.modaleChargemant('none','Operation en cour .......')
              this.setState({imagesMagazineDesk:imagesMagazineDesk});
            }else
              console.log(rep);
          });

      }

  async uploadsImagesMagazineDeskFile(){
          this.modaleChargemant('block','Operation en cour .......')
            let input = document.getElementById("MagazineDeskInput");
            let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
            let imagesMagazineDesk = this.state.imagesMagazineDesk;
            let src="";

            let url = this.host + "file/onUploadfile";

            const form = new FormData()
            form.set('uploads', input.files[0])

              axios({
                url:url,
                method:'post',
                headers: { 'Content-Type': 'multipart/form-data' },
                data:form
              }).then(rep=>{
                if(rep.status===200){
                  let datas=rep.data;

                  console.log(datas)
                  src = origine+datas.generatedName;
                  console.log(src);
                  if(imagesMagazineDesk==""){
                    imagesMagazineDesk = src;
                  }else{
                    imagesMagazineDesk += ","+src;
                  }
                  this.modaleChargemant('none','Operation en cour .......')
                  this.setState({imagesMagazineDesk:imagesMagazineDesk});
                }else
                  console.log(rep);
              });

          }

  async uploadsImagesHebergement(myid){
    this.modaleChargemant('block','Operation en cour .......')
    let input = document.getElementById("HebergementInput"+myid);
    let img = document.getElementById("imgHebergementInput"+myid);
    let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
    let imagesHebergement = this.state.imagesHebergement;
    let src="";
    console.log(input)
    console.log(img)

    let url = this.host+ "file/onUploadfile";

    const form = new FormData()
    form.set('uploads', input.files[0])

      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          src = origine+datas.generatedName;
          console.log(src);
          img.setAttribute("src",src);
          if(imagesHebergement==""){
            imagesHebergement = src;
          }else{
            imagesHebergement += ","+src;
          }
          this.modaleChargemant('none','Operation en cour .......')
          this.setState({imagesHebergement:imagesHebergement});
        }else
          console.log(rep);
      });

  }

  async uploadsImagesSite(myid){
      this.modaleChargemant('block','Operation en cour .......')
      let input = document.getElementById("siteInput"+myid);
      let img = document.getElementById("imgSiteInput"+myid);
      let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
      let imagesSite = this.state.imagesSite;
      let src="";
      console.log(input)
      console.log(img)

      let url = this.host+ "file/onUploadfile";

      const form = new FormData()
      form.set('uploads', input.files[0])

        axios({
          url:url,
          method:'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data:form
        }).then(rep=>{
          if(rep.status===200){
            let datas=rep.data;

            console.log(datas)
            src = origine+datas.generatedName;
            console.log(src);
            img.setAttribute("src",src);
            if(imagesSite==""){
              imagesSite = src;
            }else{
              imagesSite += ","+src;
            }
            this.modaleChargemant('none','Operation en cour .......')
            this.setState({imagesSite:imagesSite});
          }else
            console.log(rep);
        });

    }

    async uploadsImagesCar(myid){
      this.modaleChargemant('block','Operation en cour .......')
      let input = document.getElementById("voitureInput"+myid);
      let img = document.getElementById("imgInput"+myid);
      let origine = "http://web-biramawa.com/backend-birawam-slim/uploads/";
      let imagesCars = this.state.imagesCars;
      let src="";
      console.log(input)
      console.log(img)

      let url = this.host+ "file/onUploadfile";

      const form = new FormData()
      form.set('uploads', input.files[0])

        axios({
          url:url,
          method:'post',
          headers: { 'Content-Type': 'multipart/form-data' },
          data:form
        }).then(rep=>{
          if(rep.status===200){
            let datas=rep.data;

            console.log(datas)
            src = origine+datas.generatedName;
            console.log(src);
            img.setAttribute("src",src);
            if(imagesCars==""){
              imagesCars = src;
            }else{
              imagesCars += ","+src;
            }
            this.modaleChargemant('none','Operation en cour .......')
            this.setState({imagesCars:imagesCars});
          }else
            console.log(rep);
        });

    }

    async ajouterCar(){
      this.modaleChargemant('block','Operation en cour .......')
      let nom = document.getElementById("nomVoityre").value;
      let desc = document.getElementById("descVoityre").value;
      let prix = document.getElementById("prixVoityre").value;
      let contacte = document.getElementById("telVoiture").value;
      let marque = document.getElementById("marqueVoiture").value;
      let model = document.getElementById("modelVoiture").value;
      let annee = document.getElementById("anneeVoiture").value;
      let kilom = document.getElementById("kiloVoiture").value;
      let carburant = document.getElementById("carburant").value;
      let statutVoiture = document.getElementById("statutVoiture").value;
      let boiteVitesse = document.getElementById("boiteVitesse").value;
      let images = this.state.imagesCars;



      let url = this.host+ "admin/ajouterCar";

      const form = new FormData()
      form.set('nom', nom);
      form.set('description', desc);
      form.set('prix', prix);
      form.set('contacte', contacte);
      form.set('marque', marque);
      form.set('model', model);
      form.set('annee', annee);
      form.set('kilometrage', kilom);
      form.set('carburant', carburant);
      form.set('images', images);
      form.set('statut', statutVoiture);
      form.set('boiteVitesse', boiteVitesse);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imagesCars:"",nbrImgVoiture:[1]})

        }else
          console.log(rep);
      });

    }

    async ajouterSite(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titreSite").value;
      let desc = document.getElementById("descSite").value;
      let prix = document.getElementById("prixSite").value;
      let contacte = document.getElementById("telSite").value;
      let images = this.state.imagesSite;



      let url = this.host+ "admin/ajouterSite";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('prix', prix);
      form.set('contacte', contacte);
      form.set('images', images);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;
          this.modaleChargemant('block','Operation réussi');
          console.log(datas);

          this.setState({imagesSite:"",nbrImgSite:[1]})

        }else
          console.log(rep);
      });

    }

    async ajouterHebergement(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titreHebergement").value;
      let desc = document.getElementById("descHebergement").value;
      let prix = document.getElementById("prixHebergement").value;
      let contacte = document.getElementById("telHebergement").value;
      let lieux = document.getElementById("lieuxHebergement").value;
      let images = this.state.imagesHebergement;



      let url = this.host+ "admin/ajouterHebergements";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('prix', prix);
      form.set('contacte', contacte);
      form.set('images', images);
      form.set('lieux', lieux);// =================

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imagesHebergement:"",nbrImgHebergement:[1]})

        }else
          console.log(rep);
      });

    }

    async ajouterMagazine(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titreMagazine").value;
      let desc = document.getElementById("descMagazine").value;
      let date = document.getElementById("dateMagazine").value;
      let couverture = this.state.imageCouverture;
      let imagesMobile = this.state.imagesMagazineMobile;
      let imagesDesk = this.state.imagesMagazineDesk;



      let url = this.host+ "admin/ajouterMagazine";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('date', date);
      form.set('couverture', couverture);
      form.set('imagesMobile', imagesMobile);
      form.set('imagesDesk', imagesDesk);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imageCouverture:"",imagesMagazineMobile:"",imagesMagazineDesk:"",nbrImgMagazineDesk:[1],nbrImgMagazineMobile:[1]})

        }else
          console.log(rep);
      });

    }

    async ajouterMagazinePdf(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titreMagazine").value;
      let desc = document.getElementById("descMagazine").value;
      let date = document.getElementById("dateMagazine").value;
      let couverture = this.state.imageCouverture;
      let imagesMobile = document.getElementById("MagazineDeskInput").value;
      let imagesDesk = document.getElementById("MagazineDeskInput").value;



      let url = this.host+ "admin/ajouterMagazine";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('date', date);
      form.set('couverture', couverture);
      form.set('imagesMobile', imagesMobile);
      form.set('imagesDesk', imagesDesk);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imageCouverture:"",imagesMagazineMobile:"",imagesMagazineDesk:"",nbrImgMagazineDesk:[1],nbrImgMagazineMobile:[1]})

        }else
          console.log(rep);
      });

    }

    async ajouterPartenaire(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titrePartenaire").value;
      let desc = document.getElementById("descPartenaire").value;
      let telPartenaire = document.getElementById("telPartenaire").value;
      let imagePartenaire = this.state.imagePartenaire;



      let url = this.host+ "admin/ajouterPartenaire";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('contacte', telPartenaire);
      form.set('imagePartenaire', imagePartenaire);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imagePartenaire:""})

        }else
          console.log(rep);
      });

    }

    async ajouterMarque(){
      this.modaleChargemant('block','Operation en cour .......')
      let titre = document.getElementById("titreMarque").value;
      let desc = document.getElementById("descMarque").value;
      let imageMarque = this.state.imageMarque;



      let url = this.host+ "admin/ajouterMarque";

      const form = new FormData()
      form.set('titre', titre);
      form.set('description', desc);
      form.set('imageMarque', imageMarque);

      console.log(form);
      axios({
        url:url,
        method:'post',
        headers: { 'Content-Type': 'multipart/form-data' },
        data:form
      }).then(rep=>{
        if(rep.status===200){
          let datas=rep.data;

          console.log(datas)
          this.modaleChargemant('block','Operation réussi')
          this.setState({imageMarque:""})

        }else
          console.log(rep);
      });

    }

    render() {
        return (
          <div id="container">
            <div className="row">
              <div className="col-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Ajouter Car <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Ajouter site</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link" href="#">
                          Ajouter Hebergement
                        </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Ajouter Magazine
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Ajouter Partenaire
                        </a>
                      </li>

                      <li class="nav-item">
                        <a class="nav-link" href="#">
                          Ajouter Marque
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>

              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="row" id='section1'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Car</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Nom de la voiture</label>
                        <input type="text" className="form-control" id="nomVoityre"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description de la voiture</label>
                        <textarea className="form-control" id="descVoityre" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect2">Prix de la voiture</label>
                        <input type="number" className="form-control" id="prixVoityre" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Numero de contacte</label>
                        <input type="text" className="form-control" id="telVoiture" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Marque de la voiture</label>
                        <input type="text" className="form-control" id="marqueVoiture"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Model de la voiture</label>
                        <input type="text" className="form-control" id="modelVoiture" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Annee de la voiture</label>
                        <div className="form-group">
                          <input type="number" className="form-control" id="anneeVoiture" />
                        </div>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">kilometrage de la voiture</label>
                        <input type="text" className="form-control" id="kiloVoiture" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">carburant de la voiture</label>
                        <input type="text" className="form-control" id="carburant"/>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">Boite a vitesse</label>
                        <input type="text" className="form-control" id="boiteVitesse"/>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">statut de la voiture</label>
                          <select  className="form-control" id="statutVoiture">
                            <option value="vente">vente</option>
                            <option value="location">location</option>
                          </select>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">les images de la voiture</label>
                          <div className="row" style={{border:'1px solid black'}}>
                            {this.state.nbrImgVoiture.map((image, index) => (
                              <div className="col-12" key={index}>
                                  <p>image {index + 1}</p>
                                  <div className="row">
                                    <div className="col-4" style={{paddingTop:"5%"}}>
                                      <input id={"voitureInput"+image} onChange={() => this.uploadsImagesCar(image)} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                    </div>
                                    <div className="col-8">
                                      <img id={"imgInput"+image} width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                    </div>
                                   </div>
                              </div>
                            ))}
                              <div className="col-12" style={{marginBottom:'1rem'}}>
                                  <button  onClick={() => this.nouvelleImagevoiture()} type="button" className="btn btn-secondary">Nouvelle image</button>
                              </div>
                          </div>
                        </div>
                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterCar()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
                <div className="row" id='section2'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Site</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Nom du Site</label>
                        <input type="text" className="form-control" id="titreSite"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description du Site</label>
                        <textarea className="form-control" id="descSite" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect2">Prix du voiture</label>
                        <input type="number" className="form-control" id="prixSite" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Numero de contacte</label>
                        <input type="text" className="form-control" id="telSite" />
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">les images de la voiture</label>
                          <div className="row" style={{border:'1px solid black'}}>
                            {this.state.nbrImgSite.map((image, index) => (
                              <div className="col-12" key={index}>
                                  <p>image {index + 1}</p>
                                  <div className="row">
                                    <div className="col-4" style={{paddingTop:"5%"}}>
                                      <input id={"siteInput"+image} onChange={() => this.uploadsImagesSite(image)} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                    </div>
                                    <div className="col-8">
                                      <img id={"imgSiteInput"+image} width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                    </div>
                                   </div>
                              </div>
                            ))}
                              <div className="col-12" style={{marginBottom:'1rem'}}>
                                  <button  onClick={() => this.nouvelleImageSite()} type="button" className="btn btn-secondary">Nouvelle image</button>
                              </div>
                          </div>
                        </div>
                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterSite()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
                <div className="row" id='section3'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Hebergement</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Nom  Hebergement</label>
                        <input type="text" className="form-control" id="titreHebergement"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description  Hebergement</label>
                        <textarea className="form-control" id="descHebergement" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect2">Prix  Hebergement</label>
                        <input type="number" className="form-control" id="prixHebergement" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Numero de contacte</label>
                        <input type="text" className="form-control" id="telHebergement" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Lieux</label>
                        <input type="text" className="form-control" id="lieuxHebergement" />
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">images  Hebergement</label>
                          <div className="row" style={{border:'1px solid black'}}>
                            {this.state.nbrImgHebergement.map((image, index) => (
                              <div className="col-12" key={index}>
                                  <p>image {index + 1}</p>
                                  <div className="row">
                                    <div className="col-4" style={{paddingTop:"5%"}}>
                                      <input id={"HebergementInput"+image} onChange={() => this.uploadsImagesHebergement(image)} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                    </div>
                                    <div className="col-8">
                                      <img id={"imgHebergementInput"+image} width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                    </div>
                                   </div>
                              </div>
                            ))}
                              <div className="col-12" style={{marginBottom:'1rem'}}>
                                  <button  onClick={() => this.nouvelleImageHebergement()} type="button" className="btn btn-secondary">Nouvelle image</button>
                              </div>
                          </div>
                        </div>
                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterHebergement()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
                <div className="row" id='section4'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Magazine</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Titre  Magazine</label>
                        <input type="text" className="form-control" id="titreMagazine"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description  Magazine</label>
                        <textarea className="form-control" id="descMagazine" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect2">Date de  sortie</label>
                        <input type="date" className="form-control" id="dateMagazine" />
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">image couverture</label>
                          <div className="col-12">
                              <div className="row">
                                <div className="col-4" style={{paddingTop:"5%"}}>
                                  <input id="CouvertureInput" onChange={() => this.uploadsImageCouverture()} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                </div>
                                <div className="col-8">
                                  <img id="imgCouvertureInput" width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                </div>
                               </div>
                          </div>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">images  Pages Desktop</label>
                          <div className="row" style={{border:'1px solid black'}}>
                              <div className="col-12">
                                  <p>lien pdf</p>
                                  <div className="row">
                                    <div className="col-4" style={{paddingTop:"5%"}}>
                                      <input id="MagazineDeskInput"  className="imagesVoiture"  type="text" className="form-control"  placeholder="name@example.com"/>
                                    </div>
                                   </div>
                              </div>
                          </div>
                        </div>


                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterMagazinePdf()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
                <div className="row" id='section5'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Partenaire</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Nom  Partenaire</label>
                        <input type="text" className="form-control" id="titrePartenaire"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description  Partenaire</label>
                        <textarea className="form-control" id="descPartenaire" rows="3"></textarea>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Numero de contacte</label>
                        <input type="text" className="form-control" id="telPartenaire" />
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">image Partenaire</label>
                          <div className="col-12">
                              <div className="row">
                                <div className="col-4" style={{paddingTop:"5%"}}>
                                  <input id="PartenaireInput" onChange={() => this.uploadsImagePartenaire()} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                </div>
                                <div className="col-8">
                                  <img id="imgPartenaireInput" width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                </div>
                               </div>
                          </div>
                      </div>
                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterPartenaire()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
                <div className="row" id='section6'>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <h1>Ajouter Marque</h1>
                  </div>
                  <div className="col-12" style={{textAlign:'center'}}>
                    <form style={{width:"50%",marginLeft:"25%"}}>
                      <div className="form-group">
                        <label for="exampleFormControlInput1">Nom  Partenaire</label>
                        <input type="text" className="form-control" id="titreMarque"/>
                      </div>
                      <div className="form-group">
                        <label for="exampleFormControlSelect1">Description  Marque</label>
                        <textarea className="form-control" id="descMarque" rows="3"></textarea>
                      </div>

                      <div className="form-group">
                        <label for="exampleFormControlInput1">image Partenaire</label>
                          <div className="col-12">
                              <div className="row">
                                <div className="col-4" style={{paddingTop:"5%"}}>
                                  <input id="MarqueInput" onChange={() => this.uploadsImageMarque()} className="imagesVoiture"  type="file" className="form-control"  placeholder="name@example.com"/>
                                </div>
                                <div className="col-8">
                                  <img id="imgMarqueInput" width="100%" src={imageyaris} alt="image yaris" style={{width:"50%"}} />
                                </div>
                               </div>
                          </div>
                      </div>
                    </form>

                    <div className="col-12" style={{}}>
                        <button  onClick={() => this.ajouterMarque()} type="button" className="btn btn-secondary">Ajouter</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="modaleCharg" className="row" style={{position:"fixed",top:"30%",left:"30%",backgroundColor:"white",padding:"10%",border:"2px solid blue",display:"none"}}>
              <div className="col-12">
                <h1 id='operation' style={{textAlign:"center"}}>
                    Operation en cour .......
                </h1>
              </div>
              <div className="col-12" style={{textAlign:"center",marginTop:"10%"}}>
                <button onClick={()=>{this.modaleChargemant('none','Operation en cour .......')}} className="btn btn-info" id='operation'>
                  FERMER
                </button>
              </div>
            </div>
          </div>
        );
    }
}

export default Admin;
