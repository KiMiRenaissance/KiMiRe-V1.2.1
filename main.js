document.getElementById("a-content-hobi").addEventListener("click", function() {
    const hobi = document.getElementById("hobi");
    hobi.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});

document.getElementById("a-content-rencana").addEventListener("click", function() {
    const rencana = document.getElementById("rencana");
    rencana.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    });
});


downloadDiManaAkuMelangkah.addEventListener("click", function() {
    setTimeout(function() {
        unduhDiManaAkuMelangkah.style.display = 'block';
    }, 450);
    batalUnduhDiManaAkuMelangkah.addEventListener('click', function() {
        unduhDiManaAkuMelangkah.style.display = 'none';
    });
});

itchio.addEventListener("click", function() {
    window.location.href = 'https://kimirenai.itch.io/di-mana-aku-melangkah';
});

infoDiManaAkuMelangkah.addEventListener("click", function() {
    setTimeout(function() {
        alert('Akhhh... What a procrastination.')
    }, 450);
});

kontributorDiManaAkuMelangkah.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'kontributorDiManaAkuMelangkah.html';
    }, 450);
});

download.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'https://kimirenai.itch.io/who-siapa-nama-mereka';
    }, 450);
});

infowho.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'infowho.html';
    }, 450);
});

info.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'info.html';
    }, 450);
});

karakter.addEventListener("click", function() {
    setTimeout(function() {
        alert('Akhhh... What a procrastination.')
    }, 450);
});

kontributorwho.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'kontributorwho.html';
    }, 450);
});

kontributorrefusal.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'kontributorrefusal.html';
    }, 450);
});

youtube.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'https://youtube.com/@milan_oy?si=IG19uNKr7bRHX3Cy';
    }, 450);
});

facebook.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'https://www.facebook.com/share/1EmryehnEB/';
    }, 450);
});

tiktok.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'http://tiktok.com/@kimirenaissance';
    }, 450);
});

sociabuzz.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'https://sociabuzz.com/milan_o391/tribe';
    }, 450);
});

trakteer.addEventListener("click", function() {
    setTimeout(function() {
        window.location.href = 'https://trakteer.id/kimi_renaissance';
    }, 450);
});