
import { Button, Container } from "react-bootstrap";
import React,{useState} from "react";
import manliftwaight from '../asset/manliftwaight.jpg'
import workoutbook from '../asset/workoutbook.jpg'
import repcounting from '../asset/repcounting.jpg'
import caloriesburn from '../asset/caloriesburn.jpg'
import workoutplan from '../asset/workoutplan.jpg'
import dietplan from '../asset/dietplan.jpg'
import getstartedimage from '../asset/getstartedimage.jpg'
import logexercise from '../asset/logexercise.jpg'
import repcount from '../asset/repcount.jpg'
import trackprogress from '../asset/trackprogress.jpg'
import progressreview from '../asset/progressreview.jpg'
import FAQ from './FAQ.js'
import { FaStar } from "react-icons/fa6";

import '../App.css'
import AOS from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
//import  duration  from "@mui/material";
const Homepage = () => {

    const [faqs,setFaqs]=useState([
        {
            question:"How do long my workout?",
            answer:"answer",
            open:false
        },
        {
            question:"Can I track my calories burned?",
            answer:"answer",
            open:false
        },
        {   
            question:"Is this application suitable for beginner?",
            answer:"answer",
            open:false
        },
        {
            question:"What feature does the application offer?",
            answer:"answer",
            open:false
        },
        {
            question:"How can I reset my password? ",
            answer:"answer",
            open:false
        },
    ]);

const toggleFAQ=index=>{
    setFaqs(faqs.map((faq,i)=>{
        if(i===index)
        {
            faq.open=!(faq.open);
        }else{
            faq.open=false;
        }
        return faq
    }))
    
}
    useEffect(() => {
        AOS.init({ duration: "2000" })
    }, []);
    return (
        <div >

            <Container class="image" style={{ paddingTop: '80px' }}>
                <figure className="">
                    <img src={manliftwaight} alt="" class="image" />
                    <div>
                        <figcaption >
                            <h4>Track Your Fitness Journy</h4>
                            <p>discover the ultimade fitness companion with
                                GymFluencer.<br/>Effortlessly log your workout,count reps,
                                and track calories burned.<br/>Stay motivated and achieve
                                your goals with our user-friendly interface.
                            </p>

                            </figcaption>

                    </div>


                </figure>


            </Container>
            <div class="passage" data-aos="fade-right">
                <p >
                    GymFluencer is your ultimate fitness companion,design to help you track your workouts with ease.<br />
                    Our application allows you to log exercises,countrep and calculate calories burned,all through a user-<br />
                    friendly interface.whether you are a beginner or a seasoned athlete,our app will keep you motivated and<br />
                    on track

                </p>
            </div>
            <div class="featureheading" data-aos="fade-left">
                <h2 >Our App Key Features</h2>
            </div>
            <div class="container">
                <div class="row d-flex">
                    <div class="col-sm-4 ">
                        <img src={workoutbook} alt="" style={{ width: "350px" }} class="images"/>
                        <span class="inbox">
                            <h4>Effortless Workout Logging</h4>
                            <p>Easily log yours workout and and monitor your progress over time with
                                our intuitive logging feature.Stay organiszd and track your fitness
                                Journy with precision.
                            </p>
                        </span>

                    </div>
                    <div class="col-sm-4 ">
                        <img src={repcounting} alt="" style={{ width: "350px" }} class="images"/>
                        <span class="inbox">
                            <h4>Accurate Rep Counting</h4>
                            <p>Count your reps Accurately with our app.ensuring each workout is
                                tracked effectively.perfect for maintaining consistency and improving
                                your performance.
                            </p>
                        </span>

                    </div>
                    <div class="col-sm-4 ">
                        <img src={caloriesburn} alt="" style={{ width: "350px" }} class="images"/>
                        <span class="inbox">
                            <h4>Calorie Calculate Made Easy</h4>
                            <p>Calculate Calorie burned during workout to help manage your
                                fitness goals.Our app provide precise data to keep you informed
                                and motivated.
                            </p>
                        </span>

                    </div>

                </div>
                <div class="row d-flex pl-5">
                    <div class="col-sm-5">
                        <img src={workoutplan} alt="" style={{ width: "350px" }} class="images"/>
                        <span class="inbox">
                            <h4>Personalized Workout Plan</h4>
                            <p>
                                An AI-powered Personalized workout plan adapt exercise to your
                                fitness level goals and progress.helping stay motivated and
                                achieve result faster
                            </p>
                        </span>
                    </div>
                    <div class="col-sm-5 ">
                        <img src={dietplan} alt="" style={{ width: "350px" }} class="images"/>
                        <span class="inbox">
                            <h4>Personalized Diet Plan</h4>
                            <p>An AI diet customizes meals to your health goals,
                                preferences and lifestyle. offering tailored nutritious
                                suggestions to support optimal wellness.
                            </p>
                        </span>
                    </div>
                </div>

                <div class="container mt-5 ">
                    <div class="row d-flex">
                        <div class="col-sm-5 d-flex">
                            <img src={getstartedimage} style={{ width: "350px" }} alt=""data-aos="fade-left" />
                        </div>
                        <div class="col-sm-6 mt-5">
                            <span >
                                <h4 data-aos="fade-right">Step1:Click on Get Started</h4>
                                <p data-aos="fade-right">Start by opening GymFluencer.The intuitive home screen give
                                    you quick access to all features.
                                </p>
                            </span>

                        </div>
                    </div>

                    <div class="row d-flex">

                        <div class="col-sm-6 mt-5">
                            <span>
                                <h4 data-aos="fade-right">Step2:Log Your Exercises</h4>
                                <p data-aos="fade-right">Easily log your exercises by selecting from a wide range of activity.
                                    Track your progress with detailed log.
                                </p>
                            </span>

                        </div>

                        <div class="col-sm-5 d-flex">
                            <img src={logexercise} style={{ width: "400px" }} alt="" data-aos="fade-left"/>
                        </div>

                    </div>

                    <div class="row d-flex">
                        <div class="col-sm-5 d-flex">
                            <img src={repcount} style={{ width: "400px" }} alt="" data-aos="fade-left"/>
                        </div>
                        <div class="col-sm-6 mt-5">
                            <span>
                                <h4 data-aos="fade-right">Step3:Count Your Reps</h4>
                                <p data-aos="fade-right">Count your reps with precision,ensuring every detailed is logged.
                                    Stay informed on your progress.
                                </p>
                            </span>

                        </div>
                    </div>

                    <div class="row d-flex">

                        <div class="col-sm-6 mt-5">
                            <span>
                                <h4 data-aos="fade-right">Step4:Track Your Progress</h4>
                                <p data-aos="fade-right">Review your workout stats and progress over time to stay motivated
                                    and reach your fitness goals.
                                </p>
                            </span>

                        </div>

                        <div class="col-sm-5 d-flex">
                            <img src={trackprogress} style={{ width: "400px" }} alt="" data-aos="fade-left"/>
                        </div>

                    </div>


                    <div class="row d-flex">
                        <div class="col-sm-5 d-flex">
                            <img src={progressreview} style={{ width: "400px" }} alt="" data-aos="fade-right"/>
                        </div>
                        <div class="col-sm-6 mt-5">
                            <span>
                                <h4 data-aos="fade-left">Step5:Review Your Progress</h4>
                                <p data-aos="fade-left">Check your workout summaries and progress over time to stay
                                    motivated and achieve your fitness goals.
                                </p>
                            </span>

                        </div>
                    </div>

                </div>

                <h4 class="" style={{ paddingLeft: "40%" ,paddingBottom:"30px",marginTop:"50px"}}>What User's Say</h4>
                

                <div class="container pl-2">
                    <div class="row">
                        <div class="col-sm-4 ">
                            <Button style={{ backgroundColor: "gray" }} >
                                <h6 style={{ color: "black" }}>"Best Fitness App!"</h6>
                                <p>GymFluencer has transformed the way I work out
                                    The rep counting feature is a game changer!
                                </p>
                                <div class="star">
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                </div>
                                
                            </Button>

                        </div>
                        <div class="col-sm-4 pl-4" >
                            <Button style={{ backgroundColor: "gray" }}>
                                <h5 style={{ color: "black" }}>"So Easy to Use!"</h5>
                                <p>I love how user friendly app is.Logging workout
                                    has never been easier.
                                </p>
                                <div class="star">
                                <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                                </div>
                                
                            </Button>


                        </div>
                        <div class=" button col-sm-4" >
                            <Button style={{ backgroundColor: "gray" }}>
                                <h5 style={{ color: "black" }}>"Incredible Progress Tracker!"</h5>
                                <p>I've seen bast result since using GymFluencer.
                                    The progress tracking feature keep me motivated.
                                </p>
                                <div class="star">
                         <FaStar/><FaStar/><FaStar/><FaStar/><FaStar/>
                    </div>
                            </Button>


                        </div>

                    </div>
                    

                </div>

                <span style={{fontWeight:"600",fontSize:"25px"}}>FAQs</span><br/>
                <span style={{color:"blue"}}>Find the answer of your question about the GymFluencer Application,disigned to enhance your fitness journey</span>

                <div className="faqs">
                {faqs.map((faq,i)=>{
                 return  <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ}/>
                    })}
                </div>
            </div>
            <div>

            </div>

        </div>









    )
}
export default Homepage;