let html=`  <label for="production-rule">Enter Your Production-rule:
<input type="text" id="production-rule" placeholder="Format: S=AB" required/>
</label>`;
let count=1;
document.body.querySelector('button').addEventListener('click',()=>{
    
    document.getElementsByTagName('label')[count++].insertAdjacentHTML('afterend',`${html}`);
    // console.log(count);
})