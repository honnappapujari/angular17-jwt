import { Component } from '@angular/core';
import { Firestore, collection,addDoc, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  form : FormGroup;
  constructor(private fb: FormBuilder, private firestore : Firestore)
  {
    this.getData();
    this.form = this.fb.group(
      {
        email: new FormControl('', [Validators.required]),
        password: new FormControl('', [Validators.required])

      }
    )
  }
  async onSubmit()
  {
    if(this.form.valid)
    {
      console.log(this.form.value);
      const connectionInstance = collection(this.firestore, 'users');
     addDoc(connectionInstance, this.form.value).then(() =>
     {
        console.log('Login successfull');
     }).catch((err) =>
     {
      console.log('Error',err)
     })
        }
  }
  getData()
  {
    const collectionInstance = collection(this.firestore, 'users');
    collectionData(collectionInstance).subscribe( (val: any) =>
    {
      console.log(val)
    })
  }

  updateData(id:string)
  {
    const docInstance = doc(this.firestore, 'users', id);
    const updateData = {
      name: 'updatedName'
    }
    updateDoc(docInstance, updateData).then(()=>
    {
      console.log('succefully Updated')
    }).catch((err) =>
    {
      console.log(err)
    })
  }
}
