import { Component } from '@angular/core';
import { TextValidator } from '../validator.validation';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqessValidation } from '../validations/Uniqess.validator';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  // Template Driven
  logObj(email) {
    console.log(email);
  }
  Submit(obj) {
    console.log(obj);
  }

  // Reactive Validation
  form = new FormGroup({
    // Pbject Of Control
    email: new FormControl('', [Validators.required], UniqessValidation.exist),
    password: new FormControl('', [TextValidator.noSpaceAllowed]),
  });
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  login() {
    // check data from Api 
    // Login
    // Else
    // Set Errors
    return this.form.setErrors({invalidLogin:true});
  }
}
 