function solve(A, H, R, M) {
    if (![A, H, R, M].every(Number.isFinite) || A <= 0 || H <= 0 || R <= 0 || M < 0) {
        throw new Error('A, H и R должны быть положительными, M — неотрицательным.');
    }
    const cube = A ** 3;
    const cylinder = Math.PI * R ** 2 * H;
    if (!Number.isFinite(cube + cylinder) || cube === 0 || cylinder === 0) {
        throw new Error('Слишком большие или слишком маленькие размеры.');
    }
    return { cube, cylinder, first: M >= cube, second: M >= cylinder, both: M >= cube + cylinder };
}
function calculate() {
    const form = document.getElementById('task-form');
    const output = document.getElementById('result');
    output.value = '';
    if (!form.reportValidity()) return false;
    try {
        const A = document.getElementById('a').valueAsNumber;
        const H = document.getElementById('h').valueAsNumber;
        const R = document.getElementById('r').valueAsNumber;
        const M = document.getElementById('m').valueAsNumber;
        const answer = solve(A, H, R, M);
        const yesNo = value => value ? 'да' : 'нет';
        output.value = 'Объём куба: ' + answer.cube + ' см³\n'
            + 'Объём цилиндра: ' + answer.cylinder + ' см³\n'
            + 'Заполнить первую: ' + yesNo(answer.first) + '\n'
            + 'Заполнить вторую: ' + yesNo(answer.second) + '\n'
            + 'Заполнить обе одновременно: ' + yesNo(answer.both);
        return true;
    } catch (error) {
        output.value = error.message;
        return false;
    }
}
document.getElementById('calculate').addEventListener('click', calculate);
document.getElementById('task-form').addEventListener('input', function () {
    document.getElementById('result').value = '';
});
document.getElementById('task-form').addEventListener('submit', function (event) {
    if (!calculate()) event.preventDefault();
});
