import './../../src/App.css'
import Button from '@mui/material/Button';
import { IoMdArrowDropdown } from "react-icons/io";
const Header = () => {
    return(
        <header>
        <div class="container">
            <div class="row d-flex mt-4">
           <div class="logoname col-sm-2">
           <Button >GymFluencer</Button>
            </div>

           <div class="menusoption col-sm-6 d-flex align-items-center justify-content-center">
            <Button>Features</Button>
            <Button>Diet plan<span> <IoMdArrowDropdown/> </span></Button>
            <Button>Workout plan<span> <IoMdArrowDropdown/> </span></Button>
            <Button>Blog</Button>
            <Button>FAQs</Button>
            <Button>Contact Us</Button>
           </div>
        <div class="logingetstart col-sm-4 d-flexalign-items-center justify-content-end">
            <Button>Get Started</Button>
            <Button>Login</Button>
        </div>
            </div>

        </div> 
         
</header>
    
    )
            

    //<div class="row d-flex">
    //<div class=" div1 col-sm-2 d-flex ">
    //  <img src={image} alt="" class="image"/>
    //<span class="mt-3">HOTSPOT</span>
    //</div>
    //<div class="div2 col-sm-3 d-flex align-items-center">
    /* <img src={image1} alt="" class="image1"/> */ 
    //  <Button class="mdopenbtn rounded-circle"> <MdMenuOpen /> </Button>
    //<Searchbox/>
    // </div>
    // <div class="div3 col-sm-7 d-flex align-items-center justify-content-end">
    // <Button class=" mdlightmode rounded-circle"><MdLightMode /></Button>
    // <Button class="iocart rounded-circle" style={{marginLeft:'20px'}}><IoCart /> </Button>
    // <Button class="mdemail rounded-circle" style={{marginLeft:'20px'}}> <MdEmail /></Button> */}

}
export default Header