function getFormvalue() {
	    const form = document.getElementById('form1');
    
    // Retrieve the values of the first name and last name inputs
    const firstName = form.elements['fname'].value;
    const lastName = form.elements['lname'].value;
    
    // Display the values using alert()
  alert(`First Name: ${firstName}, Last Name: ${lastName}`);

	
}

	
    

}
