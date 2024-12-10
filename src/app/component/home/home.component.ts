import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  boxInfo = [
    { title: 'Sản phẩm', value: 28, icon: 'bx bx-calendar-plus', route: '/products' },
    { title: 'Đơn hàng', value: 16, icon: 'bx bxs-cart-add', route: '/orders' },
    { title: 'Doanh thu', value: '6,868,686', icon: 'bx bx-bar-chart-alt', route: '/analytics' },
    { title: 'Phản hồi', value: 22, icon: 'bx bx-message-alt-dots', route: '/feedback' }
  ];

  orders = [
    { customer: 'Nguyễn Văn A', date: '2024-09-20', cart: '2 sản phẩm', status: 'Chờ xác nhận' },
    { customer: 'Trần Thị B', date: '2024-09-21', cart: '1 sản phẩm', status: 'Chờ xác nhận' }
  ];

  ngOnInit() {
    this.initializeCharts();
  }

  initializeCharts() {
    const mixedCanvas = document.getElementById('mixedChart') as HTMLCanvasElement | null;
    const doughnutCanvas = document.getElementById('doughnutChart') as HTMLCanvasElement | null;

    if (mixedCanvas) {
        const mixedCtx = mixedCanvas.getContext('2d');
        const mixedChart = new (window as any).Chart(mixedCtx!, {
            type: 'bar',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                    {
                        label: 'Đơn hàng',
                        type: 'bar',
                        data: [10, 20, 30, 25, 40, 50],
                        backgroundColor: 'rgba(54, 162, 235, 0.6)',
                        borderColor: 'rgba(54, 162, 235, 1)',
                        borderWidth: 1
                    },
                    {
                        label: 'Doanh thu',
                        type: 'line',
                        data: [2000, 3000, 5000, 4000, 7000, 8000],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: false
                    }
                ]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }

    if (doughnutCanvas) {
        const doughnutCtx = doughnutCanvas.getContext('2d');
        const doughnutChart = new (window as any).Chart(doughnutCtx!, {
            type: 'doughnut',
            data: {
                labels: ['Sản phẩm', 'Đơn hàng', 'Phản hồi'],
                datasets: [{
                    data: [28, 16, 22],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(75, 192, 192, 0.6)'
                    ],
                    borderColor: 'rgba(200, 200, 200, 1)',
                    borderWidth: 2
                }]
            },
            options: {
                cutout: '70%',
                responsive: true,
                maintainAspectRatio: false
            }
        });
    }

  }

  toggleViewIcon(event: MouseEvent) {
    const icon = event.target as HTMLElement;
    icon.classList.toggle('bx-show');
    icon.classList.toggle('bx-hide');
  }

  confirmOrder(order: any) {
    alert(`Đơn hàng của ${order.customer} đã được xác nhận thành công.`);
    this.orders = this.orders.filter(o => o !== order);
  }
}
