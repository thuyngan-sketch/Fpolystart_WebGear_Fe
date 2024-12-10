import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent {
  mailTo: string = '';
  subject: string = '';
  body: string = '';
  attachment: File | null = null;
  private apiUrl = 'https://localhost:7249/api/Maling'; // Đường dẫn đến API của bạn

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.attachment = event.target.files[0];
  }

  sendEmail() {
    const formData: FormData = new FormData();
    formData.append('MailTo', this.mailTo);
    formData.append('Subject', this.subject);
    formData.append('Body', this.body);
    if (this.attachment) {
      formData.append('Attachment', this.attachment);
    }

    this.http.post(`${this.apiUrl}/Send`, formData).subscribe(
      response => {
        console.log('Email sent successfully:', response);
        alert('Email sent successfully!');
      },
      error => {
        console.error('Error sending email:', error);
        alert('Error sending email.');
      }
    );
  }

  sendWelcomeEmail() {
    const dto = { Email: this.mailTo };
    this.http.post(`${this.apiUrl}/welcome`, dto).subscribe(
      response => {
        console.log('Welcome email sent successfully:', response);
        alert('Welcome email sent successfully!');
      },
      error => {
        console.error('Error sending welcome email:', error);
        alert('Error sending welcome email.');
      }
    );
  }
}
