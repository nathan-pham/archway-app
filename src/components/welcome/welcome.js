import Archway, { useState } from "archway-framework"
import jsh, {
	main, img, p, a
} from "@archway/jsh"

import logo from "./logo.png"
import "./welcome.css"

const welcome = (() => {
	const component = (props) => {
		return (
			main({ id: "container" },
				img({ src: logo, alt: "Archway Logo" }),
				p({}, props.message),
				a({ href: `https://github.com/${props.github}` }, "Learn Archway")
			)	
		)
	}
	return jsh(component)
})()

export default welcome