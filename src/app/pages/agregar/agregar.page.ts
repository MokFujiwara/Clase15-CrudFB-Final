import { Component, OnInit } from '@angular/core';
/** librerías */
import { PersonaI } from 'src/app/model/person.interface';
import { PersonaService } from 'src/app/services/persona.service';
import { NavController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  persona: PersonaI = {
    nombre: '',
    apellido: ''
  }

  constructor(
    private persoServ: PersonaService,
    private nav: NavController,
    private loadingCtrl: LoadingController
  ) { }

  ngOnInit() {
  }

  async grabar() {
    const carga = await this.loadingCtrl.create({
      message: "Grabando..."
    });
    await carga.present();
    this.persoServ.addPersona(this.persona).then(() => {
      carga.dismiss();
      this.nav.navigateForward("/");
    });
  }

}
