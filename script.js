function getFormvalue() {

	const form_name=document.querySelector("#form1")

	const f_name=form.querySelector("fname")
	const l_name=form.querySelector("lname")


	const submit_b=document.querySelector("Submit")

	submit_b.addeventlistener("click", alert)

	function alert(){
		alert(`firstname:${f_name},lastname: ${l_name} `)
	}

	

}

	
    


