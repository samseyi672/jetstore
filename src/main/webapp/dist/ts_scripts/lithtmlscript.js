export const dialog = (form, header, footer) => {
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
   `;
};
