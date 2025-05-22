const sexsiMelumatlar = {
  ad: "Mail",
  soyad: "Zamanov",
  isBasligi: "Kibertehlukezlik Mutexessisi",
  profil: "Cox yaxsi telebeyem",
  profilSekli: "profile.jpg"
};

const elaqeMelumatlari = {
  telefon: "+994 77 777 77 77",
  email: "mail@mail.com",
  unvan: "Baki, Azerbaycan",
  website: "www.google.com"
};

const tehsilMelumatlari = [
  {
      iller: "2020 - 2024",
      mekteb: "HARVARD UNIVERSITY",
      sahe: "Kiber Tehlukezlik"
  },
  {
      iller: "2024 - 2028", 
      mekteb: "AzTU",
      sahe: "Kiber Tehlukezlik"
  }
];

const bacariqlar = ["Linuxla islemek", "Windowsla islemek", "Proqramlasdirma", "Mesuliyyet"];

const diller = ["Ingilis", "Alman", "Kenya"];

const isTecrubesiMelumatlari = [
  {
      sirket: "Dovlet Tehlukezlik Xidmeti",
      muddet: "2024 - Hal-hazirda",
      vezifeler: ["Komandani idare etmek ve yonlendirmek"]
  },
  {
      sirket: "AzTU",
      muddet: "2023 - 2024", 
      vezifeler: ["Texniki destek"]
  }
];

window.onload = function() {
  profilSekliniGoster();
  elaqeniGoster();
  tehsiliGoster();
  bacariqlariGoster();
  dilleriGoster();
  isTecrubesiGoster();
  akkordeonlariHazirla();
};

function profilSekliniGoster() {
  document.querySelector('.profile-pic').src = sexsiMelumatlar.profilSekli;
}

function akkordeonlariHazirla() {
  var acc = document.getElementsByClassName("accordion");
  for (var i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
          this.classList.toggle("active");
          var panel = this.nextElementSibling;
          if (panel.style.display === "block") {
              panel.style.display = "none";
          } else {
              panel.style.display = "block";
          }
      });
  }
}

function elaqeniGoster() {
  document.getElementById('elaqeMelumatlari').innerHTML = `
      <p>📞 ${elaqeMelumatlari.telefon}</p>
      <p>📧 ${elaqeMelumatlari.email}</p>
      <p>📍 ${elaqeMelumatlari.unvan}</p>
      <p>🌐 <a href="https://${elaqeMelumatlari.website}" target="_blank">${elaqeMelumatlari.website}</a></p>
  `;
}

function tehsiliGoster() {
  let html = '';
  for(let i = 0; i < tehsilMelumatlari.length; i++) {
      html += `<p><strong>${tehsilMelumatlari[i].iller}</strong><br>${tehsilMelumatlari[i].mekteb}<br>${tehsilMelumatlari[i].sahe}</p>`;
  }
  document.getElementById('tehsilMelumatlari').innerHTML = html;
}

function bacariqlariGoster() {
  let html = '';
  for(let i = 0; i < bacariqlar.length; i++) {
      html += `<li>${bacariqlar[i]}</li>`;
  }
  document.getElementById('bacariqlarSiyahisi').innerHTML = html;
}

function dilleriGoster() {
  let html = '';
  for(let i = 0; i < diller.length; i++) {
      html += `<li>${diller[i]}</li>`;
  }
  document.getElementById('dillerSiyahisi').innerHTML = html;
}

function isTecrubesiGoster() {
  let html = '';
  for(let i = 0; i < isTecrubesiMelumatlari.length; i++) {
      html += `<h3>${isTecrubesiMelumatlari[i].sirket} <span>${isTecrubesiMelumatlari[i].muddet}</span></h3><ul>`;
      for(let j = 0; j < isTecrubesiMelumatlari[i].vezifeler.length; j++) {
          html += `<li>${isTecrubesiMelumatlari[i].vezifeler[j]}</li>`;
      }
      html += '</ul>';
  }
  document.getElementById('isTecrubesi').innerHTML = html;
}

function adiDeyis() {
  let yeniAd = prompt("Yeni adi daxil edin:", sexsiMelumatlar.ad);
  let yeniSoyad = prompt("Yeni soyadi daxil edin:", sexsiMelumatlar.soyad);
  
  if(yeniAd != null && yeniSoyad != null) {
      sexsiMelumatlar.ad = yeniAd;
      sexsiMelumatlar.soyad = yeniSoyad;
      document.getElementById('tamAd').innerHTML = `${sexsiMelumatlar.ad} <span>${sexsiMelumatlar.soyad}</span> <button class="edit-btn" onclick="adiDeyis()">Deyis</button>`;
  }
}

function isBasliginiDeyis() {
  let yeniIsBasligi = prompt("Yeni is basligini daxil edin:", sexsiMelumatlar.isBasligi);
  if(yeniIsBasligi != null) {
      sexsiMelumatlar.isBasligi = yeniIsBasligi;
      document.getElementById('isBasligi').innerHTML = `${sexsiMelumatlar.isBasligi} <button class="edit-btn" onclick="isBasliginiDeyis()">Deyis</button>`;
  }
}

function profiliDeyis() {
  let yeniProfil = prompt("Yeni profil metnini daxil edin:", sexsiMelumatlar.profil);
  if(yeniProfil != null) {
      sexsiMelumatlar.profil = yeniProfil;
      document.getElementById('profilMetni').innerHTML = sexsiMelumatlar.profil;
  }
}

function elaqeniDeyis() {
  let hansiMelumat = prompt("Hansini deyismek isteyirsiniz?\n1 - Telefon\n2 - Email\n3 - Unvan\n4 - Website\n5 - Hamisi");
  
  switch(hansiMelumat) {
      case "1":
          let yeniTelefon = prompt("Yeni telefon nomresini daxil edin:", elaqeMelumatlari.telefon);
          if(yeniTelefon != null) {
              elaqeMelumatlari.telefon = yeniTelefon;
              elaqeniGoster();
          }
          break;
      case "2":
          let yeniEmail = prompt("Yeni email unvanini daxil edin:", elaqeMelumatlari.email);
          if(yeniEmail != null) {
              elaqeMelumatlari.email = yeniEmail;
              elaqeniGoster();
          }
          break;
      case "3":
          let yeniUnvan = prompt("Yeni unvani daxil edin:", elaqeMelumatlari.unvan);
          if(yeniUnvan != null) {
              elaqeMelumatlari.unvan = yeniUnvan;
              elaqeniGoster();
          }
          break;
      case "4":
          let yeniWebsite = prompt("Yeni website-i daxil edin:", elaqeMelumatlari.website);
          if(yeniWebsite != null) {
              elaqeMelumatlari.website = yeniWebsite;
              elaqeniGoster();
          }
          break;
      case "5":
          let yeniTelefonHamisi = prompt("Yeni telefon nomresini daxil edin:", elaqeMelumatlari.telefon);
          let yeniEmailHamisi = prompt("Yeni email unvanini daxil edin:", elaqeMelumatlari.email);
          let yeniUnvanHamisi = prompt("Yeni unvani daxil edin:", elaqeMelumatlari.unvan);
          let yeniWebsiteHamisi = prompt("Yeni website-i daxil edin:", elaqeMelumatlari.website);
          
          if(yeniTelefonHamisi != null) elaqeMelumatlari.telefon = yeniTelefonHamisi;
          if(yeniEmailHamisi != null) elaqeMelumatlari.email = yeniEmailHamisi;
          if(yeniUnvanHamisi != null) elaqeMelumatlari.unvan = yeniUnvanHamisi;
          if(yeniWebsiteHamisi != null) elaqeMelumatlari.website = yeniWebsiteHamisi;
          
          elaqeniGoster();
          break;
      default:
          alert("Yanlıs secim!");
  }
}

function yeniBaracariqElaveEt() {
  let yeniBarcariq = prompt("Yeni bacarigi daxil edin:");
  if(yeniBarcariq != null && yeniBarcariq != "") {
      bacariqlar.push(yeniBarcariq);
      bacariqlariGoster();
  }
}

function yeniDilElaveEt() {
  let yeniDil = prompt("Yeni dili daxil edin:");
  if(yeniDil != null && yeniDil != "") {
      diller.push(yeniDil);
      dilleriGoster();
  }
}

function yeniTehsilElaveEt() {
  let iller = prompt("Illeri daxil edin (meselen: 2020-2024):");
  let mekteb = prompt("Mekteb/Universitet adini daxil edin:");
  let sahe = prompt("Saheni daxil edin:");
  
  if(iller != null && mekteb != null && sahe != null) {
      tehsilMelumatlari.push({
          iller: iller,
          mekteb: mekteb,
          sahe: sahe
      });
      tehsiliGoster();
  }
}

function yeniIsElaveEt() {
  let sirket = prompt("Sirket adini daxil edin:");
  let muddet = prompt("Is muddetini daxil edin (meselen: 2023-2024):");
  let vezife = prompt("Vezifeni daxil edin:");
  
  if(sirket != null && muddet != null && vezife != null) {
      isTecrubesiMelumatlari.push({
          sirket: sirket,
          muddet: muddet,
          vezifeler: [vezife]
      });
      isTecrubesiGoster();
  }
}

function bacariqlariDeyis() {
  let secenekler = "Hansi bacarigi deyismek isteyirsiniz?\n";
  for(let i = 0; i < bacariqlar.length; i++) {
      secenekler += `${i+1} - ${bacariqlar[i]}\n`;
  }
  secenekler += `${bacariqlar.length + 1} - Yeni bacariq elave et`;
  
  let secim = prompt(secenekler);
  let secimNomresi = parseInt(secim);
  
  if(secimNomresi >= 1 && secimNomresi <= bacariqlar.length) {
      let yeniBarcariq = prompt(`"${bacariqlar[secimNomresi-1]}" yerine yenisini yazin:`, bacariqlar[secimNomresi-1]);
      if(yeniBarcariq != null) {
          bacariqlar[secimNomresi-1] = yeniBarcariq;
          bacariqlariGoster();
      }
  } else if(secimNomresi === bacariqlar.length + 1) {
      yeniBaracariqElaveEt();
  } else {
      alert("Yanlıs secim!");
  }
}

function dilleriDeyis() {
  let secenekler = "Hansi dili deyismek isteyirsiniz?\n";
  for(let i = 0; i < diller.length; i++) {
      secenekler += `${i+1} - ${diller[i]}\n`;
  }
  secenekler += `${diller.length + 1} - Yeni dil elave et`;
  
  let secim = prompt(secenekler);
  let secimNomresi = parseInt(secim);
  
  if(secimNomresi >= 1 && secimNomresi <= diller.length) {
      let yeniDil = prompt(`"${diller[secimNomresi-1]}" yerine yenisini yazin:`, diller[secimNomresi-1]);
      if(yeniDil != null) {
          diller[secimNomresi-1] = yeniDil;
          dilleriGoster();
      }
  } else if(secimNomresi === diller.length + 1) {
      yeniDilElaveEt();
  } else {
      alert("Yanlıs secim!");
  }
}

function tehsiliDeyis() {
  alert("Tehsil melumatlarin deyismek ucun her birini ayrıca redakte edin.");
}

function isTecrubesiDeyis() {
  alert("Is tecrubesi deyismek ucun her birini ayrıca redakte edin.");
}