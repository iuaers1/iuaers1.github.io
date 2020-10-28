

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

  for (let i = 0; i < 15; i++) {
    // fetch("https://randomuser.me/api", { mode: "cors" })
    //   .then(response => response.json())
    //   .then(characters => showCharacters(characters.results));


    (async () => {
      const res = await fetch(`https://www.randomuser.me/api`);
      const data = await res.json();
      showCharacters(data.results);
    })();

    showCharacters = characters => {
      const charactersDiv = document.querySelector("#songTable");
      characters.forEach(character => {
        let row =
          `<tr height="40px">
          <td width="50%" nowrap="nowrap" align="left" class="tableData1">${character.name.first + " " + character.name.last}</td>
          <td width="50%" nowrap="nowrap" align="left" class="tableData2">${character.name.first}</td>
        </tr>`;

        charactersDiv.innerHTML += row;
        // charactersDiv.append(characterElement);
      });
    }
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
    fill();
  }
  catch (err) {
    console.log(err.message);
  }

  console.log("currently using: " + localStorage.getItem('theme') + " theme");
  console.log("site has been loaded")
}

run();