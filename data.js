// ============================================
// DRILL CALCULATION DATA
// Based on Starrett Tap Drill Size Chart
// and standard machinist reference tables
// ============================================

// --- NUMBER DRILLS (#1 - #80) ---
const NUMBER_DRILLS = {
    1: 0.2280, 2: 0.2210, 3: 0.2130, 4: 0.2090, 5: 0.2055,
    6: 0.2040, 7: 0.2010, 8: 0.1990, 9: 0.1960, 10: 0.1935,
    11: 0.1910, 12: 0.1890, 13: 0.1850, 14: 0.1820, 15: 0.1800,
    16: 0.1770, 17: 0.1730, 18: 0.1695, 19: 0.1660, 20: 0.1610,
    21: 0.1590, 22: 0.1570, 23: 0.1540, 24: 0.1520, 25: 0.1495,
    26: 0.1470, 27: 0.1440, 28: 0.1405, 29: 0.1360, 30: 0.1285,
    31: 0.1200, 32: 0.1160, 33: 0.1130, 34: 0.1110, 35: 0.1100,
    36: 0.1065, 37: 0.1040, 38: 0.1015, 39: 0.0995, 40: 0.0980,
    41: 0.0960, 42: 0.0935, 43: 0.0890, 44: 0.0860, 45: 0.0820,
    46: 0.0810, 47: 0.0785, 48: 0.0760, 49: 0.0730, 50: 0.0700,
    51: 0.0670, 52: 0.0635, 53: 0.0595, 54: 0.0550, 55: 0.0520,
    56: 0.0465, 57: 0.0430, 58: 0.0420, 59: 0.0410, 60: 0.0400,
    61: 0.0390, 62: 0.0380, 63: 0.0370, 64: 0.0360, 65: 0.0350,
    66: 0.0330, 67: 0.0320, 68: 0.0310, 69: 0.0292, 70: 0.0280,
    71: 0.0260, 72: 0.0250, 73: 0.0240, 74: 0.0225, 75: 0.0210,
    76: 0.0200, 77: 0.0180, 78: 0.0160, 79: 0.0145, 80: 0.0135
};

// --- LETTER DRILLS (A - Z) ---
const LETTER_DRILLS = {
    A: 0.2340, B: 0.2380, C: 0.2420, D: 0.2460, E: 0.2500,
    F: 0.2570, G: 0.2610, H: 0.2660, I: 0.2720, J: 0.2770,
    K: 0.2810, L: 0.2900, M: 0.2950, N: 0.3020, O: 0.3160,
    P: 0.3230, Q: 0.3320, R: 0.3390, S: 0.3480, T: 0.3580,
    U: 0.3680, V: 0.3770, W: 0.3860, X: 0.3970, Y: 0.4040,
    Z: 0.4130
};

// --- FRACTIONAL DRILLS (1/64 through 1 inch) ---
const FRACTION_DRILLS = [
    { frac: "1/64", decimal: 0.0156 },
    { frac: "1/32", decimal: 0.0313 },
    { frac: "3/64", decimal: 0.0469 },
    { frac: "1/16", decimal: 0.0625 },
    { frac: "5/64", decimal: 0.0781 },
    { frac: "3/32", decimal: 0.0938 },
    { frac: "7/64", decimal: 0.1094 },
    { frac: "1/8", decimal: 0.1250 },
    { frac: "9/64", decimal: 0.1406 },
    { frac: "5/32", decimal: 0.1563 },
    { frac: "11/64", decimal: 0.1719 },
    { frac: "3/16", decimal: 0.1875 },
    { frac: "13/64", decimal: 0.2031 },
    { frac: "7/32", decimal: 0.2188 },
    { frac: "15/64", decimal: 0.2344 },
    { frac: "1/4", decimal: 0.2500 },
    { frac: "17/64", decimal: 0.2656 },
    { frac: "9/32", decimal: 0.2813 },
    { frac: "19/64", decimal: 0.2969 },
    { frac: "5/16", decimal: 0.3125 },
    { frac: "21/64", decimal: 0.3281 },
    { frac: "11/32", decimal: 0.3438 },
    { frac: "23/64", decimal: 0.3594 },
    { frac: "3/8", decimal: 0.3750 },
    { frac: "25/64", decimal: 0.3906 },
    { frac: "13/32", decimal: 0.4063 },
    { frac: "27/64", decimal: 0.4219 },
    { frac: "7/16", decimal: 0.4375 },
    { frac: "29/64", decimal: 0.4531 },
    { frac: "15/32", decimal: 0.4688 },
    { frac: "31/64", decimal: 0.4844 },
    { frac: "1/2", decimal: 0.5000 },
    { frac: "33/64", decimal: 0.5156 },
    { frac: "17/32", decimal: 0.5313 },
    { frac: "35/64", decimal: 0.5469 },
    { frac: "9/16", decimal: 0.5625 },
    { frac: "37/64", decimal: 0.5781 },
    { frac: "19/32", decimal: 0.5938 },
    { frac: "39/64", decimal: 0.6094 },
    { frac: "5/8", decimal: 0.6250 },
    { frac: "41/64", decimal: 0.6406 },
    { frac: "21/32", decimal: 0.6563 },
    { frac: "43/64", decimal: 0.6719 },
    { frac: "11/16", decimal: 0.6875 },
    { frac: "45/64", decimal: 0.7031 },
    { frac: "23/32", decimal: 0.7188 },
    { frac: "47/64", decimal: 0.7344 },
    { frac: "3/4", decimal: 0.7500 },
    { frac: "49/64", decimal: 0.7656 },
    { frac: "25/32", decimal: 0.7813 },
    { frac: "51/64", decimal: 0.7969 },
    { frac: "13/16", decimal: 0.8125 },
    { frac: "53/64", decimal: 0.8281 },
    { frac: "27/32", decimal: 0.8438 },
    { frac: "55/64", decimal: 0.8594 },
    { frac: "7/8", decimal: 0.8750 },
    { frac: "57/64", decimal: 0.8906 },
    { frac: "29/32", decimal: 0.9063 },
    { frac: "59/64", decimal: 0.9219 },
    { frac: "15/16", decimal: 0.9375 },
    { frac: "61/64", decimal: 0.9531 },
    { frac: "31/32", decimal: 0.9688 },
    { frac: "63/64", decimal: 0.9844 },
    { frac: "1", decimal: 1.0000 }
];

// --- UNC (Coarse) TAP DRILL SIZES ---
// Format: { size, tpi, tapDrill, tapDrillDecimal, percentThread }
const UNC_TAPS = [
    { size: "#1-64", tpi: 64, tapDrill: "#53", tapDrillDecimal: 0.0595, percentThread: 75 },
    { size: "#2-56", tpi: 56, tapDrill: "#50", tapDrillDecimal: 0.0700, percentThread: 75 },
    { size: "#3-48", tpi: 48, tapDrill: "#47", tapDrillDecimal: 0.0785, percentThread: 75 },
    { size: "#4-40", tpi: 40, tapDrill: "#43", tapDrillDecimal: 0.0890, percentThread: 75 },
    { size: "#5-40", tpi: 40, tapDrill: "#38", tapDrillDecimal: 0.1015, percentThread: 75 },
    { size: "#6-32", tpi: 32, tapDrill: "#36", tapDrillDecimal: 0.1065, percentThread: 75 },
    { size: "#8-32", tpi: 32, tapDrill: "#29", tapDrillDecimal: 0.1360, percentThread: 75 },
    { size: "#10-24", tpi: 24, tapDrill: "#25", tapDrillDecimal: 0.1495, percentThread: 75 },
    { size: "#12-24", tpi: 24, tapDrill: "#16", tapDrillDecimal: 0.1770, percentThread: 75 },
    { size: "1/4-20", tpi: 20, tapDrill: "#7", tapDrillDecimal: 0.2010, percentThread: 75 },
    { size: "5/16-18", tpi: 18, tapDrill: "F", tapDrillDecimal: 0.2570, percentThread: 75 },
    { size: "3/8-16", tpi: 16, tapDrill: "5/16\"", tapDrillDecimal: 0.3125, percentThread: 75 },
    { size: "7/16-14", tpi: 14, tapDrill: "U", tapDrillDecimal: 0.3680, percentThread: 75 },
    { size: "1/2-13", tpi: 13, tapDrill: "27/64\"", tapDrillDecimal: 0.4219, percentThread: 75 },
    { size: "9/16-12", tpi: 12, tapDrill: "31/64\"", tapDrillDecimal: 0.4844, percentThread: 75 },
    { size: "5/8-11", tpi: 11, tapDrill: "17/32\"", tapDrillDecimal: 0.5313, percentThread: 75 },
    { size: "3/4-10", tpi: 10, tapDrill: "21/32\"", tapDrillDecimal: 0.6563, percentThread: 75 },
    { size: "7/8-9", tpi: 9, tapDrill: "49/64\"", tapDrillDecimal: 0.7656, percentThread: 75 },
    { size: "1-8", tpi: 8, tapDrill: "7/8\"", tapDrillDecimal: 0.8750, percentThread: 75 },
    { size: "1-1/8-7", tpi: 7, tapDrill: "63/64\"", tapDrillDecimal: 0.9844, percentThread: 75 },
    { size: "1-1/4-7", tpi: 7, tapDrill: "1-7/64\"", tapDrillDecimal: 1.1094, percentThread: 75 },
    { size: "1-3/8-6", tpi: 6, tapDrill: "1-7/32\"", tapDrillDecimal: 1.2188, percentThread: 75 },
    { size: "1-1/2-6", tpi: 6, tapDrill: "1-11/32\"", tapDrillDecimal: 1.3438, percentThread: 75 }
];

// --- UNF (Fine) TAP DRILL SIZES ---
const UNF_TAPS = [
    { size: "#0-80", tpi: 80, tapDrill: "3/64\"", tapDrillDecimal: 0.0469, percentThread: 75 },
    { size: "#1-72", tpi: 72, tapDrill: "#53", tapDrillDecimal: 0.0595, percentThread: 75 },
    { size: "#2-64", tpi: 64, tapDrill: "#50", tapDrillDecimal: 0.0700, percentThread: 75 },
    { size: "#3-56", tpi: 56, tapDrill: "#45", tapDrillDecimal: 0.0820, percentThread: 75 },
    { size: "#4-48", tpi: 48, tapDrill: "#42", tapDrillDecimal: 0.0935, percentThread: 75 },
    { size: "#5-44", tpi: 44, tapDrill: "#37", tapDrillDecimal: 0.1040, percentThread: 75 },
    { size: "#6-40", tpi: 40, tapDrill: "#33", tapDrillDecimal: 0.1130, percentThread: 75 },
    { size: "#8-36", tpi: 36, tapDrill: "#29", tapDrillDecimal: 0.1360, percentThread: 75 },
    { size: "#10-32", tpi: 32, tapDrill: "#21", tapDrillDecimal: 0.1590, percentThread: 75 },
    { size: "#12-28", tpi: 28, tapDrill: "#14", tapDrillDecimal: 0.1820, percentThread: 75 },
    { size: "1/4-28", tpi: 28, tapDrill: "#3", tapDrillDecimal: 0.2130, percentThread: 75 },
    { size: "5/16-24", tpi: 24, tapDrill: "I", tapDrillDecimal: 0.2720, percentThread: 75 },
    { size: "3/8-24", tpi: 24, tapDrill: "Q", tapDrillDecimal: 0.3320, percentThread: 75 },
    { size: "7/16-20", tpi: 20, tapDrill: "25/64\"", tapDrillDecimal: 0.3906, percentThread: 75 },
    { size: "1/2-20", tpi: 20, tapDrill: "29/64\"", tapDrillDecimal: 0.4531, percentThread: 75 },
    { size: "9/16-18", tpi: 18, tapDrill: "33/64\"", tapDrillDecimal: 0.5156, percentThread: 75 },
    { size: "5/8-18", tpi: 18, tapDrill: "37/64\"", tapDrillDecimal: 0.5781, percentThread: 75 },
    { size: "3/4-16", tpi: 16, tapDrill: "11/16\"", tapDrillDecimal: 0.6875, percentThread: 75 },
    { size: "7/8-14", tpi: 14, tapDrill: "13/16\"", tapDrillDecimal: 0.8125, percentThread: 75 },
    { size: "1-12", tpi: 12, tapDrill: "15/16\"", tapDrillDecimal: 0.9375, percentThread: 75 },
    { size: "1-1/8-12", tpi: 12, tapDrill: "1-3/64\"", tapDrillDecimal: 1.0469, percentThread: 75 },
    { size: "1-1/4-12", tpi: 12, tapDrill: "1-11/64\"", tapDrillDecimal: 1.1719, percentThread: 75 },
    { size: "1-3/8-12", tpi: 12, tapDrill: "1-19/64\"", tapDrillDecimal: 1.2969, percentThread: 75 },
    { size: "1-1/2-12", tpi: 12, tapDrill: "1-27/64\"", tapDrillDecimal: 1.4219, percentThread: 75 }
];

// --- METRIC TAP DRILL SIZES ---
const METRIC_TAPS = [
    { size: "M1×0.25", tapDrill: "0.75mm", tapDrillDecimal: 0.0295, percentThread: 75 },
    { size: "M1.6×0.35", tapDrill: "1.25mm", tapDrillDecimal: 0.0492, percentThread: 75 },
    { size: "M2×0.4", tapDrill: "1.6mm", tapDrillDecimal: 0.0630, percentThread: 75 },
    { size: "M2.5×0.45", tapDrill: "2.05mm", tapDrillDecimal: 0.0807, percentThread: 75 },
    { size: "M3×0.5", tapDrill: "2.5mm", tapDrillDecimal: 0.0984, percentThread: 75 },
    { size: "M4×0.7", tapDrill: "3.3mm", tapDrillDecimal: 0.1299, percentThread: 75 },
    { size: "M5×0.8", tapDrill: "4.2mm", tapDrillDecimal: 0.1654, percentThread: 75 },
    { size: "M6×1", tapDrill: "5.0mm", tapDrillDecimal: 0.1969, percentThread: 75 },
    { size: "M8×1.25", tapDrill: "6.8mm", tapDrillDecimal: 0.2677, percentThread: 75 },
    { size: "M10×1.5", tapDrill: "8.5mm", tapDrillDecimal: 0.3346, percentThread: 75 },
    { size: "M12×1.75", tapDrill: "10.2mm", tapDrillDecimal: 0.4016, percentThread: 75 },
    { size: "M14×2", tapDrill: "12.0mm", tapDrillDecimal: 0.4724, percentThread: 75 },
    { size: "M16×2", tapDrill: "14.0mm", tapDrillDecimal: 0.5512, percentThread: 75 },
    { size: "M18×2.5", tapDrill: "15.5mm", tapDrillDecimal: 0.6102, percentThread: 75 },
    { size: "M20×2.5", tapDrill: "17.5mm", tapDrillDecimal: 0.6890, percentThread: 75 },
    { size: "M22×2.5", tapDrill: "19.5mm", tapDrillDecimal: 0.7677, percentThread: 75 },
    { size: "M24×3", tapDrill: "21.0mm", tapDrillDecimal: 0.8268, percentThread: 75 },
    { size: "M30×3.5", tapDrill: "26.5mm", tapDrillDecimal: 1.0433, percentThread: 75 },
    { size: "M36×4", tapDrill: "32.0mm", tapDrillDecimal: 1.2598, percentThread: 75 }
];

// --- PIPE THREAD SIZES ---
const NPT_SIZES = [
    { size: "1/16", tpi: 27, od: 0.3125, tapDrill: "C (0.242\")", tapDrillDecimal: 0.2420 },
    { size: "1/8", tpi: 27, od: 0.405, tapDrill: "R (0.339\")", tapDrillDecimal: 0.3390 },
    { size: "1/4", tpi: 18, od: 0.540, tapDrill: "7/16\"", tapDrillDecimal: 0.4375 },
    { size: "3/8", tpi: 18, od: 0.675, tapDrill: "37/64\"", tapDrillDecimal: 0.5781 },
    { size: "1/2", tpi: 14, od: 0.840, tapDrill: "23/32\"", tapDrillDecimal: 0.7188 },
    { size: "3/4", tpi: 14, od: 1.050, tapDrill: "59/64\"", tapDrillDecimal: 0.9219 },
    { size: "1", tpi: 11.5, od: 1.315, tapDrill: "1-5/32\"", tapDrillDecimal: 1.1563 },
    { size: "1-1/4", tpi: 11.5, od: 1.660, tapDrill: "1-1/2\"", tapDrillDecimal: 1.5000 },
    { size: "1-1/2", tpi: 11.5, od: 1.900, tapDrill: "1-23/32\"", tapDrillDecimal: 1.7188 },
    { size: "2", tpi: 11.5, od: 2.375, tapDrill: "2-3/16\"", tapDrillDecimal: 2.1875 }
];

const NPS_SIZES = [
    { size: "1/16", tpi: 27, od: 0.3125, tapDrill: "D (0.246\")", tapDrillDecimal: 0.2460 },
    { size: "1/8", tpi: 27, od: 0.405, tapDrill: "S (0.348\")", tapDrillDecimal: 0.3480 },
    { size: "1/4", tpi: 18, od: 0.540, tapDrill: "29/64\"", tapDrillDecimal: 0.4531 },
    { size: "3/8", tpi: 18, od: 0.675, tapDrill: "19/32\"", tapDrillDecimal: 0.5938 },
    { size: "1/2", tpi: 14, od: 0.840, tapDrill: "47/64\"", tapDrillDecimal: 0.7344 },
    { size: "3/4", tpi: 14, od: 1.050, tapDrill: "61/64\"", tapDrillDecimal: 0.9531 },
    { size: "1", tpi: 11.5, od: 1.315, tapDrill: "1-3/16\"", tapDrillDecimal: 1.1875 },
    { size: "1-1/4", tpi: 11.5, od: 1.660, tapDrill: "1-33/64\"", tapDrillDecimal: 1.5156 },
    { size: "1-1/2", tpi: 11.5, od: 1.900, tapDrill: "1-3/4\"", tapDrillDecimal: 1.7500 },
    { size: "2", tpi: 11.5, od: 2.375, tapDrill: "2-7/32\"", tapDrillDecimal: 2.2188 }
];
