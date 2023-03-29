import React, { Component } from 'react'
import './abouts.css'
import Defaultlayout from '../layout/Defaultlayout';

export class about extends Component {
  render() {
    return (
      <div class="Contact">
        <div class="Content">
            <h2>Contact Us</h2>
            <p>Question not answered yet we are here to help</p>
        </div>   
            <div class="container">
                <div class="Contactinfo">
                    <div class="Box">
                        <div class="Icon"><i class="fa fa-map-marker" aria-hidden="true"></i>
                        </div>
                        <div class="Text">
                        <h3>Adress</h3>
                        <p>Colleg Road,Nadiad,Gujarat
                        </p>
                    </div>
                </div>
                <div class="Box">
                    <div class="Icon"><i class="fa fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="Text">
                    <h3>Phone</h3>
                    <p>507-199-2576</p>
                </div>
            </div>
            <div class="Box">
                <div class="Icon"><i class="fa fa-envelope" aria-hidden="true"></i>
                </div>
                <div class="Text">
                <h3>Email</h3>
                <p>cinamatic789@gmail.com</p>
            </div>
        </div>
    </div>
           <div class="ContactForm">
        <form>
            <h2>Send Message</h2>
            <div class="InputBox">
                <input type="text" name="" required="required"/>
                <span>Full Name</span>
            </div>
            <div class="InputBox">
                <input type="text" name="" required="required"/>
                <span>Email</span>
            </div>
            <div class="InputBox">
                <input type="text"name="" required="required"/>
                <span>Type your Message</span>
            </div>
            <div class="InputBox">
                <input type="submit" name="" value="Send"/>
            </div>
        </form>
    </div>
</div>   
</div>
    )
  }
}

export default Defaultlayout(about);