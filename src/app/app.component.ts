import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FormArray';



  AddDetails = new FormGroup({

    //1- Decalare formarray type control
    skills : new FormArray(
      [
      new FormControl('', [Validators.required]),
      new FormControl('', [Validators.required]),
      ]
    )


  });



  //3 - Creating this function to return the controls to the html where we loop through it
  getSkillsControls() : FormArray{
    return this.AddDetails.get('skills') as FormArray;
  }



  //4- Add to the array new controls
  addSkills(){
    (<FormArray>this.AddDetails.get('skills')).push(new FormControl('', [Validators.required]))
  }


  //5- Remove that control with index
  removeSkills(i : number){
    (<FormArray>this.AddDetails.get('skills')).removeAt(i)
  }


  onSubmit() : void {
    console.log(this.AddDetails.value);
  }
}
