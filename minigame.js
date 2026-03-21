const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")


let init = 0

const botSay = (data) => {
    return [
        "Jadi, siapa namamu?",
        `wahh halo ${data?.nama}☺️! Itu nama yang keren. apa kamu senang jika ada orang yang memanggilmu dengan nama itu?`,
        `Hehehe... kamu tahu? aku selalu iri mengetahui manusia bisa bebas berekspresi, sedangkan aku hanya program yang dirangcang oleh mereka. apa kamu tahu apa yang bisa menghiburku?`,
        `aku rasa ${data?.nyocot} tapi... ayo kita bermain game. bukankah game opsi yang terbaik untuk meninggalkan pekerjaan kita?`,
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
                jawaban.placeholder = "iya/tidak";
            }, [1250])
    } else if (init === 2) {
        botDelay({ canggung: jawaban.value })
            setTimeout(() => {
                jawaban.placeholder = "tulis saranmu di sini!";
            }, [1250])
    } else if (init === 3) {
        botDelay({ nyocot: jawaban.value })
            setTimeout(() => {
                jawaban.value = "tunggu, apa maksudmu itu?"
            }, [1250])
    } else if (init === 4) {
        botDelay({ gitulah: jawaban.value })
            setTimeout(() => {
                jawaban.placeholder = "tulis usiamu di sini!";
            }, [1250])
    } else if (init === 5) {
        botDelay({ usia: jawaban.value })
            setTimeout(() => {
                jawaban.placeholder = "jawab dia di sini!";
                userData.push(jawaban.value)
                jawaban.value = "Okie dokie..."
            }, [1250])
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
    }, [1250])
    userData.push(jawaban.value)
    jawaban.value = ""
}

const tombol = document.getElementById('btnKirim');

function finishing() {
    console.log({ userData: userData })
    pertanyaan.innerHTML = `Kalau begitu ayo ikut denganku ${userData[0]}.`;
    jawaban.style.display = 'none';
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