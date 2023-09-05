// Create a self invoking function that takes 4 arguments: number of children,
//  partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a 
// <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."
 (function addElemntsToDom (numberOfChildern,partnerName,geographicLocation,jobTitle) {
    const sentence = `You will be a ${jobTitle} in ${geographicLocation}  and married to ${partnerName} with
     ${numberOfChildern} kids `;
     console.log("sentence:",sentence);
     const p = document.createElement("p");
     p.innerText = sentence;
     document.body.appendChild(p);
 })(3,"Sara","Israel","coder");