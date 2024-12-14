console.log('%c HI', 'color: firebrick')
// Challenge 1
// const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
// Add JavaScript that:
// on page load, fetches the images using the url above ⬆️
// parses the response as JSON
// adds image elements to the DOM for each 🤔 image in the array
// Hint: Recall that you will need to ensure that your JavaScript doesn't run until after the HTML has loaded. 
// You can use whichever method you prefer to accomplish this.
document.addEventListener('DOMContentLoaded', ()=>{
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";

    ///we get to using fetch
    //we dont add a callbackon it
    fetch(imgUrl)
    //we go direct to first then to parse the response as json
    //will utilise the arrow function
    .then(response => response.json())
    //we move to second then which is our promise once the data is parsed
    .then(data => {
        //first we store where our imaage stay in out html by getting this element by its identifier 
        // where in this case its the dog-image-container
        const whereImageStays = document.getElementById('dog-image-container');
        // the next part adds image elements to the DOM for each 🤔 image in the array
        //here our forEach comes in handy since it iterates over each URL in the array, and for each URL
        data.message.forEach(imgUrl => {
            //normally the image is placed under src, but first we need to create the image element
            const img = document.createElement('img');
            // then we assign this element our url
            img.src = imgUrl;

            // i want to see if i can add these to my html to make it easthetically pleasing
            img.alt = "A random dog image";
            img.style.margin = "10px";
            img.style.height = "150px";
            img.style.width = "150px";
            //now we add it to the image - container
            whereImageStays.appendChild(img);
        })
    })
    // there will be alot of code reproducibility moving forward
    // Challenge 2
    // const breedUrl = "https://dog.ceo/api/breeds/list/all";
    // After the first challenge is completed, add JavaScript that:
    // on page load, fetches all the dog breeds using the url above ⬆️
    // adds the breeds to the page in the <ul> provided in index.html
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
        const breedList = document.getElementById('dog-breeds');
        Object.keys(data.message).forEach(breed => {
            const li = document.createElement('li');
            li.textContent = breed;
            breedList.appendChild(li);

            // Challenge 3: Change font color on click
            // Once all of the breeds are rendered in the <ul>, 
            // add JavaScript so that, when the user clicks on any one of the <li>s, 
            // the font color of that <li> changes. This can be a color of your choosing.
            li.addEventListener('click', () => {
            li.style.color = 'firebrick';
            });
        });

    // Challenge 4: Add breed filter
    //Once we are able to load all of the dog breeds onto the page, 
    // add JavaScript so that the user can filter breeds that start
    //  with a particular letter using a dropdownLinks to an external site..
    const breedDropdown = document.getElementById('breed-dropdown');
    breedDropdown.addEventListener('change', () => {
        const selectedLetter = breedDropdown.value;
        const listItems = breedList.querySelectorAll('li');
        listItems.forEach(item => {
            if (item.textContent.startsWith(selectedLetter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
            });
        });
    });
});

