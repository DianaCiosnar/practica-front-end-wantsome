const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'

const btn = document.querySelector('.btn');
btn.addEventListener('click', function () {
    const request = new XMLHttpRequest;
    request.addEventListener('load', function () {
        const data = JSON.parse(this.responseText);
        const randomImage = Math.floor(Math.random() * data.data.children.length)
        const imageToAppend = data.data.children[randomImage].data.thumbnail;
        const image = document.createElement('img')
        image.src = imageToAppend;
        const replaceWithImage = document.querySelector('.text')
        replaceWithImage.innerHTML = null;
        const h1 = document.createElement('h1')
        h1.innerText = data.data.children[randomImage].data.title
        replaceWithImage.append(h1)
        replaceWithImage.append(image);

    });
    request.addEventListener('error', function () {
    });
    request.open('get', puppies)
    request.send();

});
