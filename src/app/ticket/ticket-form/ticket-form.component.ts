import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Options, TicketFormService} from "../ticket-form.service";

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit{
  isLoading = false
  productOptions: Options[]  = []
  constructor(
    private ticketFormService: TicketFormService
  ) {
  }
  ticketForm: FormGroup = new FormGroup({
  })



  ngOnInit() {
    this.isLoading = true;
    this.ticketForm = new FormGroup({
      'title': new FormControl('', [Validators.required]),
      'products': new FormControl('', [Validators.required]),
      'desc': new FormControl('', [Validators.required])
    })
    this.ticketFormService.getProductOptions().subscribe((resp) => {
      this.isLoading = false;
      this.productOptions = resp
    })

    this.ticketFormService.getTestURL().subscribe((resp) => {

      console.info('resp', resp)
    })
  }
  onSubmit() {
    console.info('submitted', this.ticketForm.value)
  }
}
