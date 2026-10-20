let latin = false;

function changePassport() {
    latin = !latin;
    document.getElementById('surname').innerText = latin ? 'Tabakov' : 'Табаков';
    document.getElementById('first-name').innerText = latin ? 'Artem' : 'Артём';
    document.getElementById('patronymic').innerText = latin ? 'Vladimirovich' : 'Владимирович';
    document.getElementById('sex').innerText = latin ? 'Male.' : 'МУЖ.';
    document.getElementById('issued').innerText = latin ? 'UMVD ROSSII PO OBLASTI N' : 'УМВД РОССИИ ПО ОБЛАСТИ N';
    document.getElementById('birthplace').innerText = latin ? 'G.N' : 'Г.N';
}

document.getElementById('change').addEventListener('click', changePassport);
