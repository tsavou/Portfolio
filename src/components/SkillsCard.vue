<template>
    <div class="skill-card">
    
    <slot></slot>
    
    </div>
    
    </template>
    
    <style scoped lang="scss">
    
    .skill-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        background-color: $background-btn;
        color: $secondary-color;
        border-radius: 1rem;
        font-size: 1.5rem;
        font-weight: 700;
        gap: 1.5rem;
        width: 15rem;

        @media screen and (max-width: $sm-bp) {
            font-size: 1.3rem;
            padding:  0.5rem 1rem;
            width: 11rem;

            gap: 0rem;
        }

        &:hover {
        transform: scale(1.02);
        box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
    }
    }
    
    </style>