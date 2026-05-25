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
    'adventure.bas': '10 REM ** MINI TEXT ADVENTURE **\n20 PRINT "** DUNGEON ADVENTURE **"\n30 PRINT\n40 PRINT "FIND THE GOLD AND ESCAPE!"\n50 PRINT "COMMANDS: N S E W"\n60 PRINT\n70 LET R = 1\n80 LET K = 0\n90 LET G = 0\n100 GOSUB 200\n110 PRINT "WHAT DO YOU DO";\n120 INPUT A$\n130 IF A$ = "N" THEN GOSUB 300\n140 IF A$ = "S" THEN GOSUB 320\n150 IF A$ = "E" THEN GOSUB 340\n160 IF A$ = "W" THEN GOSUB 360\n170 GOTO 100\n200 REM ** DESCRIBE ROOM **\n210 PRINT\n220 IF R = 1 THEN PRINT "ENTRANCE HALL. TORCHES FLICKER."\n230 IF R = 2 THEN PRINT "DARK CORRIDOR. COLD AIR."\n240 IF R = 3 THEN PRINT "ARMORY. A KEY GLINTS!"\n250 IF R = 4 THEN PRINT "LOCKED VAULT."\n260 IF R = 5 THEN PRINT "TREASURE ROOM! GOLD HERE!"\n270 IF R = 3 THEN IF K = 0 THEN LET K = 1\n280 IF R = 5 THEN IF G = 0 THEN LET G = 1\n290 IF R = 1 THEN IF G = 1 THEN GOTO 380\n295 RETURN\n300 IF R = 1 THEN LET R = 2\n312 IF R = 4 THEN LET R = 5\n315 RETURN\n320 IF R = 2 THEN LET R = 1\n322 IF R = 5 THEN LET R = 4\n325 RETURN\n340 IF R = 1 THEN LET R = 3\n342 IF R = 2 THEN LET R = 4\n344 IF R = 4 THEN IF K = 0 THEN PRINT "DOOR IS LOCKED!"\n346 IF R = 4 THEN IF K = 1 THEN LET R = 5\n348 RETURN\n360 IF R = 3 THEN LET R = 1\n362 IF R = 4 THEN LET R = 2\n364 IF R = 5 THEN LET R = 4\n366 RETURN\n380 PRINT\n390 PRINT "YOU ESCAPED WITH THE GOLD!"\n400 PRINT "*** YOU WIN! ***"\n410 END\n',
    'wumpus.bas': '10 REM ** HUNT THE WUMPUS **\n20 PRINT "** HUNT THE WUMPUS **"\n30 PRINT "20 ROOMS, 3 TUNNELS EACH."\n40 PRINT "HAZARDS: PITS AND BATS."\n50 PRINT "SHOOT OR MOVE (S/M)"\n60 PRINT\n70 DIM C(20,3)\n80 FOR I = 1 TO 20\n90 READ C(I,1),C(I,2),C(I,3)\n100 NEXT I\n110 DATA 2,5,8,1,3,10,2,4,12,3,5,14,4,1,6\n120 DATA 5,7,15,6,8,17,7,1,9,8,10,18,9,2,11\n130 DATA 10,12,19,11,3,13,12,14,20,13,4,15,14,6,16\n140 DATA 15,17,20,16,7,18,17,9,19,18,11,20,19,13,16\n150 LET P = RND(20) + 1\n160 LET W = RND(20) + 1\n170 IF W = P THEN GOTO 160\n180 LET A = 5\n190 PRINT\n200 PRINT "YOU ARE IN ROOM";P\n210 PRINT "TUNNELS:";C(P,1);C(P,2);C(P,3)\n220 FOR I = 1 TO 3\n230 IF C(P,I) = W THEN PRINT "I SMELL A WUMPUS!"\n240 NEXT I\n250 PRINT "SHOOT OR MOVE (S/M)";\n260 INPUT A$\n270 IF A$ = "M" THEN GOTO 310\n280 IF A$ = "S" THEN GOTO 370\n290 GOTO 250\n310 PRINT "WHERE TO";\n320 INPUT R\n330 IF R = C(P,1) THEN GOTO 350\n340 IF R = C(P,2) THEN GOTO 350\n345 IF R = C(P,3) THEN GOTO 350\n346 PRINT "NOT POSSIBLE!"\n347 GOTO 310\n350 LET P = R\n355 IF P = W THEN GOTO 420\n360 GOTO 190\n370 PRINT "SHOOT INTO WHICH ROOM";\n380 INPUT R\n390 LET A = A - 1\n400 IF R = W THEN GOTO 440\n410 PRINT "MISSED! ARROWS LEFT:";A\n415 IF A = 0 THEN GOTO 460\n416 GOTO 190\n420 PRINT "THE WUMPUS GOT YOU!"\n430 GOTO 470\n440 PRINT "*** YOU GOT THE WUMPUS! ***"\n450 GOTO 470\n460 PRINT "OUT OF ARROWS!"\n470 END\n',
    'hamurabi.bas': '10 REM ** HAMURABI **\n20 PRINT "** HAMURABI **"\n30 PRINT "RULE SUMERIA FOR 10 YEARS!"\n40 LET Y = 0\n50 LET P = 100\n60 LET S = 2800\n70 LET A = 1000\n80 LET Y = Y + 1\n90 IF Y > 10 THEN GOTO 400\n100 PRINT\n110 PRINT "==== YEAR";Y;"===="\n120 PRINT "POP:";P;" ACRES:";A;" GRAIN:";S\n130 LET L = RND(10) + 17\n140 PRINT "LAND COSTS";L;" BU/ACRE"\n150 PRINT "ACRES TO BUY";\n160 INPUT B\n170 IF B * L > S THEN PRINT "NOT ENOUGH!"\n180 IF B * L > S THEN GOTO 150\n190 LET A = A + B\n200 LET S = S - B * L\n210 IF B > 0 THEN GOTO 250\n220 PRINT "ACRES TO SELL";\n230 INPUT B\n240 LET A = A - B\n245 LET S = S + B * L\n250 PRINT "BUSHELS TO FEED";\n260 INPUT F\n270 IF F > S THEN PRINT "NOT ENOUGH!"\n280 IF F > S THEN GOTO 250\n290 LET S = S - F\n300 PRINT "ACRES TO PLANT";\n310 INPUT C\n320 IF C > A THEN GOTO 300\n330 LET S = S - C / 2\n340 LET H = RND(5) + 1\n350 LET S = S + H * C\n360 LET D = P - F / 20\n370 IF D < 0 THEN LET D = 0\n380 LET P = P - D + RND(5)\n390 GOTO 80\n400 PRINT\n410 PRINT "==== FINAL REPORT ===="\n420 PRINT "POP:";P;" ACRES:";A\n430 END\n',
    'life.bas': '10 REM ** GAME OF LIFE **\n20 PRINT "** CONWAY\'S GAME OF LIFE **"\n30 PRINT "ENTER CELLS (ROW,COL) 1-10"\n40 PRINT "ENTER 0,0 WHEN DONE"\n50 DIM A(12,12)\n60 DIM B(12,12)\n70 FOR I = 0 TO 11\n80 FOR J = 0 TO 11\n90 LET A(I,J) = 0\n100 NEXT J\n110 NEXT I\n120 PRINT "ROW,COL";\n130 INPUT R,C\n140 IF R = 0 THEN GOTO 170\n150 LET A(R,C) = 1\n160 GOTO 120\n170 PRINT "GENERATIONS";\n180 INPUT G\n190 FOR I = 1 TO 10\n200 LET L$ = ""\n210 FOR J = 1 TO 10\n220 IF A(I,J) = 1 THEN LET L$ = L$ + "*"\n230 IF A(I,J) = 0 THEN LET L$ = L$ + "."\n240 NEXT J\n250 PRINT L$\n260 NEXT I\n270 LET G = G - 1\n280 IF G < 0 THEN GOTO 390\n290 FOR I = 1 TO 10\n300 FOR J = 1 TO 10\n310 LET N = A(I-1,J-1)+A(I-1,J)+A(I-1,J+1)\n320 LET N = N+A(I,J-1)+A(I,J+1)\n330 LET N = N+A(I+1,J-1)+A(I+1,J)+A(I+1,J+1)\n340 LET B(I,J) = 0\n350 IF A(I,J) = 1 THEN IF N = 2 THEN LET B(I,J) = 1\n360 IF N = 3 THEN LET B(I,J) = 1\n370 NEXT J\n380 NEXT I\n385 FOR I = 1 TO 10\n386 FOR J = 1 TO 10\n387 LET A(I,J) = B(I,J)\n388 NEXT J\n389 NEXT I\n390 PRINT\n395 IF G >= 0 THEN GOTO 190\n400 END\n',
    'mastermind.bas': '10 REM ** MASTERMIND **\n20 PRINT "** MASTERMIND **"\n30 PRINT "GUESS 4 DIGITS (1-6)"\n40 PRINT "BULLS = RIGHT PLACE"\n50 PRINT "COWS = WRONG PLACE"\n60 DIM S(4)\n70 DIM G(4)\n80 LET S(1) = RND(6) + 1\n90 LET S(2) = RND(6) + 1\n100 IF S(2) = S(1) THEN GOTO 90\n110 LET S(3) = RND(6) + 1\n120 IF S(3) = S(1) THEN GOTO 110\n130 IF S(3) = S(2) THEN GOTO 110\n140 LET S(4) = RND(6) + 1\n150 IF S(4) = S(1) THEN GOTO 140\n160 IF S(4) = S(2) THEN GOTO 140\n170 IF S(4) = S(3) THEN GOTO 140\n180 LET T = 0\n190 LET T = T + 1\n200 IF T > 10 THEN GOTO 340\n210 PRINT "GUESS #";T\n220 PRINT "D1";\n230 INPUT G(1)\n240 PRINT "D2";\n250 INPUT G(2)\n260 PRINT "D3";\n270 INPUT G(3)\n280 PRINT "D4";\n290 INPUT G(4)\n300 LET B = 0\n310 LET C = 0\n320 FOR I = 1 TO 4\n330 IF G(I) = S(I) THEN LET B = B + 1\n335 NEXT I\n336 FOR I = 1 TO 4\n337 FOR J = 1 TO 4\n338 IF I = J THEN GOTO 340\n339 IF G(I) = S(J) THEN LET C = C + 1\n340 NEXT J\n341 NEXT I\n342 PRINT "BULLS:";B;" COWS:";C\n343 IF B = 4 THEN GOTO 360\n345 GOTO 190\n340 PRINT "OUT OF GUESSES!"\n350 PRINT "CODE:";S(1);S(2);S(3);S(4)\n355 GOTO 370\n360 PRINT "*** CRACKED IT IN";T;"TRIES! ***"\n370 END\n',
    'calendar.bas': '10 REM ** CALENDAR **\n20 PRINT "** CALENDAR **"\n30 PRINT "MONTH (1-12)";\n40 INPUT M\n50 PRINT "YEAR";\n60 INPUT Y\n70 DIM D(12)\n80 LET D(1) = 31\n90 LET D(2) = 28\n100 LET D(3) = 31\n110 LET D(4) = 30\n120 LET D(5) = 31\n130 LET D(6) = 30\n140 LET D(7) = 31\n150 LET D(8) = 31\n160 LET D(9) = 30\n170 LET D(10) = 31\n180 LET D(11) = 30\n190 LET D(12) = 31\n200 IF M <> 2 THEN GOTO 230\n210 LET L = Y - (Y / 4) * 4\n220 IF L = 0 THEN LET D(2) = 29\n230 LET A = (14 - M) / 12\n240 LET B = Y - A\n250 LET C = M + 12 * A - 2\n260 LET W = (1 + B + B/4 - B/100 + B/400 + (31*C)/12)\n270 LET W = W - (W/7) * 7\n280 PRINT " SU MO TU WE TH FR SA"\n290 FOR I = 1 TO W\n300 PRINT "   ";\n310 NEXT I\n320 FOR I = 1 TO D(M)\n330 IF I < 10 THEN PRINT "  ";I;\n340 IF I >= 10 THEN PRINT " ";I;\n350 LET W = W + 1\n360 IF W = 7 THEN PRINT\n370 IF W = 7 THEN LET W = 0\n380 NEXT I\n390 PRINT\n400 END\n',
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
        ['adventure.bas', 'Text Adventure'],
        ['lunarlander.bas', 'Lunar Lander'],
        ['wumpus.bas', 'Hunt the Wumpus'],
        ['hamurabi.bas', 'Hamurabi (Kingdom)'],
        ['life.bas', "Conway's Game of Life"],
        ['mastermind.bas', 'Mastermind'],
        ['nim.bas', 'Nim (Strategy)'],
        ['star.bas', 'Diamond Pattern'],
        ['sort.bas', 'Bubble Sort'],
        ['calendar.bas', 'Calendar'],
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

function sendChar(ch) {
    if (!wasm_send_key) return;
    wasm_send_key(ch);
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

    sendChar(ch);
});

// Mobile: tap screen to focus hidden input and open keyboard
const mobileInput = document.getElementById('mobile-input');

canvas.addEventListener('click', () => {
    mobileInput.focus();
});

document.getElementById('monitor').addEventListener('click', (e) => {
    if (e.target.closest('#toolbar') || e.target.closest('.dropdown-content')) return;
    mobileInput.focus();
});

mobileInput.addEventListener('input', (e) => {
    const val = mobileInput.value;
    if (val.length > 0) {
        const lastChar = val[val.length - 1];
        let ch = lastChar.charCodeAt(0);
        if (ch >= 0x61 && ch <= 0x7A) ch -= 0x20;
        if (ch >= 0x20 && ch <= 0x5F) sendChar(ch);
    }
    mobileInput.value = '';
});

mobileInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        sendChar(0x0D);
        mobileInput.value = '';
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        sendChar(0x5F);
        mobileInput.value = '';
    }
});

render();
boot();
