import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CommonService } from 'src/app/_service/common.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-form-submit',
  templateUrl: './form-submit.component.html',
  styleUrls: ['./form-submit.component.css']
})

export class FormSubmitComponent implements OnInit {

  courseForm : FormGroup;
  courseImagefilename: any;
  courseImageCertificateName: any;

  constructor(private fb: FormBuilder,private commonService:CommonService,private snackBar:MatSnackBar) { 

    this.courseForm = this.fb.group({
      courseTitle: ['',Validators.required],
      learningObjective: ['',Validators.required],
      certificateBenefits: ['',Validators.required],
      courseCertificate: [null], // image
      courseCoverage: ['',Validators.required],
      eligibilityCriteria: ['',Validators.required],
      narration: ['',Validators.required],
      duration: ['',Validators.required],
      courseExtension: ['',Validators.required],
      courseImage:[null], //image
      coursePurpose : ['',Validators.required]
  });
  }

  ngOnInit() {
  }
  get f(){return this.courseForm.controls}

  submitForm(){
    if(this.courseForm.invalid){
      return
    }

    const submitFormData = new FormData; // since data contains image as well so form data is used
    submitFormData.append('courseTitle',this.f.courseTitle.value)
    submitFormData.append('learningObjective',this.f.learningObjective.value)
    submitFormData.append('certificateBenefits',this.f.certificateBenefits.value)
    submitFormData.append('courseCertificate',this.f.courseCertificate.value)
    submitFormData.append('courseCoverage',this.f.courseCoverage.value)
    submitFormData.append('eligibilityCriteria',this.f.eligibilityCriteria.value)
    submitFormData.append('narration',this.f.narration.value)
    submitFormData.append('duration',this.f.duration.value)
    submitFormData.append('courseExtension',this.f.courseExtension.value)
    submitFormData.append('courseImage',this.f.courseImage.value)
    submitFormData.append('coursePurpose',this.f.coursePurpose.value)
    submitFormData.append('categoryId','1')
    submitFormData.append('id','1')
    
    this.commonService.submitForm(submitFormData).subscribe(result=>{
      console.log(result)
      if(result.status==200){
        this.snackBar.open('Your data has been saved successfuly', "OK", {
          duration: 5000,
        });
      }
    });
  }

  onFileCourseFileChanged(event) {
    let courseImage = event.target.files[0]
    this.f.courseImage.setValue(courseImage) 
    this.courseImagefilename = courseImage.name
  }
  onFileCourseCertificationFileChanged(event) {
    let courseImage  = event.target.files[0]
    this.f.courseCertificate.setValue(courseImage) 
    this.courseImageCertificateName = courseImage.name
  }
  cancelFile(type) {
    if(type="certificate"){
      this.courseImageCertificateName ='';
    }else{
      this.courseImagefilename = ""
    }
  }

}

  
// https://lms.productconsultancy.com/courses/course   post api

// fileds show below :-

// categoryId : 1 
// certificateBenefits
// courseCertificate  : image file send
// courseCoverage
// courseImage :           image file send
// coursePurpose
// courseTitle
// eligibilityCriteria
// id :1
// narration
// duration
// learningObjective
// courseExtension


// Instruction
// 1. validation on all filled in  the form. 
// 2. use material designing (for example mat input , mat error )
// 3. show popup message after saving .
