<template>
    <h1 class="typing">
        Typing animation by Lea Verou.Typing animation by Lea Verou.
    </h1>
</template>
<style scoped>
@keyframes typing {
    from {
        width: 0;
    }
}
@keyframes blink-caret {
    50% {
        border-color: transparent;
    }
}
.typing {
    font: bold 100% Consolas, Monaco, monospace;
    border-right: 0.1em solid;
    width: 16.5em; /* fallback */
    width: 60ch; /* # of chars */
    white-space: nowrap;
    overflow: hidden;
    animation: typing 5s steps(60, end) infinite,
        blink-caret 0.5s step-end infinite alternate;
}
</style>
