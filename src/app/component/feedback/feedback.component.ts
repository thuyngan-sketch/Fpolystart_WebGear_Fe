import { Component } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  feedbackData = [
    { rating: 5, text: "Dịch vụ tuyệt vời! Tôi rất hài lòng." },
    { rating: 4, text: "Sản phẩm tốt, nhưng giao hàng hơi chậm." },
    { rating: 3, text: "Trung bình, không có gì nổi bật." },
    { rating: 5, text: "Rất tốt! Tôi sẽ quay lại." },
    { rating: 2, text: "Không hài lòng với sản phẩm." },
  ];
}
