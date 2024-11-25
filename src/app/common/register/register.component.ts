import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { Router, RouterLink } from '@angular/router';
import { Role, user } from '../../model/Loginmodel';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    RouterLink,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  roles: Role[] = [
    { value: 'salesman', viewValue: 'Salesman' },
    { value: 'supervisor', viewValue: 'Supervisor' },
    { value: 'manager', viewValue: 'Manager' },
  ];
  constructor(private services: MasterService, private router: Router) {}
  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    name: new FormControl(
      '',
      Validators.compose([Validators.minLength(5), Validators.required])
    ),
    password: new FormControl(
      '',
      Validators.compose([Validators.minLength(5), Validators.required])
    ),
    email: new FormControl(
      '',
      Validators.compose([Validators.email, Validators.required])
    ),
    role: new FormControl('salesman', Validators.required),
    gender: new FormControl('m'),
    terms: new FormControl(false),
  });
  ProceedRegister() {
    if (this.registerForm.valid) {
      if (this.registerForm.value.terms) {
        let _data: user = {
          id: this.registerForm.value.username as string,
          name: this.registerForm.value.name as string,
          email: this.registerForm.value.email as string,
          gender: this.registerForm.value.gender as string,
          password: this.registerForm.value.password as string,
          role: this.registerForm.value.role as string,
        };
        this.services.ProceedRegister(_data).subscribe((item) => {
          alert('Registration Completed');
          this.router.navigateByUrl('login');
        });
      } else {
        alert('Please Agree terms & conditions and proceed');
      }
    }
    // this.registerForm.setValue({
    //   username: 'admin',
    //   name: 'User',
    //   password: 'admin',
    // });
  }
}
