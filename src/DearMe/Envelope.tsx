import React from 'react';

// Definujeme typ pro props, včetně volitelné šířky a výšky
interface IEnvelopeProps {
    text: string;
    width?: number;  // Volitelná šířka obálky
    height?: number; // Volitelná výška obálky
}

const Envelope: React.FC<IEnvelopeProps> = ({ text, width = 100, height = 80 }) => (
    <svg
        width={width}
        
        height={height}
        viewBox="0 0 100 80"
        xmlns="http://www.w3.org/2000/svg"
    >
        {/* Základní tvar obálky */}
        <rect
            x="5"
            y="20"
            width="90"
            height="50"
            rx="10" // Větší zaoblení rohů
            ry="10"
            fill="#f0e68c " // Světle krémové pozadí
            stroke="#808080   " // Tmavě šedá čára
            strokeWidth="2"
        />
        {/* Horní přehyb obálky */}
        <path
            d="M10 35 L50 55 L90 35"
            fill="#f0e68c " // Stejné pozadí jako obálka
            stroke="#808080   " // Tmavě šedá čára
            strokeWidth="2"
        />
        {/* Dynamický text uvnitř obálky */}
        <text
            x="50%"
            y="40%" // Posunutí textu dolů pro lepší umístění
            dominantBaseline="middle"
            textAnchor="middle"
            fontSize="14" // Zvětšení velikosti textu
            fill="black " // Tmavě modrá barva textu
            fontWeight="bold" // Tučný text pro lepší čitelnost
        >
            {text}
        </text>
    </svg>
);

export default Envelope;
