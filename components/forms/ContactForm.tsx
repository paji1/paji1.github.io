"use client";
import React, { useState, FormEvent } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { sendEmail } from "./SendEmail";
const initialState  = {
  message :  null,
}
const SubmitButton = () => {

	const {pending} = useFormStatus();
	return (<button type="submit"  aria-disabled={pending} className="btn btn-white bg-gradient z-10">
				Send Message
	</button>)
};

export default function ContactForm() {
	const [state, formAction]  = useFormState<{message: string | null}, FormData>(sendEmail, initialState);
	
	return (
		<form className="flex flex-col gap-3 md:mt-8 mt-12" action={formAction}>
			<input name="name" type="text" placeholder="Name *" className="z-10 input" />
			<input name="email" type="text" placeholder="Email *" className="z-10 input" />
			<input
        name="subject"
				type="text"
				placeholder="Your Subject *"
				className="z-10 input"
			/>
			<textarea
        name="message"
				placeholder="Your Message *"
				className="z-10 input"
				rows={6}
			></textarea>
		<SubmitButton />
		{(state.message) ? (<p aria-live="polite" className="text-amber-100 ">
        	{state?.message}
      	</p>) : (<></>)}
		</form>
	);
}
