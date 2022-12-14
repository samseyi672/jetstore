export const dialog  = (form:any,header:any,footer:any)=>{
   return `
   <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog" role="document">
       <div class="modal-content">
           <div class="modal-header">
             ${header} 
           </div>
           <div class="modal-body">
             <div id="error"></div>
              ${form}
           </div>
           <div class="modal-footer">
                ${footer}
               <button class="btn btn-secondary" type="button" data-dismiss="modal">Close</button>
           </div>
       </div>
   </div>
</div>
   `
}
export const secondialog  = (form:Function,header:Function,footer:Function)=>{
  return (`
  <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
            ${header()} 
          </div>
          <div class="modal-body">
            <div id="error"></div>
             ${form()}
          </div>
          <div class="modal-footer">
               ${footer()}
          </div>
      </div>
  </div>
</div>
  `);
}
// <form class="needs-validation">
// <div class="form">
//     <div class="form-group">
//         <label for="validationCustom01" class="mb-1">Category Name :</label>
//         <input class="form-control" id="validationCustom01" type="text">
//     </div>
//     <div class="form-group mb-0">
//         <label for="validationCustom02" class="mb-1">Category Image :</label>
//         <input class="form-control" id="validationCustom02" type="file">
//     </div>
// </div>
// </form>

//header 
// <h5 class="modal-title f-w-600" id="exampleModalLabel">Add Physical Product</h5>
// <button class="close" type="button" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">Ã</span></button>

// <button class="btn btn-primary" type="button">Save</button>