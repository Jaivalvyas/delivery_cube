import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Address } from '../model/Address';
import { User } from '../model/User';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { RegistrationService } from '../services/registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  
  user:User={};
  userImage:any = File;


  firstFormGroup = this._formBuilder.group({
    // profileImage: ['' ,[Validators.required]]
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

  constructor( private dialogRef: MatDialogRef<NavigationBarComponent>,private _formBuilder: FormBuilder,
    private _snackBar:MatSnackBar, private registrationService:RegistrationService,private httpClient:HttpClient) {}

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


  onSelectFile(event:any){
    const file = event.target.files[0];
    this.userImage = file;
    console.log(this.userImage)
  }

  onSubmit(): void {
    this.dialogRef.close();
    const userData = this.user;
    const formData = new FormData();
    console.log(userData);

    formData.append('user',JSON.stringify(userData));
    formData.append('file',this.userImage);
    console.log(formData);
    this.registrationService.saveUserProfile(formData).subscribe({
      next(x) { alert("Data Added") },
      error(errormsg) { },
    })


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
