const Footer=()=>{
return(
    <div class="container" style={{backgroundColor:"gray",maxWidth:"100%",height:"400px",paddingLeft:"20%"}}>
        
        <div className='footersection_copyrightarea'> 
            <div className="section-footer">
                
            
            <div class="row d-flex mt-5">
            <div class="col-sm-6">
			 
                 <div class="sigma_footer-widget">
                
                       <h5 class="widget-title" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>Contact Details</h5>
                <div class="" style={{marginTop:"40px"}}>
                <strong>Address : </strong><br/>
                <strong>Call Us : </strong>
                </div>
                        
                
                  </div>
            
            </div>
            <div class="col-sm -6">
              <div class="sigma_footer-widget" style={{marginTop:"70px"}}>
                <h5 class="widget-title">Quick Links</h5>
                <ul class="sigma_footer-links">
                  <li>
                    <a href="/" style={{color:"white"}}>Feature</a>
                  </li>
                  <li>
                    <a href="#diatplan.jsx" style={{color:"white"}}>Diet Plan</a>
                  </li>
                  <li>
                    <a href="#workoutplan.jsx" style={{color:"white"}}>Workout Plan</a>
                  </li>
				           <li>
                    <a href="#blog.jsx" style={{color:"white"}}>Blog</a>
                  </li>
                  <li>
                    <a href="#faqs.jsx" style={{color:"white"}}>FAQs</a>
                  </li>
                  <li>
                    <a href="#contact.jsx" style={{color:"white"}}>Contact Us</a>
                  </li>
                  
                </ul>
              </div>
            </div>
         </div>
  
          <div class="footer-copyright-area">
        
          
            <div class="col-lg-12">
              <p class="text-center" style={{marginBottom:"0px", paddingRight:"40%" ,color:"white"}}>&copy; Copyrights 2024.  All Rights Reserved.Privacy|Terms|Infringement 
               </p>
            </div>
          </div>
    </div>
</div>
  </div>

)
}
export default Footer