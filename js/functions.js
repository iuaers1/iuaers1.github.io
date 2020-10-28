let songs = [
  {
    artist: "artist name 1",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, soluta?"
  },
  {
    artist: "artist name 2",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, soluta?"
  },
  {
    artist: "artist name 3",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  {
    artist: "artist name 4",
    songName: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Quo, soluta ?"
  },
  
  {
    artist: "artist name 5",
    songName: "Testing Text"
  }];


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
  let songTable = document.getElementById("songTable");

  for (let i = 0; i < songs.length; i++) {
    let row =
      `<tr height="40px">
      <td width="50%" nowrap="nowrap" align="left" class="tableData1">${songs[i].artist}</td>
      <td width="50%" nowrap="nowrap" align="left" class="tableData2">${songs[i].songName}</td>
    </tr>`;
    songTable.innerHTML += row;
  }
}
fill();


const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
