<!DOCTYPE html>
<html lang="ru">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
    <title>С Днём Рождения, Мама! 💝</title>
<style>
    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
}

    html, body {
    width: 100%;
    height: 100%;
    overflow: hidden;
}

    body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

    body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 20% 50%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(78, 205, 196, 0.15) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
}

    .balloons-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 1;
}

    .balloon {
    position: absolute;
    width: clamp(30px, 8vw, 60px);
    height: clamp(40px, 10vw, 80px);
    border-radius: 50% 50% 50% 0;
    opacity: 0.6;
    transform: rotate(-45deg);
    cursor: pointer;
    transition: all 0.3s ease;
    filter: drop-shadow(0 5px 10px rgba(0,0,0,0.2));
}

    .balloon:active {
    transform: rotate(-45deg) scale(0.9);
    opacity: 0.8;
}

    .balloon::after {
    content: '';
    position: absolute;
    width: 2px;
    height: clamp(60px, 15vw, 120px);
    background: rgba(0,0,0,0.1);
    top: 100%;
    left: 50%;
}

    .balloon:nth-child(1) { background: linear-gradient(135deg, #FF6B6B, #FF4757); left: 5%; animation: float 15s infinite ease-in; }
    .balloon:nth-child(2) { background: linear-gradient(135deg, #4ECDC4, #00D2D3); left: 15%; animation: float 18s infinite ease-in; animation-delay: 2s; }
    .balloon:nth-child(3) { background: linear-gradient(135deg, #FFE66D, #FFDA44); left: 25%; animation: float 20s infinite ease-in; animation-delay: 4s; }
    .balloon:nth-child(4) { background: linear-gradient(135deg, #95E1D3, #6BCB77); left: 35%; animation: float 17s infinite ease-in; animation-delay: 1s; }
    .balloon:nth-child(5) { background: linear-gradient(135deg, #F38181, #FF6B9D); left: 45%; animation: float 19s infinite ease-in; animation-delay: 3s; }
    .balloon:nth-child(6) { background: linear-gradient(135deg, #AA96DA, #B39DDB); left: 55%; animation: float 16s infinite ease-in; animation-delay: 2.5s; }
    .balloon:nth-child(7) { background: linear-gradient(135deg, #FCBAD3, #F48FB1); left: 65%; animation: float 21s infinite ease-in; animation-delay: 1.5s; }
    .balloon:nth-child(8) { background: linear-gradient(135deg, #A8D8EA, #7EC8E3); left: 75%; animation: float 18s infinite ease-in; animation-delay: 3.5s; }

    @keyframes float {
    0% {
        bottom: -100px;
        transform: rotate(-45deg) translateX(0);
    opacity: 0;
}
    10% {
    opacity: 0.6;
}
    90% {
    opacity: 0.6;
}
    100% {
    bottom: 110vh;
    transform: rotate(-45deg) translateX(50px);
    opacity: 0;
}
}

    .pop-animation {
    animation: popBalloon 0.6s ease-out forwards !important;
}

    @keyframes popBalloon {
    0% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
    transform: scale(0);
    opacity: 0;
}
}

    .main-container {
    position: relative;
    z-index: 10;
    text-align: center;
    width: 100%;
    max-width: 1200px;
    padding: clamp(10px, 5vw, 40px);
    max-height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
}

    /* Scrollbar для больших экранов */
    .main-container::-webkit-scrollbar {
    width: 8px;
}

    .main-container::-webkit-scrollbar-track {
    background: rgba(255,255,255,0.1);
}

    .main-container::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.5);
    border-radius: 10px;
}

    /* STAGE 1: КОНВЕРТ */
    .stage-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    animation: fadeIn 0.5s ease-out;
}

    .stage-1.hidden {
    display: none;
}

    .envelope-wrapper {
    perspective: 1200px;
    margin-bottom: clamp(20px, 8vw, 60px);
}

    .envelope {
    width: clamp(250px, 80vw, 400px);
    height: clamp(170px, 55vw, 280px);
    background: linear-gradient(135deg, #FFD700 0%, #FFA500 100%);
    border-radius: clamp(10px, 3vw, 20px);
    position: relative;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.4), inset 0 -5px 20px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.3s ease;
    transform-style: preserve-3d;
    animation: slideInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    touch-action: manipulation;
}

    @keyframes slideInUp {
    from {
    opacity: 0;
    transform: translateY(100px);
}
    to {
    opacity: 1;
    transform: translateY(0);
}
}

    .envelope:active:not(.opened) {
    transform: translateY(-8px) scale(0.98);
}

    .envelope:hover:not(.opened) {
    transform: translateY(-15px) rotateX(5deg);
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
}

    .envelope.opened {
    pointer-events: none;
}

    .envelope-flap {
    position: absolute;
    width: 0;
    height: 0;
    top: 0;
    left: 0;
    transition: all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1);
    transform-origin: top center;
    transform-style: preserve-3d;
}

    .envelope-flap::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border-left: clamp(125px, 40vw, 200px) solid transparent;
    border-right: clamp(125px, 40vw, 200px) solid transparent;
    border-top: clamp(85px, 30vw, 140px) solid #FFD700;
}

    .envelope.opened .envelope-flap::before {
    border-top-color: transparent;
}

    .envelope.opened .envelope-flap {
    transform: rotateX(180deg);
}

    .envelope-content {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: clamp(1.2em, 5vw, 2em);
    opacity: 0;
    transition: opacity 0.3s ease 0.6s;
    pointer-events: none;
    padding: clamp(15px, 5vw, 30px);
}

    .envelope.opened .envelope-content {
    opacity: 1;
}

    .click-text {
    color: #333;
    font-size: clamp(1em, 4vw, 1.3em);
    font-weight: 600;
    animation: pulse 2s ease-in-out infinite;
    display: flex;
    flex-direction: column;
    gap: clamp(5px, 2vw, 15px);
    text-align: center;
}

    .envelope.opened .click-text {
    display: none;
}

    @keyframes pulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(0.95); }
}

    .instruction-text {
    color: white;
    font-size: clamp(1em, 3.5vw, 1.3em);
    margin-top: clamp(25px, 5vw, 50px);
    animation: fadeInUp 1s ease-out 0.3s backwards;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

    /* STAGE 2: ПОЗДРАВЛЕНИЕ */
    .stage-2 {
    display: none;
    opacity: 0;
    animation: fadeInScale 1s ease-out forwards;
    padding: clamp(20px, 5vw, 60px) 0;
}

    .stage-2.show {
    display: block;
    opacity: 1;
}

    @keyframes fadeInScale {
    from {
    opacity: 0;
    transform: scale(0.95);
}
    to {
    opacity: 1;
    transform: scale(1);
}
}

    .greeting-header {
    font-size: clamp(2.5em, 8vw, 4em);
    color: white;
    margin-bottom: clamp(15px, 5vw, 30px);
    animation: slideDown 1s cubic-bezier(0.34, 1.56, 0.64, 1);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    line-height: 1.2;
}

    @keyframes slideDown {
    from {
    opacity: 0;
    transform: translateY(-50px);
}
    to {
    opacity: 1;
    transform: translateY(0);
}
}

    .heart {
    display: inline-block;
    animation: heartbeat 1.2s ease-in-out infinite;
    margin: 0 clamp(3px, 2vw, 10px);
}

    @keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    25% { transform: scale(1.4); }
    50% { transform: scale(1); }
}

    .main-message {
    background: rgba(255, 255, 255, 0.97);
    padding: clamp(20px, 6vw, 50px);
    border-radius: clamp(15px, 4vw, 25px);
    margin: clamp(20px, 5vw, 40px) auto;
    max-width: 900px;
    box-shadow: 0 25px 70px rgba(0, 0, 0, 0.3);
    animation: slideUp 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s backwards;
    border: 3px solid #FFD700;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
}

    .main-message:active {
    transform: scale(0.98);
}

    .main-message::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #FF6B6B, #4ECDC4, #FFE66D, #F38181, #AA96DA);
    animation: shine 3s linear infinite;
}

    @keyframes shine {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

    @keyframes slideUp {
    from {
    opacity: 0;
    transform: translateY(40px);
}
    to {
    opacity: 1;
    transform: translateY(0);
}
}

    .main-message h2 {
    color: #667eea;
    font-size: clamp(1.5em, 5vw, 2.3em);
    margin-bottom: clamp(15px, 4vw, 25px);
}

    .main-message p {
    color: #333;
    font-size: clamp(1em, 3.5vw, 1.15em);
    line-height: 1.8;
}

    .interactive-text {
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
    color: #667eea;
    font-weight: 600;
}

    .interactive-text:active {
    transform: scale(0.95);
}

    .tooltip {
    position: absolute;
    background: #667eea;
    color: white;
    padding: clamp(6px, 2vw, 12px);
    border-radius: 8px;
    font-size: clamp(0.7em, 2vw, 0.85em);
    white-space: nowrap;
    bottom: 120%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.3s ease;
}

    .interactive-text:hover .tooltip {
    opacity: 1;
}

    /* ПОЖЕЛАНИЯ */
    .wishes-container {
    margin-top: clamp(30px, 8vw, 60px);
    animation: slideUp 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.6s backwards;
}

    .wishes-title {
    color: white;
    font-size: clamp(2em, 6vw, 3em);
    margin-bottom: clamp(25px, 8vw, 50px);
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3);
    animation: slideDown 1s cubic-bezier(0.34, 1.56, 0.64, 1) 0.8s backwards;
}

    .wishes-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(clamp(250px, 100%, 300px), 1fr));
    gap: clamp(15px, 5vw, 30px);
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 clamp(10px, 3vw, 20px);
}

    .wish-card {
    background: white;
    padding: clamp(20px, 5vw, 40px);
    border-radius: clamp(15px, 4vw, 20px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    opacity: 0;
    transform: translateY(50px);
    cursor: pointer;
    position: relative;
    overflow: hidden;
    touch-action: manipulation;
    -webkit-user-select: none;
    user-select: none;
}

    .wish-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent);
    transition: all 0.6s ease;
}

    .wish-card:hover::before {
    left: 100%;
}

    .wish-card:nth-child(1) { animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 0.9s forwards; }
    .wish-card:nth-child(2) { animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.1s forwards; }
    .wish-card:nth-child(3) { animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.3s forwards; }
    .wish-card:nth-child(4) { animation: slideUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 1.5s forwards; }

    .wish-card:hover {
    transform: translateY(-25px) scale(1.05);
    box-shadow: 0 25px 60px rgba(102, 126, 234, 0.4);
}

    .wish-card:active {
    transform: translateY(-12px) scale(1.02);
}

    @media (max-width: 768px) {
    .wish-card:hover {
    transform: translateY(-15px) scale(1.02);
}
}

    .wish-icon {
    font-size: clamp(2.5em, 8vw, 4em);
    margin-bottom: clamp(10px, 3vw, 20px);
    animation: bounce 2s ease-in-out infinite;
    transition: all 0.3s ease;
    display: inline-block;
}

    .wish-card:hover .wish-icon {
    transform: scale(1.2) rotate(10deg);
}

    .wish-card:active .wish-icon {
    transform: scale(1.1);
}

    .wish-card:nth-child(1) .wish-icon { animation-delay: 0s; }
    .wish-card:nth-child(2) .wish-icon { animation-delay: 0.3s; }
    .wish-card:nth-child(3) .wish-icon { animation-delay: 0.6s; }
    .wish-card:nth-child(4) .wish-icon { animation-delay: 0.9s; }

    @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
}

    .wish-title {
    font-size: clamp(1.2em, 4vw, 1.6em);
    color: #667eea;
    margin-bottom: clamp(8px, 2vw, 15px);
    font-weight: 700;
}

    .wish-text {
    color: #555;
    font-size: clamp(0.85em, 3.5vw, 1em);
    line-height: 1.8;
}

    /* КОНФЕТТИ И ЭФФЕКТЫ */
    .confetti {
    position: fixed;
    pointer-events: none;
    font-size: clamp(1.5em, 4vw, 2.5em);
}

    @keyframes fall {
    to {
    transform: translateY(100vh) rotateZ(720deg);
    opacity: 0;
}
}

    .click-effect {
    position: fixed;
    pointer-events: none;
    font-size: clamp(1.5em, 4vw, 2.5em);
    animation: clickPop 1s ease-out forwards;
}

    @keyframes clickPop {
    0% {
        opacity: 1;
        transform: scale(1) translateY(0);
}
    100% {
    opacity: 0;
    transform: scale(2) translateY(-100px);
}
}

    /* КНОПКИ */
    .button-group {
    display: flex;
    gap: clamp(10px, 3vw, 20px);
    justify-content: center;
    margin-top: clamp(30px, 8vw, 50px);
    margin-bottom: clamp(20px, 5vw, 40px);
    flex-wrap: wrap;
    animation: slideUp 1.6s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s backwards;
    padding: 0 clamp(10px, 3vw, 20px);
}

    .btn {
    padding: clamp(12px, 3vw, 20px) clamp(20px, 5vw, 40px);
    font-size: clamp(0.95em, 3.5vw, 1.1em);
    border: none;
    border-radius: 50px;
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    position: relative;
    overflow: hidden;
    touch-action: manipulation;
    -webkit-user-select: none;
    user-select: none;
    min-height: 45px;
    flex: 1;
    min-width: 150px;
}

    .btn::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
}

    .btn:active::before {
    width: 300px;
    height: 300px;
}

    .btn-primary {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
}

    .btn-primary:active {
    transform: scale(0.98);
}

    .btn-secondary {
    background: white;
    color: #667eea;
}

    .btn-secondary:active {
    transform: scale(0.98);
}

    @media (max-width: 480px) {
    .button-group {
    flex-direction: column;
}

    .btn {
    min-width: 100%;
    width: 100%;
    flex: none;
}
}

    @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

    /* Анимации для эффектов */
    @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}

    @keyframes sparkle {
    0%, 100% { transform: scale(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}
</style>
</head>
<body>
<!-- Летающие шарики -->
<div class="balloons-container" id="balloonsContainer">
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
    <div class="balloon"></div>
</div>

<div class="main-container">
    <!-- STAGE 1: КОНВЕРТ -->
    <div class="stage-1" id="stage1">
        <div class="envelope-wrapper">
            <div class="envelope" id="envelope" onclick="openEnvelope(event)">
                <div class="envelope-flap"></div>
                <div class="envelope-content">
                    <div class="click-text">
                        <span>👆 Открыть Подарок</span>
                        <span style="font-size: 0.7em; opacity: 0.7;">Нажми на конверт</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="instruction-text">✨ Помогите мне открыть этот подарок! ✨</div>
    </div>

    <!-- STAGE 2: ПОЗДРАВЛЕНИЕ -->
    <div class="stage-2" id="stage2">
        <h1 class="greeting-header">
            С Днём Рождения! <span class="heart">❤️</span>
        </h1>

        <div class="main-message" onclick="triggerMessageEffect()">
            <h2>🌸 Дорогая Мама! 🌸</h2>
            <p>
                Сегодня самый волшебный день, потому что это день рождения
                <span class="interactive-text">
                        самой прекрасной женщины
                        <span class="tooltip">💫 Это ТЫ! 💫</span>
                    </span>
                в моём мире - ТЕБЯ!<br><br>
                Спасибо за твою
                <span class="interactive-text">
                        безграничную любовь
                        <span class="tooltip">💖 Огромное спасибо!</span>
                    </span>
                , за каждый момент заботы, за твою улыбку, которая согревает наши сердца каждый день.<br><br>
                Ты - наша опора, наша радость, наше вдохновение и смысл нашей жизни!
            </p>
        </div>

        <div class="wishes-container">
            <h2 class="wishes-title">✨ Мои Пожелания ✨</h2>
            <div class="wishes-grid">
                <div class="wish-card" onclick="cardEffect(this, '💫')">
                    <div class="wish-icon">💫</div>
                    <div class="wish-title">Здоровье</div>
                    <div class="wish-text">Крепкого здоровья, энергии и жизненного тонуса на долгие, долгие годы!</div>
                </div>

                <div class="wish-card" onclick="cardEffect(this, '😊')">
                    <div class="wish-icon">😊</div>
                    <div class="wish-title">Счастье</div>
                    <div class="wish-text">Чтобы каждый день приносил тебе радость, улыбку и настоящее счастье!</div>
                </div>

                <div class="wish-card" onclick="cardEffect(this, '💖')">
                    <div class="wish-icon">💖</div>
                    <div class="wish-title">Любовь</div>
                    <div class="wish-text">Окружающая тебя любовь и признание всех, кто знает, какая ты замечательная!</div>
                </div>

                <div class="wish-card" onclick="cardEffect(this, '✨')">
                    <div class="wish-icon">✨</div>
                    <div class="wish-title">Мечты</div>
                    <div class="wish-text">Все твои самые заветные мечты сбываются и воплощаются в жизнь!</div>
                </div>
            </div>
        </div>

        <div class="button-group">
            <button class="btn btn-primary" onclick="createBigCelebration()">🎉 Большо�� Праздник!</button>
            <button class="btn btn-secondary" onclick="restart()">🔄 Начать заново</button>
        </div>
    </div>
</div>

<script>
    let envelopeOpened = false;

    function openEnvelope(e) {
    if (envelopeOpened) return;
    e.preventDefault();
    e.stopPropagation();
    envelopeOpened = true;

    const envelope = document.getElementById('envelope');
    const stage1 = document.getElementById('stage1');
    const stage2 = document.getElementById('stage2');

    envelope.classList.add('opened');
    createMiniCelebration();

    setTimeout(() => {
    stage1.classList.add('hidden');
    stage2.classList.add('show');
    createFullCelebration();
    setTimeout(() => {
    document.querySelector('.main-container').scrollTop = 0;
}, 100);
}, 800);
}

    function cardEffect(card, emoji) {
    for (let i = 0; i < 10; i++) {
    setTimeout(() => {
    const sparkle = document.createElement('div');
    sparkle.textContent = emoji;
    sparkle.style.position = 'fixed';
    sparkle.style.left = Math.random() * window.innerWidth + 'px';
    sparkle.style.top = Math.random() * window.innerHeight + 'px';
    sparkle.style.fontSize = clamp(1.2, 3, 2) + 'em';
    sparkle.style.animation = 'sparkle 0.8s ease-out forwards';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.zIndex = '999';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 800);
}, i * 50);
}
}

    function triggerMessageEffect() {
    const emojis = ['💕', '✨', '🌟', '💫', '⭐'];
    for (let i = 0; i < 15; i++) {
    const effect = document.createElement('div');
    effect.className = 'click-effect';
    effect.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    effect.style.left = Math.random() * window.innerWidth + 'px';
    effect.style.top = Math.random() * window.innerHeight + 'px';
    effect.style.zIndex = '999';
    document.body.appendChild(effect);
    setTimeout(() => effect.remove(), 1000);
}
}

    function createMiniCelebration() {
    for (let i = 0; i < 50; i++) {
    setTimeout(() => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * (window.innerHeight / 2) + 'px';
    confetti.textContent = ['🎉', '🎊', '🎈', '💝', '✨'][Math.floor(Math.random() * 5)];
    confetti.style.animation = `fall ${1.5 + Math.random() * 2}s linear forwards`;
    confetti.style.zIndex = '999';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3500);
}, i * 30);
}
}

    function createFullCelebration() {
    for (let i = 0; i < 100; i++) {
    setTimeout(() => {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = '-20px';
    confetti.textContent = ['🎉', '🎊', '🎈', '💝', '✨', '⭐', '🌟', '💫', '🎂', '🌸'][Math.floor(Math.random() * 10)];
    confetti.style.animation = `fall ${3 + Math.random() * 3}s linear forwards`;
    confetti.style.zIndex = '999';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
}, i * 20);
}
}

    function createBigCelebration() {
    for (let i = 0; i < 200; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.top = Math.random() * window.innerHeight + 'px';
    confetti.textContent = ['🎉', '🎊', '🎈', '💝', '✨', '⭐', '🌟', '💫', '🎂', '🌸', '💖', '👑'][Math.floor(Math.random() * 12)];
    confetti.style.fontSize = (0.8 + Math.random() * 1.5) + 'em';
    confetti.style.animation = `fall ${2 + Math.random() * 4}s linear forwards`;
    confetti.style.zIndex = '999';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000);
}

    const balloons = document.querySelectorAll('.balloon');
    balloons.forEach(balloon => {
    if (Math.random() > 0.4) {
    balloon.classList.add('pop-animation');
}
});
}

    function restart() {
    location.reload();
}

    // Клик по шарикам
    document.addEventListener('click', function(e) {
    if (e.target.classList.contains('balloon')) {
    e.target.classList.add('pop-animation');
    const x = e.target.getBoundingClientRect().left;
    const y = e.target.getBoundingClientRect().top;

    for (let i = 0; i < 5; i++) {
    const confetti = document.createElement('div');
    confetti.textContent = '✨';
    confetti.style.position = 'fixed';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.fontSize = '1.5em';
    confetti.style.animation = 'fall 2s ease-out forwards';
    confetti.style.zIndex = '999';
    confetti.style.pointerEvents = 'none';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
}
}
});

    // Добавляем недостающие анимации
    const style = document.createElement('style');
    style.textContent = `
    @keyframes fall {
    to {
    transform: translateY(100vh) rotateZ(720deg);
    opacity: 0;
}
}
    @keyframes twinkle {
    0%, 100% { opacity: 0.2; }
    50% { opacity: 1; }
}
    @keyframes sparkle {
    0%, 100% { transform: scale(0); opacity: 0; }
    50% { opacity: 1; }
    100% { transform: scale(1); opacity: 0; }
}
    `;
    document.head.appendChild(style);

    // Функция clamp для нормального выполнения
    function clamp(min, preferred, max) {
    return Math.max(min, Math.min(max, preferred));
}
</script>
</body>
</html>
