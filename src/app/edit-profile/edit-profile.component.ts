import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  userObject: any;
  email=this.router.snapshot.params['email'];
  constructor(private registrationService: RegistrationService, private router: ActivatedRoute,private fb: FormBuilder,private _snackBar:MatSnackBar ) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['email']);
    this.registrationService.fetchUserById(this.router.snapshot.params['email'])
      .subscribe((result) => {
        this.userObject = result;
        console.log(this.userObject)
      });
  }

  profileForm = this.fb.group({

    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
  
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    phone: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern("[6-9]{1}[0-9]{9,}")]],
    zip: ['',[Validators.required,Validators.pattern("[0-9]{1}[0-9]{5,}")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
        
  },
  { validators: [this.mustMatchValidator] 
  }

  );
  get profileImage() { return this.profileForm.get("firstName") }

  get firstName() { return this.profileForm.get("firstName") }
  get lastName() { return this.profileForm.get("lastName") }
  get street() { return this.profileForm.get("street") }
  get city() { return this.profileForm.get("city") }
  get state() { return this.profileForm.get("state") }
  get phone() { return this.profileForm.get("phone") }
  get zip() { return this.profileForm.get("zip") }

  get password() { return this.profileForm.get("password"); }
  get confirmPassword() { return this.profileForm.get("confirmPassword"); }
  onSubmit(): void {

    this.registrationService.updateUser(this.email,this.userObject).subscribe({
      next(x) { alert("User Details upadated") },
      error(errormsg) { },
    });
  }

  mustMatchValidator(fg: AbstractControl) {
    const passwordValue = fg.get("password")?.value;
    const confirmPasswordValue = fg.get("confirmPassword")?.value;
    if (!passwordValue || !confirmPasswordValue) {
      return null;
    }
    if (passwordValue != confirmPasswordValue) {
      return { mustMatch: false }
    }
    return null;
  }
}
