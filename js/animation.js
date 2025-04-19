const h1Element = document.getElementById('typewriter');
const h6Element = document.getElementById('typewriter-subtitle');
const h1Text = h1Element.textContent;
const h6Text = h6Element.textContent;
let index = 0;
let phase = 'write-h1';

function type() {
    if (phase === 'write-h1') {
        h1Element.textContent = h1Text.slice(0, index);
        index++;
        if (index > h1Text.length) {
            index = 0;
            phase = 'write-h6';
        }
    } else if (phase === 'write-h6') {
        h6Element.textContent = h6Text.slice(0, index);
        index++;
        if (index > h6Text.length) {
            index = h6Text.length;
            phase = 'erase-h6';
            setTimeout(type, 1000);
            return;
        }
    } else if (phase === 'erase-h6') {
        h6Element.textContent = h6Text.slice(0, index);
        index--;
        if (index < 0) {
            index = h1Text.length;
            phase = 'erase-h1';
        }
    } else if (phase === 'erase-h1') {
        h1Element.textContent = h1Text.slice(0, index);
        index--;
        if (index < 0) {
            index = 0;
            phase = 'write-h1';
            setTimeout(type, 500);
            return;
        }
    }

    const speed = phase.startsWith('erase') ? 50 : 100;
    setTimeout(type, speed);
}
h1Element.textContent = '';
h6Element.textContent = '';
type();