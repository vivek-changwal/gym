import React from 'react';
import Image from 'next/image';
import Image1 from '../images/classes/class-1.jpg';
import Image2 from '../images/classes/class-2.jpg';
import Image3 from '../images/classes/class-3.jpg';
import Image4 from '../images/classes/class-4.jpg';
import Image5 from '../images/classes/class-5.jpg';

function OurClass() {
  return (
    <section class="classes-section spad">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="section-title">
                    <span>Our Classes</span>
                    <h2>WHAT WE CAN OFFER</h2>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4 col-md-6">
                <div class="class-item">
                    <div class="ci-pic">
                    <Image src={Image1} alt=""/>
                    </div>
                    <div class="ci-text">
                        <span>STRENGTH</span>
                        <h5>Weightlifting</h5>
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="class-item">
                    <div class="ci-pic">
                    <Image src={Image2} alt=""/>
                    </div>
                    <div class="ci-text">
                        <span>Cardio</span>
                        <h5>Indoor cycling</h5>
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <div class="class-item">
                    <div class="ci-pic">
                    <Image src={Image3} alt=""/>
                    </div>
                    <div class="ci-text">
                        <span>STRENGTH</span>
                        <h5>Kettlebell power</h5>
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6 col-md-6">
                <div class="class-item">
                    <div class="ci-pic">
                    <Image src={Image4} alt=""/>
                    </div>
                    <div class="ci-text">
                        <span>Cardio</span>
                        <h4>Indoor cycling</h4>
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="class-item">
                    <div class="ci-pic">
                    <Image src={Image5} alt=""/>
                    </div>
                    <div class="ci-text">
                        <span>Training</span>
                        <h4>Boxing</h4>
                        <a href="#"><i class="fa fa-angle-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default OurClass