import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../../../../shared/services/api/default.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  apiMessage: string = '';

  constructor(
    private defaultService: DefaultService,
  ) { }

  ngOnInit(): void {
    this.defaultService.getApiMessage().subscribe({
      next: (message: { message: string }) => {
        if (message) {
          this.apiMessage = message.message;
        }
      }
    });
  }

}
