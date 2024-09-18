const styleSec=document.querySelectorAll('section');
for(const section of styleSec)
{
    section.style.border='2px solid black';
    section.style.backgroundColor='gray';
    section.style.borderRadius='10px';
}


// const styleContainer=document.getElementById('Places-container');

// // styleContainer.style.backgroundColor='yellow';
// // styleContainer.style.borderRadius='10px';
// styleContainer.style.marginBottom='10px';

const placesContainer = document.getElementById('title-container');

         placesContainer.classList.add('text-center');