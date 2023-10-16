import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  onCheckedBox(event: any){
    const isCheked = event.target.checked
    localStorage.setItem('isChecked', isCheked)
    const retrieveValue = localStorage.getItem('isChecked')


    if(!event.target.checked) {
      // Removing a specific item
      // localStorage.removeItem("name of localStorage variable you want to remove");
      localStorage.clear();
    } else{
      
      const description = document.getElementById('companyDescription')?.innerText;
      const link = document.getElementById('companyLink')?.innerText;
  

      const parsedLink= JSON.stringify(link);
      const parsedDescription= JSON.stringify(description);
      
      localStorage.setItem('0', parsedDescription);
      localStorage.setItem('1', parsedLink);
      event.target.checked = retrieveValue;
      console.log(event.target.checked);
      
      
    }
  }
}
