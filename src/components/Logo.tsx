<<<<<<< Updated upstream
=======


>>>>>>> Stashed changes
export const Logo = ({ className = "w-8 h-8", dark = false }: { className?: string; dark?: boolean }) => {
    // The logo is a grid-based strict geometric design.
    // 'i': Dot (top-left), Bar (bottom-left)
    // 'G': Top-bar, Right-bar, Bottom-bar, Inner-hook
    const color = dark ? "white" : "currentColor";

    return (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            {/* i - dot */}
            <rect x="4" y="4" width="5" height="5" fill={color} />
            {/* i - body */}
            <rect x="4" y="11" width="5" height="9" fill={color} />

            {/* G - top */}
            <rect x="11" y="4" width="9" height="5" fill={color} />
            {/* G - right vertical */}
            <rect x="15" y="11" width="5" height="4" fill={color} />
            {/* G - bottom */}
            <rect x="11" y="15" width="9" height="5" fill={color} />
            {/* G - middle hook connection - correcting to match the image precisely */}
            {/* Looking at the image: 
                i dot: top left
                i stem: bottom left
                G pattern: Top bar (long), stem (right side?), bottom bar (long), hook?
                Let's trace the "block" nature more carefully.
                It looks like a 2x2 grid for 'i' and a C/G shape.
                Let's simplify to match the visual weight.
             */}
            <path d="M13 11V18H18V13H15" stroke={color} strokeWidth="0" fill={color} />
            {/* Redoing purely based on visual check of the blocky G 
                The provided image has:
                - Left column: Square dot (top), Vertical Rect (bottom)
                - Right block: Looks like a 'C' or 'G' made of blocks.
                Let's stick to the shapes I see.
             */}
            <rect x="11" y="4" width="9" height="5" fill={color} /> {/* Top bar of G */}
            <rect x="15" y="9" width="5" height="6" fill={color} /> {/* Side connector of G? No, typically G has a gap */}

            {/* Let's try to replicate the negative space G */}
            <path d="M12 4H20V9H15V15H20V20H12V4Z" fill={color} fillRule="evenodd" clipRule="evenodd" />
            {/* Wait, the SVG path above is a C shape. A G usually has an inward stroke. */}
            <rect x="15" y="13" width="5" height="3" fill={color} />
        </svg>
    );
};

// Re-implementing based on strict visual of the provided 'iG' logo in the prompt
// It looks like:
// [ ] [   ]
// [ ] [ ] [ ]
// [ ] [   ]
// Actually, let's use a cleaner path construction.
const IntiGradeLogo = ({ className = "w-auto h-8" }: { className?: string }) => {
    return (
        <svg viewBox="0 0 100 100" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            {/* i */}
            <rect x="15" y="15" width="20" height="20" />
            <rect x="15" y="45" width="20" height="40" />

            {/* G - Constructed to look blocky and modern */}
            <path d="M45 15H85V35H65V45H85V85H45V15ZM65 55H85V65H65V55Z" fillRule="evenodd" />
        </svg>
    );
};

export default IntiGradeLogo;
