import { Component, OnInit } from '@angular/core';
import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  helpContent: string = '';

  constructor(
    private helpService: HelpService,
  ) { }

  ngOnInit(): void {
    this.helpService.helpSubject.asObservable().subscribe({
      next: (help: string) => {
        if (help) {
          this.helpContent = help;
        }
      },
    });
  }

  onHelpButtonClick(): void {
    alert(this.helpContent);
  }

}
