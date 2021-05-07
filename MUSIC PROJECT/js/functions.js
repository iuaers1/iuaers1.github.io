function randomSongName() {
  let songs = [
    "Box Of Visions",
    "Broken Illusions",
    "You Love Evil",
    "The New Face Of Success",
    "Searching For Your Reasons",
    "Expressions Came Too Late",
    "Bad Storm",
    "Destruction Safari",
    "10 Things You Didn't Know About Hope",
    "Antique Revolt",
    "Day Glo Force",
    "Deadly Woman",
    "Ancient Sins",
    "Comfort Lessons",
    "Random Parade",
    "Hell... She Said",
    "Check Out The Sunset",
    "Bad Rider",
    "Taming The Shadow",
    "Understanding Accusations"
  ];
  return songs[Math.floor(Math.random() * songs.length)];
}
/*
 * seach function will search the songTable for valid songs using myInput.value
 */
function searchFunction() {
  var found, td;
  var filter = document.getElementById("myInput").value.toUpperCase();
  var table = document.getElementById("songTable");
  var tr = table.getElementsByTagName("tr");

  for (let i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td");
    for (let j = 0; j < td.length; j++) {
      if (td[j].innerHTML.toUpperCase().indexOf(filter) > -1) {
        found = true;
      }
    }
    if (found) {
      tr[i].style.display = "";
      found = false;
    } else {
      tr[i].style.display = "none";
    }
  }
}

function fill() {
  try {
    /*find song table*/
    const songTable = document.getElementById("songTable");

    // fetch("https://randomuser.me/api")
    // .then(res => res.json())
    // .then(r => {
    //   console.log(r.results[0].name.first)
    // });

    /* an async lambda function to use asynchronous fetch instead of fetch().then().then() multiple request error */
    (async () => {
      const res = await fetch(`https://www.randomuser.me/api`);
      const data = await res.json();
      const artist = data.results[0];

      var fullName = `${artist.name.first} ${artist.name.last}`

      // /* another way of adding table data*/
      // const artistInfo = document.createElement("td");

      // artistInfo.style.width = "50%";
      // artistInfo.className = "artistInfo";
      // artistInfo.innerText = `some info about: ${fullName}`;
      // songTable.append(artistInfo);

      
      /* the easy way*/
      var row =
      `<tr height="40px" id="artistData">
      <td width="50%" class="tableData">${fullName}</td>
      <td width="50%" class="tableData">${randomSongName()}</td>
      </tr>`;
      
      songTable.innerHTML += row;
      
    })();
  }
  catch (error) {
    console.log(error);
  }
}

/*
 * Theme switcher
 */
const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);

  if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  document.getElementById('theme-toggle-btn').innerHTML =
    `<p class="theme-toggle-btn" id="theme-toggle-btn">Toggle ${localStorage.getItem('theme')} mode</p>`;

  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }

  console.log("currently using: " + localStorage.getItem('theme') + " theme");
}

toggleSwitch.addEventListener('change', switchTheme, false);


/**
 * Login user
 */

// function login(user){
//   let header = document.getElementById("loggedInUser");
//   let p = `<p> Logged in user: ${user}</p>`;
//   header.innerHTML = p;
// }

/*
 * run function
 */
function run() {
  console.log("site is loading");
  try {
    for (let i = 0; i < 15; i++) {
      fill();
    }
  }
  catch (err) {
    console.log(err.message);
  }

  console.log("currently using: " + localStorage.getItem('theme') + " theme");
  console.log("site has been loaded")
}

run();