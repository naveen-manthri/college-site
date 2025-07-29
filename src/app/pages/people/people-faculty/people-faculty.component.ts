import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-people-faculty',
  templateUrl: './people-faculty.component.html',
  styleUrls: ['./people-faculty.component.css']
})
export class PeopleFacultyComponent implements OnInit {

  mobile = AppConstants.Mobile;

  facultyList = [
    {
      name: 'Naveen Kumar G',
      designation: 'Director, MBA - School of Management',
      image: 'assets/external/Faculty-1.png',
      content: `Naveen is the founding Director of BGS School of Management. He is an economist and an institution builder working to accelerate the end of educational inequality in India. Previously, Naveen has spent a year at the Jameel Poverty Action Lab South Asian and two years at the University of California San Diego as a postdoctoral Scholar. His research examines the design, implementation and impact of education reforms. Naveen obtained a PhD in Economics from the University of Illinois Chicago in 2020 and a Master’s in Management from the London School of Economics in 2015. He graduated from Visvesvaraya Technological University with a degree in Engineering in 2012.`
    },
    {
      name: 'Dr. Chakravarthy E. S.',
      designation: 'Distinguished & In House Professor',
      image: 'assets/external/Faculty-2.png',
      content: `Chakravarthy’s last corporate position was Vice-President & Global RMG Head at Tata Consultancy Services (TCS), one of the world’s largest IT services and consulting firms. He has been honored with the “Chanakya Award” for the best business leader in the IT sector, and has been honored with a Doctorate from Mysore Open University for his contributions to the field of education.`
    },
    {
      name: 'Prof. Lalitha Jagadish',
      designation: 'Assistant Professor & Program Manager',
      image: 'assets/external/Faculty-3.png',
      content: `Lalitha Jagadish is a seasoned management professional with over two decades of experience across various service sectors. She has served in TATA Motors Ltd. and Primacy Industry India Ltd. She holds an MBA with a specialization in Marketing and HR from the T. A. Pai Management Institute (TAPMI) Manipal, Pursuing her PhD. In HRIS. Lalitha’s career spans roles such as Assistant Registrar at Adichunchanagiri University, where she coordinated university reports and documentation for statutory bodies, and Senior Manager at Primacy Industries, where she was instrumental in talent acquisition and training. Her academic contributions include serving as a Senior Assistant professor at Mangalore Institute of Technology and Engineering.`
    },
    {
      name: 'Prof. Dhananjai E. Rao',
      designation: 'Corporate Relations & Assistant Professor',
      image: 'assets/external/Faculty-4.png',
      content: `Dhananjai E Rao is an accomplished educator with over 18 years of experience in Data Analytics, Business Intelligence, and Strategic Management. He holds an MBA in Marketing/Finance and is currently pursuing a PhD in Finance. “His professional journey includes roles as a reporting lead at Unisys Global India, Assistant Manager at Ernst & Young and as an operations manager at Enzensa Knowledge Solutions, he has also contributed to academia as an Assistant Professor and Program Manager at ISBR business school and as an Assistant Professor at Rajarajeshwari College of Engineering” and has a publication in IEEE on credit card fraud detection using machine learning. Dhananjai’s expertise is further highlighted by his advanced Excel skills, strong writing abilities, and cross-cultural management experience.`
    },
    {
      name: 'Prof. S. Sandhya',
      designation: 'Assistant Professor',
      image: 'assets/external/Faculty-5.jpg',
      content: `Sandhya is a dedicated research scholar with a strong academic background, currently pursuing her Doctor of Philosophy as a Part-Time Research Scholar at the NIT Andhra Pradesh. She holds a Master of Business Administration in HR and Marketing from NIT Karnataka, and a Master of Technology in Power and Industrial Drives from JNTU Anantapur. Sandhya’s software skills include proficiency in Python, R language, and Tableau, and she is known for her innovative teaching style that emphasizes practical knowledge and current trends. Sandhya’s profile reflects a blend of technical expertise, academic excellence, and a forward-thinking approach to education and research.`
    },
    // {
    //   name: 'Prof. Shalini P. R',
    //   designation: 'Assistant Professor',
    //   image: 'assets/external/Faculty-6.png',
    //   content: `Shalini is an MBA in Finance graduate with a solid background in banking operations and e-learning development. Academically, she holds a Master of Business Administration in Finance from JSS Centre for Management Studies and a Bachelor’s in Business Management from MMK and SDM College. Her technical skills include proficiency in Finacle Banking Software, MS Office, and Tally 9.`
    // },
    {
      name: 'Prof. Suneel Rao T.R',
      designation: 'Assistant Professor',
      image: 'assets/external/Faculty-7.png',
      content: `Rao Suneel T R is a highly motivated Assistant Professor with expertise in Strategic Management, Advertising, and Brand Management for MBA students. He combines his rich corporate experience with academia to deliver insightful and impactful lessons. With an extensive career spanning roles in business development, marketing strategy, and procurement, he has worked with leading organizations such as Flipkart, Logitech, and JP Morgan Chase. His passion for teaching and management is complemented by excellent communication skills and a strong commitment to nurturing students’ growth while advancing institutional success​.`
    },
    {
      name: 'Prof. Yashodha G',
      designation: 'Assistant Professor',
      image: 'assets/external/Faculty-8.png',
      content: `Yashodha G is a dedicated Assistant Professor with over four years of teaching experience, specializing in Commerce and Management. Currently working at BGS College of Engineering and Technology, Department of MBA, she has taught a wide array of subjects, including Cost Accounting, Management Accounting, and Financial Reporting. Her academic journey includes an M.Com from Mount Carmel College and a KSET certification, with aspirations for a Ph.D. Reflecting her multifaceted abilities, she has coordinated cultural and academic events, presented research papers, and guided student projects. Yashodha’s commitment to education and her diverse professional achievements make her a valuable mentor for students​.`
    }
  ];
  
  constructor(private title: Title) {
    this.title.setTitle('People')
  }
  ngOnInit(): void {
  }
}
