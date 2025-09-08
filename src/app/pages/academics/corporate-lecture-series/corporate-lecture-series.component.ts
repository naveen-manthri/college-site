import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corporate-lecture-series',
  templateUrl: './corporate-lecture-series.component.html',
  styleUrls: ['./corporate-lecture-series.component.css']
})
export class CorporateLectureSeriesComponent implements OnInit {

  constructor() { }

  images = [
    { url: 'assets/corporate-lectures/Bhavya.JPG', alt: 'Bhavya Narasimhamurthy', name: 'Bhavya Narasimhamurthy' , date: '15-02-2024', topic: 'Gender Sensitivity & Career growth, Leadership and Decision making' },
    { url: 'assets/corporate-lectures/Anand.jpeg', alt: 'Anand Raj', name: 'Anand Raj' , date: '12-03-2024', topic: 'Choices and opportunities' },
    { url: 'assets/corporate-lectures/Anil.jpeg', alt: 'Dr. Anil B Gowda', name: 'Dr. Anil B Gowda' , date: '19-04-2024', topic: 'Analytics Perspective in Business Operations' },
    { url: 'assets/corporate-lectures/Aravind.jpeg', alt: 'Sri. Aravind R', name: 'Sri. Aravind R' , date: '13-03-2025', topic: 'Leadership, strategic decision-making, and the evolving landscape of e-commerce and supply chain management' },
    { url: 'assets/corporate-lectures/Chakravarthy.jpg', alt: 'Dr. E S Chakravarthy', name: 'Dr. E S Chakravarthy' , date: '16-02-2024', topic: 'what students should do to make the most out of the MBA program.' },
    { url: 'assets/corporate-lectures/John.jpeg', alt: 'John Quadros', name: 'John Quadros' , date: '22-03-2024', topic: 'Strategies and insights on navigating your career' },
    { url: 'assets/corporate-lectures/Kiran.jpg', alt: 'Kiran', name: 'Kiran' , date: '26-02-2024', topic: 'Higher Studies in Abroad' },
    { url: 'assets/corporate-lectures/Mohan.jpg', alt: 'Mohan', name: 'Mohan' , date: '01-03-2024', topic: 'Work life Balance' },
    { url: 'assets/corporate-lectures/Pramod.jpeg', alt: 'Pramodh N S', name: 'Pramodh N S' , date: '24-08-2024', topic: 'Mastering the Art of Public Speaking: Crafting Impactful and Persuasive Presentations' },
    { url: 'assets/corporate-lectures/Raghunandhan.jpeg', alt: 'Mr. Raghunandan M N', name: 'Mr. Raghunandan M N' , date: '27-09-2024', topic: 'Impact of Social Media:Transforming Career Path Academics to Corporate' },
    { url: 'assets/corporate-lectures/Ravi.jpeg', alt: 'Sri. Ravi Chandra', name: 'Sri. Ravi Chandra' , date: '20-02-2025', topic: 'Career growth, leadership strategies, and industry trends' },
    { url: 'assets/corporate-lectures/Sapna.jpeg', alt: 'Sapna Shenoy', name: 'Sapna Shenoy' , date: '20-03-2024', topic: 'Personal Financial Management' },
    { url: 'assets/corporate-lectures/Suma.jpeg', alt: 'Ms. Suma Annegowda', name: 'Ms. Suma Annegowda' , date: '18-09-2024', topic: 'Unlocking LinkedIn for Career Growth: Building a Personal Brand, Networking, and Job Hunting' },
    { url: 'assets/corporate-lectures/Supriya.jpg', alt: 'Supriya', name: 'Supriya' , date: '12-03-2024', topic: 'Company Secretary' },
    { url: 'assets/corporate-lectures/Vindhya.jpg', alt: 'Vindhya Umapathy', name: 'Vindhya Umapathy' , date: '13-02-2024', topic: 'Design Thinking' },
    { url: 'assets/corporate-lectures/Vivek.jpeg', alt: 'Dr. Vivek Veeraiah', name: 'Dr. Vivek Veeraiah' , date: '27-02-2025', topic: 'Vision, adaptability, and continuous learning in shaping successful careers.' },
  ]

  ngOnInit(): void {
  }

}
