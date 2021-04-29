import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import { ToastController } from '@ionic/angular';

@Injectable()
export class GlobalProvider {
  public readonly debug = true;

  constructor( 
    public toastController: ToastController
    ) {}

  validateForm(form: FormGroup): boolean {
    if (!form.valid) {
      Object.keys(form.controls).forEach(field => {
        const control = form.get(field);
        control.markAsTouched({ onlySelf: true });
      });
      if (this.debug) {
        this.logFormErrors(form);
      }
    }
    return form.valid;
  }

  validateForms(form: FormGroup[]): boolean {
    let valid = true;
    if (form.length < 1) {
      return;
    }
    for (let i = 0; i < form.length; i++) {
      if (form[i]) {
        Object.keys(form[i].controls).forEach((field) => {
          if (!form[i].valid) {
            valid = false;
          }
          const control = form[i].get(field);
          control.markAsTouched({ onlySelf: true });
        });
      }
    }
    return valid;
  }

  logFormErrors(form: FormGroup) {
    if (!form.valid) {
      Object.keys(form.controls).forEach(key => {
        const controlErrors: ValidationErrors = form.get(key).errors;
        if (controlErrors) {
          Object.keys(controlErrors).forEach(keyError => {
            console.log('Key control: ' + key + ', keyError: ' + keyError + ', err value: ', controlErrors[keyError]);
          });
        }
      });
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 4000,
      position: 'bottom',
      //showCloseButton : true     
    });
    toast.present();
  }

  b64toBlob(b64Data, contentType) {
    contentType = contentType || '';
    let sliceSize = 512;
    let byteCharacters = atob(b64Data);
    let byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      let slice = byteCharacters.slice(offset, offset + sliceSize);

      let byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      let byteArray = new Uint8Array(byteNumbers);

      byteArrays.push(byteArray);
    }
    let blob = new Blob(byteArrays, { type: contentType });
    return blob;
  }

  checkCF(cf: string) {
    if(cf) {
      let patternCF = /^[a-zA-Z]{6}[0-9]{2}[a-zA-Z][0-9]{2}[a-zA-Z][0-9]{3}[a-zA-Z]$/;
      if(cf.search(patternCF) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  checkEmail(email:string) {
    if(email) {
      let patternEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/
      if(email.search(patternEmail) == -1) {
        return false;
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  comparePassword(pass1:string, pass2 : string) {
    if(pass1 === pass2) {
   {
        return true;
      }
    } else {
      return false;
    }
  }
}