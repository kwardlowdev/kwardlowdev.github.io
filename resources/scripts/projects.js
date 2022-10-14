const projectInfo = [];
let currIndex = 0;

class Project {
    constructor(title, description, techUsed, imgSrc, linkRef){
        this._title = title;
        this._description = description;
        this._techUsed = techUsed;
        this._imgSrc = imgSrc;
        this._linkRef = linkRef;
    }

    get title() {
        return this._title;
    }

    get description(){
        return this._description;
    }

    get techUsed(){
        return this._techUsed;
    }

    get imgSrc() {
        return this._imgSrc;
    }

    get linkRef() {
        return this._linkRef;
    }
}

/* internal code */

const proj1 = new Project('Self-Development Bot', 'A simple one-page site featuring a randomized set of affirmations, a personal reminder, and a randomly generated joke quote.', ['HTML5', 'CSS3', 'Vanilla JS'], 'thumb1.png', 'https://kwardlowdev.github.io/selfdevbot/')

const proj2 = new Project('Testing', 'Testing', ['Test1', 'Test2', 'TEST3'], 'thumb2.png', 'https://github.com/kwardlowdev')
projectInfo.push(proj1);
projectInfo.push(proj2);

console.log(projectInfo);
/* export functions */
const updateProject = (arr, direction) => {
    const pImg = document.getElementById('projimg');
    const pTitle = document.getElementById('projecttitle');
    const pDesc = document.getElementById('projectdesc');
    const pTech = document.getElementById('projecttech');
    const pLink = document.getElementById('projlink');
    let newInd = updateIndex(direction);
    pImg.src = `./resources/img/projthumbs/${projectInfo[newInd].imgSrc}`;
    pTitle.innerHTML = projectInfo[newInd].title;
    pDesc.innerHTML = projectInfo[newInd].description;
    pTech.innerHTML = "";
    projectInfo[newInd].techUsed.forEach((e) => {
        let newItem = document.createElement('li');
        newItem.innerHTML = e;
        pTech.appendChild(newItem);
    });
    pLink.href = projectInfo[newInd].linkRef;
    console.log('Updated!');
}

const updateIndex = (direction) => {
    if (direction === 'back'){
        currIndex === 0 ? currIndex = (projectInfo.length - 1) : currIndex--;
        return currIndex;
    }
    if (direction === 'fwd'){
        currIndex === (projectInfo.length - 1) ? currIndex = 0 : currIndex++;
        return currIndex;
    }
}