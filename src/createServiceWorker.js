export default function register(){
    if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator){
        window.addEventListener("load", () => {
            const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
            navigator.serviceWorker
                .register(swURL)
                .then(registration => {
                    registration.onupdatefound = () => {
                        const installingWorker = registration.installing;
                        installingWorker.onstatechange = () => { 
                            if (installingWorker.state === "installed") {
                                if (navigator.serviceWorker.controller){
                                    // At this point, the old content will have been purged and the fresh content will have been added to the cache.
                                    console.log("New content is available, please refresh.");
                                } else {
                                    // At this point, everything has been pre-cached.
                                    console.log("Content is cached for offline use.")
                                }
                            }
                        };
                    };
                }) 
            .catch(error => {
                console.error("Error during service worker registration", error);
            });
        });
    }
}

export function unregister(){
    if ("serviceWorker" in navigator){
        navigator.serviceWorker.ready.then(registration => {
            registration.unregister();
        });
    }
}