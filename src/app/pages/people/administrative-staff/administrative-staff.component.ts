import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-administrative-staff',
  templateUrl: './administrative-staff.component.html',
  styleUrls: ['./administrative-staff.component.css']
})
export class AdministrativeStaffComponent implements OnInit {


  mobile = AppConstants.Mobile;

  adminStaffList = [
    {
      name: 'Kanaka G V',
      designation: 'Training and Placement Cordinator',
      image: 'assets/external/staff-1.png',
      content: `Kanaka is a dedicated Training and Placement Coordinator, specializing in organizing successful placement programs, fostering employer relationships, and providing career guidance to students. With a proven track record in helping students secure job opportunities, Kanaka leverages data to enhance placement strategies. Known for strong communication, organizational skills, and industry knowledge, Kanaka is committed to facilitating student success by creating tailored career opportunities that meet both student and employer needs.`
    },
    {
      name: 'Gunasheela S',
      designation: 'Senior Program Coordinator',
      image: 'assets/external/staff-2.png',
      content: `Gunasheela serves as the Program Coordinator for the MBA program at BGSCET and also functions as a Teaching Assistant to the Program Director. She is an esteemed alumna of BGS Institute of Management, having graduated from this very institution. Her professional journey from a student to a key administrative and academic role at BGSCET reflects her profound dedication to the institution’s mission and values. In her dual role, Gunasheela plays a crucial part in managing program operations and supporting the Program Director, contributing significantly to the academic and administrative success of the MBA program.`
    },
    {
      name: 'Vinay Kumar Y S',
      designation: 'Accountant',
      image: 'assets/external/staff-3.png',
      content: `Vinay Kumar Y.S. serves as the Accountant for the MBA program at BGSCET, bringing with him 4 years of experience in the field. In this role, Vinay is responsible for managing and overseeing all financial transactions and accounting activities related to the MBA program. His meticulous approach ensures accurate financial reporting and effective budget management, which are crucial to the program’s financial stability and operational efficiency. Vinay’s expertise and attention to detail significantly contribute to maintaining the program’s financial integrity and adherence to institutional policies.`
    },
    {
      name: 'Namrata V Hubli',
      designation: 'Program Coordinator & Research Assistant',
      image: 'assets/external/staff-5.png',
      content: `Namrata V. Hubli serves as the Program Coordinator for the MBA program at BGSCET and also functions as a Research Assistant to the Program Director. She is a dynamic and analytical MSc Economics graduate from Dr. B.R. Ambedkar School of Economics, Bengaluru. With a strong background in quantitative and qualitative analysis, she brings expertise in tools such as Python, R, Power BI, and STATA. Namrata’s academic achievements are matched by her professional experience as a Research Assistant at 60 Decibels, where she excelled in data collection and analysis. Passionate about impactful research, she has explored areas like sustainable development, game theory, and macroeconomic dynamics. Her interests extend beyond academics to include Taekwondo, photography, and community engagement.`
    },
    {
      name: 'Gowtham R',
      designation: 'Accounts Assistant - Intern',
      image: 'assets/external/staff-6.png',
      content: `Gowtham is currently serving as an Account Assistant Intern at BGSCET department of MBA, where he actively supports the finance and accounting operations of the institution. In this role, he assists with maintaining financial records, preparing reports, processing invoices, and supporting budget-related activities. 
      Under the guidance of the accounting team, Gowtham is gaining valuable hands-on experience in institutional accounting practices and financial management. He also collaborates with administrative staff to ensure accuracy and compliance in daily financial tasks.
      Gowtham’s internship plays a vital role in his professional development, offering him the opportunity to apply his academic learning in a practical setting while contributing meaningfully to the efficiency and effectiveness of the department.`
    },
    {
      name: 'Lohith D',
      designation: 'Admission and Program Coordinator - Intern',
      image: 'assets/external/staff-7.png',
      content: `Lohith is currently serving as an intern within the MBA program at BGSCET. In this capacity, he actively contributes to various administrative tasks, gaining valuable hands-on experience in the field of business administration. His role involves supporting the program's daily operations, assisting the Program Director, Program Manager, and Program Coordinator, and engaging in various initiatives that enhance the overall experience. 
      He is also working on video content creation, helping to visually communicate the program’s activities, events, and achievements. Lohith’s internship is an integral part of his professional development, and his contributions are instrumental in supporting the program's objectives and operations.`
    }
  ];

  graduateStudentList = [
    {
      name: 'Yashas D',
      designation: 'President',
      image: 'assets/external/grad-stud-1.png'
    },
    {
      name: 'Manasa D',
      designation: 'Vice-president (GSB) & HR Club Secretary',
      image: 'assets/external/grad-stud-2.png'
    },
    {
      name: 'Revathi P',
      designation: 'Secretary, Academic Affairs (GSB) & Spiritual Club Secretary',
      image: 'assets/external/grad-stud-3.png'
    },
    {
      name: 'Darshan Gowda H K',
      designation: 'Secretary, Industry and Student Affairs (GSB)',
      image: 'assets/external/grad-stud-4.png'
    },
    {
      name: 'Vikas G',
      designation: 'Treasurer (GSB), Finance & Consulting Club Secretary,Vice president of all clubs, Placement committee officer for industry relations',
      image: 'assets/external/grad-stud-5.png'
    },
    {
      name: 'Disha P R',
      designation: 'President of Student Clubs & Adventurous Club Secretary',
      image: 'assets/external/grad-stud-6.png'
    },
    {
      name: 'Likith B',
      designation: 'Competitive Exam Club Secretary',
      image: 'assets/external/grad-stud-7.png'
    }
  ]
  
  constructor(private title: Title) {
    this.title.setTitle('People')
  }
  ngOnInit(): void {
  }
}
