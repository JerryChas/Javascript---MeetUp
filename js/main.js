// Hämta element
const speakers = document.getElementById('speakers')

//Anropa funktion
getData();


//Hämta json-fil
async function getData() {
    const speakerResponse = await fetch('./data/speaker.json');
    const scheduleResponse = await fetch('./data/schedule.json');
    
    //Kontrollerar om responsen är OK
    if (speakerResponse.ok) {
        const json = await speakerResponse.json();
        console.log(json);
        
        
        //För varje arrayposition gör...
        json.forEach(function (objekt) {
            
            
            //skapar element och ge de klasser samt placera
            //Skapar en div som ska hålla speakers.
            const speakerDiv = document.createElement('div')
            speakerDiv.classList.add('speaker-div')
            
            //Hämtar data om speakers och skickar in i Diven per key
            const speakerName = document.createElement('p')
            speakerDiv.classList.add('speaker-name')
            speakerName.textContent = objekt.Name
            speakerDiv.appendChild(speakerName)
            
            const speakerTitle = document.createElement('p')
            speakerDiv.classList.add('speaker-title')
            speakerTitle.textContent = objekt.Title
            speakerDiv.appendChild(speakerTitle)
            
            
            const speakerSubject = document.createElement('p')
            speakerDiv.classList.add('speaker-subject')
            speakerSubject.textContent = objekt.Subject
            speakerDiv.appendChild(speakerSubject)
            
            
            //Appenda diven till Elementet
            speakers.appendChild(speakerDiv)
            console.log(speakerDiv)

            ///detta upprepas per ny talare
            
        });
        


    } else {
        console.log(`SpeakerResponse ${speakerResponse.status}`)

    }

    //Kontrollerar om responsen är OK
    if (scheduleResponse.ok) {
        const json = await scheduleResponse.json();
        console.log(json);
        
        
        //För varje arrayposition gör...
        json.forEach(function (objekt) {
            
            
            //skapar element och ge de klasser samt placera
            //Skapar en div som ska hålla speakers.
            const speakerDiv = document.createElement('div')
            speakerDiv.classList.add('speaker-div')
            
            //Hämtar data om speakers och skickar in i Diven per key
            const speakerName = document.createElement('p')
            speakerDiv.classList.add('speaker-name')
            speakerName.textContent = objekt.Name
            speakerDiv.appendChild(speakerName)
            
            const speakerTitle = document.createElement('p')
            speakerDiv.classList.add('speaker-title')
            speakerTitle.textContent = objekt.Title
            speakerDiv.appendChild(speakerTitle)
            
            
            const speakerSubject = document.createElement('p')
            speakerDiv.classList.add('speaker-subject')
            speakerSubject.textContent = objekt.Subject
            speakerDiv.appendChild(speakerSubject)
            
            
            //Appenda diven till Elementet
            speakers.appendChild(speakerDiv)
            console.log(speakerDiv)

            ///detta upprepas per ny talare
            
        });
        


    } else {
        console.log(scheduleResponse.status)

    }


}