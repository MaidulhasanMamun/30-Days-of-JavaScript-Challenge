const container = document.querySelector('.wrapper');
      title = document.createElement('h1');
      subTitle = document.createElement('h3');
      body = document.getElementsByTagName('BODY')[0];

body.style.fontFamily = 'Montserrat';
container.style.padding = '3rem 8rem';

const generateRandomColor = () => {
    let randomColor = '#';
    let str = '0123456789abcdef';
    for(let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      randomColor += str[index];

    }
    return randomColor
}
console.log(generateRandomColor());

let header = document.createElement('div');
header.align = 'center';
title.textContent = `${asabenehChallenges2020.description}`;
let year = document.createElement('span');
year.textContent = asabenehChallenges2020.challengeYear;
year.style.marginLeft = '1rem';
year.style.fontSize = '70px';
subTitle.textContent = asabenehChallenges2020.challengeSubtitle;
title.style.textAlign = 'center';
subTitle.style.textAlign = 'center';
subTitle.style.textDecoration = 'underline';
let dateParagraph = document.createElement('p');
dateParagraph.textAlign = 'center';
dateParagraph.style.padding = '1rem';

setInterval(() => {
    // year.style.color = generateRandomColor();
    dateParagraph.style.background = generateRandomColor();
    year.style.color = generateRandomColor();



}, 1000);
setInterval(() => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() +1;
    let currentYear = date.getFullYear();
    let currentHour = date.getHours();
    let currentMinutes = date.getMinutes();
    let currentSeconds = date.getSeconds();
    dateParagraph.textContent = `${day}/${month}/${currentYear} ${currentHour}:${currentMinutes}:${currentSeconds}`;

}, 1000);

dateParagraph.style.width = '12rem';
dateParagraph.align = 'center';

title.append(year);
header.append(title);
header.append(subTitle);
header.append(dateParagraph);
container.append(header);


//challenges
for(const challenge of asabenehChallenges2020.challenges) {
    // console.log(challenge.name)
    const challengeContainer = document.createElement('div');
    challengeContainer.style.padding = '2rem';
    challengeContainer.style.display = 'grid';
    challengeContainer.style.gridTemplateColumns = 'repeat(3, 1fr)'
    challengeContainer.style.justifyItems = 'center';
    challengeContainer.style.alignItems = 'center';
    challengeContainer.style.margin ='.4rem';
    
    
    const challengeName = document.createElement('h3');
    const isCompleted = document.createElement('h3');
    let topicContainer = document.createElement('details');
    console.log(topicContainer)

    let slicedWord = challenge.name.slice(11, challenge.name.length);


    let openTopic = document.createElement('b');
        // console.log(openTopic)
        challengeName.textContent = challenge.name;

        topicContainer.append(openTopic);
        const challengeSummary = document.createElement('summary')
        challengeSummary.textContent = slicedWord


    for(const topic of challenge.topics) {
        const challengeSubject = document.createElement('li');
        challengeSubject.textContent = topic;
    
        challengeSubject.style.listStyle = 'none';
        // challengeSubject.style.display = 'none';
        topicContainer.append(challengeSubject);

        
    }
    topicContainer.append(challengeSummary);


    isCompleted.textContent = challenge.status;
    if(challenge.status.includes('Done')) {
        challengeContainer.style.background = '#5BBC7A';

    } else if(challenge.status.includes('Ongoing')) {
        challengeContainer.style.background = '#F7DC5C';

    } else {
        challengeContainer.style.background = '#EB695B';

    }
    

    challengeContainer.append(challengeName);
    challengeContainer.append(topicContainer);
    challengeContainer.append(isCompleted);

    container.append(challengeContainer);

    
}

//author and links
let author = document.createElement('h1');
let authorFullName = `${asabenehChallenges2020.author.firstName} ${asabenehChallenges2020.author.lastName}`
author.textContent = authorFullName;
author.style.textAlign = 'center';
container.append(author);

let socialLinksContainer = document.createElement('div');
socialLinksContainer.style.display = 'flex';
socialLinksContainer.style.justifyContent = 'center';
let links = asabenehChallenges2020.author.socialLinks;

const testIteration = asabenehChallenges2020.author.socialLinks.map((link) => {
    let iconLink = document.createElement('a');
    iconLink.href = link.url
    let i = document.createElement('i');
    i.innerHTML = link.fontawesomeIcon;
    i.style.color = 'black';
    console.log(iconLink)
    iconLink.append(i);
    iconLink.style.margin = '.5rem';
    socialLinksContainer.append(iconLink);
});

container.append(socialLinksContainer);

let authorBio = document.createElement('p');
authorBio.textContent = asabenehChallenges2020.author.bio;
authorBio.align = 'center';
container.append(authorBio);

//titles, skills, qualifications container with for loop containing 3 for loops

let authorInfoContainer = document.createElement('div');
authorInfoContainer.style.padding = '2rem 4rem';
authorInfoContainer.style.display = 'flex';
authorInfoContainer.style.justifyContent = 'space-between';

let titlesBox = document.createElement('div');
let titlesHeader = document.createElement('h3');
titlesHeader.textContent = 'Titles';
titlesBox.append(titlesHeader);

let skillsBox = document.createElement('div');
let skillsHeader = document.createElement('h3');
skillsHeader.textContent = 'Skills';
skillsBox.append(skillsHeader);

let qualificationsBox = document.createElement('div');
let qualificationsHeader = document.createElement('h3');
qualificationsHeader.textContent = 'Qualifications';
qualificationsBox.append(qualificationsHeader);

let titlesList = document.createElement('div');
let skillsList = document.createElement('div');
let qualificationsList = document.createElement('div');
titlesList.style.display = 'flex';
titlesList.style.flexDirection = 'column';
skillsList.style.display = 'flex'; 
skillsList.style.flexDirection = 'column';
qualificationsList.style.display = 'flex';
qualificationsList.style.flexDirection = 'column';



        let titles = asabenehChallenges2020.author.titles;
        for(const title of titles) {
            let titlesIcon = document.createElement('div');
            titlesIcon.textContent = title[0];
            let titlesDetails = document.createElement('div');
            titlesDetails.textContent = title[1];
            titlesIcon.style.margin = '.2rem';
            titlesDetails.style.margin = '.2rem';
            let titlesWrapper = document.createElement('div');
            titlesWrapper.style.display = 'flex';
            titlesWrapper.append(titlesIcon, titlesDetails);
            titlesList.append(titlesWrapper);

        }



        let skills = asabenehChallenges2020.author.skills;
        for(const skill of skills) {
            console.log(skill[0])
            let skillsIcon = document.createElement('div');
            skillsIcon.textContent = skill[0];
            let skillsDetails = document.createElement('div');
            skillsDetails.textContent = skill[1];
            skillsIcon.style.margin = '.2rem';
            skillsDetails.style.margin = '.2rem';
            let skillsWrapper = document.createElement('div');
            skillsWrapper.style.display = 'flex';
            skillsWrapper.append(skillsIcon, skillsDetails);
            skillsList.append(skillsWrapper);

        }

        let qualifications = asabenehChallenges2020.author.qualifications;
        
        for(const qualification of qualifications) {
            let qualificationsIcon = document.createElement('div');
            let qualificationsDetails = document.createElement('div');
            qualificationsIcon.textContent = qualification[0];
            qualificationsDetails.textContent = qualification[1];
            qualificationsIcon.style.margin = '.2rem';
            qualificationsDetails.style.margin = '.2rem';
            let qualificationsWrapper = document.createElement('div');
            qualificationsWrapper.style.display = 'flex';
            qualificationsWrapper.append(qualificationsIcon, qualificationsDetails);
            qualificationsList.append(qualificationsWrapper);

        }

        


titlesBox.append(titlesList);
skillsBox.append(skillsList);
qualificationsBox.append(qualificationsList);
authorInfoContainer.append(titlesBox,skillsBox, qualificationsBox);
container.append(authorInfoContainer);


//keywords container 
const keywordsTitle = document.createElement('h2');
keywordsTitle.textContent = 'Keywords';
container.append(keywordsTitle);
let keywordContainer = document.createElement('div');
keywordContainer.style.display = 'flex';
keywordContainer.style.flexWrap = 'wrap';

for (const keyword of  asabenehChallenges2020.keywords)  {
    let keywordIcon = document.createElement('div');
    keywordIcon.style.margin = '.5rem';
    keywordIcon.style.borderRadius = '50px';
    let randomColor = generateRandomColor();
    keywordIcon.style.backgroundColor = randomColor;
    console.log(randomColor)
    // console.log(keywordIcon);
    keywordIcon.style.padding = '.5rem';
    keywordIcon.textContent = `# ${keyword}`;
    keywordIcon.style.fontStyle = 'italic';
    keywordIcon.style.fontWeight = 'bold';
    keywordContainer.append(keywordIcon);
    container.append(keywordContainer);

}


    

    




