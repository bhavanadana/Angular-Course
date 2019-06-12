import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

export interface Post{
  title:string;
  html:string;
  description:string;
  feature_image:string;
  featured:boolean;
  author:{
    name:string,
    profileImageLstring
  },
  created_on:Date,
  url:string
}
declare var MediumEditor: any;
declare var $:any
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements AfterViewInit {
  title:string = "Give a title to your post";
  feature:boolean = false;
  OnSave() {

    var str = this.editor.serialize()['element-0'].value;
    let post:Post={
      title:this.title,html:str,
      url:this.title.split(' ').join('-').toLowerCase(),
      feature_image:this.getImage(str),
      featured:this.feature,
      author:{
        name:'Neeraj Dana',profileImageLstring:''
      },
      created_on:new Date(),
      description:this.getDescription(str).substring(0,100)

    }
   console.log(post)
    this.afs.collection('blog').doc(post.url).set(post).then(a=>{
      console.log('done');
      
    }).catch(e=>console.log(e));
   

   
  }

  getImage(str){
    var elem = document.createElement('div');
elem.style.display = 'none';
document.body.appendChild(elem);
elem.innerHTML = str;
//console.log(elem.querySelector('img').src);

return elem.querySelector('img')?elem.querySelector('img').src:'';
  }
  getDescription(str):string{
    var elem = document.createElement('div');
elem.style.display = 'none';
document.body.appendChild(elem);
elem.innerHTML = str;
console.log(elem.querySelector('p').innerText);

return elem.querySelector('p').innerText;
  }
  ngAfterViewInit(): void {

    this.editor = new MediumEditor('.editable', {
      paste: {
        /* This example includes the default options for paste,
           if nothing is passed this is what it used */
        forcePlainText: false,
        cleanPastedHTML: true,
        cleanReplacements: [],
        cleanAttrs: ['class', 'style', 'dir', 'name'],
        cleanTags: ['meta'],
        unwrapTags: []
      },
      anchor: {
        /* These are the default options for anchor form,
           if nothing is passed this is what it used */
        customClassOption: null,
        customClassOptionText: 'Button',
        linkValidation: false,
        placeholderText: 'Paste or type a link',
        targetCheckbox: false,
        targetCheckboxText: 'Open in new window'
      },
      toolbar: {
        /* These are the default options for the toolbar,
           if nothing is passed this is what is used */
        allowMultiParagraphSelection: true,
        buttons: ['bold', 'italic', 'underline', 'anchor', 'h2', 'h3', 'quote', 'pre',
          'orderedlist',
          'indent',
          'justifyLeft',
          'justifyCenter',
          'justifyRight',
          'justifyFull',
          'h1',
          'h3',
          'h6'],
        diffLeft: 0,
        diffTop: -10,
        firstButtonClass: 'medium-editor-button-first',
        lastButtonClass: 'medium-editor-button-last',
        relativeContainer: null,
        standardizeSelectionStart: false,
        static: false,
        /* options which only apply when static is true */
        align: 'center',
        sticky: false,
        updateOnEmptySelection: false,

      },
    });

    $('.editable').mediumInsert({
      editor: this.editor
    });
    
  
  }

  editor: any;
  constructor(private afs: AngularFirestore) { }

  ngOnInit() {
  }

  enablefeature()
  {
    if(this.feature == false)
    {
      this.feature = true;
    }else{
      this.feature = false; 
    }
  }
}


