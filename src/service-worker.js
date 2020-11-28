function register() {
	if("serviceWorker" in navigator) {
		window.addEventListener("load", () => {
			navigator.serviceWorker.register("/service-worker.js")
			.then((success) => {
				console.log("[Service Worker] registered", success)
			})
			.catch((error) => {
				console.log("[Service Worker] failed", error)
			})
		})
	}
	else {
		console.log("[Service Worker] not supported")
	}
}

function unregister() {
	console.log("[Service Worker] opted out")
}

const serviceWorker = {
	register,
	unregister
}

export default serviceWorker