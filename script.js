// =========================================================================
// 1. COMPLETE SCIENTIFIC DATASET (All 118 Elements)
// =========================================================================
const elements = [
    {n: 1, s: "H", name: "Hydrogen", w: "1.008", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "1s¹", state: "Gas", disc: "H. Cavendish"},
    {n: 2, s: "He", name: "Helium", w: "4.0026", c: "noble-gas", catName: "NOBLE GAS", config: "1s²", state: "Gas", disc: "Janssen & Lockyer"},
    {n: 3, s: "Li", name: "Lithium", w: "6.94", c: "alkali-metal", catName: "ALKALI METAL", config: "[He] 2s¹", state: "Solid", disc: "J.A. Arfwedson"},
    {n: 4, s: "Be", name: "Beryllium", w: "9.0122", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[He] 2s²", state: "Solid", disc: "L.N. Vauquelin"},
    {n: 5, s: "B", name: "Boron", w: "10.81", c: "metalloid", catName: "METALLOID", config: "[He] 2s² 2p¹", state: "Solid", disc: "Gay-Lussac & Thénard"},
    {n: 6, s: "C", name: "Carbon", w: "12.011", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[He] 2s² 2p²", state: "Solid", disc: "Ancient Egypt"},
    {n: 7, s: "N", name: "Nitrogen", w: "14.007", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[He] 2s² 2p³", state: "Gas", disc: "D. Rutherford"},
    {n: 8, s: "O", name: "Oxygen", w: "15.999", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[He] 2s² 2p⁴", state: "Gas", disc: "J. Priestley"},
    {n: 9, s: "F", name: "Fluorine", w: "18.998", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[He] 2s² 2p⁵", state: "Gas", disc: "H. Moissan"},
    {n: 10, s: "Ne", name: "Neon", w: "20.180", c: "noble-gas", catName: "NOBLE GAS", config: "[He] 2s² 2p⁶", state: "Gas", disc: "Ramsay & Travers"},
    {n: 11, s: "Na", name: "Sodium", w: "22.990", c: "alkali-metal", catName: "ALKALI METAL", config: "[Ne] 3s¹", state: "Solid", disc: "H. Davy"},
    {n: 12, s: "Mg", name: "Magnesium", w: "24.305", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[Ne] 3s²", state: "Solid", disc: "J. Black"},
    {n: 13, s: "Al", name: "Aluminium", w: "26.982", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Ne] 3s² 3p¹", state: "Solid", disc: "H.C. Ørsted"},
    {n: 14, s: "Si", name: "Silicon", w: "28.085", c: "metalloid", catName: "METALLOID", config: "[Ne] 3s² 3p²", state: "Solid", disc: "J.J. Berzelius"},
    {n: 15, s: "P", name: "Phosphorus", w: "30.974", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Ne] 3s² 3p³", state: "Solid", disc: "H. Brand"},
    {n: 16, s: "S", name: "Sulfur", w: "32.06", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Ne] 3s² 3p⁴", state: "Solid", disc: "Ancient China"},
    {n: 17, s: "Cl", name: "Chlorine", w: "35.45", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Ne] 3s² 3p⁵", state: "Gas", disc: "C.W. Scheele"},
    {n: 18, s: "Ar", name: "Argon", w: "39.948", c: "noble-gas", catName: "NOBLE GAS", config: "[Ne] 3s² 3p⁶", state: "Gas", disc: "Rayleigh & Ramsay"},
    {n: 19, s: "K", name: "Potassium", w: "39.098", c: "alkali-metal", catName: "ALKALI METAL", config: "[Ar] 4s¹", state: "Solid", disc: "H. Davy"},
    {n: 20, s: "Ca", name: "Calcium", w: "40.078", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[Ar] 4s²", state: "Solid", disc: "H. Davy"},
    {n: 21, s: "Sc", name: "Scandium", w: "44.956", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d¹ 4s²", state: "Solid", disc: "L.F. Nilson"},
    {n: 22, s: "Ti", name: "Titanium", w: "47.867", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d² 4s²", state: "Solid", disc: "W. Gregor"},
    {n: 23, s: "V", name: "Vanadium", w: "50.942", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d³ 4s²", state: "Solid", disc: "A.M. del Río"},
    {n: 24, s: "Cr", name: "Chromium", w: "51.996", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d⁵ 4s¹", state: "Solid", disc: "L.N. Vauquelin"},
    {n: 25, s: "Mn", name: "Manganese", w: "54.938", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d⁵ 4s²", state: "Solid", disc: "J.G. Gahn"},
    {n: 26, s: "Fe", name: "Iron", w: "55.845", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d⁶ 4s²", state: "Solid", disc: "Before 5000 BC"},
    {n: 27, s: "Co", name: "Cobalt", w: "58.933", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d⁷ 4s²", state: "Solid", disc: "G. Brandt"},
    {n: 28, s: "Ni", name: "Nickel", w: "58.693", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d⁸ 4s²", state: "Solid", disc: "A.F. Cronstedt"},
    {n: 29, s: "Cu", name: "Copper", w: "63.546", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d¹⁰ 4s¹", state: "Solid", disc: "Middle East (9000 BC)"},
    {n: 30, s: "Zn", name: "Zinc", w: "65.38", c: "transition-metal", catName: "TRANSITION METAL", config: "[Ar] 3d¹⁰ 4s²", state: "Solid", disc: "Indian Chemists (before 1000 BC)"},
    {n: 31, s: "Ga", name: "Gallium", w: "69.723", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Ar] 3d¹⁰ 4s² 4p¹", state: "Solid", disc: "P.E. Lecoq de Boisbaudran"},
    {n: 32, s: "Ge", name: "Germanium", w: "72.630", c: "metalloid", catName: "METALLOID", config: "[Ar] 3d¹⁰ 4s² 4p²", state: "Solid", disc: "C.A. Winkler"},
    {n: 33, s: "As", name: "Arsenic", w: "74.922", c: "metalloid", catName: "METALLOID", config: "[Ar] 3d¹⁰ 4s² 4p³", state: "Solid", disc: "Albertus Magnus"},
    {n: 34, s: "Se", name: "Selenium", w: "78.971", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Ar] 3d¹⁰ 4s² 4p⁴", state: "Solid", disc: "J.J. Berzelius"},
    {n: 35, s: "Br", name: "Bromine", w: "79.904", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Ar] 3d¹⁰ 4s² 4p⁵", state: "Liquid", disc: "Balard & Gmelin"},
    {n: 36, s: "Kr", name: "Krypton", w: "83.798", c: "noble-gas", catName: "NOBLE GAS", config: "[Ar] 3d¹⁰ 4s² 4p⁶", state: "Gas", disc: "Ramsay & Travers"},
    {n: 37, s: "Rb", name: "Rubidium", w: "85.468", c: "alkali-metal", catName: "ALKALI METAL", config: "[Kr] 5s¹", state: "Solid", disc: "Bunsen & Kirchhoff"},
    {n: 38, s: "Sr", name: "Strontium", w: "87.62", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[Kr] 5s²", state: "Solid", disc: "A. Crawford"},
    {n: 39, s: "Y", name: "Yttrium", w: "88.906", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d¹ 5s²", state: "Solid", disc: "J. Gadolin"},
    {n: 40, s: "Zr", name: "Zirconium", w: "91.224", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d² 5s²", state: "Solid", disc: "M.H. Klaproth"},
    {n: 41, s: "Nb", name: "Niobium", w: "92.906", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d⁴ 5s¹", state: "Solid", disc: "C. Hatchett"},
    {n: 42, s: "Mo", name: "Molybdenum", w: "95.95", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d⁵ 5s¹", state: "Solid", disc: "C.W. Scheele"},
    {n: 43, s: "Tc", name: "Technetium", w: "98", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d⁵ 5s²", state: "Synthetic", disc: "Perrier & Segrè"},
    {n: 44, s: "Ru", name: "Ruthenium", w: "101.07", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d⁷ 5s¹", state: "Solid", disc: "K.K. Klaus"},
    {n: 45, s: "Rh", name: "Rhodium", w: "102.91", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d⁸ 5s¹", state: "Solid", disc: "W.H. Wollaston"},
    {n: 46, s: "Pd", name: "Palladium", w: "106.42", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d¹⁰", state: "Solid", disc: "W.H. Wollaston"},
    {n: 47, s: "Ag", name: "Silver", w: "107.87", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d¹⁰ 5s¹", state: "Solid", disc: "Prehistoric (before 4000 BC)"},
    {n: 48, s: "Cd", name: "Cadmium", w: "112.41", c: "transition-metal", catName: "TRANSITION METAL", config: "[Kr] 4d¹⁰ 5s²", state: "Solid", disc: "Stromeyer & Hermann"},
    {n: 49, s: "In", name: "Indium", w: "114.82", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Kr] 4d¹⁰ 5s² 5p¹", state: "Solid", disc: "Reich & Richter"},
    {n: 50, s: "Sn", name: "Tin", w: "118.71", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Kr] 4d¹⁰ 5s² 5p²", state: "Solid", disc: "Prehistoric (before 3000 BC)"},
    {n: 51, s: "Sb", name: "Antimony", w: "121.76", c: "metalloid", catName: "METALLOID", config: "[Kr] 4d¹⁰ 5s² 5p³", state: "Solid", disc: "Prehistoric"},
    {n: 52, s: "Te", name: "Tellurium", w: "127.60", c: "metalloid", catName: "METALLOID", config: "[Kr] 4d¹⁰ 5s² 5p⁴", state: "Solid", disc: "F.J. Müller von Reichenstein"},
    {n: 53, s: "I", name: "Iodine", w: "126.90", c: "reactive-nonmetal", catName: "REACTIVE NONMETAL", config: "[Kr] 4d¹⁰ 5s² 5p⁵", state: "Solid", disc: "B. Courtois"},
    {n: 54, s: "Xe", name: "Xenon", w: "131.29", c: "noble-gas", catName: "NOBLE GAS", config: "[Kr] 4d¹⁰ 5s² 5p⁶", state: "Gas", disc: "Ramsay & Travers"},
    {n: 55, s: "Cs", name: "Caesium", w: "132.91", c: "alkali-metal", catName: "ALKALI METAL", config: "[Xe] 6s¹", state: "Solid", disc: "Bunsen & Kirchhoff"},
    {n: 56, s: "Ba", name: "Barium", w: "137.33", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[Xe] 6s²", state: "Solid", disc: "C.W. Scheele"},
    {n: 57, s: "La", name: "Lanthanum", w: "138.91", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 5d¹ 6s²", state: "Solid", disc: "C.G. Mosander"},
    {n: 58, s: "Ce", name: "Cerium", w: "140.12", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹ 5d¹ 6s²", state: "Solid", disc: "Klaproth, Berzelius & Hisinger"},
    {n: 59, s: "Pr", name: "Praseodymium", w: "140.91", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f³ 6s²", state: "Solid", disc: "C.A. von Welsbach"},
    {n: 60, s: "Nd", name: "Neodymium", w: "144.24", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁴ 6s²", state: "Solid", disc: "C.A. von Welsbach"},
    {n: 61, s: "Pm", name: "Promethium", w: "145", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁵ 6s²", state: "Synthetic", disc: "Marinsky, Glendenin & Coryell"},
    {n: 62, s: "Sm", name: "Samarium", w: "150.36", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁶ 6s²", state: "Solid", disc: "P.E. Lecoq de Boisbaudran"},
    {n: 63, s: "Eu", name: "Europium", w: "151.96", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁷ 6s²", state: "Solid", disc: "E.A. Demarçay"},
    {n: 64, s: "Gd", name: "Gadolinium", w: "157.25", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁷ 5d¹ 6s²", state: "Solid", disc: "J.C. Galissard de Marignac"},
    {n: 65, s: "Tb", name: "Terbium", w: "158.93", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f⁹ 6s²", state: "Solid", disc: "C.G. Mosander"},
    {n: 66, s: "Dy", name: "Dysprosium", w: "162.50", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹⁰ 6s²", state: "Solid", disc: "P.E. Lecoq de Boisbaudran"},
    {n: 67, s: "Ho", name: "Holmium", w: "164.93", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹¹ 6s²", state: "Solid", disc: "Soret & Delafontaine"},
    {n: 68, s: "Er", name: "Erbium", w: "167.26", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹² 6s²", state: "Solid", disc: "C.G. Mosander"},
    {n: 69, s: "Tm", name: "Thulium", w: "168.93", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹³ 6s²", state: "Solid", disc: "P.T. Cleve"},
    {n: 70, s: "Yb", name: "Ytterbium", w: "173.05", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹⁴ 6s²", state: "Solid", disc: "J.C. Galissard de Marignac"},
    {n: 71, s: "Lu", name: "Lutetium", w: "174.97", c: "lanthanide", catName: "LANTHANIDE", config: "[Xe] 4f¹⁴ 5d¹ 6s²", state: "Solid", disc: "G. Urbain & C.A. von Welsbach"},
    {n: 72, s: "Hf", name: "Hafnium", w: "178.49", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d² 6s²", state: "Solid", disc: "Coster & von Hevesy"},
    {n: 73, s: "Ta", name: "Tantalum", w: "180.95", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d³ 6s²", state: "Solid", disc: "A.G. Ekeberg"},
    {n: 74, s: "W", name: "Tungsten", w: "183.84", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d⁴ 6s²", state: "Solid", disc: "Elhuyar Brothers"},
    {n: 75, s: "Re", name: "Rhenium", w: "186.21", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d⁵ 6s²", state: "Solid", disc: "Noddack, Tacke & Berg"},
    {n: 76, s: "Os", name: "Osmium", w: "190.23", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d⁶ 6s²", state: "Solid", disc: "S. Tennant"},
    {n: 77, s: "Ir", name: "Iridium", w: "192.22", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d⁷ 6s²", state: "Solid", disc: "S. Tennant"},
    {n: 78, s: "Pt", name: "Platinum", w: "195.08", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d⁹ 6s¹", state: "Solid", disc: "A. de Ulloa"},
    {n: 79, s: "Au", name: "Gold", w: "196.97", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s¹", state: "Solid", disc: "Prehistoric (before 3000 BC)"},
    {n: 80, s: "Hg", name: "Mercury", w: "200.59", c: "transition-metal", catName: "TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s²", state: "Liquid", disc: "Ancient Egyptians / Chinese"},
    {n: 81, s: "Tl", name: "Thallium", w: "204.38", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹", state: "Solid", disc: "W. Crookes"},
    {n: 82, s: "Pb", name: "Lead", w: "207.2", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²", state: "Solid", disc: "Middle East (7000 BC)"},
    {n: 83, s: "Bi", name: "Bismuth", w: "208.98", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³", state: "Solid", disc: "C.F. Geoffroy"},
    {n: 84, s: "Po", name: "Polonium", w: "209", c: "metalloid", catName: "METALLOID", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴", state: "Solid", disc: "Marie & Pierre Curie"},
    {n: 85, s: "At", name: "Astatine", w: "210", c: "metalloid", catName: "METALLOID", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵", state: "Solid", disc: "Corson, MacKenzie & Segrè"},
    {n: 86, s: "Rn", name: "Radon", w: "222", c: "noble-gas", catName: "NOBLE GAS", config: "[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶", state: "Gas", disc: "Dorn & Ramsay"},
    {n: 87, s: "Fr", name: "Francium", w: "223", c: "alkali-metal", catName: "ALKALI METAL", config: "[Rn] 7s¹", state: "Solid", disc: "M. Perey"},
    {n: 88, s: "Ra", name: "Radium", w: "226", c: "alkaline-earth", catName: "ALKALINE EARTH", config: "[Rn] 7s²", state: "Solid", disc: "Marie & Pierre Curie"},
    {n: 89, s: "Ac", name: "Actinium", w: "227", c: "actinide", catName: "ACTINIDE", config: "[Rn] 6d¹ 7s²", state: "Solid", disc: "A.L. Debierne"},
    {n: 90, s: "Th", name: "Thorium", w: "232.04", c: "actinide", catName: "ACTINIDE", config: "[Rn] 6d² 7s²", state: "Solid", disc: "J.J. Berzelius"},
    {n: 91, s: "Pa", name: "Protactinium", w: "231.04", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f² 6d¹ 7s²", state: "Solid", disc: "Fajans, Göhring, Hahn & Meitner"},
    {n: 92, s: "U", name: "Uranium", w: "238.03", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f³ 6d¹ 7s²", state: "Solid", disc: "M.H. Klaproth"},
    {n: 93, s: "Np", name: "Neptunium", w: "237", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f⁴ 6d¹ 7s²", state: "Synthetic", disc: "McMillan & Abelson"},
    {n: 94, s: "Pu", name: "Plutonium", w: "244", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f⁶ 7s²", state: "Synthetic", disc: "Seaborg, McMillan, Kennedy & Wahl"},
    {n: 95, s: "Am", name: "Americium", w: "243", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f⁷ 7s²", state: "Synthetic", disc: "Seaborg, James, Morgan & Ghiorso"},
    {n: 96, s: "Cm", name: "Curium", w: "247", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f⁷ 6d¹ 7s²", state: "Synthetic", disc: "Seaborg, James & Ghiorso"},
    {n: 97, s: "Bk", name: "Berkelium", w: "247", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f⁹ 7s²", state: "Synthetic", disc: "Thompson, Ghiorso & Seaborg"},
    {n: 98, s: "Cf", name: "Californium", w: "251", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹⁰ 7s²", state: "Synthetic", disc: "Thompson, Street, Ghiorso & Seaborg"},
    {n: 99, s: "Es", name: "Einsteinium", w: "252", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹¹ 7s²", state: "Synthetic", disc: "Albert Ghiorso et al."},
    {n: 100, s: "Fm", name: "Fermium", w: "257", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹ Dish²", state: "Synthetic", disc: "Albert Ghiorso et al."},
    {n: 101, s: "Md", name: "Mendelevium", w: "258", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹³ 7s²", state: "Synthetic", disc: "Ghiorso, Harvey, Choppin, Thompson & Seaborg"},
    {n: 102, s: "No", name: "Nobelium", w: "259", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹⁴ 7s²", state: "Synthetic", disc: "FLNR (Dubna) / LBNL (Berkeley)"},
    {n: 103, s: "Lr", name: "Lawrencium", w: "266", c: "actinide", catName: "ACTINIDE", config: "[Rn] 5f¹⁴ 7s² 7p¹", state: "Synthetic", disc: "Ghiorso, Sikkeland, Larsh & Latimer"},
    {n: 104, s: "Rf", name: "Rutherfordium", w: "267", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d² 7s²", state: "Synthetic", disc: "FLNR (Dubna) / LBNL (Berkeley)"},
    {n: 105, s: "Db", name: "Dubnium", w: "268", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d³ 7s²", state: "Synthetic", disc: "FLNR (Dubna) / LBNL (Berkeley)"},
    {n: 106, s: "Sg", name: "Seaborgium", w: "269", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁴ 7s²", state: "Synthetic", disc: "LBNL (Berkeley)"},
    {n: 107, s: "Bh", name: "Bohrium", w: "270", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁵ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 108, s: "Hs", name: "Hassium", w: "271", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁶ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 109, s: "Mt", name: "Meitnerium", w: "278", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁷ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 110, s: "Ds", name: "Darmstadtium", w: "281", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁸ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 111, s: "Rg", name: "Roentgenium", w: "282", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d⁹ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 112, s: "Cn", name: "Copernicium", w: "285", c: "transition-metal", catName: "TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s²", state: "Synthetic", disc: "GSI (Darmstadt)"},
    {n: 113, s: "Nh", name: "Nihonium", w: "286", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹", state: "Synthetic", disc: "RIKEN (Japan)"},
    {n: 114, s: "Fl", name: "Flerovium", w: "289", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²", state: "Synthetic", disc: "JINR (Dubna) / LLNL"},
    {n: 115, s: "Mc", name: "Moscovium", w: "290", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³", state: "Synthetic", disc: "JINR (Dubna) / LLNL / ORNL"},
    {n: 116, s: "Lv", name: "Livermorium", w: "293", c: "post-transition", catName: "POST TRANSITION METAL", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴", state: "Synthetic", disc: "JINR (Dubna) / LLNL"},
    {n: 117, s: "Ts", name: "Tennessine", w: "294", c: "metalloid", catName: "METALLOID", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵", state: "Synthetic", disc: "JINR / LLNL / ORNL / UTK"},
    {n: 118, s: "Og", name: "Oganesson", w: "294", c: "noble-gas", catName: "NOBLE GAS", config: "[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶", state: "Synthetic", disc: "JINR (Dubna) / LLNL"}
];

// =========================================================================
// 2. TEXT-TO-SPEECH AUDIO ENGINE (ONLY READS THE NAME ONCE PER CARD)
// =========================================================================
const synth = window.speechSynthesis;

function speakElement(data) {
    // Cut off any existing voice line completely
    synth.cancel();

    let textToSpeak = data.name;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    
    // Scan hardware files for higher quality system voices
    const voices = synth.getVoices();
    const naturalVoice = voices.find(voice => 
        (voice.lang.includes('en') || voice.lang.includes('EN')) && 
        (voice.name.includes('Google') || 
         voice.name.includes('Natural') || 
         voice.name.includes('Premium') || 
         voice.name.includes('Aria') || 
         voice.name.includes('Samantha'))
    );

    if (naturalVoice) {
        utterance.voice = naturalVoice;
    }

    // Dynamic speed configuration adjustment 
    const currentSpeedBtn = document.querySelector('.speed-options button.active-speed');
    const isOneSecondSpeed = currentSpeedBtn && currentSpeedBtn.getAttribute('data-speed') === '1000';

    if (isOneSecondSpeed) {
        utterance.rate = 1.4; // Speak quickly so long names clear inside 1s window
    } else {
        utterance.rate = 0.9; // Smooth human pace for 2s and 5s
    }
    
    utterance.pitch = 1.0; 
    synth.speak(utterance);
}

// Pre-prime available browser speech voice vectors 
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = () => synth.getVoices();
}

// =========================================================================
// 3. CORE RENDERING ENGINE & STATE
// =========================================================================
let currentIndex = 0;
const total = elements.length;

const cardContainer = document.getElementById('card-container');
const card = document.getElementById('card');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const progressText = document.getElementById('progress-text');

const playHub = document.getElementById('play-hub');
const mainPlayBtn = document.getElementById('main-play-btn');
const speedButtons = document.querySelectorAll('.speed-options button');

function updateCard(index, triggerVoice = true) {
    const data = elements[index];
    progressText.innerText = `Element ${data.n} of ${total}`;
    
    card.classList.remove('flipped');
    cardContainer.className = `card-container ${data.c}`;

    document.getElementById('f-number').innerText = data.n;
    document.getElementById('f-symbol').innerText = data.s;
    document.getElementById('f-name').innerText = data.name;
    document.getElementById('f-weight').innerText = `${data.w} u`;

    document.getElementById('b-category').innerText = data.catName;
    document.getElementById('b-config').innerText = data.config;
    document.getElementById('b-state').innerText = data.state;
    document.getElementById('b-discoverer').innerText = data.disc;

    // Call voice read-out exactly once when card data structures switch
    if (triggerVoice) {
        speakElement(data);
    }
}

// =========================================================================
// 4. EXPANDABLE SLIDESHOW ENGINE (FIXED LOOP)
// =========================================================================
let autoPlayTimer = null;

function startAutoPlay(duration) {
    if (autoPlayTimer) clearInterval(autoPlayTimer);
    
    autoPlayTimer = setInterval(() => {
        if (!card.classList.contains('flipped')) {
            // Flip to the back face side — DO NOT call speech engine again
            card.classList.add('flipped');
        } else {
            // Flip back to the front face and cycle numbers smoothly
            card.classList.remove('flipped');
            setTimeout(() => {
                currentIndex = (currentIndex + 1) % total;
                updateCard(currentIndex, true);
            }, 250); 
        }
    }, duration);
}

function stopAutoPlay() {
    if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
    }
    playHub.classList.remove('expanded');
    mainPlayBtn.innerText = "Play";
    speedButtons.forEach(btn => btn.classList.remove('active-speed'));
    synth.cancel(); // Silences the engine instantly on interrupt
}

// =========================================================================
// 5. EVENT CONTROLLERS
// =========================================================================

// Manual face flip activation tap controller
cardContainer.addEventListener('click', (e) => {
    if (e.target.closest('.controls')) return;
    card.classList.toggle('flipped');
    // Notice: speakElement is no longer called here, so manual flips remain quiet
});

// Play/Pause Action Hub Engine
mainPlayBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    if (playHub.classList.contains('expanded')) {
        stopAutoPlay();
    } else {
        playHub.classList.add('expanded');
        mainPlayBtn.innerText = "Pause";
    }
});

// Speed Toggle Array Node Controllers
speedButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.stopPropagation();
        speedButtons.forEach(btn => btn.classList.remove('active-speed'));
        button.classList.add('active-speed');
        
        const duration = parseInt(button.getAttribute('data-speed'));
        startAutoPlay(duration);
        speakElement(elements[currentIndex]); // Speak immediately upon picking speed
    });
});

// Next Navigation Controller
nextBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
    playHub.classList.remove('expanded');
    mainPlayBtn.innerText = "Play";
    speedButtons.forEach(btn => btn.classList.remove('active-speed'));

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => { 
            currentIndex = (currentIndex + 1) % total; 
            updateCard(currentIndex, true); 
        }, 250);
    } else {
        currentIndex = (currentIndex + 1) % total;
        updateCard(currentIndex, true);
    }
});

// Previous Navigation Controller
prevBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    if (autoPlayTimer) { clearInterval(autoPlayTimer); autoPlayTimer = null; }
    playHub.classList.remove('expanded');
    mainPlayBtn.innerText = "Play";
    speedButtons.forEach(btn => btn.classList.remove('active-speed'));

    if (card.classList.contains('flipped')) {
        card.classList.remove('flipped');
        setTimeout(() => { 
            currentIndex = (currentIndex - 1 + total) % total; 
            updateCard(currentIndex, true); 
        }, 250);
    } else {
        currentIndex = (currentIndex - 1 + total) % total;
        updateCard(currentIndex, true);
    }
});

// Global user out-of-bounds reset catch
document.addEventListener('click', (e) => {
    if (!e.target.closest('.controls') && !e.target.closest('#card-container')) {
        if (autoPlayTimer) stopAutoPlay();
        synth.cancel();
    }
});

// Initial Setup Launch (Muted until first active slide navigation action)
updateCard(currentIndex, false);