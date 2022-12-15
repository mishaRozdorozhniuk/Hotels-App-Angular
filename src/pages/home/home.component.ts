import {Component, OnInit} from '@angular/core';
import {HotelsService} from "../../services/hotels.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  dropdownList: any;
  dropdownSettings: any
  form: FormGroup

  constructor(public hotelService: HotelsService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  initForm() {
    this.form = this.formBuilder.group({
      zagreb: new FormControl(''),
      kyiv: new FormControl(''),
      beds: ['', [Validators.required]]
    })
  }

  ngOnInit() {
    this.initForm()
    this.dropdownList = this.getData()
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'text',
      selectAllText: 'Select All',
      unSelectAllText: 'Unselect All'
    }
  }

  getData() {
    return [
      {id: 1, text: '1'},
      {id: 2, text: '2'},
      {id: 3, text: '3'},
      {id: 4, text: '4'}
    ]
  }

  handleButtonClick() {
    this.hotelService.filteredBedsValue = this.form.value.beds
    for (const [key, value] of Object.entries(this.form.value)) {
      if (value && key !== 'beds') {
        this.hotelService.filteredAddressValue.push(key)
      }
    }
    this.router.navigate(['filteredRooms'])
  }
}
