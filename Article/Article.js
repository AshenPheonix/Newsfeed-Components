// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
import dataSet from '../DBS/articles.js'
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement=domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton=this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent='Expand'
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',(e)=>this.expandArticle())
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('article-open')
    this.expandButton.textContent=(this.expandButton.textContent==='Expand'?'Close':'Expand')
  }
}

//Stretch
class ArticleBuilder{
  constructor(artData){
    this.root=document.createElement('div')
    this.head=document.createElement('h2')
    this.date=document.createElement('p')
    this.button=document.createElement('span')

    this.root.classList.add('article')
    this.date.classList.add('date')
    this.button.classList.add('expandButton')

    this.head.textContent=artData.head
    this.date.textContent=artData.date
    this.root.appendChild(this.head)
    this.root.appendChild(this.date)
    artData.art.forEach(item=>{
      let temp=document.createElement('p')
      temp.textContent=item
      this.root.appendChild(temp)
    })
    this.root.appendChild(this.button)
    document.querySelector('.articles').appendChild(this.root)
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let articleRemote=new ArticleBuilder(dataSet[0])

let articles = document.querySelectorAll('.article');
articles.forEach(item=>{
  console.log(item);
  new Article(item)
})

