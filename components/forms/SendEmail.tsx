'use server'




export async function sendEmail(prevState :any , formData : FormData )
{
	console.log(formData)
	return {message: "done"};
}