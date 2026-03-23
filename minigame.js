const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")
const containerJawaban = document.getElementById("row")

let init = 0

const botSay = (data) => {
    return [
        "Jadi, siapa namamu?",
        `wahh halo ${data?.nama}☺️! Itu nama yang keren. apa kamu senang jika ada orang yang memanggilmu dengan nama itu?`,
        `Hehehe... kamu tahu? aku selalu iri mengetahui manusia bisa bebas berekspresi, sedangkan aku hanya program yang dirangcang oleh mereka. Menurutmu apa yang bisa menghiburku?`,
        `aku rasa menggambar menyenangkan tapi... ayo kita bermain game. bukankah game opsi yang terbaik untuk meninggalkan pekerjaan kita?`,
        `Ah bercanda, pekerjaan merupakan hal wajib untuk kita yang sedang di usia produktif, jadi gimana kita akan bermain game? Apakah di usiamu saat ini masih layak untuk main game? Berapa usiamu sekarang?`,
        `aku rasa usia ${data?.usia} tidak begitu buruk. 😉`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let userData = []

function botStart() {
    if (jawaban.value.length < 1) return alert('jawab dulu cantik.')
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'ya, aku suka mendengar namaku.';
                userData.push(jawaban.value)
                jawaban.value = "ya, aku suka mendengar namaku."
                btnKirim.style.fontSize = ".6vh"
            }, [1750])
    } else if (init === 2) {
        botDelay({ canggung: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'block';
                jawaban.placeholder = "tulis saranmu di sini!";
                userData.push(jawaban.value)
                jawaban.value = "Mungkin kegiatan menyenangkan seperti, menggambar."
                btnKirim.innerHTML = 'send';
                btnKirim.style.fontSize = "1.4vh"
            }, [1750])
    } else if (init === 3) {
        botDelay({ nyocot: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'Tunggu, apa maksudmu itu!?';
                userData.push(jawaban.value)
                jawaban.value = "Tunggu, apa maksudmu itu!?"
                btnKirim.style.fontSize = ".6vh"
            }, [1750])
    } else if (init === 4) {
        botDelay({ gitulah: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'block';
                jawaban.placeholder = "tulis usiamu di sini!";
                btnKirim.innerHTML = 'send';
                userData.push(jawaban.value)
                jawaban.value = ""
                btnKirim.style.fontSize = "1.4vh"
            }, [1750])
    } else if (init === 5) {
        botDelay({ usia: jawaban.value })
            setTimeout(() => {
                containerJawaban.style.display = 'none';
                btnKirim.innerHTML = 'Okie dokie...';
                userData.push(jawaban.value)
                jawaban.value = "Okie dokie..."
                btnKirim.style.fontSize = ".8vh"
            }, [1750])
    } else if (init === 6) {
        finishing({ nya: jawaban.value })
    } else {
        botEnd()
    }
}

function botDelay(jawabanUser) {
    console.log({ userData: userData })
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1750])
    userData.push(jawaban.value)
    jawaban.value = ""
}

const tombol = document.getElementById('btnKirim');

function finishing() {
    console.log({ userData: userData })
    pertanyaan.innerHTML = `Kalau begitu ayo ikut denganku ${userData[0]}.`;
    containerJawaban.style.display = 'none';
    btnKirim.innerHTML = 'ikuti dia';
    userData.push(jawaban.value)
    jawaban.value = "yangPentingAda"
}

function botEnd() {
    alert(`terima kasih ${userData[0]} telah berkunjung, website game ini diusahakan akan selesai sebelum owner lulus SMP. ☺`)
    window.location.href = "https://kimirenai.vercel.app";
}

const karakter = document.getElementById('karakter');

tombol.addEventListener('click', function() {
    // 1. Sembunyikan elemen GIF agar tidak terlihat proses 'loading'-nya
    karakter.style.display = 'none'; 

    // 2. Ganti sumber gambarnya ke PNG (diam)
    karakter.src = "ngapainjugadiklik.png";

    // 3. Munculkan kembali setelah sumbernya terganti
    // Kita beri jeda sedikit (misal 50ms) agar browser sempat memproses pergantian src
    setTimeout(function() {
        karakter.style.display = 'block';
    }, 50);

    // 4. (Opsional) Balikkan ke GIF lagi setelah beberapa detik
    setTimeout(function() {
        karakter.src = "ngapainjugadiklik.gif";
    }, 1250);
});
