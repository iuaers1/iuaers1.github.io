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

function fill(numOfArtists = 15) {
  try {
    const songTable = document.getElementById("songTable");
    console.log(songTable);

    for (let i = 0; i < numOfArtists; i++) {
      (async () => {
        const res = await fetch(`https://www.randomuser.me/api`);
        const data = await res.json();
        const artist = data.results[0];
        
        var fullName = `${artist.name.first} ${artist.name.last}`

        var row = 
        `<tr height="40px">
           <td width="50%" nowrap="nowrap" align="left" class="tableData1">${fullName}</td>
           <td width="50%" nowrap="nowrap" align="left" class="tableData2">${randomSongName()}</td>
         </tr>`;
        songTable.innerHTML += row;
      })();
    }
  }
  catch (error) {
    console.log(error);
  }
}

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


function run() {
  console.log("site is loading");
  try {
    fill(numOfCharacters = 5);
  }
  catch (err) {
    console.log(err.message);
  }

  console.log("currently using: " + localStorage.getItem('theme') + " theme");
  console.log("site has been loaded")
}

run();