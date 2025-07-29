import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { firstValueFrom } from 'rxjs';
import { AppointmentModalComponent } from 'src/app/components/appointment-modal/appointment-modal.component';
import { AppConstants } from 'src/app/constants/app-constants';

@Component({
  selector: 'app-program-academics',
  templateUrl: './program-academics.component.html',
  styleUrls: ['./program-academics.component.css']
})
export class ProgramAcademicsComponent implements OnInit {

  mobile = AppConstants.Mobile;

  testimonials = [
    {
      author: 'Likith B',
      text: `It is the best college that we chose to pursue our MBA, well disciplined, encouraging 
        faculties and director, and we are lucky to study under "Dr Nirmalanandanatha Mahaswamiji”
        and overall the college mainly focuses on studies and discipline and additional soft skills`,
      image: 'assets/external/testimonial-likith.JPG',
      designation: 'Undergraduate college BGS Institute of Management (2023-25 cohort)',
    },
    {
      author: 'Varsha B',
      text: `The MBA program at BGSCET MBA Vestitute offers a comprehensive curriculum designed 
        to equip students with essential business skills and leadership capabilities. The program is 
        well-structured, combining theoretical knowledge with practical experience, facilitated by 
        experienced faculty member`,
      image: 'assets/external/testimonial-varsha.JPG',
      designation: 'Undergraduate College Malleshwaram Ladies Association First Grade College for Women (2023-25 cohort)',
    },
    {
      author: 'Vikas G',
      text: `In my 6 months of experience at BGSCET MBA, I've got quality education and resources. I'm 
        able to upskill my self and explore more opportunities. Led by our Director Dr.Naveen sir so 
        It's been a great journey. He is a go to person for me and every time he encourages and 
        motivates me a lot.`,
      image: 'assets/external/testimonial-vikas.JPG',
      designation: 'Undergraduate college Vijaya College (2023-25 cohort)',
    },
    {
      author: 'Ashwini H C',
      text: `Pursuing my MBA at BGSCET has been a transformative experience. Specializing in HR and Finance, I've gained both academic knowledge and practical exposure through expert faculty and industry interactions. The value-based environment under the blessings of Poojya Guruj Dr. Nirmalanandanatha Mahaswamiji has truly shaped my personal and professional growth`,
      image: 'assets/external/testimonial-ashwini.JPG',
      designation: 'MBA (HR & Analytics)',
    },
    {
      author: 'Tejas B N',
      text: `Currently pursuing my MBA at BGSCET, I've had a truly enriching experience under the divine blessings of Poojya Guruji Dr. Nirmalanandanatha Mahaswamiji. The guidance of highly qualified faculty and industry experts has added immense value to my learning.`,
      image: 'assets/external/testimonial-tejas.JPG',
      designation: 'MBA 1st Year',
    },
    {
      author: 'Prajna E P',
      text: `My MBA journey at BGSCET has been truly transformative. Choosing this institution was one of the best decisions I've made. Under the divine blessings and vision of Jagadguru Sri Sri Sri Dr. Nirmalanandanatha Mahaswamiji, BGSCET offers a supportive environment, experienced faculty, and ample opportunities for both academic and personal growth.This journey has equipped me with knowledge, practical skills, confidence, and a clear direction for my career. I'm proud to be part of this esteemed institution.`,
      image: 'assets/external/testimonial-prajna.JPG',
      designation: 'MBA (Finance)',
    }
  ];

  currentIndex = 0;
  intervalId: any;
  
  constructor(private title: Title, private dialog: MatDialog) {
    this.title.setTitle('Academics')
  }
  
  
  ngOnInit(): void {
    this.startAutoScroll();
  }

  ngOnDestroy(): void {
    this.stopAutoScroll();
  }

  nextTestimonial(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prevTestimonial(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  startAutoScroll(): void {
    this.intervalId = setInterval(() => {
      this.nextTestimonial();
    }, 5000); // change testimonial every 5 seconds
  }

  stopAutoScroll(): void {
    clearInterval(this.intervalId);
  }

  async onBookAnAppointmentBtnClick(){
    const result = await firstValueFrom(
      this.dialog.open(AppointmentModalComponent).afterClosed()
    );
  }
}
