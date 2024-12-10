import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  monthlyData = [
    { month: 'Tháng 1', revenue: 1200000, confirmedOrders: 30, unconfirmedOrders: 5 },
    { month: 'Tháng 2', revenue: 1500000, confirmedOrders: 40, unconfirmedOrders: 3 },
    { month: 'Tháng 3', revenue: 2000000, confirmedOrders: 50, unconfirmedOrders: 10 },
    { month: 'Tháng 4', revenue: 2500000, confirmedOrders: 60, unconfirmedOrders: 2 },
    { month: 'Tháng 5', revenue: 3000000, confirmedOrders: 70, unconfirmedOrders: 1 },
    { month: 'Tháng 6', revenue: 3500000, confirmedOrders: 80, unconfirmedOrders: 0 },
    { month: 'Tháng 7', revenue: 4000000, confirmedOrders: 90, unconfirmedOrders: 4 },
    { month: 'Tháng 8', revenue: 4500000, confirmedOrders: 100, unconfirmedOrders: 5 },
    { month: 'Tháng 9', revenue: 5000000, confirmedOrders: 110, unconfirmedOrders: 3 },
    { month: 'Tháng 10', revenue: 5500000, confirmedOrders: 120, unconfirmedOrders: 6 },
    { month: 'Tháng 11', revenue: 6000000, confirmedOrders: 130, unconfirmedOrders: 2 },
    { month: 'Tháng 12', revenue: 6500000, confirmedOrders: 140, unconfirmedOrders: 1 },
  ];
  
  selectedMonth = 0;
  filteredData: any[] = [];
  
  ngOnInit() {
    this.updateStats();
  }

  updateStats() {
    // Filter data based on selected month
    this.filteredData = this.selectedMonth === 0 
      ? this.monthlyData 
      : this.monthlyData.slice(this.selectedMonth - 1, this.selectedMonth);
    
    // Draw chart with all months' data
    this.drawChart();
  }

  drawChart() {
    const ctx = (document.getElementById('revenueChart') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      const Chart = (window as any).Chart;

      new Chart(ctx, {
        type: 'line', // Type for mountain chart
        data: {
          labels: this.monthlyData.map(data => data.month), // Show all months
          datasets: [
            {
              label: 'Tổng Doanh Thu (VNĐ)',
              data: this.monthlyData.map(data => data.revenue),
              borderColor: 'rgba(60, 145, 230, 1)',
              backgroundColor: 'rgba(60, 145, 230, 0.2)',
              borderWidth: 2,
              fill: true,
            },
            {
              label: 'Đơn Hàng Đã Xác Nhận',
              data: this.monthlyData.map(data => data.confirmedOrders),
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderWidth: 2,
              fill: true,
            },
            {
              label: 'Đơn Hàng Chưa Xác Nhận',
              data: this.monthlyData.map(data => data.unconfirmedOrders),
              borderColor: 'rgba(255, 99, 132, 1)',
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderWidth: 2,
              fill: true,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false, // Allow height to be adjustable
          scales: {
            y: {
              beginAtZero: true,
              ticks: {
                callback: (value: number) => value.toLocaleString('vi-VN')
              }
            }
          }
        }
      });
    }
  }
}
