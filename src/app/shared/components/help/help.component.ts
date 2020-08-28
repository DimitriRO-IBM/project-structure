import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { HelpService } from '../../services/help.service';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.scss']
})
export class HelpComponent implements OnInit {

  readonly HELP_PATH: string = '/assets/CHMHelp/Html';
  helpPageName: string = '';

  htmlContent: SafeHtml | undefined;
  displayHtml: boolean = false;

  constructor(
    private helpService: HelpService,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.helpService.helpSubject.asObservable().subscribe({
      next: async (help: string) => {
        if (help) {
          this.displayHtml = false;
          this.helpPageName = help;
        }
      },
    });
  }

  async onHelpButtonClick(): Promise<void> {
    const uri: string = `${this.HELP_PATH}/${this.helpPageName}`;
    this.helpService.getHtmlHelpfile(uri).subscribe({
      // tslint:disable-next-line:no-any
      next: (value: any) => {
        if (value) {
          this.htmlContent = this.sanitizer.bypassSecurityTrustHtml(String(value));
          this.displayHtml = true;
        }
      },
    });
  }
}
