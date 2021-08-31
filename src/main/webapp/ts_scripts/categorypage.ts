export class itemcategorypage{
   public  brand:string[] = Array() ;
   public  colour:string[] = Array('white','red','blue','yellow','green','blue','grey','green','purple') ;
   public type:string[] = Array('new','old','refurbished')  ;
   public size:string[] = ['s','m','l','xl']  ;
   public price:string ='';
   public  processcolour:string[] = Array() ;
   public  processbrand:string[] = Array() ;
   public  processtype:string[] = Array() ;
   public  processsize:string[] = Array() ;
   constructor(){

    }
  processitem(search:string){
       //for colour 
       search  = encodeURIComponent(search.toLowerCase()) ;
       console.log(' search ',search) ;
       if(this.colour.includes(search)){
            if(!this.processcolour.includes(search)){
                this.processcolour.push(search) ;
                console.log(' processitem colour ',this.processcolour) ;
            }else if(this.processcolour.includes(search)){
                 let index = this.processcolour.indexOf(search) ;
                 this.processcolour.splice(index,1) ;
                 this.processcolour.push(search) ;
                 console.log(' added colour ',this.processcolour) ;
                 }
            }
       // for price 
        if(search.includes('-')){
            console.log('search price ',search,'split ',search.split('-')) ;
             this.price  = search ;
             }
        //for brand
         if(this.brand.includes(search)){
             if(!this.processbrand.includes(search)){
                this.processbrand.push(search) ;
                console.log('add brand ');
                 }else if(this.processbrand.includes(search)){
                    console.log('already brand ');
                    let index = this.processbrand.indexOf(search) ;
                    this.processbrand.splice(index,1) ;
                    this.processbrand.push(search) ;
                    console.log('already addded brand ');
                    }         
             }
        // for size 
        if(this.size.includes(search)){
            console.log('entered size ');
            if(!this.processsize.includes(search)){
               this.processsize.push(search);
                }else if(this.processsize.includes(search)){
                    console.log('already size ');
                    let index = this.processsize.indexOf(search) ;
                    this.processsize.splice(index,1) ;
                    this.processsize.push(search) ;
                    console.log('already addded size ');
                    }
             }
        //for type
         if(this.type.includes(search)){
           // console.log('under type search ',search) ;
           if(!this.processtype.includes(search)){
           // console.log('adding type ',search) ;
              this.processtype.push(search) ;
              }else if(this.processtype.includes(search)){
                console.log('already type ');
                let index = this.processtype.indexOf(search) ;
                this.processtype.splice(index,1) ;
                this.processtype.push(search) ;
                console.log('already addded type ');
                }
         }
      }
}






















































