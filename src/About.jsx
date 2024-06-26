import AboutImg from './assets/img/about-img.jpg'
import Signature from './assets/img/signature.png'
export default function About() {
 return(
    <>
    <div id="about">
    <div >
     <div >
        <img src={AboutImg} alt="about" />
     </div>
    <div >
        <span class="head">ABOUT ME</span>
        <h2>I Develop Website that Works</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas earum sapiente voluptate quaerat, perferendis quasi saepe veritatis qui necessitatibus ut. Odio molestias cupiditate, nemo fugit repudiandae totam! Distinctio, tempora veritatis.</p>
        <hr />
        <div >
            <div ><span>Name</span></div>
            <div >Albright Raj</div>
            <div ><span>Phone</span></div>  
            <div >+91 9876543210</div>
            <div ><span>Age</span></div>
            <div >21</div>  
            <div ><span>Email</span></div>
            <div >abr@abr.com</div>
            <div ><span>Occupation</span></div>  
            <div >Web Designer</div>
            <div ><span>Nationality</span></div>
            <div >Indian</div>
          </div>
          
          <div >
            <div>
                 <img src={Signature} alt="about-img"/>
            </div>
           
            <div>
                <div >ABR DESIGNER</div>
            <div >Tamil Nadu,India</div>
            </div>
            
          </div>
</div>
</div>
</div>

    </>
 )    
}