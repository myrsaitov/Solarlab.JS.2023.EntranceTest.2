import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  form: FormGroup = new FormGroup({
    phone_number: new FormControl<string>('79787713935', [Validators.required]),
    password: new FormControl<string>('meV1G54PLX8f', [Validators.required]),
    isRememberedMe: new FormControl<boolean>(true)
  });
}
