export const downloadableNotes = [
  {
    id: "note-c12-phy-current",
    title: "Current Electricity: Quick Revision Handout & Derivations",
    subject: "Physics",
    classLevel: "12",
    chapter: "Current Electricity",
    pages: 14,
    size: "3.2 MB",
    lastUpdated: "October 2024",
    highlights: ["Microscopic Drift Equation", "Kirchhoff Laws with Sign Conventions", "Wheatstone Bridge Balancing Proof", "Color Coding of Resistors"],
    sections: [
      {
        heading: "1. Electric Current & Microscopic Model",
        content: "Electric current is the net flow of charge through a given cross-sectional area per unit time: I = dq/dt.\nUnder thermal agitation, conduction electrons move randomly at ~10⁵ m/s with zero net displacement. An applied electric field E induces a slow directed drift velocity: v_d = -(eE/m)τ.\nCurrent density J = I/A = n·e·v_d = (n·e²·τ / m)·E = σ·E (Microscopic Ohm's Law)."
      },
      {
        heading: "2. Temperature Dependence of Resistivity",
        content: "For metals: ρ(T) = ρ₀ [1 + α(T - T₀)], where α is the positive temperature coefficient of resistivity. As temperature rises, lattice vibrations increase, reducing relaxation time τ.\nFor semiconductors: Resistivity decreases exponentially with temperature due to rapid generation of electron-hole pairs (negative α)."
      },
      {
        heading: "3. Kirchhoff's Laws of Circuit Analysis",
        content: "Kirchhoff's First Law (Junction Rule / KCL): The algebraic sum of currents meeting at any junction is zero: ∑ I = 0. Consequence of Conservation of Charge.\nKirchhoff's Second Law (Loop Rule / KVL): The algebraic sum of changes in potential encountered in a complete traversal of any closed circuit loop is zero: ∑ ΔV = 0. Consequence of Conservation of Energy."
      },
      {
        heading: "4. Wheatstone Bridge Condition",
        content: "Consists of four resistances P, Q, R, S connected in a diamond bridge with a sensitive galvanometer across diagonal BD and EMF source across AC.\nWhen bridge is balanced (Galvanometer current Ig = 0), potential at B equals potential at D (V_B = V_D).\nProof: I₁P = I₂R and I₁Q = I₂S => Dividing both gives P / Q = R / S."
      }
    ]
  },
  {
    id: "note-c12-chem-electro",
    title: "Electrochemistry: Full Formula Sheet & Nernst Equation Guide",
    subject: "Chemistry",
    classLevel: "12",
    chapter: "Electrochemistry",
    pages: 12,
    size: "2.8 MB",
    lastUpdated: "November 2024",
    highlights: ["Electrochemical series mnemonic", "Nernst equation stepwise solver", "Kohlrausch's law for weak electrolytes", "Commercial batteries reactions"],
    sections: [
      {
        heading: "1. Electrochemical Cells & IUPAC Representation",
        content: "Daniell cell: Zn(s) | Zn²⁺(aq, 1M) || Cu²⁺(aq, 1M) | Cu(s).\nAnode (Oxidation): Zn(s) -> Zn²⁺(aq) + 2e⁻ (Negative terminal in galvanic cell).\nCathode (Reduction): Cu²⁺(aq) + 2e⁻ -> Cu(s) (Positive terminal).\nStandard cell EMF: E°_cell = E°_cathode - E°_anode = +0.34 V - (-0.76 V) = +1.10 V."
      },
      {
        heading: "2. Nernst Equation & Gibbs Free Energy",
        content: "E_cell = E°_cell - (RT / nF) ln Q = E°_cell - (0.0591 / n) log₁₀ Q at 298 K.\nRelation to Gibbs Free Energy: ΔG = -n·F·E_cell.\nFor spontaneous reaction: E_cell > 0, so ΔG < 0.\nEquilibrium constant: log₁₀ K_c = (n · E°_cell) / 0.0591."
      },
      {
        heading: "3. Conductance & Kohlrausch's Law",
        content: "Conductivity κ = (1/R) · (l/A) = G · G*.\nMolar conductivity: Λ_m = (1000 · κ) / Molarity.\nKohlrausch's Law of Independent Migration: Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of anion and cation:\nΛ°_m (AxBy) = x · λ°_+ + y · λ°_-.\nDegree of dissociation of weak electrolyte: α = Λ_m / Λ°_m."
      }
    ]
  },
  {
    id: "note-c12-math-integrals",
    title: "Integration Blueprint: 25 Standard Forms & King's Properties",
    subject: "Mathematics",
    classLevel: "12",
    chapter: "Integrals",
    pages: 16,
    size: "4.1 MB",
    lastUpdated: "November 2024",
    highlights: ["Integration by Substitution Cheatsheet", "By Parts tabular shortcut", "Partial fractions master chart", "Definite integral 7 golden properties"],
    sections: [
      {
        heading: "1. Fundamental Indefinite Integrals",
        content: "∫ xⁿ dx = x^(n+1)/(n+1) + C (n ≠ -1)\n∫ (1/x) dx = ln|x| + C\n∫ e^(ax) dx = (1/a) e^(ax) + C\n∫ aˣ dx = aˣ / ln a + C\n∫ (1 / √(a² - x²)) dx = sin⁻¹(x/a) + C\n∫ (1 / (a² + x²)) dx = (1/a) tan⁻¹(x/a) + C\n∫ (1 / (x² - a²)) dx = (1/2a) ln|(x-a)/(x+a)| + C"
      },
      {
        heading: "2. The 7 Golden Definite Properties",
        content: "P0: ∫[a,b] f(x)dx = ∫[a,b] f(t)dt\nP1: ∫[a,b] f(x)dx = - ∫[b,a] f(x)dx\nP2: ∫[a,b] f(x)dx = ∫[a,c] f(x)dx + ∫[c,b] f(x)dx\nP3 (King's Rule): ∫[a,b] f(x)dx = ∫[a,b] f(a+b-x)dx\nP4: ∫[0,a] f(x)dx = ∫[0,a] f(a-x)dx\nP5: ∫[-a,a] f(x)dx = 2∫[0,a] f(x)dx (if f is even) OR 0 (if f is odd)"
      }
    ]
  }
];
