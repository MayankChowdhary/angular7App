import { Component,OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app-seven';
  addTagText: string = "Hello"; 
 tagInputText: string[] = ['Apple', 'Orange', 'Banana']; 
 resultLinks: string[] = ['Loading...']; 
 image : any = "assets/images/loding_animation.gif";

 isShown: boolean = false ;


 UpdateText () {
   if(this.addTagText.trim()===""){
    this.addTagText="";
    alert("Nothing to add!");
   }else{
  this.tagInputText.push(this.addTagText);
  this.tagInputText=this.tagInputText.slice();
  this.addTagText="";
  // this .tagInputText.join();
  }
}

  onSubmitText(){
    if(this.tagInputText.length===0){
    alert("Search is empty!");
    }else{
    this.tagInputText=[];
    this.isShown = true;
    this.resultLinks = ['Loading...']; 
    this.image=  "assets/images/loding_animation.gif";
    setTimeout(() => {
      this.image="assets/images/matrix.jpg";
      this.resultLinks=['https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact', 'https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact','https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact'];
  }, 5000);
  }
}
  onSaveImage(){
    if(this.resultLinks[0]=="Loading...")
    alert("Please Wait... Until loading completed.");
    else
    alert("Image Successfully Saved!");
  }
  onCancelImage(){
    this.isShown = false;
  }
  constructor() { }

    ngOnInit() {
      
    }

}
