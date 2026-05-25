let Module;
let wasm_init, wasm_step_frame, wasm_send_key, wasm_reset;
let wasm_get_screen_char, wasm_get_cursor_col, wasm_get_cursor_row;
let wasm_load_program, wasm_send_break;
let running = false;

const canvas = document.getElementById('crt');
const ctx = canvas.getContext('2d');
const CHAR_WIDTH = 14;
const CHAR_HEIGHT = 16;
const PHOSPHOR_GREEN = '#33ff33';
const BG_COLOR = '#001100';
let cursorVisible = true;
let blinkCounter = 0;
const BLINK_RATE = 30;

const DEMOS = {
    'hello.bas': '10 PRINT "HELLO, APPLE 1 WORLD!"\n20 END\n',
    'fibonacci.bas': '10 REM ** FIBONACCI SEQUENCE **\n20 PRINT "** FIBONACCI NUMBERS **"\n30 PRINT\n40 LET A = 0\n50 LET B = 1\n60 FOR I = 1 TO 20\n70 PRINT I;": ";A\n80 LET C = A + B\n90 LET A = B\n100 LET B = C\n110 NEXT I\n120 PRINT\n130 PRINT "DONE."\n140 END\n',
    'guess.bas': '10 REM ** NUMBER GUESSING GAME **\n20 PRINT "** NUMBER GUESSING GAME **"\n30 PRINT\n40 PRINT "I\'M THINKING OF A NUMBER"\n50 PRINT "BETWEEN 1 AND 100."\n60 PRINT\n70 LET N = RND(100) + 1\n80 LET T = 0\n90 PRINT "YOUR GUESS";\n100 INPUT G\n110 LET T = T + 1\n120 IF G = N THEN GOTO 170\n130 IF G < N THEN PRINT "TOO LOW!"\n140 IF G > N THEN PRINT "TOO HIGH!"\n150 GOTO 90\n170 PRINT\n180 PRINT "CORRECT! YOU GOT IT IN ";T;" TRIES."\n190 END\n',
    'sieve.bas': '10 REM ** SIEVE OF ERATOSTHENES **\n20 PRINT "** PRIMES UP TO 100 **"\n30 PRINT\n40 DIM A(100)\n50 FOR I = 2 TO 100\n60 LET A(I) = 1\n70 NEXT I\n80 FOR I = 2 TO 10\n90 IF A(I) = 0 THEN GOTO 130\n100 LET J = I * I\n110 IF J > 100 THEN GOTO 130\n120 LET A(J) = 0\n125 LET J = J + I\n126 IF J <= 100 THEN GOTO 120\n130 NEXT I\n140 LET C = 0\n150 FOR I = 2 TO 100\n160 IF A(I) = 0 THEN GOTO 190\n170 PRINT I;" ";\n180 LET C = C + 1\n190 NEXT I\n200 PRINT\n210 PRINT C;" PRIMES FOUND."\n220 END\n',
    'lunarlander.bas': '10 PRINT "** LUNAR LANDER **"\n20 PRINT "LAND WITH VELOCITY UNDER 5!"\n30 PRINT "THRUST 0-9 EACH SECOND."\n40 LET A = 500\n50 LET V = 50\n60 LET F = 200\n70 LET T = 0\n80 PRINT "---"\n90 PRINT "T:";T;" ALT:";A;" VEL:";V;" FUEL:";F\n100 IF F = 0 THEN GOTO 150\n110 PRINT "THRUST (0-9)";\n120 INPUT B\n130 IF B > 9 THEN LET B = 9\n140 IF B > F THEN LET B = F\n150 LET V = V + 5 - B\n160 LET A = A - V\n170 LET F = F - B\n180 LET T = T + 1\n190 IF A > 0 THEN GOTO 80\n200 PRINT "*** CONTACT! ***"\n210 PRINT "VELOCITY:";V\n220 IF V < 5 THEN PRINT "PERFECT LANDING!"\n230 IF V >= 5 THEN PRINT "CRASH!"\n240 END\n',
    'nim.bas': '10 PRINT "** NIM **"\n20 PRINT "21 STICKS. TAKE 1-3."\n30 PRINT "LAST STICK LOSES!"\n40 LET S = 21\n50 PRINT\n60 PRINT "STICKS:";S\n70 PRINT "TAKE (1-3)";\n80 INPUT P\n90 IF P < 1 THEN GOTO 70\n100 IF P > 3 THEN GOTO 70\n110 IF P > S THEN GOTO 70\n120 LET S = S - P\n130 IF S <= 0 THEN GOTO 200\n140 LET C = S - 1\n150 LET C = C - (C / 4) * 4\n160 IF C = 0 THEN LET C = RND(3) + 1\n170 IF C > S THEN LET C = S\n180 LET S = S - C\n190 PRINT "I TAKE";C;". LEFT:";S\n195 IF S <= 0 THEN GOTO 210\n196 GOTO 50\n200 PRINT "YOU TOOK THE LAST! I WIN!"\n205 GOTO 220\n210 PRINT "I TOOK THE LAST. YOU WIN!"\n220 END\n',
    'star.bas': '10 REM ** STAR DIAMOND **\n20 LET S = 8\n30 FOR I = 1 TO S\n40 FOR J = 1 TO S - I\n50 PRINT " ";\n60 NEXT J\n70 FOR J = 1 TO 2 * I - 1\n80 PRINT "*";\n90 NEXT J\n100 PRINT\n110 NEXT I\n120 FOR I = S - 1 TO 1 STEP -1\n130 FOR J = 1 TO S - I\n140 PRINT " ";\n150 NEXT J\n160 FOR J = 1 TO 2 * I - 1\n170 PRINT "*";\n180 NEXT J\n190 PRINT\n200 NEXT I\n210 END\n',
    'sort.bas': '10 PRINT "** BUBBLE SORT **"\n20 DIM A(10)\n30 PRINT "UNSORTED: ";\n40 FOR I = 1 TO 10\n50 LET A(I) = RND(99) + 1\n60 PRINT A(I);" ";\n70 NEXT I\n80 PRINT\n90 FOR I = 1 TO 9\n100 FOR J = 1 TO 10 - I\n110 IF A(J) <= A(J + 1) THEN GOTO 150\n120 LET T = A(J)\n130 LET A(J) = A(J + 1)\n140 LET A(J + 1) = T\n150 NEXT J\n160 NEXT I\n170 PRINT "SORTED:   ";\n180 FOR I = 1 TO 10\n190 PRINT A(I);" ";\n200 NEXT I\n210 PRINT\n220 END\n',
};

async function boot() {
    Module = await Apple1Module();
    wasm_init = Module.cwrap('wasm_init', null, []);
    wasm_step_frame = Module.cwrap('wasm_step_frame', null, []);
    wasm_send_key = Module.cwrap('wasm_send_key', null, ['number']);
    wasm_reset = Module.cwrap('wasm_reset', null, []);
    wasm_get_screen_char = Module.cwrap('wasm_get_screen_char', 'number', ['number', 'number']);
    wasm_get_cursor_col = Module.cwrap('wasm_get_cursor_col', 'number', []);
    wasm_get_cursor_row = Module.cwrap('wasm_get_cursor_row', 'number', []);
    wasm_load_program = Module.cwrap('wasm_load_program', null, ['string']);
    wasm_send_break = Module.cwrap('wasm_send_break', null, []);

    wasm_init();
    initUI();
    running = true;
    requestAnimationFrame(loop);
}

function initUI() {
    document.getElementById('btn-basic').addEventListener('click', () => {
        const cmd = 'E000R\r';
        for (const ch of cmd) {
            const code = ch === '\r' ? 0x0D : ch.charCodeAt(0);
            wasm_send_key(code);
            for (let i = 0; i < 5; i++) wasm_step_frame();
        }
    });

    document.getElementById('btn-reset').addEventListener('click', () => {
        wasm_reset();
    });

    document.getElementById('btn-about').addEventListener('click', () => {
        document.getElementById('about-modal').classList.remove('hidden');
    });
    document.getElementById('about-close').addEventListener('click', () => {
        document.getElementById('about-modal').classList.add('hidden');
    });
    document.getElementById('about-modal').addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.add('hidden');
    });

    const demoMenu = document.getElementById('demo-menu');
    const btnDemos = document.getElementById('btn-demos');

    btnDemos.addEventListener('click', () => demoMenu.classList.toggle('show'));
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.dropdown')) demoMenu.classList.remove('show');
    });

    const demoList = [
        ['hello.bas', 'Hello World'],
        ['fibonacci.bas', 'Fibonacci Numbers'],
        ['guess.bas', 'Number Guessing Game'],
        ['sieve.bas', 'Sieve of Eratosthenes'],
        ['lunarlander.bas', 'Lunar Lander'],
        ['nim.bas', 'Nim'],
        ['star.bas', 'Diamond Pattern'],
        ['sort.bas', 'Bubble Sort'],
    ];

    for (const [file, name] of demoList) {
        const btn = document.createElement('button');
        btn.textContent = name;
        btn.addEventListener('click', () => {
            demoMenu.classList.remove('show');
            const program = DEMOS[file];
            if (program) wasm_load_program(program);
        });
        demoMenu.appendChild(btn);
    }
}

function loop() {
    if (!running) return;
    wasm_step_frame();

    blinkCounter++;
    if (blinkCounter >= BLINK_RATE) {
        cursorVisible = !cursorVisible;
        blinkCounter = 0;
    }

    render();
    requestAnimationFrame(loop);
}

function render() {
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!wasm_get_cursor_col) return;

    ctx.font = `bold ${CHAR_HEIGHT - 2}px "Courier New", monospace`;
    ctx.textBaseline = 'top';

    const cursorCol = wasm_get_cursor_col();
    const cursorRow = wasm_get_cursor_row();

    for (let row = 0; row < 24; row++) {
        for (let col = 0; col < 40; col++) {
            let ch;
            if (row === cursorRow && col === cursorCol) {
                ch = cursorVisible ? '@' : ' ';
            } else {
                const code = wasm_get_screen_char(row, col);
                ch = code >= 0x20 && code <= 0x7E ? String.fromCharCode(code) : ' ';
            }

            if (ch !== ' ') {
                const x = col * CHAR_WIDTH + 2;
                const y = row * CHAR_HEIGHT + 1;
                ctx.shadowColor = PHOSPHOR_GREEN;
                ctx.shadowBlur = 3;
                ctx.fillStyle = PHOSPHOR_GREEN;
                ctx.fillText(ch, x, y);
                ctx.shadowBlur = 0;
            }
        }
    }

    ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
    for (let y = 0; y < canvas.height; y += 2) {
        ctx.fillRect(0, y, canvas.width, 1);
    }

    const grad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, canvas.width * 0.35,
        canvas.width / 2, canvas.height / 2, canvas.width * 0.65
    );
    grad.addColorStop(0, 'rgba(0,0,0,0)');
    grad.addColorStop(1, 'rgba(0,0,0,0.2)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.addEventListener('keydown', (e) => {
    if (!wasm_send_key) return;
    if (!document.getElementById('about-modal').classList.contains('hidden')) return;

    e.preventDefault();

    if (e.ctrlKey) {
        if (e.key.toLowerCase() === 'c') { wasm_send_break(); return; }
        if (e.key.toLowerCase() === 'r') { wasm_reset(); return; }
    }

    let ch = 0;
    if (e.key === 'Enter') ch = 0x0D;
    else if (e.key === 'Backspace') ch = 0x5F;
    else if (e.key === 'Escape') ch = 0x1B;
    else if (e.key.length === 1) {
        ch = e.key.charCodeAt(0);
        if (ch >= 0x61 && ch <= 0x7A) ch -= 0x20;
        if (ch < 0x20 || ch > 0x5F) return;
    } else return;

    wasm_send_key(ch);
});

render();
boot();
