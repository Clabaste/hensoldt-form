import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Options} from "../ticket.model";
import {TicketFormService} from "../ticket-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Subscription} from "rxjs";
@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.scss']
})
export class TicketFormComponent implements OnInit, OnDestroy{
  isLoading = false
  productOptions: Options[]  = []

  postTicketSubscription: Subscription
  getOptionsSubscription: Subscription
  constructor(
    private ticketFormService: TicketFormService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {

    this.postTicketSubscription = Subscription.EMPTY;
    this.getOptionsSubscription = Subscription.EMPTY;
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
    this.getOptionsSubscription = this.ticketFormService.getProductOptions().subscribe((resp) => {
      this.isLoading = false;
      this.productOptions = resp
    })


  }
  onSubmit() {
    const product = this.productOptions.find(item => item.name === +this.ticketForm.value.products)?.desription
    const reqBody = {
      ...this.ticketForm.value,
      products: product
    }

    this.postTicketSubscription = this.ticketFormService.postNewTicket(reqBody).subscribe(() => {
      this.router.navigate(['../ticket_overview'], { relativeTo: this.activatedRoute })
    })
  }
  ngOnDestroy() {
    this.postTicketSubscription.unsubscribe()
    this.getOptionsSubscription.unsubscribe()
  }
}
