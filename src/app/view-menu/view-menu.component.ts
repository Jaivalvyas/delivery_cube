import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { map, Observable, startWith } from 'rxjs';
import { AdminService } from '../services/admin.service';
import { AuthserviceService } from '../services/authservice.service';
import { LoginService } from '../services/login.service';
import { UserService } from '../services/user.service';
export interface StateGroup {
  letter: string;
  names: string[];
}
export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-view-menu',
  templateUrl: './view-menu.component.html',
  styleUrls: ['./view-menu.component.css']
})
export class ViewMenuComponent implements OnInit {

  stateForm = this._formBuilder.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'B',
      names: ['Biryani','Burger'],
    },
    {
      letter: 'C',
      names: ['Chinese', 'Columbian'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hyderabad'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pizza'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Indian', 'South Dakota', 'SI'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Uppal'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions!: Observable<StateGroup[]>;
  
  clicked = false;
  restaurents: any;
  menuList: any;
  disableSelect = new FormControl(false);
  products: any;

  public searchTerm !: string;
  public searchTerm1 !: string;
  searchKey:string ="";
  searchKey2:string ="";

  constructor(private logInServ:LoginService, private adminService: AdminService, private router: ActivatedRoute,
     private _snackBar: MatSnackBar, private userService: UserService, private authService: AuthserviceService,
     private _formBuilder:FormBuilder) { }



  ngOnInit(): void {
    this.adminService.getCurrentRestaurant(this.restId).subscribe({
      next: restaurentData => {
        this.restaurents = restaurentData;
        this.menuList = this.restaurents.menu

        console.log(restaurentData)

      },
      error: e => {
        alert("Something went wrong try after sometime")
      }
    });


    this.userService.getProducts()
      .subscribe((res: any) => {
        this.products = res;
        console.log(this.products)
      });

      this.adminService.search.subscribe((val:any)=>{
        this.searchKey = val;
      })

      this.adminService.search1.subscribe((val:any)=>{
        this.searchKey2 = val;
      })

      this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges.pipe(
        startWith(''),
        map(value => this._filterGroup(value || '')),
      );
    }
    
    private _filterGroup(value: any): StateGroup[] {
      if (value) {
        return this.stateGroups
          .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
          .filter(group => group.names.length > 0);
      }
  
      return this.stateGroups;
    }
  


  restId = this.router.snapshot.params['restaurantId'];
  deletemenu(foodItemName: string) {
    console.log(this.restId);
    this.adminService.deleteMenu(this.restId, foodItemName).subscribe({
      next(x) { },

      error(errormsg) { alert("something Went Wrong") },
    });
    window.location.reload();
    this._snackBar.open('You have deleted  the menu!!', 'success', {
      duration: 5000,
      panelClass: ['mat-toolbar', 'mat-primary']
    })
  }

  email = this.authService.getEmail();





  addToCart(menu: any) {

    let currentMenu = menu.foodItemName;
    console.log(currentMenu)
    let item1 = this.products.find((i: { foodItemName: string; }) => i.foodItemName === menu.foodItemName);

    console.log(item1)

    if (item1 === undefined) {
      this.userService.addToCart(menu);
      console.log(menu)
      this.userService.addMenuToCart(menu, this.email).subscribe({
        next(x) { alert("added to cart") },
        error(errormsg) { alert("something goes wrong") },
      });

      this._snackBar.open('added!!', 'success', {
        duration: 5000,
        panelClass: ['mat-toolbar', 'mat-primary']
      });
    } else {
      alert("already in cart")
    }
        window.location.reload();

  }


  isAdmin: boolean = this.logInServ.roleMatch("Admin");
  isUser: boolean = this.logInServ.roleMatch("User");

  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.adminService.search.next(this.searchTerm);

  }

  search1(event:any){
    
    this.searchTerm1 = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm1);
   
    this.adminService.search1.next(this.searchTerm1);
  }
}



