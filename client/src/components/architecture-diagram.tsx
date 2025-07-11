import React from 'react';

export const ArchitectureDiagram = () => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <svg viewBox="0 0 800 400" className="w-full h-auto">
        {/* Background */}
        <rect width="800" height="400" fill="#f8f5ff" rx="20"/>
        
        {/* Title and Community Section */}
        <g>
          {/* CancerDAO Logo and Community */}
          <rect x="30" y="30" width="140" height="80" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <circle cx="70" cy="60" r="8" fill="#c9a4ff"/>
          <circle cx="85" cy="55" r="6" fill="#fad000"/>
          <circle cx="85" cy="65" r="6" fill="#fc593d"/>
          <circle cx="100" cy="60" r="8" fill="#c9a4ff"/>
          <text x="60" y="85" fontSize="12" fontWeight="bold" fill="black">CANCER</text>
          <text x="110" y="85" fontSize="12" fontWeight="bold" fill="black">DAO</text>
          <text x="65" y="100" fontSize="10" fill="black">Community</text>
        </g>

        {/* Issue Arrow */}
        <g>
          <line x1="170" y1="70" x2="220" y2="70" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="220,70 210,65 210,75" fill="#c9a4ff"/>
          <text x="175" y="60" fontSize="10" fill="black">Issue</text>
        </g>

        {/* CancerDAO Token */}
        <g>
          <rect x="240" y="30" width="140" height="80" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <circle cx="285" cy="60" r="20" fill="#c9a4ff"/>
          <circle cx="285" cy="60" r="12" fill="white"/>
          <text x="285" y="65" fontSize="8" fill="#c9a4ff" textAnchor="middle">✶</text>
          <text x="315" y="65" fontSize="12" fontWeight="bold" fill="black">CancerDAO</text>
          <text x="325" y="80" fontSize="12" fontWeight="bold" fill="black">Token</text>
        </g>

        {/* Build Arrow */}
        <g>
          <line x1="80" y1="110" x2="80" y2="160" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="80,160 75,150 85,150" fill="#c9a4ff"/>
          <text x="40" y="140" fontSize="10" fill="black">Build</text>
        </g>

        {/* Support Arrow */}
        <g>
          <line x1="310" y1="110" x2="310" y2="160" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="310,160 305,150 315,150" fill="#c9a4ff"/>
          <text x="285" y="140" fontSize="10" fill="black">Support</text>
        </g>

        {/* AI-powered Cancer Support Platform */}
        <g>
          <rect x="30" y="180" width="140" height="100" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <circle cx="100" cy="210" r="15" fill="#c9a4ff"/>
          <text x="100" y="215" fontSize="10" fill="white" textAnchor="middle">AI</text>
          <text x="55" y="240" fontSize="10" fontWeight="bold" fill="black">AI-powered</text>
          <text x="55" y="255" fontSize="10" fontWeight="bold" fill="black">Cancer Support</text>
          <text x="75" y="270" fontSize="10" fontWeight="bold" fill="black">Platform</text>
        </g>

        {/* Data Arrow */}
        <g>
          <line x1="170" y1="230" x2="220" y2="230" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="220,230 210,225 210,235" fill="#c9a4ff"/>
          <text x="180" y="220" fontSize="10" fill="black">Data</text>
        </g>

        {/* Blockchain-based Medical ID */}
        <g>
          <rect x="240" y="180" width="140" height="100" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <g transform="translate(285, 210)">
            <rect x="-10" y="-10" width="8" height="8" fill="#c9a4ff" rx="2"/>
            <rect x="2" y="-10" width="8" height="8" fill="#c9a4ff" rx="2"/>
            <rect x="-10" y="2" width="8" height="8" fill="#c9a4ff" rx="2"/>
            <rect x="2" y="2" width="8" height="8" fill="#c9a4ff" rx="2"/>
          </g>
          <text x="265" y="240" fontSize="10" fontWeight="bold" fill="black">Blockchain-</text>
          <text x="285" y="255" fontSize="10" fontWeight="bold" fill="black">based</text>
          <text x="275" y="270" fontSize="10" fontWeight="bold" fill="black">Medical ID</text>
        </g>

        {/* Contribute Arrow */}
        <g>
          <line x1="380" y1="230" x2="430" y2="230" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="430,230 420,225 420,235" fill="#c9a4ff"/>
          <text x="380" y="220" fontSize="10" fill="black">Contribute</text>
        </g>

        {/* Decentralized Cancer Database */}
        <g>
          <rect x="450" y="180" width="140" height="100" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <g transform="translate(520, 210)">
            <circle cx="0" cy="0" r="12" fill="#c9a4ff"/>
            <circle cx="-8" cy="-8" r="4" fill="white"/>
            <circle cx="8" cy="-8" r="4" fill="white"/>
            <circle cx="-8" cy="8" r="4" fill="white"/>
            <circle cx="8" cy="8" r="4" fill="white"/>
          </g>
          <text x="475" y="240" fontSize="10" fontWeight="bold" fill="black">Decentralized</text>
          <text x="495" y="255" fontSize="10" fontWeight="bold" fill="black">Cancer</text>
          <text x="490" y="270" fontSize="10" fontWeight="bold" fill="black">Database</text>
        </g>

        {/* Develop Arrow */}
        <g>
          <line x1="590" y1="230" x2="640" y2="230" stroke="#c9a4ff" strokeWidth="2" strokeDasharray="5,5"/>
          <polygon points="640,230 630,225 630,235" fill="#c9a4ff"/>
          <text x="595" y="220" fontSize="10" fill="black">Develop</text>
        </g>

        {/* AI-driven Therapies and Screening */}
        <g>
          <rect x="660" y="180" width="140" height="100" rx="15" fill="white" stroke="#e7d1ff" strokeWidth="2"/>
          <g transform="translate(730, 210)">
            <circle cx="0" cy="0" r="15" fill="#c9a4ff"/>
            <circle cx="-5" cy="-5" r="3" fill="white"/>
            <circle cx="5" cy="-5" r="3" fill="white"/>
            <circle cx="0" cy="5" r="3" fill="white"/>
          </g>
          <text x="685" y="240" fontSize="10" fontWeight="bold" fill="black">AI-driven</text>
          <text x="680" y="255" fontSize="10" fontWeight="bold" fill="black">Therapies</text>
          <text x="680" y="270" fontSize="10" fontWeight="bold" fill="black">and Screening</text>
        </g>

        {/* Connecting lines for flow */}
        <g>
          {/* Top flow line */}
          <path d="M 400 70 Q 500 70 600 70 Q 700 70 730 120" 
                stroke="#c9a4ff" strokeWidth="2" fill="none" strokeDasharray="3,3"/>
          
          {/* Bottom connecting line */}
          <path d="M 100 280 Q 200 320 400 320 Q 600 320 730 280" 
                stroke="#c9a4ff" strokeWidth="1" fill="none" strokeDasharray="3,3"/>
        </g>

        {/* Decorative elements */}
        <g opacity="0.3">
          <circle cx="700" cy="50" r="3" fill="#fad000"/>
          <circle cx="720" cy="40" r="2" fill="#fc593d"/>
          <circle cx="740" cy="60" r="3" fill="#c9a4ff"/>
          <circle cx="50" cy="350" r="2" fill="#fad000"/>
          <circle cx="70" cy="360" r="3" fill="#fc593d"/>
          <circle cx="90" cy="340" r="2" fill="#c9a4ff"/>
        </g>
      </svg>
    </div>
  );
};