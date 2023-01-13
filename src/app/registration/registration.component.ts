import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  

  firstFormGroup = this._formBuilder.group({
    profileImage: ['' ,[Validators.required]]
    });  

  secondFormGroup = this._formBuilder.group({    
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
  });

  thirdFormGroup = this._formBuilder.group({
    street: ['', [Validators.required]],
    city: ['', [Validators.required]],
    state: ['', [Validators.required]],
    phone: ['',[Validators.required,Validators.minLength(8),Validators.maxLength(10),Validators.pattern("[6-9]{1}[0-9]{9,}")]],
    zip: ['',[Validators.required,Validators.pattern("[0-9]{1}[0-9]{5,}")]]
  });

  
  fourthFormGroup = this._formBuilder.group({    
    email: ['', [Validators.required, Validators.pattern("([a-zA-Z0-9]+)([\.{1}])?([a-zA-Z0-9]+)\@gmail([\.])com")]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
    confirmPassword: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/)]],
        
  },
  { validators: [this.mustMatchValidator] 
  });



  hasUnitNumber = false;

  constructor(private _formBuilder: FormBuilder,private _snackBar:MatSnackBar) {}

  get firstName() { return this.secondFormGroup.get("firstName") }
  get lastName() { return this.secondFormGroup.get("lastName") }
  get street() { return this.thirdFormGroup.get("street") }
  get city() { return this.thirdFormGroup.get("city") }
  get state() { return this.thirdFormGroup.get("state") }
  get phone() { return this.thirdFormGroup.get("phone") }
  get zip() { return this.thirdFormGroup.get("zip") }

  get email() { return this.fourthFormGroup.get("email"); }
  get password() { return this.fourthFormGroup.get("password"); }
  get confirmPassword() { return this.fourthFormGroup.get("confirmPassword"); }


  onSubmit(): void {
    // this.regServ.storeData(this.userObject).subscribe({
    //   next(x) { alert("Data Added") },
    //   error(errormsg) { },
    //   complete() { alert("completed") }
    // })


    // console.log(this.profileForm.value);
    this._snackBar.open('Congrats!!You have submiited the form!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    });
    // this.profileForm.reset();
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
