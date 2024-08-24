const ContactUs = () => {
    return (
      <div>
        <h1>Contact Us</h1>
        <div>
            <h3>Here is where you can contact us:</h3>
            <p>1-800-PLANT-LOVE</p>
            <p>Support@Plantparenthood.com</p>
        </div>
        <div>
            <h3>Here is where we are located:</h3>
            <p>12 E California Ave, Oklahoma City, OK 73104</p>
            <img src="../../public/location_img.png" alt="Our Location on a Map"/>
        </div>
        <div>
          <h3>Put your email here to contact us:</h3>
          <input type="text" name="email"></input>
          <button type="submit">Submit</button>
        </div>
      </div>
    );
  }
  
  export default ContactUs;