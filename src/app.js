import Archway, { useState } from "archway-framework"
import jsh, { h1 } from "@archway/jsh"

import welcome from "./components/welcome/welcome.js"

import "./app.css"

const app = (() => {
	const component = (props) => {
		return (
			welcome(props)
		)
	}

	return jsh(component)
})()

Archway.render(
	app({
		message: "Edit src/app.js and save to reload.",
		github: "archway-team/archway-framework"
	}),
	document.getElementById("root")
)